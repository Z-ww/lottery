import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
  
import 'lib-flexible/flexible.js'
Vue.config.productionTip = false
Vue.use(VueResource)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
