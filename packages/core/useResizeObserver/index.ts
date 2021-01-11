import { ref, watch } from 'vue-demi'
import { ResizeObserver } from '@juggle/resize-observer'
import { ResizeObserverOptions, ResizeObserverCallback } from '../types'

/**
 * It immediately detects when an element resizes and provides accurate sizing information back to the handler.
 * @param target 
 * @param callback 
 * @param options 
 */
const useResizeObserver = (
  target: Element,
  callback: ResizeObserverCallback,
  options: ResizeObserverOptions
) => {
  let ro: ResizeObserver | undefined
  const targetRef = ref(target)
  const isSupported = window && 'ResizeObserver' in window

  const stopWatch = watch(targetRef, (newVal) => {
    if (isSupported && window && newVal) {
      ro = new ResizeObserver(callback)

      ro.observe(newVal, options)
    }
  }, { immediate: true })

  const stop = () => {
    ro && ro.disconnect()
    ro = undefined
    stopWatch()
  }

  return {
    stop
  }
}

export { useResizeObserver }
