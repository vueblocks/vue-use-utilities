# useResizeEvent

::: tip useResizeEvent
Register [resize](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) event on mounted, and removeEventListener automatically on unmounted.
:::

## Usage

```html
<div class="wrapper">
  <label for="story">Tell us your story:</label>

  <textarea
    id="story"
    name="story"
    rows="5"
    cols="33"
    ref="textareaRef"
  >
    It was a dark and stormy night...
  </textarea>
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

    onMounted(dispatchResize)

    return {
      domSize
    }
}
```

## Example

> 💡 resize the browser

<UseResizeEvent />

## Typing

```ts

```
