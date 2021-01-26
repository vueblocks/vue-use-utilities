# useWindowSize

::: tip useWindowSize
Reactive window size
:::

## Example

> 💡 resize the browser and watch window size changed.

<ClientOnly>
  <UseWindowSize />
</ClientOnly>

## Usage

```html
<div class="wrapper">
  window size: {{ width }} x {{ height }}
</div>
```

```js
import { useWindowSize } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const { width, height } = useWindowSize()

    return {
      width,
      height
    }
  }
}
```

## Typing

```ts
interface WindowSize {
  width: Ref<number>;
  height: Ref<number>;
}

/**
 * Reactive window size
 * @param {boolean} useCapture
 * @param {boolean} useThrottle: true: throttle | false: debounce
 * @return {Ref<number>} WindowSize
 */
declare const useWindowSize: (
  useCapture?: boolean,
  useThrottle?: boolean
) => WindowSize;
```
