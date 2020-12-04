<template>
  <div id="app">
    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
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
import { computed, defineComponent } from 'vue'
import { useStore } from 'vuex'
// import { useVuex } from '@vueblocks/vue-use-vuex'
import useVuex from '../utils/helper'

export default defineComponent({
  setup () {
    const store = useStore()
    const { useGetters, useActions } = useVuex('counter')

    return {
      count: computed(() => store.state.counter.count),
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
