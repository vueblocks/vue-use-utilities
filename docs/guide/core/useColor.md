# useColor

::: tip useColor
Reactive color parsing and manipulation built on top of [color2k](https://github.com/ricokahler/color2k).
:::

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

### Manipulate Color

::: tip usePalette
Turn `color2k` to `usePalette`, we enhanced color2k with new utilities like `tint` 、 `shade` 、 `invert`.
:::

```js
import { usePalette } from '@vueblocks/vue-use-core'

const { tint } = usePalette

export default {
  setup () {
    return {
      tintColor: tint(mainColor, 0.5)
    }
  }
}
```

## Example

> Change Color and Watch Reactive Color.

<ClientOnly>
  <UseColor />
</ClientOnly>

## Typing

```ts
/**
 * enhanced `color2k` with new utilities like `tint` 、 `shade` 、 `invert`.
 */
declare const usePalette: {
    adjustHue: typeof color2k.adjustHue;
    darken: typeof color2k.darken;
    desaturate: typeof color2k.desaturate;
    getContrast: typeof color2k.getContrast;
    getLuminance: typeof color2k.getLuminance;
    getScale: typeof color2k.getScale;
    guard: typeof color2k.guard;
    hasBadContrast: typeof color2k.hasBadContrast;
    hsla: typeof color2k.hsla;
    lighten: typeof color2k.lighten;
    mix: typeof color2k.mix;
    opacify: typeof color2k.opacify;
    parseToHsla: typeof color2k.parseToHsla;
    readableColor: typeof color2k.readableColor;
    readableColorIsBlack: typeof color2k.readableColorIsBlack;
    rgba: typeof color2k.rgba;
    saturate: typeof color2k.saturate;
    transparentize: typeof color2k.transparentize;
    parseToRgba: typeof color2k.parseToRgba;
    ColorError: typeof color2k.ColorError;
    toHex: typeof color2k.toHex;
    toRgba: typeof color2k.toRgba;
    toHsla: typeof color2k.toHsla;
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
