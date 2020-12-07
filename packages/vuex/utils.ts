export const isObject = (val: any): val is object => toString.call(val) === '[object Object]'
export const partial = (fn: Function, ...partials: Array<any>) => (...args: Array<any>) => fn(...partials, ...args)
