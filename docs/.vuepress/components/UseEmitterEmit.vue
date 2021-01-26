<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <button @click="onChange">Emit An Event</button>
      </div>
    </example-block>
  </section>
</template>

<script>
import { onMounted, getCurrentInstance } from 'vue-demi'
// import { useEmitter } from '@vueblocks/vue-use-core'
// Test local bundle
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseEmitterEmit',
  components: { ExampleBlock },
  setup () {
    const vm = getCurrentInstance().proxy
    
    const onChange = () => {
      console.log(vm.$emitter)
      vm.$emitter.emit('on-change', '#4af')
    }

    return {
      onChange
    }
  }
}
</script>
