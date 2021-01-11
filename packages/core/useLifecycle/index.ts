import { getCurrentInstance, onMounted, onUnmounted, nextTick } from 'vue-demi'

import { Fn } from '../utils'

/**
 * Call onMounted() if it's inside a component lifecycle, if not, run just call the function
 * @param fn
 * @param sync if set to false, it will run in the nextTick() of Vue
 */
export function tryOnMounted (fn: Fn, sync = true) {
  if (getCurrentInstance()) {
    onMounted(fn)
  } else if (sync) {
    fn()
  } else {
    nextTick(fn)
  }
}

/**
 * Call onUnmounted() if it's inside a component lifecycle, if not, do nothing
 * @param fn
 */
export function tryOnUnmounted (fn: Fn) {
  if (getCurrentInstance()) onUnmounted(fn)
}
