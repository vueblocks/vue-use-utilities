import {
  strip,
  plus,
  minus,
  times,
  divide,
  round,
  digitLength,
  float2Fixed
} from 'number-precision'

import { reactiveFn } from '../utils'

/**
 * `usePrecision` provide reactive methods to perform addition, subtraction, multiplication & division operations precisely.
 */
const usePrecision = () => {
  return {
    strip: reactiveFn(strip),
    plus: reactiveFn(plus),
    minus: reactiveFn(minus),
    times: reactiveFn(times),
    divide: reactiveFn(divide),
    round: reactiveFn(round),
    digitLength: reactiveFn(digitLength),
    float2Fixed: reactiveFn(float2Fixed)
  }
}

export { usePrecision }
