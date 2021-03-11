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
      <span>Element Size: {{ position.width }} x {{ position.height }}</span>
    </template>
  </example-block>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue3'
import { useElementSize } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useElementSize } from '../../../../packages/core/lib/index.esm'
// import { useElementSize } from '../../../../packages/core/useElementSize'

export default defineComponent({
  name: 'UseElementSizeDemo',
  setup () {
    const position = ref({})
    const textareaRef = ref(null)

    onMounted(() => {
      position.value = useElementSize(textareaRef)
    })

    return {
      textareaRef,
      position
    }
  }
})
</script>