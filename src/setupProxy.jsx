const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://159.223.36.31',
      changeOrigin: true,
      headers: {
        token: '0d9460395f75235feb673c61a030cf01605412bdd6a56f6c630b3c4d09d582e3b910a3c0008fc022',
      },
    })
  );
};
