import keymaster from 'keymaster'
import { getCurrentInstance } from 'vue-demi'

import { tryOnMounted, tryOnUnmounted } from '../useLifecycle'

/**
 * A map of keybinding strings to event handlers.
 */
export interface KeyBindingMap {
	[keybinding: string]: (event: KeyboardEvent) => void
}

export interface KeymasterEvent {
  key: string;
  method: KeyHandler;
  mods: number[];
  scope: string;
  shortcut: string;
}

export interface KeyHandler {
  (keyboardEvent: KeyboardEvent, keymasterEvent: KeymasterEvent): void;
}

const bindKeyHandler = (fn: Function) => {
  return (...args: any) => {
    fn(...args)
    return false
  }
}

/**
 * Given shortcut a new bind function
 */
const shortcut = {
  bind: (seed: string, func: Function) => keymaster(seed, bindKeyHandler(func)),
  ...keymaster
}

/**
 * Bind shortcut onMounted & unbind shortcut automatically onUnmounted in setup hooks
 * or
 * Unbind shortcut before bind shortcut without setup hooks
 * @param keymap
 * @param vm
 * @return shortcut
 */
const useShortcut = (keymap: KeyBindingMap, vm: any = undefined) => {
  let sync = true

  if (!vm) {
    vm = getCurrentInstance()
  } else {
    sync = false
    unbindKeys()
  }

  function bindKeys () {
    Object.keys(keymap).forEach(key => {
      shortcut.bind(key, keymap[key])
    })
  }

  function unbindKeys () {
    Object.keys(keymap).forEach(key => {
      shortcut.unbind(key)
    })
  }

  tryOnMounted(bindKeys, sync)

  tryOnUnmounted(unbindKeys)

  return shortcut
}

export { useShortcut }
