<template>
  <div class="main">
    <input type="text" v-model="inputVal" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useDebouncedRef } from '@vueblocks/vue-use-core'

export default defineComponent({
  name: 'HelloWorld',
  setup () {
    const inputVal = useDebouncedRef('')

    return {
      inputVal
    }
  }
})
</script>

<style>

</style>
