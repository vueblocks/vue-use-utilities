<template>
  <example-block>
    <template v-slot:component>
      <div>
        <img
          class="cursor-pointer"
          src="https://picsum.photos/seed/5e1d4e565e68e705e901b050/1920/1080"
          ref="imgRef"
          @click="toggleFullscreen"
        />

        <div class="w-full text-center mt-4">
          <button class="px-3 py-2 bg-gray-100" @click="toggle">Try out Fullscreen</button>
        </div>
      </div>
    </template>
    <template v-slot:code>
      <span>isFullScreen: {{ isFullscreen }}</span>
    </template>
  </example-block>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/runtime-core'
import { useFullscreen } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useFullscreen } from '../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseFullscreenDemo',
  setup () {
    const imgRef = ref(null)
    const { isFullscreen, toggleFullscreen: toggle } = useFullscreen()
    const { toggleFullscreen } = useFullscreen(imgRef)

    return {
      imgRef,
      toggle,
      isFullscreen,
      toggleFullscreen
    }
  }
})
</script>
