const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://loadshedding.eskom.co.za',
      changeOrigin: true,
    })
  );
};