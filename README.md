# Vue Use Utilities

Vue composition-api utilities build on top of `vue-demi` & `@vue/compostion-api`. It works both for Vue 2 & 3.

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

## Usage

```html
<input v-model="searchVal" />
```

```js
import { useDebounceRef} from '@vueblocks/vue-use-core'

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

## Integration

The Integration part provide utilities for commonly used libraries.

### Vuex

`@vueblocks/vue-use-vuex` - Use Vuex With Composition API Easily.

* `useState` - same as `mapState`
* `useGetters` - same as `mapGetters`
* `useMutations` - same as `mapMutations`
* `useActions` - same as `mapActions`

[Read Docs](./packages/vuex/README.md)

### Axios

`@vueblocks/vue-use-axios` - Use Axios with Compositon API Easily.

* useAxios

[Read Docs](./packages/axios/README.md)

### Thanks

* [vue-composition-toolkit](https://github.com/HcySunYang/vue-composition-toolkit)
* [vueuse](https://github.com/antfu/vueuse)

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)