import { ref, Ref } from 'vue-demi'
import screenfull, { Screenfull } from 'screenfull'
import { tryOnMounted } from '../useLifecycle'
import { Fn, RefElement } from '../types'

export interface IFullScreen {
  isFullscreen: Ref<boolean>;
  toggleFullscreen: Fn;
}

/**
 * Reactive Fullscreen API build on top of screenfull.js
 * @param target
 * @param options
 */
const useFullscreen = (
  target: RefElement,
  options: FullscreenOptions = {}
): IFullScreen => {
  const targetRef = ref(target || document.querySelector('html'))
  const isFullscreen = ref(false)

  const toggleFullscreen = () => {
    screenfull.isEnabled && screenfull.toggle(targetRef.value, options)
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
