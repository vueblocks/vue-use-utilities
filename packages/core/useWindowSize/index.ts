import { onMounted, ref } from 'vue-demi'
import { isClient } from '../utils'
import { useResizeEvent } from '../useResizeEvent'
import { WindowSize, EventOptions } from '../types'

/**
 * Reactive window size
 * @param {object} options
 * @return {Ref<number>} WindowSize
 */
const useWindowSize = (options?: EventOptions): WindowSize => {
  const width = ref(isClient ? window.innerWidth : 0)
  const height = ref(isClient ? window.innerHeight : 0)

  const onResize = () => {
    width.value = window.innerWidth
    height.value = window.innerHeight
  }

  const { dispatchResize } = useResizeEvent(onResize, options)

  onMounted(dispatchResize)

  return { width, height }
}

export { useWindowSize }
