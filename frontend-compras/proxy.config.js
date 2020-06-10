const proxy = [
  {
    context: '/api',
    target: 'http://localhost:8080',
    pathRewrite: { '^/api': '' }
  },
  {
    context: '/api',
    target: 'https://viacep.com.br/ws',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;