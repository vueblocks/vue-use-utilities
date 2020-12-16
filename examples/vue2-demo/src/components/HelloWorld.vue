<template>
  <div class="main">
    <input type="text" v-model="inputVal" />
  </div>
</template>

<script>
import { useDebouncedRef } from '@vueblocks/vue-use-core'

export default {
  name: 'HelloWorld',
  setup () {
    const inputVal = useDebouncedRef('')

    return {
      inputVal
    }
  }
}
</script>

<style>

</style>
