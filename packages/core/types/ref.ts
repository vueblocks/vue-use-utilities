import { Ref, ComputedRef } from 'vue-demi'

export type RefTyped<T> = T | Ref<T>
export type RefElement = Element | Ref<Element | undefined>
export type ToRefs<T = any> = { [K in keyof T]: Ref<T[K]> }
export type ReactiveFn<T> = T extends (...args: infer A) => infer R
  ? (...args: { [K in keyof A]: RefTyped<A[K]> }) => ComputedRef<R>
  : never
