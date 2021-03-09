<template>
  <example-block>
    <template v-slot:component>
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
    </template>
    <template v-slot:code>
      <span>Element Size: {{ width }} x {{ height }}</span>
    </template>
  </example-block>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useElementSize } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useElementSize } from '../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseElementSizeDemo',
  setup () {
    const textareaRef = ref(null)

    const { width, height } = useElementSize(textareaRef, {})

    return {
      textareaRef,
      width,
      height
    }
  }
})
</script>