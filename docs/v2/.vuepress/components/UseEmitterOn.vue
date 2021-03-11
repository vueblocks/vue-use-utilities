<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <div class="h-8 w-full" :style="{ backgroundColor: color }"></div>
      </div>
    </example-block>
  </section>
</template>

<script>
import { getCurrentInstance, onMounted, ref } from 'vue-demi'
// import { useEmitter } from '@vueblocks/vue-use-core'
// Test local bundle
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseEmitterOn',
  components: { ExampleBlock },
  setup () {
    const vm = getCurrentInstance().proxy
    const color = ref('#f4a')

    const onChange = val => {
      console.log(val)
      color.value = val
    }

    onMounted(() => {
      vm.$emitter.on('on-change', onChange)
    })

    return {
      color
    }
  }
}
</script>
