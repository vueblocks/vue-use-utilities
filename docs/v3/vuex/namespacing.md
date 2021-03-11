# Namespacing

## Binding Helpers with Namespace

When binding a namespaced module to components with the `useState`, `useGetters`, `useActions` and `useMutations` helpers, it can get a bit verbose:

```js
setup () {
  return {
    ...useState({
      a: state => state.some.nested.module.a,
      b: state => state.some.nested.module.b
    }),
    ...useGetters([
      'some/nested/module/someGetter', // -> this['some/nested/module/someGetter']
      'some/nested/module/someOtherGetter', // -> this['some/nested/module/someOtherGetter']
    ]),
    ...useActions([
      'some/nested/module/foo', // -> this['some/nested/module/foo']()
      'some/nested/module/bar' // -> this['some/nested/module/bar']()
    ])
  }
}
```

In such cases, you can pass the module namespace string as the first argument to the helpers so that all bindings are done using that module as the context. The above can be simplified to:

```js
setup () {
  return {
    ...mapState('some/nested/module', {
      a: state => state.a,
      b: state => state.b
    }),
    ...mapGetters('some/nested/module', [
      'someGetter', // -> this.someGetter
      'someOtherGetter', // -> this.someOtherGetter
    ]),
    ...mapActions('some/nested/module', [
      'foo', // -> this.foo()
      'bar' // -> this.bar()
    ])
  }
}
```

Furthermore, you can create namespaced helpers by using `useVuex`. It returns an object having new component binding helpers that are bound with the given namespace value:

```js {6}
// Get namespaced component binding helpers in useVuex
import { useVuex } from '@vueblocks/vue-use-vuex'

export default {
  setup () {
    const { mapState, mapActions } = useVuex('some/nested/module')

    return {
      // look up in `some/nested/module`
      ...mapState({
        a: state => state.a,
        b: state => state.b
      })
      // look up in `some/nested/module`
      ...mapActions([
        'foo',
        'bar'
      ])
    }
  }
}
```
