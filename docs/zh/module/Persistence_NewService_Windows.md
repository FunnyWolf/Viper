# Windows系统服务持久化

模块通过将上传的Payload文件注册为系统服务的方式进行持久化控制.

此模块需要Session系统权限或管理员权限.

服务持久化虽然在写入时无法免杀,但是成功写入口由于排查困难,隐蔽效果好.

当使用自定义loader时,需要为服务类型的exe.

使用模块时请勿关闭对应监听,Loader启动需要回连监听获取核心库文件.

## 注意事项

需要管理员权限或System权限,不免杀

## 操作方法

参考 [Winlogon Helper DLL持久化](./Persistence_WinlogonHelperDLL_Windows)


