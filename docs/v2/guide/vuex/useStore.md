# useStore

## Vuex 4

> Vuex 4 introduces a new API to interact with the store in Composition API. You can use the `useStore` composition function to retrieve the store within the component `setup` hook.

```js {2}
// Vuex version is 4.x
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
  }
}
```

## What we provide

We talk about how to retrieve the store in `Vue 2 & Vuex 3` Project.

Maybe you already have the answer, it's very easy, just use `this.$store`.

But, We know about Composition API, Inside [setup()](https://v3.vuejs.org/guide/composition-api-setup.html#usage-of-this), `this` **won't be a reference to the current active instance** Since `setup()` is called before other component options are resolved.

So, we provide `useStore` in `@vueblocks/vue-use-vuex` libary.

```js {1}
import { useStore } from '@vueblocks/vue-use-vuex'

export default {
  setup () {
    // Use the useStore as you would use useStore in Vuex 4
    const store = useStore()
  }
}
```

## Typing

```ts
/**
 * Get $store from current instance
 * @return {Store} vm.$store
 */
declare const useStore: () => Store<any>
```
