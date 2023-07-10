const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3001',
      changeOrigin: true,
      pathRewrite: {
        '^/api': ''
      },
      onError: function(err, req, res) {
        res.json({"error": "Failed to connect to API"});
      }
    })
  );
};
