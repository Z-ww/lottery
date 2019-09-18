import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
<<<<<<< HEAD


=======
import 'lib-flexible/flexible.js'
>>>>>>> 63d2f9505ed562254a1ff9487265999a7ce94e66
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
