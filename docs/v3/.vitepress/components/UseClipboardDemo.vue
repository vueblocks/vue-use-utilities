<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <input
          type="text"
          class="px-3 py-2 leading-5 border rounded-sm ml-2"
          placeholder="E.g. Feed the cat"
          v-model="source"
        />
        <button class="cursor-pointer ml-2 px-4 py-2 border rounded-sm hover:bg-gray-100" @click="copy">Copy</button>
        <button class="cursor-pointer ml-2 px-4 py-2 border rounded-sm bg-gray-100 hover:bg-white" @click="clear">Clear</button>
      </template>
      <template v-slot:code>
        <span>Copied Value: {{ text }}</span>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue'
// import { useClipboard } from '@vueblocks/vue-use-core'
// Test local bundle
import { useClipboard } from '../../../../packages/core/useClipboard/index'

export default defineComponent({
  name: 'UseClipboardDemo',
  setup () {
    const source = ref('')
    const { copy, copied, text, clear } = useClipboard({ source })

    return {
      source,
      text,
      copy,
      copied,
      clear
    }
  }
})
</script>
