<template>
  <div></div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import { useInstance } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useInstance } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseInstanceDemo',
  setup () {
    console.log(useInstance())
  }
})
</script>
