import { defineComponent, Ref, ComputedRef } from 'vue-demi'

export type RefTyped<T> = T | Ref<T>
export type RefElement = Element | Ref<Element | undefined | null>
export type MaybeElement = Element | Ref<Element | undefined>
export type ToRefs<T = any> = { [K in keyof T]: Ref<T[K]> }
export type ReactiveFn<T> = T extends (...args: infer A) => infer R
  ? (...args: { [K in keyof A]: RefTyped<A[K]> }) => ComputedRef<R>
  : never

export type MaybeRef<T> = T | Ref<T> | ComputedRef<T>

export type VueInstance = InstanceType<ReturnType<typeof defineComponent>>
export type MaybeRefElement = MaybeRef<Element | VueInstance | undefined | null>
