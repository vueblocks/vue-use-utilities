import { createStore, ActionContext } from 'vuex'

export interface State {
  count: number;
}

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 0
}

export type RootState = typeof state

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment (state: State) {
    state.count++
  },
  decrement (state: State) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: (ctx: ActionContext<State, RootState>) => ctx.commit('increment'),
  decrement: (ctx: ActionContext<State, RootState>) => ctx.commit('decrement'),
  incrementIfOdd (ctx: ActionContext<State, RootState>) {
    const { commit, state } = ctx
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync (ctx: ActionContext<State, RootState>) {
    return new Promise((resolve) => {
      setTimeout(() => {
        ctx.commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions.
const getters = {
  evenOrOdd: (state: State) => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore<State>({
  state,
  getters,
  mutations,
  actions
})
