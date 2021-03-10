import { ref } from 'vue-demi'

import { useResizeObserver } from '../useResizeObserver'
import { ResizeObserverOptions, ElementSize } from '../types'
import { isElement } from '../utils'

const useElementSize = (
  target: Element,
  options?: ResizeObserverOptions,
): ElementSize => {
  const width = ref(isElement(target) ? target.clientWidth : 0)
  const height = ref(isElement(target) ? target.clientHeight : 0)

  useResizeObserver(
    target,
    ([entry]) => {
      width.value = entry.contentRect.width
      height.value = entry.contentRect.height
    },
    options
  )

  return { width, height }
}

export { useElementSize }
