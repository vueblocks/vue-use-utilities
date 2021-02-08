# useStateshot

::: tip useStateshot
Inspired by Vue3 Offical Document [customRef](https://v3.cn.vuejs.org/api/refs-api.html#customref) demo.
:::

## Example

<ClientOnly>
  <UseStateshot />
</ClientOnly>

## Usage

```html
<input v-model="text" />
```

```js
import { useStateshot } from '@vueblocks/vue-use-core'

export default {
  setup() {
    return {
      text: useStateshot('hello')
    }
  }
}
```

## Typing

```ts
declare const useStateshot: (value: any, delay?: number) => Ref;
```
