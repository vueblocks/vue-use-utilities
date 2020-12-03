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
import { defineComponent } from 'vue'
import { useVuex } from '@vueblock/vue-use-vuex'

export default defineComponent({
  setup () {
    const { useGetters, useActions } = useVuex

    return {
      ...useGetters([
        'evenOrOdd'
      ]),
      ...useActions([
        'increment',
        'decrement',
        'incrementIfOdd',
        'incrementAsync'
      ])
    }
  }
})
</script>
