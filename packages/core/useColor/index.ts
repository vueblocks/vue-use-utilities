import color2k from 'color2k'
import { Ref, computed, unref, isRef } from 'vue-demi'

import { ReactiveColor } from '../types'
import { isUndefined } from '../utils'

/**
 * enhanced `color2k` with new utilities like `tint` 、 `shade` 、 `invert`.
 */
const usePalette = {
  /**
   * Tints a color by mixing it with white.
   * @param color
   * @param amount given as a decimal between 0 and 1
   */
  tint: (color: string, amount: number) => color2k.mix('#FFF', color, amount),
  /**
   * Shades a color by mixing it with black.
   * @param color 
   * @param amount given as a decimal between 0 and 1
   */
  shade: (color: string, amount: number) => color2k.mix('#000', color, amount),
  /**
   * Inverts the red, green and blue values of a color.
   * @param color 
   */
  invert: (color: string) => {
    if (color === 'transparent') return color
    const [r, g, b, a] = color2k.parseToRgba(color)
    return color2k.rgba(255 - r, 255 - g, 255 - b, a)
  },
  ...color2k
}

/**
 * Reactive color parsing and manipulation built on top of color2k.
 * @param color 
 * @param amount 
 */
const useColor = (color: Ref<string>, amount?: Ref<number> | undefined): ReactiveColor => {
  const { tint, shade, invert } = usePalette

  const colorState: ReactiveColor = {
    hexColor: computed(() => ''),
    hslaColor: computed(() => ''),
    rgbaColor: computed(() => ''),
    readableColor: computed(() => ''),
    invertColor: computed(() => ''),
    luminance: computed(() => 0),
    lightenColor: computed(() => ''),
    darkenColor: computed(() => ''),
    tintColor: computed(() => ''),
    shadeColor: computed(() => ''),
    desaturateColor: computed(() => ''),
    saturateColor: computed(() => ''),
    opacifyColor: computed(() => ''),
    transparentizeColor: computed(() => '')
  }

  // accpet color argument
  if (isRef(color) && unref(color)) {
    colorState.hexColor = computed(() => color2k.toHex(unref(color)))
    colorState.hslaColor = computed(() => color2k.toHsla(unref(color)))
    colorState.rgbaColor = computed(() => color2k.toRgba(unref(color)))
    colorState.readableColor = computed(() => color2k.readableColor(unref(color)))
    colorState.invertColor = computed(() => invert(unref(color)))
    colorState.luminance = computed(() => color2k.getLuminance(unref(color)))
  }

  // accept amount argument
  if (isRef(amount) && !isUndefined(unref(amount))) {
    colorState.lightenColor = computed(() => color2k.lighten(unref(color), unref(amount)))
    colorState.darkenColor = computed(() => color2k.darken(unref(color), unref(amount)))
    colorState.tintColor = computed(() => tint(unref(color), unref(amount)))
    colorState.shadeColor = computed(() => shade(unref(color), unref(amount)))
    colorState.desaturateColor = computed(() => color2k.desaturate(unref(color), unref(amount)))
    colorState.saturateColor = computed(() => color2k.saturate(unref(color), unref(amount)))
    colorState.opacifyColor = computed(() => color2k.opacify(unref(color), unref(amount)))
    colorState.transparentizeColor = computed(() => color2k.transparentize(unref(color), unref(amount)))
  }

  return colorState
}

export { usePalette, useColor }
