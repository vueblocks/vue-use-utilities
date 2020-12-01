# @vueblocks/vue-use-vuex

> Use Vuex With Composition API Easily.

## Install

```bash
yarn add @vueblocks/vue-use-vuex
```

## Usage

`useVuex` utilities just similar with [Vuex Component Binding Helpers](https://vuex.vuejs.org/api/#component-binding-helpers)

It export these utilities:

* useState
* useGetters
* useMutations
* useActions

### useState

```js
import { useVuex } from '@vueblocks/vue-use-vuex'

export default {
  ...
  setup () {
    const { useState } = useVuex()

    // 写法1: 传字符串参数 'language' 等同于 `state => state.language`
    const localState = useState('global', {
      theme: 'theme',
      lang: 'lang'
    })

    // 写法2: 箭头函数可使代码更简练
    const localState = useState('global', {
      theme: state => state.theme,
      lang: state => state.lang
    })

    // 写法3: 常规函数用于计算，等同于箭头函数
    const localState = useState('global', {
      customTheme (state) {
        return 'custom' + state.theme
      }
    })

    // 写法4: 直接映射节点名称相同的计算属性
    const localState = useState('global', [
      'theme',
      'lang'
    ])
  }
  ...
}
```

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
