import { Commit } from 'vuex'

const makeAction = (type: string) => {
  return ({ commit }: { commit: Commit }, ...args: Array<string>) => commit(type, ...args)
}

export const makeActions = (types: any = {}) => {
  const actions = {}

  for (const type of Object.keys(types)) {
    const action = {
      [type]: makeAction(types[type])
    }
    Object.assign(actions, action)
  }

  return actions
}

export const setState = makeAction('SET_STATE')
