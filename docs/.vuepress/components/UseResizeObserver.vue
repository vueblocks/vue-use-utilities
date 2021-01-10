<template>
  <example-block>
    <div slot="component">
      <div class="flex flex-col">
        <label for="story">Tell us your story:</label>
        <textarea
          id="story"
          name="story"
          rows="5"
          cols="33"
          class="border mt-2"
          ref="textareaRef"
        >It was a dark and stormy night...</textarea>
      </div>
    </div>
    <span slot="code">{{ rectState }}</span>
  </example-block>
</template>

<script>
import { ref } from 'vue-demi'
// import { UseResizeObserver } from '@vueblocks/vue-use-core'
// Test local bundle
import { useResizeObserver } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseResizeObserver',
  components: { ExampleBlock },
  setup () {
    const rectState = ref({})
    const textareaRef = ref(null)

    useResizeObserver(
      textareaRef,
      ([entry]) => {
        rectState.value = entry.contentRect
      }
    )

    return {
      textareaRef,
      rectState
    }
  }
}
</script>