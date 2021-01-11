<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <h3 class="px-3 py-2" >Throttle Resize Event</h3>
      </div>
      <span slot="code">window size: {{ throttleSize }}</span>
    </example-block>
    <example-block>
      <div slot="component" class="w-full text-center">
        <h3 class="px-3 py-2" >Debounce Resize Event</h3>
      </div>
      <span slot="code">window size: {{ debounceSize }}</span>
    </example-block>
  </section>
</template>

<script>
import { onMounted, reactive, watchEffect } from 'vue-demi'
// import { useWindowSize } from '@vueblocks/vue-use-core'
// Test local bundle
import { useWindowSize } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'useResizeEvent',
  components: { ExampleBlock },
  setup () {
    const throttleSize = reactive({
      width: 0,
      height: 0
    })

    const debounceSize = reactive({
      width: 0,
      height: 0
    })

    const throttleWSize = useWindowSize(true, true)
    const debounceWSize = useWindowSize(true, false)

    const onThrottleResize = (size) => {
      throttleSize.width = size.width.value
      throttleSize.height = size.height.value
    }

    const onDebounceResize = (size) => {
      debounceSize.width = size.width.value
      debounceSize.height = size.height.value
    }

    watchEffect(() => {
      onThrottleResize(throttleWSize)
      onDebounceResize(debounceWSize)
    })

    return {
      throttleSize,
      debounceSize
    }
  }
}
</script>
