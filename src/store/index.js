import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import * as getters from './getters'
import * as mutations from './mutations'

Vue.use(Vuex)
console.log(state)

// 创建Vuex对象
const store  = new Vuex.Store({
  state,
  getters,
  mutations:{
    add(state){
      return state.number++
    }
  }
})

export default store
