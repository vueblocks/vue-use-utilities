# useVuex

> Use Vuex With Composition API Easily.

## Install

```bash
# Vue 2 with @vue/composition-api
yarn add @vue/composition-api @vueblocks/vue-use-vuex -S
or
npm i @vue/composition-api @vueblocks/vue-use-vuex -S

# Vue 3
yarn add @vueblocks/vue-use-vuex -S
or
npm i @vueblocks/vue-use-vuex -S
```

## Usage

`useVuex` utilities just similar with [Vuex Component Binding Helpers](https://vuex.vuejs.org/api/#component-binding-helpers)

It export these composable helpers:

* [useState](./use-state.md) - same as `mapState` helper in Vuex
* [useGetters](./use-getters.md) - same as `mapGetters` helper in Vuex
* [useMutations](./use-mutations.md) - same as `mapMutations` helper in Vuex
* [useActions](./use-actions.md) - same as `mapActions` helper in Vuex

Differently, `useVuex` do not export `createNamespacedHelpers` function, Instead `useVuex` allow you provide
the namespace as first argument, then return will be the namespaced component binding helpers.

Read more about namespacing [documention](./namespacing.md).

It seems familiar right?

## Example

::: tip 💡 Tips
`useVuex` also allow you provide the `namespace` as first argument, then return will be the namespaced component binding helpers.
:::

```js
import { useVuex, useStore } from '@vueblocks/vue-use-vuex'

export default {
  setup () {
    const store = useStore()
    const { useState, useGetters, useActions } = useVuex('counter')

    return {
      ...useState(['count']),

      ...useGetters([
        'evenOrOdd'
      ]),
      
      ...useActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
      ])
    }
  }
}
```

## Typing

```ts
/**
 * Use Vuex with composition api easily. Both support Vue2.x / Vue3.x
 * @param {String} namespace
 * @param {Store} store ### vm.$store
 */
declare function useVuex(namespace?: string, store?: Store<any>): {
  useState: (namespace?: string, map: Array<string> | Object<string | function>) => Object<ComputedRef>;
  useGetters: (namespace?: string, map: Array<string> | Object<string>) => Object<ComputedRef>;
  useMutations: (namespace?: string, map: Array<string> | Object<string | function>) => Object;
  useActions: (namespace?: string, map: Array<string> | Object<string | function>) => Object;
};
```
