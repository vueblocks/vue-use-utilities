import { ref, unref, Ref } from 'vue-demi'
import { NOOP } from '../utils'

export interface ClipboardOption {
  source?: string
  during?: number
}

export interface ClipboardResult {
  text: Ref<string>
  copy: typeof NOOP
  clear: typeof NOOP
  copied: Ref<boolean>
  isSupported: Ref<boolean>
}

/**
 * A Reactive Clipboard API
 * @param options 
 * @returns 
 */
const useClipboard = (options: ClipboardOption = {}): ClipboardResult => {
  const {
    source = '',
    during = 2000
  } = options

  const text = ref('')
  const copied = ref(false)
  const timer = ref<any>()
  const isSupported = ref(false)

  isSupported.value = Boolean(typeof navigator !== 'undefined' && navigator.clipboard)

  const handleCopyText = (isCopied: boolean) => {
    clearTimeout(timer.value)
    timer.value = setTimeout(() => {
      copied.value = false
    }, during)
    copied.value = isCopied
  }

  const copy = () => {
    const valueToCopy = unref(source)
    if (isSupported) {
      navigator.clipboard
        .writeText(valueToCopy)
        .then(() => {
          text.value = valueToCopy
          handleCopyText(true)
        })
        .catch((err) => {
          console.log('Something went wrong', err)
        })
    }
  }

  const clear = () => {
    text.value = ''
    copied.value = false
    clearTimeout(timer.value)
    if (isSupported) {
      navigator.clipboard.writeText('')
    }
  }

  return {
    text,
    copy,
    clear,
    copied,
    isSupported
  }
}

export { useClipboard }
