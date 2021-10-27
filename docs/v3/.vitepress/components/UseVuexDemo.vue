<template>
  <example-block>
    <template v-slot:component class="w-full text-center">
      Clicked: {{ count }} times, count is {{ evenOrOdd }}.
      <br>
      <button @click="increment">+</button>
      <br>
      <button @click="decrement">-</button>
      <br>
      <button @click="incrementIfOdd">Increment if odd</button>
      <br>
      <button @click="incrementAsync">Increment async</button>
    </template>
    <!-- <span slot="code"> </span> -->
  </example-block>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useVuex, useStore } from '@vueblocks/vue-use-vuex'
// Test local bundle
// import { useVuex, useStore } from '../../../../packages/vuex/lib/index.cjs'

export default defineComponent({
  name: 'UseVuexDemo',
  setup () {
    const store = useStore()
    console.log(store)
    const { useState, useGetters, useActions } = useVuex('counter')

    return {
      ...useState(['count']),

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
