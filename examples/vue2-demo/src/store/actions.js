const makeAction = type => {
  return ({ commit }, ...args) => commit(type, ...args)
}

export const makeActions = (types = {}) => {
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
