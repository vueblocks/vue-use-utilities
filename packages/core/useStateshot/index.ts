import { History, IHistoryOptions } from 'stateshot'
import { ref, watch, reactive, toRefs, Ref } from 'vue-demi'
import cloneDeep from 'lodash.clonedeep'

import { IHistory, RefTyped } from '../types'
import { unwrap } from '../utils'

/**
 * 💾 A state snapshot composable utilities built on top of stateshot.js.
 * @param defaultValue 
 * @param options 
 */
const useStateshot = (
  defaultValue: RefTyped<any>,
  options: IHistoryOptions = { maxLength: 100, delay: 50 }
) => {
  const initialState = cloneDeep(unwrap(defaultValue))

  const {
    // Max length saving history states, 100 by default.
    maxLength = 100,
    // Debounce time for push in milliseconds, 50 by default.
    delay = 50,
    ...others
  } = options

  const history: IHistory = new History({
    initialState,
    maxLength: maxLength + 1,
    delay,
    ...others
  })

  const store = reactive({
    historyState: unwrap(defaultValue),
    historyLength: 0,
    hasRedo: false,
    hasUndo: false,
    undoCount: 0,
    redoCount: 0
  })

  const isEffective = ref(false)

  const getHistoryLength = () => {
    return (history.$records && history.$records.filter(record => record).length) || 1
  }

  const getRecord = (): any => {
    const state = history.get()

    if (state.hasOwnProperty('children') && state.children === undefined)
      delete state.children

    return state
  }

  /**
   * Sync state into stateshot
   * @param state
   */
  const snapshot = (state: any) => {
    history.pushSync(state)

    const historyLength = getHistoryLength()

    store.historyLength = historyLength - 1
    store.hasUndo = historyLength - 1 > 0
    store.hasRedo = false
    store.undoCount = store.historyLength
    store.redoCount = 0
  }

  const undo = () => {
    if (store.undoCount === 0 || !store.hasUndo) return
    isEffective.value = true
    history.undo()
    store.historyState = getRecord()
    store.undoCount -= 1
    if (store.undoCount === 0) store.hasUndo = false
    store.redoCount += 1
    store.hasRedo = store.redoCount > 0
  }

  const redo = () => {
    if (store.redoCount === 0 || !store.hasRedo) return
    isEffective.value = true
    history.redo()
    store.historyState = getRecord()
    store.redoCount -= 1
    if (store.redoCount === 0) store.hasRedo = false
    store.undoCount += 1
    store.hasUndo = store.undoCount > 0
  }

  const jump = (step: number) => {
    let jumpStep = step > 0 ? redo : undo

    for (let i = 0; i < Math.abs(step); i++) {
      jumpStep()
    }

    return getRecord()
  }

  const reset = () => {
    if (store.historyLength <= 0) return
    history.reset()
    // isEffective.value = true
    store.historyState = cloneDeep(initialState)
    store.historyLength = 0
    store.hasUndo = false
    store.hasRedo = false
    store.undoCount = 0
    store.redoCount = 0
  }

  watch(
    () => store.historyState,
    (newVal) => {
      // undo || redo actions do not need snapshot
      if (isEffective.value) {
        isEffective.value = false
        return
      } else {
        snapshot(newVal)
      }
    },
    {
      // immediate: true,
      deep: true
    }
  )

  return {
    ...toRefs(store),
    undo,
    redo,
    reset,
    jump,
    snapshot
  }
}

export { useStateshot }
