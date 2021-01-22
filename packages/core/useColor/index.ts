import color2k from 'color2k'
import { Ref, computed } from 'vue-demi'

import { ReactiveColor } from '../types'
import { isUndefined } from '../utils'

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
const useColor = (color: Ref<string>, amount?: Ref<number> | undefined) => {
  const { tint, shade, invert } = usePalette
  console.log(usePalette)
  // accpet color argument
  const colorState: ReactiveColor = {
    hexColor: computed(() => color2k.toHex(color.value)),
    hslaColor: computed(() => color2k.toHsla(color.value)),
    rgbaColor: computed(() => color2k.toRgba(color.value)),
    readableColor: computed(() => color2k.readableColor(color.value)),
    invertColor: computed(() => invert(color.value)),
    luminance: computed(() => color2k.getLuminance(color.value)),
    lightenColor: computed(() => ''),
    darkenColor: computed(() => ''),
    tintColor: computed(() => ''),
    shadeColor: computed(() => ''),
    desaturateColor: computed(() => ''),
    saturateColor: computed(() => ''),
    opacifyColor: computed(() => ''),
    transparentizeColor: computed(() => '')
  }

  // accept amount argument
  if (amount && !isUndefined(amount)) {
    colorState.lightenColor = computed(() => color2k.lighten(color.value, amount.value))
    colorState.darkenColor = computed(() => color2k.darken(color.value, amount.value))
    colorState.tintColor = computed(() => tint(color.value, amount.value))
    colorState.shadeColor = computed(() => shade(color.value, amount.value))
    colorState.desaturateColor = computed(() => color2k.desaturate(color.value, amount.value))
    colorState.saturateColor = computed(() => color2k.saturate(color.value, amount.value))
    colorState.opacifyColor = computed(() => color2k.opacify(color.value, amount.value))
    colorState.transparentizeColor = computed(() => color2k.transparentize(color.value, amount.value))
  }

  return {
    usePalette,
    ...colorState,
  }
}

export { useColor }
