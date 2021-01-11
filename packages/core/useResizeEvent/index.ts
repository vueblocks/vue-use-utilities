import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import { tryOnMounted, tryOnUnmounted } from '../useLifecycle'
import { Fn } from '../types'

/**
 * Reactive Resize API, When window resize, do someting.
 * @param {function} fn
 * @param {boolean} useCapture
 * @param {boolean} isThrottle: true: throttle | false: debounce
 * @return {function} dispatchResize
 */
const useResizeEvent = (fn: Fn, useCapture = false, isThrottle = false) => {
  const dispatchResize = () => {
    const e = document.createEvent('Event')
    e.initEvent('resize', true, true)
    window.dispatchEvent(e)
  }

  const waitFn = isThrottle ? throttle(fn, 500) : debounce(fn, 500)

  tryOnMounted(() => {
    window.addEventListener('resize', waitFn, useCapture)
  })
  tryOnUnmounted(() => {
    window.removeEventListener('resize', waitFn, useCapture)
  })

  return {
    dispatchResize
  }
}

export { useResizeEvent }
