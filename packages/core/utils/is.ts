type ConstructorType<T = any> = new (...args: any[]) => T
const isString = <T = any>(str: string | T): str is string => {
  return typeof str === 'string'
};
export const is = (type: ConstructorType | string, val: any) =>
  ![, null].includes(val) &&
  (isString(type) ? val.constructor.name === type : val.constructor === type)
export const isArray = Array.isArray
export const isClient = ![typeof window, typeof document].includes('undefined')