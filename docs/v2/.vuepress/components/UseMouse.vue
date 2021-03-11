<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <strong class="px-3 py-2" >Reactive Mouse Event</strong>
      </div>
      <span slot="code">Mouse Position: [X: {{ x }}, Y: {{ y }}]</span>
    </example-block>
  </section>
</template>

<script>
import { onMounted, reactive } from 'vue-demi'
import { useMouse } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useMouse } from '../../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseMouse',
  components: { ExampleBlock },
  setup () {
    const { x, y, remove } = useMouse()

    return {
      x,
      y
    }
  }
}
</script>
