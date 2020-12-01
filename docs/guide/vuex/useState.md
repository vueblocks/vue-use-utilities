# useState

> Use Vuex With Composition API Easily.

## Usage

```js {6}
import { useVuex } from '@vueblocks/vue-use-vuex'

export default {
  ...
  setup () {
    const { useState } = useVuex()

    // passing the string value 'count' is same as `state => state.count`
    const localState = useState('global', {
      theme: 'theme',
      lang: 'lang'
    })

    // arrow functions can make the code very succinct!
    const localState = useState('global', {
      theme: state => state.theme,
      lang: state => state.lang
    })

    // some as arrow functions
    const localState = useState('global', {
      customTheme (state) {
        return 'custom' + state.theme
      }
    })

    // map this.count to store.state.count
    const localState = useState('global', [
      'theme',
      'lang'
    ])
  }
  ...
}
```
