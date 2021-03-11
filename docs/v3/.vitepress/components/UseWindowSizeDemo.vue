<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <strong class="px-3 py-2" >Reactive Resize Event</strong>
      </template>
      <template v-slot:code>
        <span>window size: {{ domSize }}</span>
      </template>
    </example-block>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <strong class="px-3 py-2" >Throttle Resize Event</strong>
      </template>
      <template v-slot:code>
        <span>window size: {{ throttleSize }}</span>
      </template>
    </example-block>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <strong class="px-3 py-2" >Debounce Resize Event</strong>
      </template>
      <template v-slot:code>
        <span>window size: {{ debounceSize }}</span>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, watchEffect } from 'vue3'
import { useWindowSize } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useWindowSize } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseWindowSizeDemo',
  setup () {
    const domSize = reactive({
      width: 0,
      height: 0
    })
  
    const throttleSize = reactive({
      width: 0,
      height: 0
    })

    const debounceSize = reactive({
      width: 0,
      height: 0
    })

    const domWSize = useWindowSize()

    const throttleWSize = useWindowSize({
      useThrottle: true
    })
    const debounceWSize = useWindowSize({
      useThrottle: false
    })

    const onResize = (size: any) => {
      domSize.width = size.width.value
      domSize.height = size.height.value
    }

    const onThrottleResize = (size: any) => {
      throttleSize.width = size.width.value
      throttleSize.height = size.height.value
    }

    const onDebounceResize = (size: any) => {
      debounceSize.width = size.width.value
      debounceSize.height = size.height.value
    }

    watchEffect(() => {
      onResize(domWSize)
      onThrottleResize(throttleWSize)
      onDebounceResize(debounceWSize)
    })

    return {
      domSize,
      throttleSize,
      debounceSize
    }
  }
})
</script>
