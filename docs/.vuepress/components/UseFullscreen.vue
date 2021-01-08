<template>
  <example-block>
    <div slot="component">
      <div>
        <img
          class="cursor-pointer"
          src="https://picsum.photos/seed/5e1d4e565e68e705e901b050/1920/1080"
          ref="imgRef"
          @click="toggleFullscreen"
        />

        <div class="w-full text-center mt-4">
          <button class="px-3 py-2" @click="toggle">Try out Fullscreen</button>
        </div>
      </div>
    </div>
    <span slot="code">isFullScreen: {{ isFullscreen }}</span>
  </example-block>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
// import { useFullscreen } from '@vueblocks/vue-use-core'
// Test local bundle
import { useFullscreen } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseFullscreen',
  components: { ExampleBlock },
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
}
</script>
