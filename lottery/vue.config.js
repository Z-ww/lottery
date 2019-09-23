module.exports = {
    devServer: {
        proxy: {
          '/fileee': {//一级路由
            target: 'http://localhost:8000',//路由地址
            ws: true,//必须要写的
            changeOrigin: false//必须要写的
          },
          '/logg': {//一级路由
            target: 'http://localhost:8000',//路由地址
            ws: true,//必须要写的
            changeOrigin: false//必须要写的
          },
          '/txtss': {//一级路由
            target: 'http://localhost:8000',//路由地址
            ws: true,//必须要写的
            changeOrigin: false//必须要写的
          }
        }
    }
}