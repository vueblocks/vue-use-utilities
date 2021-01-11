# useResizeEvent

::: tip useResizeEvent
♻️  Register [resize](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) event on mounted, and remove event automatically on unmounted.
:::

## Usage

```html
<div class="wrapper">
  document size: {{ domSize }}
</div>
```

```js
import { useResizeEvent } from '@vueblocks/vue-use-core'

export default {
  setup () {
    let domSize = reactive({
      width: 0,
      height: 0
    })

    const onResize = () => {
      domSize.width = document.body.clientWidth
      domSize.height = document.body.clientHeight
    }

    const { dispatchResize } = useResizeEvent(onResize, true, false)

    // dispatch resize event once
    onMounted(dispatchResize)

    return {
      domSize
    }
}
```

## Example

> 💡 resize the browser and watch document size changed.

<UseResizeEvent />

## Typing

```ts
/**
 * Reactive Resize API, When window resize, do someting.
 * @param {function} fn
 * @param {boolean} useCapture
 * @param {boolean} isThrottle: true: throttle | false: debounce
 * @return {function} dispatchResize
 */
declare const useResizeEvent: (fn: Fn, useCapture?: boolean, isThrottle?: boolean) => {
  dispatchResize: () => void;
};
```
