import { createStore } from 'vuex'

import * as actions from './actions'
import * as types from './mutation-types'
import modules from './modules/index'

const state = {
  theme: 'light'
}

type RootState = typeof state

const getters = {
  isDarkmode: (state: RootState) => state.theme === 'dark'
}

const mutations = {
  [types.SET_STATE] (state: RootState, payload: any) {
    Object.assign(state, payload)
  },
  [types.SET_THEME] (state: RootState, payload: any) {
    state.theme = payload
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations,
  modules
})
