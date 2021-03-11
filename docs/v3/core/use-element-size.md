# useElementSize

::: tip useElementSize
Reactive [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element) size.
:::

## Example

> 💡 resize the textarea, and watch the element size changed.

<ClientOnly>
  <UseElementSizeDemo />
</ClientOnly>

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

```ts
import { defineComponent, ref, onMounted } from 'vue'
import { useElementSize } from '@vueblocks/vue-use-core'

export default defineComponent({
  setup () {
    const position = ref({})
    const textareaRef = ref<Element>()

    onMounted(() => {
      position.value = useElementSize(textareaRef, {})
    })

    return {
      textareaRef,
      position
    }
  }
})
```

## Typing

```ts
interface WindowSize {
  width: Ref<number>;
  height: Ref<number>;
}
interface ElementSize extends WindowSize {
}
/**
 * Options to be given to the resize observer,
 * when observing a new element.
 *
 * https://drafts.csswg.org/resize-observer-1/#dictdef-resizeobserveroptions
 */
interface ResizeObserverOptions {
  box?: 'content-box' | 'border-box' | 'device-pixel-content-box' | ResizeObserverBoxOptions;
}

declare const useElementSize: (target: RefElement, options?: ResizeObserverOptions) => ElementSize;
```
