# useState

> `useState: (namespace?: string, map: Array<string> | Object<string | function>) => Object<ComputedRef>`

Create component computed options that return the sub tree of the Vuex store.

The first argument can optionally be a namespace string. [Details](./namespacing.md)

The second object argument's members can be a function. `function(state: any)`

## Usage

In order to access state, you can simply use `useState` helper inside the setup hook. This is the equivalent of creating computed properties using the Option API.

```js {7}
import { useVuex } from '@vueblocks/vue-use-vuex'

export default {
  // ...
  setup () {
    // Use the useState as you would use mapState
    const { useState } = useVuex()

    return {
      // mix this into the outer object with the object spread operator
      ...useState({
        // arrow functions can make the code very succinct!
        count: state => state.count,

        // passing the string value 'count' is same as `state => state.count`
        countAlias: 'count',

        // to access local state with `this`, a normal function must be used
        countPlusLocalState (state) {
          return state.count + this.localCount
        }
      }),
      ...mapState([
        // map count<ComputedRef> to store.state.count
        'count'
      ])
    }
  }
}
```
