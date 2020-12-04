import { createStore } from 'vuex'

import * as actions from './actions'
import * as types from './mutation-types'
import modules from './modules/index'
export interface State {
  theme: string;
}

const state = {
  theme: 'light'
}

const getters = {
  isDarkmode: (state: State) => state.theme === 'dark'
}

const mutations = {
  [types.SET_STATE] (state: State, payload: any) {
    Object.assign(state, payload)
  },
  [types.SET_THEME] (state: State, payload: any) {
    state.theme = payload
  }
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore<State>({
  state,
  getters,
  mutations,
  actions,
  modules
})
