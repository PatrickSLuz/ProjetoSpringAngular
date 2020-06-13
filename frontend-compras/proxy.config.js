const proxy = [
  {
    context: '/backend',
    target: 'http://localhost:8080',
    pathRewrite: { '^/backend': '' }
  },
  {
    context: '/api',
    target: 'https://viacep.com.br',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;