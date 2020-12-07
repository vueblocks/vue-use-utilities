export const isObject = (val) => toString.call(val) === '[object Object]'
export const partial = (fn, ...partials) => (...args) => fn(...partials, ...args)
