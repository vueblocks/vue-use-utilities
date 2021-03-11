<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <strong class="px-3 py-2" >Reactive Mouse Event</strong>
      </template>
      <template v-slot:code>
        <span>Mouse Position: [X: {{ x }}, Y: {{ y }}]</span>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue3'
import { useMouse } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useMouse } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseMouseDemo',
  setup () {
    const { x, y } = useMouse()

    return {
      x,
      y
    }
  }
})
</script>
