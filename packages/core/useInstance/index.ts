import { isVue3, getCurrentInstance } from 'vue-demi'

const useInstance = (): any => {
  const instance: any = getCurrentInstance()

  if (!instance) {
    console.error('`getCurrentInstance` only works during setup or Lifecycle Hooks')
    return null
  }

  return isVue3 ? instance.ctx : instance.proxy
}

export { useInstance }
