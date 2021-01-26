import { ref, Ref } from 'vue-demi'

import { useEventListener } from '../useEventListener'
import { NOOP } from '../utils'

/**
 * Register `MouseMove` event on mounted, and remove event automatically on unmounted.
 */
const useMouse = () => {
  let remove = NOOP
  const x: Ref<number> = ref(0)
  const y: Ref<number> = ref(0)

  // const touchHandler = (event: TouchEvent) => {
  //   if (event.touches.length > 0) {
  //     x.value = event.touches[0].clientX
  //     y.value = event.touches[0].clientY
  //   }
  // }

  if (window) {
    const mouseHandler = (event: MouseEvent) => {
      x.value = event.pageX
      y.value = event.pageY
    }
    remove = useEventListener(window, 'mousemove', mouseHandler, { passive: true })
  }

  return {
    x,
    y,
    remove
  }
}

export { useMouse }
