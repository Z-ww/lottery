module.exports = {
    devServer: {
        proxy: {
          '/fileee': {//一级路由
            target: 'http://localhost:8000',//路由地址
            ws: true,//必须要写的
            changeOrigin: false//必须要写的
          },
          // '/app':{
          //   target: 'http://localhost:8000',
          //   ws: true,
          //   changeOrigin: false
          // }
        }
    }
}