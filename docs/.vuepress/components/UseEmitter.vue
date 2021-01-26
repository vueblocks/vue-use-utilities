<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <div class="h-8 w-full" :style="{ backgroundColor: color }"></div>
      </div>
      <!-- <span slot="code">Mouse Position: [X: {{ x }}, Y: {{ y }}]</span> -->
    </example-block>
    <example-block>
      <div slot="component" class="w-full text-center">
        <button @click="emit('on-change')">Emit An Event</button>
      </div>
      <!-- <span slot="code">Mouse Position: [X: {{ x }}, Y: {{ y }}]</span> -->
    </example-block>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue-demi'
// import { useEmitter } from '@vueblocks/vue-use-core'
// Test local bundle
import { useEmitter } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseEmitter',
  components: { ExampleBlock },
  setup () {
    const color = ref('#f4a')

    const onChangeColor = () => color.value = '#4af'

    const { emit } = useEmitter('on-change', onChangeColor)

    return {
      color,
      emit
    }
  }
}
</script>
