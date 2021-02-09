import { watch, Ref, ref } from 'vue-demi'

import { RefElement, RefTyped, Fn } from '../types'
import { NOOP } from '../utils'

export function useEventListener<E extends keyof WindowEventMap>(
  target: Window,
  event: E,
  listener: (this: Window, ev: WindowEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions
): Fn

export function useEventListener<E extends keyof DocumentEventMap>(
  target: Document,
  event: E,
  listener: (this: Document, ev: DocumentEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions
): Fn

export function useEventListener<E extends keyof DocumentEventMap>(
  target: RefElement | Ref<any>,
  event: E,
  listener: (this: Element, ev: DocumentEventMap[E]) => any,
  options?: boolean | AddEventListenerOptions,
): Fn

export function useEventListener(
  target: RefTyped<EventTarget>,
  event: string,
  listener: EventListener,
  options?: boolean | AddEventListenerOptions
): Fn

export function useEventListener (
  target: any,
  event: string,
  listener: EventListenerOrEventListenerObject,
  options?: boolean | AddEventListenerOptions
): Fn {
  let remove = NOOP

  if (target) {
    const element: Ref<Element> = ref(target as Element)

    const removeEventListener = (e: Element) => e.removeEventListener(event, listener)
    const addEventListener = (e: Element) => e.addEventListener(event, listener, options)

    const removeWatch = watch(
      element,
      (n, _, cleanUp) => {
        if (n) {
          addEventListener(n)
          cleanUp(() => removeEventListener(n))
        }
      },
      { immediate: true }
    )

    remove = () => {
      removeEventListener(element.value)
      removeWatch()
    }
  }

  return remove
}

// export { useEventListener }