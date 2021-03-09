# usePrecision

::: tip usePrecision
`usePrecision` provide reactive methods to perform addition, subtraction, multiplication & division operations precisely
:::

## Example

<!-- <ClientOnly>
  <UsePrecision />
</ClientOnly> -->

## Usage

```js
import { ref, reactive, toRefs } from 'vue-demi'
import { usePrecision } from '@vueblocks/vue-use-core'

export default {
  setup () {
    const { plus, times } = usePrecision()

    const [plusA, plusB] = [ref(0.1), ref(0.2)]
    const [timesA, timesB] = [ref(7), ref(0.2)]
    
    const localState = reactive({
      plusResult: plus(plusA, plusB),
      timesResult: times(timesA, timesB)
    })

    return toRefs(localState)
  }
}
```

## Typing

```ts
/**
 * `usePrecision` provide reactive methods to perform addition, subtraction, multiplication & division operations precisely.
 */
declare const usePrecision: () => {
    strip: (num: RefTyped<string | number>, precision?: RefTyped<number | undefined>) => ComputedRef<number>;
    plus: (num1: RefTyped<string | number>, num2: RefTyped<string | number>, ...others: RefTyped<string | number>[]) => ComputedRef<number>;
    minus: (num1: RefTyped<string | number>, num2: RefTyped<string | number>, ...others: RefTyped<string | number>[]) => ComputedRef<number>;
    times: (num1: RefTyped<string | number>, num2: RefTyped<string | number>, ...others: RefTyped<string | number>[]) => ComputedRef<number>;
    divide: (num1: RefTyped<string | number>, num2: RefTyped<string | number>, ...others: RefTyped<string | number>[]) => ComputedRef<number>;
    round: (num: RefTyped<string | number>, ratio: RefTyped<number>) => ComputedRef<number>;
    digitLength: (num: RefTyped<string | number>) => ComputedRef<number>;
    float2Fixed: (num: RefTyped<string | number>) => ComputedRef<number>;
};
```
