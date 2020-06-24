const proxy = [
  {
    context: '/api',
    target: 'https://viacep.com.br',
    pathRewrite: { '^/api': '' }
  }
];
module.exports = proxy;