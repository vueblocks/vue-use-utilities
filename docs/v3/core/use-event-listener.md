# useEventListener

::: tip useEventListener
♻️  Register [addEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener) on mounted, and [removeEventListener](https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/removeEventListener) automatically on unmounted.
:::

## Example

> 💡 Example of [MouseMove](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event) event. The following example uses the `mousedown`, `mousemove`, and `mouseup` events to allow the user to draw on an HTML5 canvas.

<ClientOnly>
  <UseEventListenerDemo />
</ClientOnly>

## Usage

```html
<div class="wrapper">
  <h1>Drawing with mouse events</h1>
  <canvas id="myPics" width="560" height="360" class="border"></canvas>
</div>
```

```js
import { useEventListener } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const x = ref(0)
    const y = ref(0)
    const isDrawing = ref(false)
    
    onMounted(() => {
      const myPics = document.getElementById('myPics')
      const context = myPics.getContext('2d')

      const drawLine = (context, x1, y1, x2, y2) => {
        context.beginPath()
        context.strokeStyle = 'black'
        context.lineWidth = 1
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()
        context.closePath()
      }

      const onMouseDown = e => {
        x.value = e.offsetX
        y.value = e.offsetY
        isDrawing.value = true
      }

      const onMouseMove = e => {
        if (isDrawing.value === true) {
          drawLine(context, x.value, y.value, e.offsetX, e.offsetY)
          x.value = e.offsetX
          y.value = e.offsetY
        }
      }

      const onMouseUp = e => {
        if (isDrawing.value === true) {
          drawLine(context, x.value, y.value, e.offsetX, e.offsetY);
          x.value = 0
          y.value = 0
          isDrawing.value = false
        }
      }

      useEventListener(myPics, 'mousedown', onMouseDown)
      useEventListener(myPics, 'mousemove', onMouseMove)
      useEventListener(window, 'mouseup', onMouseUp)
    })
  }
}
```

## Typing

```ts
declare function useEventListener<E extends keyof WindowEventMap>(target: Window, event: E, listener: (this: Window, ev: WindowEventMap[E]) => any, options?: boolean | AddEventListenerOptions): Fn;
declare function useEventListener<E extends keyof DocumentEventMap>(target: Document, event: E, listener: (this: Document, ev: DocumentEventMap[E]) => any, options?: boolean | AddEventListenerOptions): Fn;
declare function useEventListener<E extends keyof DocumentEventMap>(target: RefElement | Ref<any>, event: E, listener: (this: Element, ev: DocumentEventMap[E]) => any, options?: boolean | AddEventListenerOptions): Fn;
declare function useEventListener(target: MaybeRef<EventTarget>, event: string, listener: EventListener, options?: boolean | AddEventListenerOptions): Fn;
```
