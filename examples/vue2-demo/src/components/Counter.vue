<template>
  <div id="app">
    Clicked: {{ $store.state.count }} times, count is {{ evenOrOdd }}.
    <br>
    <button @click="increment">+</button>
    <br>
    <button @click="decrement">-</button>
    <br>
    <button @click="incrementIfOdd">Increment if odd</button>
    <br>
    <button @click="incrementAsync">Increment async</button>
  </div>
</template>

<script>
import { useVuex } from '@vueblocks/vue-use-vuex'
import { getCurrentInstance } from 'vue-demi'

export default {
  setup () {
    const { useGetters, useActions } = useVuex()

    return {
      ...useGetters(null, [
        'evenOrOdd'
      ]),
      ...useActions(null, [
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
      ])
    }
  }
}
</script>
