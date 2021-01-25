# useMouse

::: tip useMouse
♻️  Register [MouseMove](https://developer.mozilla.org/en-US/docs/Web/API/Element/mousemove_event) event on mounted, and remove event automatically on unmounted.
:::

## Example

> 💡 Move your mouse

<ClientOnly>
  <UseMouse />
</ClientOnly>

## Usage

```html
<div class="wrapper">
  Mouse Position: [X: {{ x }}, Y: {{ y }}]
</div>
```

```js
import { useMouse } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const { x, y, remove } = useMouse()

    return {
      x,
      y
    }
  }
}
```

## Typing

```ts
/**
 * Register `MouseMove` event on mounted, and remove event automatically on unmounted.
 */
declare const useMouse: () => {
    x: Ref<number>;
    y: Ref<number>;
    remove: () => void;
}
```
