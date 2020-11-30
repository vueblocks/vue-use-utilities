import { ref } from 'vue-demi'
import screenfull, { Screenfull } from 'screenfull'
import { tryOnMounted } from './useLifecycle'

/**
 * Reactive Fullscreen API build on top of screenfull.js
 * @param {HTMLElement} target
 * @return {boolean} isFullscreen
 * @return {function} toggle
 */
const useFullscreen = (target: HTMLElement) => {
  const targetRef = ref(target || document?.querySelector('html'))
  const isFullscreen = ref(false)

  const toggleFullscreen = () => {
    screenfull.isEnabled && screenfull.toggle(targetRef.value)
  }

  tryOnMounted(() => {
    if (screenfull.isEnabled) {
      screenfull.on('change', () => {
        isFullscreen.value = (<Screenfull>screenfull).isFullscreen
      })
    }
  })

  return {
    isFullscreen,
    toggleFullscreen
  }
}

export { useFullscreen }
