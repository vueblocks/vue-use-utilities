# useClipboard

::: tip useClipboard
Reactive `navigator.clipboard` API
:::

## Example

> Copy some input message

<ClientOnly>
  <UseClipboardDemo />
</ClientOnly>

## Usage

```html
<input
  type="text"
  placeholder="Input some text"
  v-model="source"
/>
<button @click="copy">Copy</button>
<button @click="clear">Clear</button>
```

```js
import { ref, defineComponent } from 'vue'
import { useClipboard } from '@vueblocks/vue-use-core'

export default defineComponent({
  setup () {
    const source = ref('')
    const { copy, copied, text, clear } = useClipboard({ source })

    return {
      source,
      text,
      copy,
      copied,
      clear
    }
  }
})
```

## Typing
```ts
interface ClipboardOption {
    source?: string;
    during?: number;
}
interface ClipboardResult {
    text: Ref<string>;
    copy: typeof NOOP;
    clear: typeof NOOP;
    copied: Ref<boolean>;
    isSupported: Ref<boolean>;
}
/**
 * A Reactive Clipboard API
 * @param options
 * @returns
 */
declare const useClipboard: (options?: ClipboardOption) => ClipboardResult;
```
