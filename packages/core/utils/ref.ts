import { isRef, ref, Ref, computed, unref, ComputedRef } from 'vue-demi'

import { RefTyped, RefElement } from '../types'

export function unwrap<T>(o: RefTyped<T>): T;
export function unwrap<T>(o: RefTyped<T>): T {
  return isRef(o) ? o.value : o;
}

export function wrap(o: RefElement): Ref<Element>;
export function wrap<T>(o: RefTyped<T>): Ref<T>;
export function wrap(o: any): any {
  return isRef(o) ? o : ref(o); // NOTE in v3 this is not necessary
}

export type ReactiveFn<T> = T extends (...args: infer A) => infer R
  ? (...args: { [K in keyof A]: RefTyped<A[K]> }) => ComputedRef<R>
  : never

export function reactiveFn<T extends Function>(fn: T): ReactiveFn<T> {
  return function (this: any, ...args: any[]) {
    return computed(() => fn.apply(this, args.map(v => unref(v))))
  } as ReactiveFn<T>
}
