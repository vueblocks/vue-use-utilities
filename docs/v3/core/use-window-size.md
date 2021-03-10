# useWindowSize

::: tip useWindowSize
Reactive window size
:::

## Example

> 💡 resize the browser and watch window size changed.

<ClientOnly>
  <UseWindowSizeDemo />
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

interface EventOptions {
  useCapture?: boolean;
  useThrottle?: boolean | null;
  delay?: number;
}

/**
 * Reactive window size
 * @param {object} options
 * @return {Ref<number>} WindowSize
 */
declare const useWindowSize: (options?: EventOptions) => WindowSize;
```
