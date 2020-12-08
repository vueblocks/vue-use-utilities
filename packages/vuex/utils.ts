export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'
export const isString = <T = any>(str: string | T): str is string => typeof str === 'string'
export const partial = (fn: Function, ...partials: Array<any>) => (...args: Array<any>) => fn(...partials, ...args)
