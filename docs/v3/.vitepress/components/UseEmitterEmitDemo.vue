<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <button @click="onChange">Emit An Event</button>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance } from '@vue/runtime-core'
import { useInstance } from '@vueblocks/vue-use-core'
// import { useEmitter } from '@vueblocks/vue-use-core'
// Test local bundle

export default defineComponent({
  name: 'UseEmitterEmitDemo',
  setup () {
    const vm = useInstance()
    
    const onChange = () => {
      console.log(vm.$emitter)
      vm.$emitter.emit('on-change', '#4af')
    }

    return {
      onChange
    }
  }
})
</script>
