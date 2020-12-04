import { computed, getCurrentInstance, isVue3 } from 'vue-demi'
// const isNull = val => val === null
const isObject = obj => obj === Object(obj)
const partial = (fn, ...partials) => (...args) => fn(...partials, ...args)

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
const isValidMap = (map) => Array.isArray(map) || isObject(map)

const getStoreFromInstance = () => {
  const vm = getCurrentInstance()
  if (!vm) {
    console.error('You must use this function within the "setup()" method, or insert the store as first argument.')
  }
  return isVue3 ? vm.ctx.$store : vm.$store
}

const mapFormArray = (namespace, map, cb) => {
  // console.group('mapFromArray')
  // console.log(namespace)
  // console.log(map)
  // console.log(cb)
  // console.groupEnd()
  return map.reduce((result, prop) => {
    prop = namespace + prop
    result[prop] = cb(prop)
    return result
  }, {})
}

const mapFromObject = (props, helper, store, namespace, map, cb) => {
  console.group('mapFromObject')
  console.log(namespace)
  console.log(map)
  console.log(props)
  // console.log(cb)
  console.groupEnd()

  const result = {}
  for (const key in map) {
    const val = map[key]
    if (typeof val === 'function') {
      result[key] = computedMethods(helper, store, namespace, val)
    } else {
      const prop = namespace + val
      if (props.includes(prop)) {
        result[key] = cb(prop)
      }
    }
  }
  return result
}

const getVuexHelperKeys = (helper, store, namespace) => {
  const { state, getters, _mutations, _actions } = store

  const keysMap = {
    useState: state[namespace],
    useGetters: getters,
    useMutations: _mutations,
    useActions: _actions
  }

  return Object.keys(keysMap[helper])
}

const checkingStore = (helper, store, namespace, map) => {
  if (!isValidMap(map)) {
    console.error(`[vuex] ${helper}: mapper parameter must be either an Array or an Object`)
    return
  }

  if (namespace && !getModuleByNamespace(helper, store, namespace)) return

  return true
}

const useMapping = (helper, store, namespace, map, cb) => {
  if (!checkingStore(helper, store, namespace, map)) return {}

  const vuexKeys = getVuexHelperKeys(helper, store, namespace)

  if (Array.isArray(map)) {
    return mapFormArray(namespace, map, cb)
  }

  return mapFromObject(vuexKeys, helper, store, namespace, map, cb)
}

const mappingVuex = (helper, map) => {
  if (!isValidMap(map)) {
    console.error(`[vuex] ${helper}: mapper parameter must be either an Array or an Object`)
  }

  return partial(useMapping, helper)
}

const computedGetter = (store, prop) => {
  console.group('computedGetter')
  console.log(store.getters)
  console.log(prop)
  return computed(() => store.getters[prop])
}

const computedState = (store = null, namespace, prop) => {
  if (!store) store = getStoreFromInstance()

  return computed(() => store.state[namespace][prop])
}

const computedMethods = (helper, store, namespace, fn) => {
  let { state, getters } = store

  if (namespace) {
    const module = getModuleByNamespace(helper, store, namespace)
    state = module.context.state
    getters = module.context.getters
  }

  console.group('computedMethods')
  console.log(state)
  console.log(getters)

  return computed(() => fn(state, getters))
}

const getMutations = (store = null, namespace, type) => {
  if (!store) store = getStoreFromInstance()

  return function mappedMutation (...args) {
    return store.commit.apply(store, [type].concat(args))
  }
}

const getActions = (store = null, namespace, action) => {
  if (!store) store = getStoreFromInstance()

  return function mappedAction (...args) {
    return store.dispatch.apply(store, [action].concat(args))
  }
}

/**
 * Return a function expect two param contains namespace and map.
 * it will normalize the namespace and then the param's function will handle the new namespace and the map.
 * @param {Function} fn
 * @return {Function}
 */
const normalizeNamespace = (fn) => {
  return (namespace, map) => {
    if (typeof namespace !== 'string') {
      map = namespace
      namespace = ''
    } else if (namespace.charAt(namespace.length - 1) !== '/') {
      namespace += '/'
    }
    console.group('normalizeNamespace')
    console.log(namespace)
    console.log(map)
    console.groupEnd()
    return fn(namespace, map)
  }
}

/**
 * Search a special module from store by namespace. if module not exist, print error message.
 * @param {String} helper
 * @param {Object} store
 * @param {String} namespace
 * @return {Object}
 */
function getModuleByNamespace (helper, store, namespace) {
  const module = store._modulesNamespaceMap[namespace]
  if (!module) {
    console.error(`[vuex] module namespace not found in ${helper}(): ${namespace}`)
  }
  return module
}

const useGetters = (store, namespace, map) => {
  console.group('useGetters')
  console.log(store)
  console.log(namespace)
  console.log(map)
  console.groupEnd()

  return useMapping(useGetters.name, store, namespace, map, partial(computedGetter, store))
}

const useState = normalizeNamespace((store, namespace, map) => {
  return mappingVuex(useState.name, map)(store, namespace, map, computedState)
})

const useMutations = normalizeNamespace((store, namespace, map) => {
  return mappingVuex(useMutations.name, map)(store, namespace, map, getMutations)
})

const useActions = normalizeNamespace((store, namespace, map) => {
  return mappingVuex(useActions.name, map)(store, namespace, map, getActions)
})

/**
 * Rebinding namespace param for useXXX function in special scoped, and return them by simple object.
 * @param {String} namespace
 * @return {Object}
 */
const createNamespacedHelpers = (store, namespace) => {
  if (!store) store = getStoreFromInstance()
  return {
    useState: useState.bind(null, store, namespace),
    useGetters: useGetters.bind(null, store, namespace),
    useMutations: useMutations.bind(null, store, namespace),
    useActions: useActions.bind(null, store, namespace)
  }
}

/**
 * Use Vuex with composition api easily. Both support Vue2.x / Vue3.x
 * @param {Store} store # vm.$store
 */
const useVuex = store => {
  if (!store) store = getStoreFromInstance()
  // console.log(store)
  return {
    createNamespacedHelpers: createNamespacedHelpers.bind(null, store),
    useState: partial(useState, store),
    // pre-specified initial arguments with store instance
    useGetters: normalizeNamespace(partial(useGetters, store)),
    useMutations: useMutations.bind(null, store),
    useActions: useActions.bind(null, store),
    getStoreFromInstance,
    getVuexHelperKeys
  }
}

export default useVuex
