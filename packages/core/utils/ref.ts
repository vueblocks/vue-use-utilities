import { isRef, ref, Ref } from 'vue-demi'

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
