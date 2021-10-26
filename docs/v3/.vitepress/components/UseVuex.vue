<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
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
      <!-- <span slot="code"> </span> -->
    </example-block>
  </section>
</template>

<script>
// import { useVuex, useStore } from '@vueblocks/vue-use-vuex'
// Test local bundle
import { useVuex, useStore } from '../../../../packages/vuex/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseVuex',
  components: { ExampleBlock },
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
}
</script>
