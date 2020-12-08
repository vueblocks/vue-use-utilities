# useAxios

> Use Axios With Composition API Easily.

## Install

```bash
# Vue 2 with @vue/composition-api
yarn add @vue/composition-api @vueblocks/vue-use-axios -S
or
npm i @vue/composition-api @vueblocks/vue-use-axios -S

# Vue 3
yarn add @vueblocks/vue-use-axios -S
or
npm i @vueblocks/vue-use-axios -S
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

## Typing

```ts
interface IAxiosOptions {
    debounce?: number;
    throttle?: number;
}
declare const useAxios: (url: string, config?: AxiosRequestConfig | undefined, options?: IAxiosOptions | undefined) => {
    refetch: () => void;
    cancel: (message?: string | undefined) => void;
    response: Ref<any>;
    data: Ref<any>;
    finished: Ref<boolean>;
    canceled: Ref<boolean>;
    error: Ref<any>;
};
```
