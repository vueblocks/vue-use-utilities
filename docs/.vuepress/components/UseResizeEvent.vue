<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <h3 class="px-3 py-2" >Throttle Resize Event</h3>
      </div>
      <span slot="code">document size: {{ throttleSize }}</span>
    </example-block>
    <example-block>
      <div slot="component" class="w-full text-center">
        <h3 class="px-3 py-2" >Debounce Resize Event</h3>
      </div>
      <span slot="code">document size: {{ debounceSize }}</span>
    </example-block>
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue-demi'
// import { useResizeEvent } from '@vueblocks/vue-use-core'
// Test local bundle
import { useResizeEvent } from '../../../packages/core/lib/index.cjs'
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

    const onThrottleResize = () => {
      throttleSize.width = document.body.clientWidth
      throttleSize.height = document.body.clientHeight
    }

    const onDebounceResize = () => {
      debounceSize.width = document.body.clientWidth
      debounceSize.height = document.body.clientHeight
    }

    const { dispatchResize } = useResizeEvent(onThrottleResize, true, true)
    useResizeEvent(onDebounceResize, true, false)

    onMounted(dispatchResize)

    return {
      throttleSize,
      debounceSize
    }
  }
}
</script>
