import { ref, Ref } from 'vue-demi'
import screenfull, { Screenfull } from 'screenfull'
import { tryOnMounted } from '../useLifecycle'
import { Fn } from '../types'

export interface IFullScreen {
  isFullscreen: Ref<boolean>;
  toggleFullscreen: Fn;
}

/**
 * Reactive Fullscreen API build on top of screenfull.js
 * @param {HTMLElement} target
 * @return {boolean} isFullscreen
 * @return {function} toggleFullscreen
 */
const useFullscreen = (target: HTMLElement): IFullScreen => {
  const targetRef = ref(target || document.querySelector('html'))
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
