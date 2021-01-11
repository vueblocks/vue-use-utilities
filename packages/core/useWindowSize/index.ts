import { onMounted, ref } from 'vue-demi'
import { isClient } from '../utils'
import { useResizeEvent } from '../useResizeEvent'
import { WindowSize } from '../types'

/**
 * Reactive window size
 * @param {boolean} useCapture
 * @param {boolean} useThrottle: true: throttle | false: debounce
 * @return {Ref<number>} WindowSize
 */
const useWindowSize = (useCapture = false, useThrottle = false): WindowSize => {
  const width = ref(isClient ? window.innerWidth : 0)
  const height = ref(isClient ? window.innerHeight : 0)

  const onResize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  const { dispatchResize } = useResizeEvent(onResize, useCapture, useThrottle)

  onMounted(dispatchResize)

  return { width, height }
}

export { useWindowSize }
