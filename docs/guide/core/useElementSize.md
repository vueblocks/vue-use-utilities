# useElementSize

::: tip useElementSize
Reactive [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) size.
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
import { useElementSize } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const textareaRef = ref(null)

    const { width, height } = useElementSize(textareaRef)

    return {
      textareaRef,
      width,
      height
    }
  }
}
```

## Example

> 💡 resize the textarea, and watch the element size changed.

<ClientOnly>
  <UseElementSize />
</ClientOnly>

## Typing

```ts
interface WindowSize {
    width: Ref<number>;
    height: Ref<number>;
}
interface ElementSize extends WindowSize {
}

declare const useElementSize: (target: Element, options: ResizeObserverOptions) => ElementSize;
```
