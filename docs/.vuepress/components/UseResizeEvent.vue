<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <strong class="px-3 py-2" >Reactive Resize Event</strong>
      </div>
      <span slot="code">document size: {{ domSize }}</span>
    </example-block>
    <example-block>
      <div slot="component" class="w-full text-center">
        <strong class="px-3 py-2" >Throttle Resize Event</strong>
      </div>
      <span slot="code">document size: {{ throttleSize }}</span>
    </example-block>
    <example-block>
      <div slot="component" class="w-full text-center">
        <strong class="px-3 py-2" >Debounce Resize Event</strong>
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
    const domSize = reactive({
      width: 0,
      height: 0,
    })

    const throttleSize = reactive({
      width: 0,
      height: 0
    })

    const debounceSize = reactive({
      width: 0,
      height: 0
    })

    const onResize = () => {
      domSize.width = document.body.clientWidth
      domSize.height = document.body.clientHeight
    }

    const onThrottleResize = () => {
      throttleSize.width = document.body.clientWidth
      throttleSize.height = document.body.clientHeight
    }

    const onDebounceResize = () => {
      debounceSize.width = document.body.clientWidth
      debounceSize.height = document.body.clientHeight
    }

    const { dispatchResize } = useResizeEvent(onResize)

    useResizeEvent(onThrottleResize, {
      useThrottle: true
    })
    useResizeEvent(onDebounceResize, {
      useThrottle: false
    })

    onMounted(dispatchResize)

    return {
      domSize,
      throttleSize,
      debounceSize
    }
  }
}
</script>
