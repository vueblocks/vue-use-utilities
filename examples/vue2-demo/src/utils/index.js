import { getCurrentInstance } from 'vue-demi'

export const useStore = () => {
  const vm = getCurrentInstance()
  if (!vm) console.error('You must use this function within the "setup()" method')

  return vm.proxy.$store
}

export const useRoute = () => {
  const vm = getCurrentInstance()
  if (!vm) console.error('You must use this function within the "setup()" method')

  return vm.proxy.$route
}
