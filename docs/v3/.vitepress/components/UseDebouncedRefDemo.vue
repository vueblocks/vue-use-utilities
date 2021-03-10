<template>
  <example-block>
    <template v-slot:component>
      <label for="text">Type Something: </label>
      <input
        type="text"
        class="px-3 py-2 leading-5 border rounded-md ml-2"
        placeholder="debounce with input"
        v-model="text"
      />
    </template>
    <template v-slot:code>
      <span>{{ text }}</span>
    </template>
  </example-block>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import { useDebouncedRef } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useDebouncedRef } from '../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseDebouncedRefDemo',
  setup () {
    return {
      text: useDebouncedRef('hello')
    }
  }
})
</script>