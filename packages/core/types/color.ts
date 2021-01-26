import { ComputedRef } from 'vue-demi'

export interface ReactiveColor {
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
 * @property {number}  hue
 * @property {number}  saturation
 * @property {number}  lightness
 */
export type HslColor = {
  hue: number,
  saturation: number,
  lightness: number,
}

/**
 * @property {number}  hue
 * @property {number}  saturation
 * @property {number}  lightness
 * @property {number}  alpha
 */
export type HslaColor = {
  hue: number,
  saturation: number,
  lightness: number,
  alpha: number,
}

/**
 * @property {number}  red
 * @property {number}  green
 * @property {number}  blue
 */
export type RgbColor = {
  red: number,
  green: number,
  blue: number,
}

/**
 * @property {number}  red
 * @property {number}  green
 * @property {number}  blue
 * @property {number}  alpha
 */
export type RgbaColor = {
  red: number,
  green: number,
  blue: number,
  alpha: number,
}
