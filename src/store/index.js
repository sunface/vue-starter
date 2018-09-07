import Vue from 'vue'
import Vuex from 'vuex'
import misc from './modules/misc'
import getters from './getters'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    misc
  },
  getters
})

export default store
 