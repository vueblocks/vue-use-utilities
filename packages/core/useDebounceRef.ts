import { customRef, Ref } from 'vue-demi'

const useDebouncedRef = (value: any, delay = 200): Ref => {
  let timeout: any
  return customRef((track, trigger) => {
    return {
      get() {
        track()
        return value
      },
      set(newValue) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          value = newValue
          trigger()
        }, delay)
      }
    }
  })
}

export { useDebouncedRef }