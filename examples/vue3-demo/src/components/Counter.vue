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
import { useVuex } from '@vueblocks/vue-use-vuex'

export default defineComponent({
  setup () {
    const store = useStore()
    const { useGetters, useActions } = useVuex()

    return {
      count: computed(() => store.state.count),
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
})
</script>
