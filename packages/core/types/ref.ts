import { Ref } from 'vue-demi'

export type RefTyped<T> = T | Ref<T>
export type RefElement = Element | Ref<Element | undefined>
export type ToRefs<T = any> = { [K in keyof T]: Ref<T[K]> }
export type MaybeRef<T> = T | Ref<T>
