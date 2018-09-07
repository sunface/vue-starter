import Cookies from 'js-cookie'

const misc = {
  state: {
    service: Cookies.get('sel-service') || 'empty'
  },
  mutations: {
    SET_SERVICE: (state, service) => {
      state.service = service
      Cookies.set('sel-service', service)
    }
  },
  actions: {
    setService({ commit }, service) {
      commit('SET_SERVICE', service)
    }
  }
}

export default misc
