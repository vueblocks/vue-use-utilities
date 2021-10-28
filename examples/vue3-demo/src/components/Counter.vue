<template>
  <div id="counter">
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
import { useStore } from 'vuex'
import { useVuex } from '@vueblocks/vue-use-vuex'

export default defineComponent({
  // mounted () {
  //   console.group('--- mounted ---')
  //   console.log(this.$store)
  //   console.log(Object.keys(this.$store.state))
  //   console.log(Object.keys(this.$store.getters))
  //   console.log(Object.keys(this.$store._mutations))
  //   console.log(Object.keys(this.$store._actions))
  //   console.groupEnd()
  // },
  setup () {
    const store = useStore()
    console.log(store)
    const { useState, useGetters, useActions } = useVuex('counter', store)

    return {
      // ...useGetters([
      //   'isDarkmode'
      // ]),
      // ...useGetters('counter', [
      //   'evenOrOdd'
      // ]),
      // ...useGetters({
      //   isDark: 'isDarkmode'
      // }),
      // ...useGetters('counter', {
      //   evenOrOdd1: 'evenOrOdd'
      // }),
      // ...useActions('counter', [
      //   'increment',
      //   'decrement',
      //   'incrementIfOdd',
      //   'incrementAsync'
      // ])
      ...useState(['count']),
      ...useGetters([
        'isDarkmode'
      ]),
      ...useGetters([
        'evenOrOdd'
      ]),
      ...useGetters({
        isDark: 'isDarkmode'
      }),
      ...useGetters({
        evenOrOdd1: 'evenOrOdd'
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
