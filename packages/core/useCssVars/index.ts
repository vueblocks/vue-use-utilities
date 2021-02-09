import { Ref, ref, watch } from 'vue-demi'
import { RefTyped } from '../types'

const cssVariableRegex = /--[\S]*/g

const useCssVars = (
  el: RefTyped<HTMLElement | null>,
  variable: string,
  defaultValue: string
): Ref<string> => {
  if (!variable || !variable.match(cssVariableRegex)) {
    console.warn(`[useCssVars] css variable is not valid: ${variable}`)
  }

  const propertyValue = ref('')
  const target = ref(el || window.document.documentElement)

  watch(
    target,
    (el) => {
      if (window && el) {
        const propValue = window.getComputedStyle(el).getPropertyValue(variable) || defaultValue || ''
        propertyValue.value = propValue
      }
    },
    { immediate: true }
  )

  watch(
    propertyValue,
    (newVal) => {
      if (target.value && target.value.style) {
        target.value.style.setProperty(variable, newVal)
      }
    }
  )

  return propertyValue
}

export { useCssVars }
