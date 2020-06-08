module.exports = {
  devServer: {
    proxy: {
      '/api': {
        ws: false,
        // 解决跨域问题: 只需要把这个文件的target属性改成接口根路径即可
        // 改动了这个文件 一定要重启项目 要不然不生效
        // 代理: webpack提供的能力
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      },
    }
  }
}
