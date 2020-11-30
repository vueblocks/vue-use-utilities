// import { Store } from 'vuex/types'
import { computed, getCurrentInstance } from 'vue-demi'
// import { isObject, isNull } from 'lodash'

const isObject = (arg: any): boolean => Object.prototype.toString.call(arg) === '[object Object]'

const isNull = (val: any) => val === null

const getProperty = <T, K extends keyof T>(obj: T, key: K): T[K] => obj[key]

/**
 * Validate whether given map is valid or not
 * @param {*} map
 * @return {Boolean}
 */
const isValidMap = (map: Array<string> | object): boolean => Array.isArray(map) || isObject(map)

const getStoreFromInstance = () => {
  const vm: any = getCurrentInstance()
  if (!vm) {
    console.error('You must use this function within the "setup()" method, or insert the store as first argument.')
  }
  return vm.$store
}

const mapFormArray = (
  namespace: string | null,
  map: Array<string>,
  cb: Function
) => {
  // console.group('mapFromArray')
  // console.log(namespace)
  // console.log(map)
  // console.log(cb)
  // console.groupEnd()
  return map.reduce((result: any, prop) => {
    result[prop] = cb(null, namespace, prop)
    return result
  }, {} as any)
}

const mapFromObject = (
  props: Array<string>,
  store: any,
  namespace: string,
  map: any,
  cb: Function
) => {
  // console.group('mapFromObject')
  // console.log(useType)
  // console.log(namespace)
  // console.log(map)
  // console.log(cb)
  // console.groupEnd()

  let result: any = {}
  for (let key in map) {
    const prop = getProperty(map, key)
    if (typeof prop === 'function' && !isNull(namespace)) {
      result[key] = computedMethods(store, namespace, prop)
    }
    
    if (props.includes(prop)) {
      result[key] = cb(null, namespace, prop)
    }
  }
  return result
}

const useVuexKeys = (store: any, namespace: string, type: string) => {
  const { state, getters, _mutations, _actions } = store

  const keysMap: any = {
    'useState': state[namespace],
    'useGetters': getters,
    'useMutations': _mutations,
    'useActions': _actions
  }

  return Object.keys(keysMap[type])
}

const useMapping = (
  type: string,
  store: any,
  namespace: string,
  map: Array<string> | object,
  cb: Function
) => {
  if (!map) return {}

  if (Array.isArray(map)) {
    return mapFormArray(namespace, map, cb)
  }

  if (isObject(map)) {
    const vuexKeys = useVuexKeys(store, namespace, type)
    return mapFromObject(vuexKeys, store, namespace, map, cb)
  }
}

const computedGetter = (store: any = null, namespace: string, prop: string) => {
  if (!store) store = getStoreFromInstance()

  return computed(() => store.getters[prop])
}

const computedState = (store: any = null, namespace: string, prop: string) => {
  if (!store) store = getStoreFromInstance()

  return computed(() => store.state[namespace][prop])
}

const computedMethods = (store: any = null, namespace: string, cb: Function) => {
  const { state, getters } = store

  return computed(() => cb(state[namespace], getters))
}

const getMutations = (store: any = null, namespace: string, type: string) => {
  if (!store) store = getStoreFromInstance()

  return function mappedMutation () {
    const args: IArguments = arguments
    return store.commit.apply(store, [type, ...args])
  }
}

const getActions = (store: any = null, namespace: string, action: string) => {
  if (!store) store = getStoreFromInstance()

  return function mappedAction () {
    const args: IArguments = arguments
    return store.dispatch.apply(store, [action, ...args])
  }
}

const useGetters = (store: any, namespace: string, map: Array<string> | object) => {
  if (!isValidMap(map)) {
    console.error('[vuex] useGetters: mapper parameter must be either an Array or an Object')
  }

  return useMapping.bind(null, useGetters.name)(store, namespace, map, computedGetter)
}

const useState = (store: any, namespace: string, map: Array<string> | object) => {
  if (!isValidMap(map)) {
    console.error('[vuex] useState: mapper parameter must be either an Array or an Object')
  }

  return useMapping.bind(null, useState.name)(store, namespace, map, computedState)
}

const useMutations = (store: any, namespace: string, map: Array<string> | object) => {
  if (!isValidMap(map)) {
    console.error('[vuex] useMutations: mapper parameter must be either an Array or an Object')
  }

  return useMapping.bind(null, useMutations.name)(store, namespace, map, getMutations)
}

const useActions = (store: any, namespace: string, map: Array<string> | object) => {
  if (!isValidMap(map)) {
    console.error('[vuex] useActions: mapper parameter must be either an Array or an Object')
  }

  return useMapping.bind(null, useActions.name)(store, namespace, map, getActions)
}

/**
 * Rebinding namespace param for mapXXX function in special scoped, and return them by simple object
 * @param {String} namespace
 * @return {Object}
 */
const createNamespacedHelpers = (namespace: string) => ({
  mapState: useState.bind(null, namespace),
  mapGetters: useGetters.bind(null, namespace),
  mapMutations: useMutations.bind(null, namespace),
  mapActions: useActions.bind(null, namespace)
})

const useVuex = (store: any) => {
  if (!store) store = getStoreFromInstance()
  console.log(store)
  return {
    useState: useState.bind(null, store),
    useGetters: useGetters.bind(null, store),
    useMutations: useMutations.bind(null, store),
    useActions: useActions.bind(null, store),
    getStoreFromInstance,
    createNamespacedHelpers
  }
}

export { useVuex }
