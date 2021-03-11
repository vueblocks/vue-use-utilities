<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <div class="h-8 w-full" :style="{ backgroundColor: color }"></div>
      </template>
      <!-- <span v-slot:code>Mouse Position: [X: {{ x }}, Y: {{ y }}]</span> -->
    </example-block>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <button @click="emit('on-change')">Emit An Event</button>
      </template>
      <!-- <span v-slot:code>Mouse Position: [X: {{ x }}, Y: {{ y }}]</span> -->
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue3'
// import { useInstance } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useEmitter } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseEmitterDemo',
  setup () {
    const color = ref('#f4a')

    const onChangeColor = () => color.value = '#4af'

    const { emit } = useEmitter('on-change', onChangeColor)

    return {
      color,
      emit
    }
  }
})
</script>
