# useActions

> `useActions: (namespace?: string, map: Array<string> | Object<string | function>) => Object`

Create component methods options that dispatch an action.

The first argument can optionally be a namespace string. [Details](./namespacing.md)

The second object argument's members can be a function. `function(dispatch: function, ...args: any[])`

## Usage

When accessing actions, you can simply use `useActions` inside the setup hook. This is the equivalent of creating methods properties using the Option API.

```js {7}
import { useVuex } from '@vueblocks/vue-use-vuex'

export default {
  // ...
  setup () {
    // Use the useActions as you would use mapActions
    const { useActions } = useVuex()

    return {
      ...useActions([
        'increment', // map `increment()` to `this.$store.dispatch('increment')`

        // `mapActions` also supports payloads:
        'incrementBy' // map `incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
      ]),
      ...useActions({
        add: 'increment' // map `add()` to `this.$store.dispatch('increment')`
      })
    }
  }
}
```
