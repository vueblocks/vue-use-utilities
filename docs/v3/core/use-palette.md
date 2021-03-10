# usePalette

::: tip usePalette
Turn `color2k` to `usePalette`, we enhanced color2k with new utilities like `tint` 、 `shade` 、 `invert`.
:::

<!-- ## Example

> Change Color and Watch Reactive Color.

<ClientOnly>
  <UseColor />
</ClientOnly> -->

## Usage

```js
import { ref } from 'vue-demi'
import { usePalette } from '@vueblocks/vue-use-core'

const { tint } = usePalette

export default {
  setup () {
    const mainColor = '#3eaf7c'
    const tintColor = ref(tint(mainColor, 0.5))

    return {
      tintColor
    }
  }
}
```

## Typing

```ts
/**
 * enhanced `color2k` with new utilities like `tint` 、 `shade` 、 `invert`.
 */
declare const usePalette: {
    adjustHue: typeof adjustHue;
    darken: typeof darken;
    desaturate: typeof desaturate;
    getContrast: typeof getContrast;
    getLuminance: typeof getLuminance;
    getScale: typeof getScale;
    guard: typeof guard;
    hasBadContrast: typeof hasBadContrast;
    hsla: typeof hsla;
    lighten: typeof lighten;
    mix: typeof mix;
    opacify: typeof opacify;
    parseToHsla: typeof parseToHsla;
    readableColor: typeof readableColor;
    readableColorIsBlack: typeof readableColorIsBlack;
    rgba: typeof rgba;
    saturate: typeof saturate;
    transparentize: typeof transparentize;
    parseToRgba: typeof parseToRgba;
    ColorError: typeof ColorError;
    toHex: typeof toHex;
    toRgba: typeof toRgba;
    toHsla: typeof toHsla;
    /**
     * Tints a color by mixing it with white.
     * @param color
     * @param amount given as a decimal between 0 and 1
     */
    tint: (color: string, amount: number) => string;
    /**
     * Shades a color by mixing it with black.
     * @param color
     * @param amount given as a decimal between 0 and 1
     */
    shade: (color: string, amount: number) => string;
    /**
     * Inverts the red, green and blue values of a color.
     * @param color
     */
    invert: (color: string) => string;
};
```
