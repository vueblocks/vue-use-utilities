# useShortcut

::: tip useShortcut
Bind Keyboard Shortcuts API build on top of [keymaster](https://github.com/madrobby/keymaster).

♻️ Bind shortcuts on mounted, and unbind shortcust automatically on unmounted.
:::

## Usage

```html
<div class="wrapper">
  <div>
    <kbd>Shift</kbd> + <kbd>D</kbd>
  </div>
  <div>
    <kbd>Command</kbd> + <kbd>D</kbd> or <kbd>Ctrl</kbd> + <kbd>D</kbd>
  </div>
</div>
```

```js
import { useShortcut } from '@vueblocks/vue-use-core'

setup () {
  const pressedKeyCodes = ref([])

  useShortcut({
    'shift+d': (event, handler) => {
      pressedKeyCodes.value.push(handler.shortcut)
      alert("The 'Shift' and 'd' keys were pressed at the same time")
    },
    '⌘+d, ctrl+d': (event, handler) => {
      pressedKeyCodes.value.push(handler.shortcut)
      alert("Either 'Control+d' or 'Meta+d' were pressed")
    }
  })

  onUnmounted(() => pressedKeyCodes.value = [])

  return {
    pressedKeyCodes
  }
}
```

## Example

> Type one of the following Keys👇:

<ClientOnly>
  <UseShortcut />
</ClientOnly>

## Typing

```ts
/**
 * A map of keybinding strings to event handlers.
 */
interface KeyBindingMap {
    [keybinding: string]: (event: KeyboardEvent) => void;
}
interface KeymasterEvent {
    key: string;
    method: KeyHandler;
    mods: number[];
    scope: string;
    shortcut: string;
}
interface KeyHandler {
    (keyboardEvent: KeyboardEvent, keymasterEvent: KeymasterEvent): void;
}
/**
 * Bind shortcut onMounted & unbind shortcut automatically onUnmounted in setup hooks
 * or
 * Unbind shortcut before bind shortcut without setup hooks
 * @param {Object} keymap
 * @param {Object} vm
 * @return {function} toggle
 */
declare const useShortcut: (keymap: KeyBindingMap, vm: any) => {
    shift: boolean;
    alt: boolean;
    option: boolean;
    ctrl: boolean;
    control: boolean;
    command: boolean;
    setScope(scopeName: string): void;
    getScope(): string;
    deleteScope(scopeName: string): void;
    noConflict(): void;
    unbind(key: string): void;
    unbind(key: string, scopeName: string): void;
    isPressed(keyCode: number): boolean;
    getPressedKeyCodes(): number[];
    filter(event: FilterEvent): void;
    bind: (seed: string, func: Function) => void;
};
```
