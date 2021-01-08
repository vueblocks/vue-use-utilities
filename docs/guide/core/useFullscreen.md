# useFullscreen

::: tip useFullscreen
Reactive Fullscreen API build on top of [screenfull.js](https://github.com/sindresorhus/screenfull.js/)
:::

## Usage

```html
<div class="img-wrapper">
  <img
    src="https://picsum.photos/seed/5e1d4e565e68e705e901b050/1920/1080"
    ref="imgRef"
  />

  <div>
    <button @click="toggleFullscreen">Toggle Fullscreen</button>
  </div>
</div>
```

```js
import { useFullscreen } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const imgRef = ref(null)
    const {
      isFullscreen,
      toggleFullscreen
    } = useFullscreen(imgRef)

    return {
      imgRef,
      isFullscreen,
      toggleFullscreen
    }
  }
}
```

## Example

> Click the image to make it fullscreen

<UseFullscreen />

## Typing

```ts
/**
 * Reactive Fullscreen API build on top of screenfull.js
 * @param {HTMLElement} target
 * @return {boolean} isFullscreen
 * @return {function} toggleFullscreen
 */
declare const useFullscreen: (target: HTMLElement) => {
    isFullscreen: Ref<boolean>;
    toggleFullscreen: () => void;
};
```
