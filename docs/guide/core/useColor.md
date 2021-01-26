# useColor

::: tip useColor
Reactive color parsing and manipulation built on top of [color2k](https://github.com/ricokahler/color2k).
:::

## Example

> Change Color and Watch Reactive Color.

<ClientOnly>
  <UseColor />
</ClientOnly>

## Usage

```html
<div class="wrapper">
  <div class="palette">
    <h3>Ligthen Color</h3>
     <div>{{ lightenColor }}</div>
  </div>
</div>
```

```js
import { useColor } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const mainColor = ref('#3eaf7c')
    const mainAmount = ref(0.5)

    const { lightenColor } = useColor(mainColor, mainAmount)

    return {
      lightenColor
    }
  }
}
```

## Typing

```ts
interface ReactiveColor {
    hexColor: ComputedRef<string>;
    hslaColor: ComputedRef<string>;
    rgbaColor: ComputedRef<string>;
    readableColor: ComputedRef<string>;
    invertColor: ComputedRef<string>;
    luminance: ComputedRef<number>;
    lightenColor: ComputedRef<string>;
    darkenColor: ComputedRef<string>;
    tintColor: ComputedRef<string>;
    shadeColor: ComputedRef<string>;
    desaturateColor: ComputedRef<string>;
    saturateColor: ComputedRef<string>;
    opacifyColor: ComputedRef<string>;
    transparentizeColor: ComputedRef<string>;
}

/**
 * Reactive color parsing and manipulation built on top of color2k.
 * @param color
 * @param amount
 */
declare const useColor: (
  color: Ref<string>,
  amount?: Ref<number> | undefined
) => ReactiveColor;
```
