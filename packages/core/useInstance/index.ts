import { getCurrentInstance, ComponentInternalInstance } from 'vue-demi'

export type InstanceProxy = ComponentInternalInstance['proxy'] | null

const useInstance = (): any => {
  const instance = getCurrentInstance()

  if (!instance) {
    console.error(
      '`getCurrentInstance` only works during setup or Lifecycle Hooks'
    )
    return null
  }

  return instance.proxy
}

export { useInstance }
