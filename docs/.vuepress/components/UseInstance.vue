<template>
  <div></div>
</template>

<script>
import { useInstance } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useInstance } from '../../../packages/core/lib/index.cjs'

export default {
  name: 'UseInstance',
  setup () {
    console.log(useInstance())
  }
}
</script>
