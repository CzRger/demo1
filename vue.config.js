module.exports = {
  //axios域代理，解决axios跨域问题
  baseUrl: '/',
  devServer: {
    port: 8080,
    proxy: {
      '': {
        target: 'http://localhost:8090',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
        }
      }
    }
  }
}