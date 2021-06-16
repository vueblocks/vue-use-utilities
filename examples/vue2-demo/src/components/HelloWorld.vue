<template>
  <div class="main">
    <input type="text" v-model="inputVal" />
    <pre><code>{{inputVal}}</code></pre>
  </div>
</template>

<script>
import { useDebouncedRef } from '@vueblocks/vue-use-core'
import { useStore } from '../utils'

export default {
  name: 'HelloWorld',
  setup () {
    const inputVal = useDebouncedRef('')
    console.log(useStore())

    return {
      inputVal
    }
  }
}
</script>

<style>

</style>
