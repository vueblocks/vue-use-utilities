import { reactive } from 'vue-demi'

export function useReactiveState(getter: () => Required<object>): [Required<object>, VoidFunction] {
  const state = reactive(getter())

  const update = (): void => {
    Object.assign(state, getter())
  }

  return [state, update]
}
