# useCssVars

::: tip useCssVars
Munipulate CSS Variables.
:::

## Example

> 💡 Change Color and Watch CSS Variables Changed.

<ClientOnly>
  <UseCssVarsExample />
</ClientOnly>

## Usage

```js
import { ref } from 'vue-demi'
import { useCssVars } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const textEl = ref(null)
    const onInputTextColor = e => textColor.value = e.target.value
    const onInputBgColor = e => bgColor.value = e.target.value
    
    const textColor = useCssVars(textEl, '--text-color', '#000')
    const bgColor = useCssVars(textEl, '--bg-color', '#3eaf7c')

    return {
      textEl,
      textColor,
      bgColor,
      onInputTextColor,
      onInputBgColor
    }
  }
}
```

## Typing

```ts
declare const useCssVars: (
  el: MaybeRef<HTMLElement | null>,
  variable: string,
  defaultValue: string
) => Ref<string>;
```
