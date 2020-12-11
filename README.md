<p align="center">
    <!-- <a href="https://github.com/vueblocks/vue-use-utilities">
        <img src="./docs/_media/icon.svg" width="152">
    </a> -->
    <h2 align="center">Vue Use Utilities</h2>
    <br>
    <p align="center">
      <a href="https://www.npmjs.com/package/@vueblocks/vue-use-core"><img src="https://img.shields.io/npm/v/@vueblocks/vue-use-core.svg?maxAge=2592000"></a>
      <a href="https://www.npmjs.com/package/@vueblocks/vue-use-core"><img src="https://img.shields.io/npm/dt/@vueblocks/vue-use-core.svg"></a>
      <a href="https://github.com/vueblocks/vue-use-utilities/stargazers"><img src="https://img.shields.io/github/stars/vueblocks/vue-use-utilities.svg"></a>
      <a href="https://raw.githubusercontent.com/vueblocks/vue-use-utilities/master/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg"></a>
      <a href="https://openbase.io/js/@vueblocks/vue-use-vuex?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge"><img src="https://badges.openbase.io/js/rating/@vueblocks/vue-use-vuex.svg" alt="Rate on Openbase"></a>
    </p>
    <p align="center">
       Vue Use Utilities build on top of `vue-demi` & `@vue/compostion-api`. It works both for Vue 2 & 3.
    </p>
    <br>
</p>


## Installation

```bash
# Vue 2 with @vue/composition-api
yarn add @vue/composition-api @vueblocks/vue-use-core -S
or
npm i @vue/composition-api @vueblocks/vue-use-core -S

# Vue 3
yarn add @vueblocks/vue-use-core -S
or
npm i @vueblocks/vue-use-core -S
```

## Demos

Vue 2 Demo: [Vue CLI 2.x](./examples/vue2-demo/README.md)  |  Vue 3 Demo: [Vue CLI 3.x](./examples/vue3-demo/README.md)

## Usage

```html
<input v-model="searchVal" />
```

```js
import { useDebounceRef } from '@vueblocks/vue-use-core'

export default {
  ...
  setup () {
    const searchVal = useDebouncedRef('', 500)

    // mock use input
    searchVal.value = 'x'
    searchVal.value = 'xi'
    searchVal.value = 'xia'
    searchVal.value = 'xiao'

    return {
      searchVal
    }
  }
  ...
}
```

## Documentation

Check our [documentation](https://vue-use-utilities.vercel.app/)

## Integration

The Integration part provide utilities for commonly used libraries.

### Vuex

<a href="https://www.npmjs.com/package/@vueblocks/vue-use-vuex"><img src="https://img.shields.io/npm/v/@vueblocks/vue-use-vuex.svg?maxAge=2592000"></a>
<a href="https://www.npmjs.com/package/@vueblocks/vue-use-vuex"><img src="https://img.shields.io/npm/dt/@vueblocks/vue-use-vuex.svg"></a>

`@vueblocks/vue-use-vuex` - Use Vuex With Composition API Easily.

#### useVuex

* `useState` - same as `mapState`
* `useGetters` - same as `mapGetters`
* `useMutations` - same as `mapMutations`
* `useActions` - same as `mapActions`

#### useStore

* `useStore` - same as Vuex 4.x composition api [useStore](https://next.vuex.vuejs.org/guide/composition-api.html)

[Read Docs](./packages/vuex/README.md)

### Axios

<a href="https://www.npmjs.com/package/@vueblocks/vue-use-axios"><img src="https://img.shields.io/npm/v/@vueblocks/vue-use-axios.svg?maxAge=2592000"></a>
<a href="https://www.npmjs.com/package/@vueblocks/vue-use-axios"><img src="https://img.shields.io/npm/dt/@vueblocks/vue-use-axios.svg"></a>

`@vueblocks/vue-use-axios` - Use Axios with Compositon API Easily.

* `useAxios` - is a wrapper of axios

[Read Docs](./packages/axios/README.md)

### Thanks

* [vue-composition-toolkit](https://github.com/HcySunYang/vue-composition-toolkit)
* [vueuse](https://github.com/antfu/vueuse)

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)