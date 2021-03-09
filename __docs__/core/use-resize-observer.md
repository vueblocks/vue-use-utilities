# useResizeObserver

::: tip useResizeObserver
[ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver) lets you know when an element's size changes.
:::

## Example

> 💡 resize the textarea, and watch the contentRect changed.

<!-- <ClientOnly>
  <UseResizeObserver />
</ClientOnly> -->

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
import { useResizeObserver } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const rectState = ref({})
    const textareaRef = ref(null)

    useResizeObserver(
      textareaRef,
      ([entry]) => {
        rectState.value = entry.contentRect
      }
    )

    return {
      textareaRef,
      rectState
    }
  }
}
```

## Typing

```ts
/**
 * Size of a specific box.
 *
 * https://drafts.csswg.org/resize-observer-1/#resizeobserversize
 */
interface ResizeObserverSize {
  readonly inlineSize: number;
  readonly blockSize: number;
}
/**
 * Used to observe different box sizes.
 *
 * https://drafts.csswg.org/resize-observer-1/#enumdef-resizeobserverboxoptions
 */
declare enum ResizeObserverBoxOptions {
  BORDER_BOX = "border-box",
  CONTENT_BOX = "content-box",
  DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box"
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
/**
 * https://drafts.csswg.org/resize-observer-1/#resize-observer-entry-interface
 */
interface ResizeObserverEntry {
  readonly target: Element;
  readonly contentRect: DOMRectReadOnly;
  readonly borderBoxSize?: ReadonlyArray<ResizeObserverSize>;
  readonly contentBoxSize?: ReadonlyArray<ResizeObserverSize>;
  readonly devicePixelContentBoxSize?: ReadonlyArray<ResizeObserverSize>;
}
/**
 * https://drafts.csswg.org/resize-observer-1/#resize-observer-callback
 */
declare type ResizeObserverCallback = (
  entries: ResizeObserverEntry[],
  observer: ResizeObserver
) => void;

/**
 * ResizeObserver immediately detects when an element resizes and provides accurate sizing information back to the callback handler.
 * @param target
 * @param callback
 * @param options
 */
declare const useResizeObserver: (
  target: Element,
  callback: ResizeObserverCallback,
  options: ResizeObserverOptions
) => {
  stop: () => void;
};
```
