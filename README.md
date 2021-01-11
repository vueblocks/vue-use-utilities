<!-- <a href="https://github.com/vueblocks/vue-use-utilities">
    <img src="./docs/_media/icon.svg" width="152">
</a> -->
<h2 align="center">Vue Use Utilities</h2>
<br>
<div align="center">
    
[![NPM][npmBadge]][npmUrl]
[![NPM Download][npmDtBadge]][npmDtUrl]
[![License][licenseBadge]][licenseUrl]
[![lerna][lernaBadge]][lernaUrl]
[![OpenBase][openbaseBadge]][openbaseUrl]
![support][supportBadge]

</div>

<p align="center">
  Vue Use Utilities build on top of <strong>vue-demi</strong> & <strong>@vue/compostion-api</strong>. It works both for Vue 2 & 3.
</p>
<br>

[npmBadge]:https://img.shields.io/npm/v/@vueblocks/vue-use-core.svg?maxAge=2592000
[npmUrl]:https://www.npmjs.com/package/@vueblocks/vue-use-core

[npmDtBadge]:https://img.shields.io/npm/dt/@vueblocks/vue-use-core.svg
[npmDtUrl]:https://www.npmjs.com/package/@vueblocks/vue-use-core

[licenseBadge]:https://img.shields.io/badge/license-MIT-blue.svg
[licenseUrl]:https://raw.githubusercontent.com/vueblocks/vue-use-utilities/master/LICENSE

[openbaseBadge]:https://badges.openbase.io/js/rating/@vueblocks/vue-use-vuex.svg
[openbaseUrl]:https://openbase.io/js/@vueblocks/vue-use-vuex?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge

[supportBadge]:https://img.shields.io/badge/support-2%263-%234FC08D?style=flat&logo=Vue.js

[lernaBadge]:https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg
[lernaUrl]:https://lerna.js.org/
</p>

## ✨ Features

* 🌳 TreeShakable & SideEffects Free, Check out [Bundle Phobia](https://bundlephobia.com/result?p=@vueblocks/vue-use-core)
* 💪 Fully TypeScript
* 🤟 Vue 2 and 3 Support
* 🧩 Advanced Integration

## 📦 Installation

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

## 🦄️ Demos

Vue 2 Demo: [Vue CLI 2.x](./examples/vue2-demo/README.md)  |  Vue 3 Demo: [Vue CLI 3.x](./examples/vue3-demo/README.md)

## 💡 Usage

```html
<input v-model="searchVal" />
```

```js
import { useDebouncedRef } from '@vueblocks/vue-use-core'

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

## 📖 Documentation

Check our [documentation](https://vueblocks.github.io/vue-use-utilities/)

## 🧩 Integration

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

## 📄 License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
