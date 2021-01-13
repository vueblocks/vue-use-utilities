import debounce from 'lodash.debounce'
import throttle from 'lodash.throttle'
import { tryOnMounted, tryOnUnmounted } from '../useLifecycle'
import { Fn, EventOptions } from '../types'
import { isBoolean } from '../utils'

/**
 * Reactive Resize API, When window resize, do someting.
 * @param {function} fn
 * @param {object} options
 * @return {function} dispatchResize
 */
const useResizeEvent = (
  fn: Fn,
  options: EventOptions = { useCapture: false, useThrottle: null, delay: 500 }
) => {
  const { useCapture = false, useThrottle = null, delay = 500 } = options

  const dispatchResize = () => {
    const e = document.createEvent('Event')
    e.initEvent('resize', true, true)
    window.dispatchEvent(e)
  }

  const waitFn = isBoolean(useThrottle)
    ? useThrottle
      ? throttle(fn, delay)
      : debounce(fn, delay)
    : fn

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
