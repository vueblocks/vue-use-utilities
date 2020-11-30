# @vueblocks/vue-use-axios

> Use Axios With Composition API Easyily.

## Install

```bash
yarn add @vueblocks/vue-use-axios
```

## Usage

`useAxios` is a wrapper of Axios

```js
import { useAxios } from '@vueblocks/vue-use-axios'

export default {
  ...
  setup () {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

    const { refetch, data } = useAxios(url)

    const fetchBitcoinPrice = () => {
      setInterval(() => {
        refetch()
      }, 20000)
    }

    return {
      data,
      fetchBitcoinPrice
    }
  }
  ...
}
```

## License

MIT [@xiaoluoboding](https://github.com/xiaoluoboding)
