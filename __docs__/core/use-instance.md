# useInstance

::: tip useInstance
Get `vm` from `getCurrentInstance` API, Same as [getCurrentInstance.proxy](https://github.com/vuejs/composition-api/releases/tag/v1.0.0-beta.22)
:::

## Example

> 💡 Open DevTools, Instance Info already Print out.

<ClientOnly>
  <UseInstanceDemo />
</ClientOnly>

## Usage

```js
import { useInstance } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const vm = useInstance()

    console.log(vm)
  }
}
```

## Typing

```ts
declare const useInstance: () => any;
```
