# @vueblocks/vue-use-core

> A Collection of Vue Compositon API Utilities.

## Install

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

```js
import { useMouse } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const { x, y, remove } = useMouse()

    return {
      x,
      y
    }
  }
}
```

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
