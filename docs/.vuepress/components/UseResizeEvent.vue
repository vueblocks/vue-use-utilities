<template>
  <example-block>
    <div slot="component">
      <div class="w-full text-center mt-4">
        <button class="px-3 py-2" @click="debounceResize">Debounce Resize Event</button>
        <button class="px-3 py-2" @click="throttleResize">Throttle Resize Event</button>
      </div>
      <div class="w-full text-center mt-4">
        isThrottle: {{ isThrottle }}
      </div>
    </div>
    <span slot="code">document size: {{ domSize }}</span>
  </example-block>
</template>

<script>
import { onMounted, reactive, toRefs, ref } from 'vue-demi'
// import { useResizeEvent } from '@vueblocks/vue-use-core'
// Test local bundle
import { useResizeEvent } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'useResizeEvent',
  components: { ExampleBlock },
  setup () {
    const domSize = reactive({
      width: 0,
      height: 0
    })

    const isThrottle = ref(true)

    const onResize = () => {
      domSize.width = document.body.clientWidth
      domSize.height = document.body.clientHeight
    }

    const debounceResize = () => isThrottle.value = false
    const throttleResize = () => isThrottle.value = true

    const { dispatchResize } = useResizeEvent(onResize, true, isThrottle.value)

    onMounted(dispatchResize)

    return {
      domSize,
      isThrottle,
      debounceResize,
      throttleResize
    }
  }
}
</script>
