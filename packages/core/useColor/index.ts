import color2k, {
  mix,
  toHex,
  toHsla,
  toRgba,
  darken,
  lighten
} from 'color2k'
import { Ref, computed, ComputedRef } from 'vue-demi'

import { isUndefined } from '../utils'

export interface ColorWithAmount {
  lightenColor: ComputedRef<string>;
  darkenColor: ComputedRef<string>;
  tintColor: ComputedRef<string>;
  shadeColor: ComputedRef<string>;
}

const usePalette = {
  /**
   * Tints a color by mixing it with white.
   * @param color
   * @param amount given as a decimal between 0 and 1
   */
  tint: (color: string, amount: number) => mix('#FFF', color, amount),
  /**
   * Shades a color by mixing it with black.
   * @param color 
   * @param amount given as a decimal between 0 and 1
   */
  shade: (color: string, amount: number) => mix('#000', color, amount),
  ...color2k
}

/**
 * Reactive color parsing and manipulation built on top of color2k.
 * @param color 
 * @param amount 
 */
const useColor = (color: Ref<string>, amount?: Ref<number> | undefined) => {
  const { tint, shade } = usePalette
  // accpet color argument
  const hexColor = computed(() => toHex(color.value))
  const hslaColor = computed(() => toHsla(color.value))
  const rgbaColor = computed(() => toRgba(color.value))
  const readableColor = computed(() => color2k.readableColor(color.value))

  // accept amount argument
  let colorWithAmount: ColorWithAmount = {
    lightenColor: computed(() => ''),
    darkenColor: computed(() => ''),
    tintColor: computed(() => ''),
    shadeColor: computed(() => '')
  }

  if (amount && !isUndefined(amount)) {
    colorWithAmount.lightenColor = computed(() => lighten(color.value, amount.value))
    colorWithAmount.darkenColor = computed(() => darken(color.value, amount.value))
    colorWithAmount.tintColor = computed(() => tint(color.value, amount.value))
    colorWithAmount.shadeColor = computed(() => shade(color.value, amount.value))
  }

  return {
    usePalette,
    hexColor,
    hslaColor,
    rgbaColor,
    readableColor,
    ...colorWithAmount
  }
}

export { useColor }
