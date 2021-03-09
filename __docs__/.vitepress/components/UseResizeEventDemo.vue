<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <strong class="px-3 py-2" >Reactive Resize Event</strong>
      </template>
      <template v-slot:code>
        <span>document size: {{ domSize }}</span>
      </template>
    </example-block>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <strong class="px-3 py-2" >Throttle Resize Event</strong>
      </template>
      <template v-slot:code>
        <span>document size: {{ throttleSize }}</span>
      </template>
    </example-block>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <strong class="px-3 py-2" >Debounce Resize Event</strong>
      </template>
      <template v-slot:code>
        <span>document size: {{ debounceSize }}</span>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from 'vue'
import { useResizeEvent } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useResizeEvent } from '../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseResizeEventDemo',
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
})
</script>
