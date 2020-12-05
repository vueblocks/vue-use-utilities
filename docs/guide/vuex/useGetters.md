# useGetters

> `useGetters: (namespace?: string, map: Array<string> | Object<string>) => Object<ComputedRef>`

Create component computed options that return the evaluated value of a getter.

The first argument can optionally be a namespace string. [Details](./namespacing.md)

## Usage

In order to access getters, you can simply use `useGetters` helper inside the setup hook. This is the equivalent of creating computed properties using the Option API.

```js {4}
import { useVuex } from '@vueblocks/vue-use-vuex'

export default {
  // ...
  setup () {
    // Use the useGetters as you would use mapGetters
    const { useGetters } = useVuex()

    return {
      // mix the getters into outer object with the object spread operator
      ...useGetters([
        'doneTodosCount',
        'anotherGetter',
        // ...
      ]),
      // if you want to map a getter to a different name, use an object:
      ...mapGetters({
        // map `doneCount<ComputedRef>` to `this.$store.getters.doneTodosCount`
        doneCount: 'doneTodosCount'
      })
    }
  }
}
