import { computed, getCurrentInstance, isVue3 } from 'vue-demi'
import { Store } from 'vuex'

import { isObject, isString, partial } from './utils'

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
function isValidMap (map: Array<string> | object) {
  return Array.isArray(map) || isObject(map)
}

/**
 * Normalize the map
 * normalizeMap([1, 2, 3]) => [ { key: 1, val: 1 }, { key: 2, val: 2 }, { key: 3, val: 3 } ]
 * normalizeMap({a: 1, b: 2, c: 3}) => [ { key: 'a', val: 1 }, { key: 'b', val: 2 }, { key: 'c', val: 3 } ]
 * @param {Array|Object} map
 * @return {Object}
 */
function normalizeMap (map: any) {
  if (!isValidMap(map)) {
    return []
  }
  return Array.isArray(map)
    ? map.map((key: string) => ({ key, val: key }))
    : Object.keys(map).map(key => ({ key, val: map[key] }))
}

/**
 * Return a function expect two param contains namespace and map. it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
function normalizeNamespace<T> (fn: Function) {
  return (namespace?: any, map?: Array<string> | object): T => {
    if (!isString(namespace)) {
      map = namespace
      namespace = ''
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/'
    }
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {Object} store
 * @param {String} helper
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (store: any, helper: string, namespace: string) {
  const module = store._modulesNamespaceMap[namespace]
  if (__DEV__ && !module) {
    console.error(`[vuex] module namespace not found in ${helper}(): ${namespace}`)
  }
  return module
}

/**
 * Reduce the code which written in Vue.js for getting the state.
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} states # Object's item can be a function which accept state and getters for param, you can do something for state and getters in it.
 * @param {Object}
 */
export const useState = (store: Store<any>, namespace: string, states: Array<string> | object): object => {
  const res: any = {}
  if (__DEV__ && !isValidMap(states)) {
    console.error('[vuex] useState: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(states).forEach(({ key, val }) => {
    res[key] = computed(function mappedState () {
      let state = store.state
      let getters = store.getters
      if (namespace) {
        const module = getModuleByNamespace(store, 'useState', namespace)
        if (!module) {
          return
        }
        state = module.context.state
        getters = module.context.getters
      }
      return typeof val === 'function'
        ? val(state, getters)
        : state[val]
    })
    // mark vuex state for devtools
    // res[key].vuex = true
  })
  return res
}

/**
 * Reduce the code which written in Vue.js for committing the mutation
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} mutations # Object's item can be a function which accept `commit` function as the first param, it can accept anthor params. You can commit mutation and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
export const useMutations = (store: any, namespace: string, mutations: Array<string> | object): object => {
  const res: any = {}
  if (__DEV__ && !isValidMap(mutations)) {
    console.error('[vuex] useMutations: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(mutations).forEach(({ key, val }) => {
    res[key] = function mappedMutation (...args: Array<string>) {
      // Get the commit method from store
      let commit = store.commit
      if (namespace) {
        const module = getModuleByNamespace(store, 'useMutations', namespace)
        if (!module) {
          return
        }
        commit = module.context.commit
      }
      return typeof val === 'function'
        ? val.apply(this, [commit].concat(args))
        : commit.apply(store, [val].concat(args))
    }
  })
  return res
}

/**
 * Reduce the code which written in Vue.js for getting the getters
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} getters
 * @return {Object}
 */
export const useGetters = (store: Store<any>, namespace: string, getters: Array<string> | object): object => {
  const res: any = {}
  if (__DEV__ && !isValidMap(getters)) {
    console.error('[vuex] useGetters: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(getters).forEach(({ key, val }) => {
    // The namespace has been mutated by normalizeNamespace
    val = namespace + val
    res[key] = computed(function mappedGetter () {
      if (namespace && !getModuleByNamespace(store, 'useGetters', namespace)) {
        return
      }
      if (__DEV__ && !(val in store.getters)) {
        console.error(`[vuex] unknown getter: ${val}`)
        return
      }
      return store.getters[val]
    })
    // mark vuex getter for devtools
    // res[key].vuex = true
  })
  return res
}

/**
 * Reduce the code which written in Vue.js for dispatch the action
 * @param {String} [namespace] - Module's namespace
 * @param {Object|Array} actions # Object's item can be a function which accept `dispatch` function as the first param, it can accept anthor params. You can dispatch action and do any other things in this function. specially, You need to pass anthor params from the mapped function.
 * @return {Object}
 */
export const useActions = (store: any, namespace: string, actions: Array<string> | object): object => {
  const res: any = {}
  if (__DEV__ && !isValidMap(actions)) {
    console.error('[vuex] useActions: mapper parameter must be either an Array or an Object')
  }
  normalizeMap(actions).forEach(({ key, val }) => {
    res[key] = function mappedAction (...args: Array<string>) {
      // get dispatch function from store
      let dispatch = store.dispatch
      if (namespace) {
        const module = getModuleByNamespace(store, 'useActions', namespace)
        if (!module) {
          return
        }
        dispatch = module.context.dispatch
      }
      return typeof val === 'function'
        ? val.apply(this, [dispatch].concat(args))
        : dispatch.apply(store, [val].concat(args))
    }
  })
  return res
}

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
export const createNamespacedHelpers = (store: Store<any>, namespace: string) => {
  // pre-specify initial arguments with store instance
  return {
    useState: partial(normalizeNamespace<object>(partial(useState, store)), namespace),
    useGetters: partial(normalizeNamespace<object>(partial(useGetters, store)), namespace),
    useMutations: partial(normalizeNamespace<object>(partial(useMutations, store)), namespace),
    useActions: partial(normalizeNamespace<object>(partial(useActions, store)), namespace)
  }
}

/**
 * Get $store from current instance
 * @return {Store} vm.$store
 */
export const useStore = (): Store<any> => {
  const vm: any = getCurrentInstance()
  if (!vm) {
    console.error('You must use this function within the "setup()" method')
  }
  return isVue3 ? vm.ctx.$store : vm.proxy.$store
}

/**
 * Use Vuex with composition api easily. Both support Vue2.x / Vue3.x
 * @param {String} namespace
 * @param {Store} store vm.$store
 */
function useVuex (namespace?: string, store?: Store<any>) {
  if (!store) store = useStore()
  // pre-specify initial arguments with store instance
  let helpers = {
    useState: normalizeNamespace<object>(partial(useState, store)),
    useGetters: normalizeNamespace<object>(partial(useGetters, store)),
    useMutations: normalizeNamespace<object>(partial(useMutations, store)),
    useActions: normalizeNamespace<object>(partial(useActions, store))
  }

  if (arguments.length >= 1 && isString(namespace)) {
    helpers = partial(createNamespacedHelpers, store)(namespace)
  }
  return helpers
}

export { useVuex }
