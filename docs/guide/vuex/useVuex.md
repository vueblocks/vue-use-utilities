# useVuex

> Use Vuex With Composition API Easily.

## Install

```bash
yarn add @vueblocks/vue-use-vuex -S
or
npm i @vueblocks/vue-use-vuex -S
```

## Usage

`useVuex` utilities just similar with [Vuex Component Binding Helpers](https://vuex.vuejs.org/api/#component-binding-helpers)

It export these composable helpers:

* useState - `useState(namespace: string, map: object | string[]): any`
* useGetters - `useGetters: (namespace: string, map: object | string[]) => any`
* useMutations - `useMutations: (namespace: string, map: object | string[]) => any`
* useActions - `useActions: (namespace: string, map: object | string[]) => any`

## Typing

```ts
declare const useVuex: (store: any) => {
  useState: (namespace: string, map: object | string[]) => any;
  useGetters: (namespace: string, map: object | string[]) => any;
  useMutations: (namespace: string, map: object | string[]) => any;
  useActions: (namespace: string, map: object | string[]) => any;
  getStoreFromInstance: () => any;
  createNamespacedHelpers: (namespace: string) => {
    mapState: (namespace: string, map: object | string[]) => any;
    mapGetters: (namespace: string, map: object | string[]) => any;
    mapMutations: (namespace: string, map: object | string[]) => any;
    mapActions: (namespace: string, map: object | string[]) => any;
  };
};
```
