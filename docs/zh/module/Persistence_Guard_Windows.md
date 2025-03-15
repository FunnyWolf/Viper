# Windows自守护Session

# 主要功能
模块上传带有守护自身功能的加载器到主机指定目录(C:\ProgramData\XXX).

当前生成的Session进程崩溃或退出时会在10s后自动重新启动.

主要用于生成备用Session,防止初始权限丢失.

建议在取得第一个Session后马上运行此模块,确保权限不丢失

# 操作方法
+ 添加监听
+ 获取Sesison
+ 填写参数

![](img\Persistence_Guard_Windows\1.webp)

+ 运行模块

![](img\Persistence_Guard_Windows\2.webp)

+ Session 20 是新增的Session,如果该Session因为意外关闭了(用 `删除权限` 进行模拟),该Session会在10s后重连

![](img\Persistence_Guard_Windows\3.webp)

![](img\Persistence_Guard_Windows\4.webp)


