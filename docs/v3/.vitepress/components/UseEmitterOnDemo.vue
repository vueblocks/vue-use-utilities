<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <div class="h-8 w-full" :style="{ backgroundColor: color }"></div>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useInstance } from '@vueblocks/vue-use-core'
// import { useEmitter } from '@vueblocks/vue-use-core'
// Test local bundle

export default defineComponent({
  name: 'UseEmitterOnDemo',
  setup () {
    const vm = useInstance()
    const color = ref('#f4a')

    const onChange = (val: any) => {
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
})
</script>
