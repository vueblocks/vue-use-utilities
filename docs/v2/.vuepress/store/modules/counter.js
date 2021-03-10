import { makeActions } from '../actions'
import { counter } from '../mutation-types'

// namespaced counter state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  [counter.INCREMENT] (state) {
    state.count++
  },
  [counter.DECREMENT] (state) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  ...makeActions({
    increment: counter.INCREMENT,
    decrement: counter.DECREMENT
  }),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit(counter.INCREMENT)
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit(counter.INCREMENT)
        resolve()
      }, 1000)
    })
  }
}

// getters are functions.
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// nested modules
// const modules = {

// }

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
  // modules
}
