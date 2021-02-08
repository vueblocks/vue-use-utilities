import { History, IHistoryOptions } from 'stateshot'
import { ref, watch, Ref, unref, onMounted, reactive, toRefs, computed } from 'vue-demi'

const useStateshot = <T>(
  defaultValue: Ref<string>,
  options: IHistoryOptions = { maxLength: 100, delay: 50 }
) => {
  const {
    // Max length saving history states, 100 by default.
    maxLength = 100,
    // Debounce time for push in milliseconds, 50 by default.
    delay = 50,
    ...others
  } = options

  const history = new History({
    // initialState: unref(defaultValue),
    maxLength: maxLength + 1,
    delay,
    ...others
  })


  const store = reactive({
    historyState: unref(defaultValue),
    historyLength: 0,
    hasRedo: false,
    hasUndo: false,
    undoCount: 0,
    redoCount: 0
  })

  // const getHistoryLength = () => {
  //   return history?.$records.filter(record => record).length
  // }

  const snapshot = (state: any) => {
    history.pushSync(state)
    store.historyLength += 1
    store.hasUndo = true
    store.undoCount = store.historyLength - 1
  }

  const undo = () => {
    store.historyState = history.undo().get()
    store.undoCount -= 1
    if (store.undoCount === 0) store.hasUndo = false
    store.redoCount += 1
    store.hasRedo = store.redoCount > 0
  }

  const redo = () => {
    store.historyState = history.redo().get()
    store.redoCount -= 1
    if (store.redoCount === 0) store.hasRedo = false
    store.undoCount += 1
    store.hasUndo = store.undoCount > 0
  }

  const reset = () => history.reset()

  watch(
    () => store.historyState,
    (newVal) => {
      snapshot(newVal)
      console.log(history)
      console.log(history.get())
      console.log(JSON.stringify(store.historyState))
    },
    {
      immediate: true,
      deep: true
    }
  )

  return {
    ...toRefs(store),
    undo,
    redo,
    reset,
    snapshot
  }
}

export { useStateshot }
