/* eslint-disable */
import { getToken, setToken, removeToken } from '@/utils/auth'

const user = {
  state: {
    token: getToken()
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
      setToken(token)
    }
  },

  actions: {
    setToken({ commit }, token) {
        commit('SET_TOKEN', token)
      }   
  }
}

export default user
