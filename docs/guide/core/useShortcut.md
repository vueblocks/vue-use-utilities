# useShortcut

::: tip useShortcut
Bind Keyboard Shortcuts API build on top of [keymaster](https://github.com/madrobby/keymaster)
:::

## Usage

```html
<div class="wrapper">
  <div>
    Type one of the following Keys 👇:
  </div>
  <div class="my-4">
    <kbd>Shift</kbd> + <kbd>D</kbd>
  </div>
  <div>
    <kbd>Command</kbd> + <kbd>D</kbd>
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

<UseShortcut />

## Typing

```ts
/**
 * A map of keybinding strings to event handlers.
 */
interface KeyBindingMap {
    [keybinding: string]: (event: KeyboardEvent) => void;
}
/**
 * Bind shortcut onMounted & unbind shortcut onUnmounted in setup hooks
 * or
 * Unbind shortcut before bind shortcut without setup hooks
 * @param {Object} keymap
 * @param {Object} vm
 * @return {function} toggle
 */
declare const useShortcut: (keymap: KeyBindingMap, vm: any) => void;
```
