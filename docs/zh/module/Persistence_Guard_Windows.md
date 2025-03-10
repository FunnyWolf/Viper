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

![1615640983994-e2e14989-7046-4080-9952-2fda558d2cba.webp](./img/WqEKJmeoDzRDnNRk/1615640983994-e2e14989-7046-4080-9952-2fda558d2cba-234866.webp)

+ 运行模块

![1615641014892-10142406-b0c6-4265-93e5-31e755833b62.webp](./img/WqEKJmeoDzRDnNRk/1615641014892-10142406-b0c6-4265-93e5-31e755833b62-188834.webp)

+ Session 20 是新增的Session,如果该Session因为意外关闭了(用 `删除权限` 进行模拟),该Session会在10s后重连

![1615641103566-91ed2406-30b3-46ba-8e50-cebd2faee9b1.webp](./img/WqEKJmeoDzRDnNRk/1615641103566-91ed2406-30b3-46ba-8e50-cebd2faee9b1-572946.webp)

![1615641117089-be51f928-66e6-457d-9240-c2a570784a86.webp](./img/WqEKJmeoDzRDnNRk/1615641117089-be51f928-66e6-457d-9240-c2a570784a86-222385.webp)


