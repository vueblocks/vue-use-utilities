type ConstructorType<T = any> = new (...args: any[]) => T
const isString = <T = any>(str: string | T): str is string => {
  return typeof str === 'string'
};
export const is = (type: ConstructorType | string, val: any) =>
  ![, null].includes(val) &&
  (isString(type) ? val.constructor.name === type : val.constructor === type)
export const isArray = Array.isArray
export const isBoolean = (val: any): val is boolean => typeof val === 'boolean'
export const isClient = ![typeof window, typeof document].includes('undefined')
export const isElement = (val: any): val is Element =>
  typeof val === 'object' && !!val.tagName
export const isUndefined = (val: any) => val === undefined
