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
    <span slot="code">Element Size: {{ width }} x {{ height }}</span>
  </example-block>
</template>

<script>
import { onMounted, ref } from 'vue-demi'
import { useElementSize } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useElementSize } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseElementSize',
  components: { ExampleBlock },
  setup () {
    const textareaRef = ref(null)

    const { width, height } = useElementSize(textareaRef)

    return {
      textareaRef,
      width,
      height
    }
  }
}
</script>