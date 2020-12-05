# useMutations

> `useMutations: (namespace?: string, map: Array<string> | Object<string | function>) => Object`

Create component methods options that commit a mutation.

The first argument can optionally be a namespace string. [Details](./namespacing.md)

The second object argument's members can be a function. `function(commit: function, ...args: any[])`

## Usage

When accessing mutations, you can simply use `useMutations` inside the setup hook. This is the equivalent of creating methods properties using the Option API.

```js {7}
import { useVuex } from '@vueblocks/vue-use-vuex'

export default {
  // ...
  setup () {
    // Use the useMutations as you would use mapMutations
    const { useMutations } = useVuex()

    return {
      ...useMutations([
        'increment', // map `increment()` to `this.$store.commit('increment')`

        // `mapMutations` also supports payloads:
        'incrementBy' // map `incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
      ]),
      ...useMutations({
        add: 'increment' // map `add()` to `this.$store.commit('increment')`
      })
    }
  }
}
```
