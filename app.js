// 导入http模块
const http = require('http');
// 导入http-proxy模块
const httpProxy = require('http-proxy');

// 提供服务的端口号
const PORT = 17901;

// 创建反向代理服务
const proxy = httpProxy.createProxyServer();
// 监听错误事件
proxy.on('error', function (err, req, res) {
    // 输出空白响应数据
    res.write('error!');
    res.end();
});

// 创建服务
const app = http.createServer(function (req, res) {
    // 执行反向代理
    proxy.web(req, res, {
        // 目标地址
        target: 'http://14.215.177.38',
        changeOrigin: true
    });
});

// 启动服务
app.listen(PORT, function () {
    console.log('服务已启动', PORT);
});
