## 依赖模块及其作用
* express: web 框架
* express-session: session 中间件
* connect-mongo: 将 session 存储于 mongodb，结合 express-session 使用
* connect-flash: 页面通知的中间件，基于 session 实现
* ejs: 模板
* express-formidable: 接收表单及文件上传的中间件
* config-lite: 读取配置文件
* marked: markdown 解析
* moment: 时间格式化
* mongolass: mongodb 驱动
* objectid-to-timestamp: 根据 ObjectId 生成时间戳
* sha1: sha1 加密，用于密码加密
* winston: 日志
* express-winston: express 的 * winston 日志中间件
## 
pm2 start index.js --name="myblog"
