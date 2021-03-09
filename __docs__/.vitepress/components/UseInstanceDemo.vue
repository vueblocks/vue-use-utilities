<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useInstance } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useInstance } from '../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseInstanceDemo',
  setup () {
    console.log(useInstance())
  }
})
</script>
