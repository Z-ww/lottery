import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    setcount_num: [],//单号
    setup_num:[],//通号

  },
  mutations: {
    getcount_num(state,value){
      state.setcount_num=value
    },
    getup_num(state,value){
      state.setup_num=value
    }

  },
  actions: {

  }
})
