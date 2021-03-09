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
      <span>{{ rectState }}</span>
    </template>
  </example-block>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useResizeObserver } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useResizeObserver } from '../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseResizeObserverDemo',
  setup () {
    const rectState = ref({})
    const textareaRef = ref(null)

    useResizeObserver(
      textareaRef,
      ([entry]) => {
        rectState.value = entry.contentRect
      },
      {}
    )

    return {
      textareaRef,
      rectState
    }
  }
})
</script>