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

<script lang="ts">
import { defineComponent } from 'vue'
// import { useVuex } from '@vueblocks/vue-use-vuex'
import useVuex, { useStore } from '../utils/useVuex'

export default defineComponent({
  setup () {
    const store = useStore()
    // const { useGetters } = useVuex()
    const { useGetters, useState, useActions } = useVuex('counter')
    console.log(store)

    return {
      // count: computed(() => store.state.counter.count),
      ...useGetters(['evenOrOdd']),
      ...useState({
        count: (state: any) => state.count
      }),
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
