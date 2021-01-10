import { customRef, Ref } from 'vue-demi'
import debounce from 'lodash.debounce'

const useDebouncedRef = (value: any, delay = 200): Ref => {
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set: debounce((newValue) => {
        value = newValue
        trigger()
      }, delay)
    }
  })
}

export { useDebouncedRef }
