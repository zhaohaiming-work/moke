const express = require('express');
const timeout = require('connect-timeout');
const proxy = require('http-proxy-middleware');
const app = express();
const ip = require('ip')
const proxyArr = require('./src/proxyCofig')
// 这里从环境变量读取配置，方便命令行启动
// HOST 指目标地址
// PORT 服务端口
const HOST = 'http://dev-appasset.qiushibc.com'
const PORT = '3200'

// 超时时间
const TIME_OUT = 30 * 1e3;

app.all('*', function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,token');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Credentials", "true")
  console.log(req.url)
  next()
})

// 设置超时 返回超时响应
app.use(timeout(TIME_OUT));

app.use((req, res, next) => {
  if (!req.timedout) next();
});

// 反向代理（这里把需要进行反代的路径配置到这里即可）
// eg:将/api/test 代理到 ${HOST}/api/test
proxyArr.map(v => {
  app.use(proxy(`/${v}/**`, { target: HOST, changeOrigin: true }));
})

// 监听端口
app.listen(PORT, () => {
  console.log(`server running @ http://${ip.address()}:${PORT}`);
})