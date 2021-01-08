<template>
  <example-block>
    <div slot="component">
      <label for="text">Type Something: </label>
      <input
        type="text"
        class="px-3 py-2 leading-5 border rounded-md ml-2"
        placeholder="debounce with input"
        v-model="text"
      />
    </div>
    <span slot="code">{{ text }}</span>
  </example-block>
</template>

<script>
// import { useDebouncedRef } from '@vueblocks/vue-use-core'
// Test local bundle
import { useDebouncedRef } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseDebounceRef',
  components: { ExampleBlock },
  setup() {
    return {
      text: useDebouncedRef("hello")
    }
  }
}
</script>