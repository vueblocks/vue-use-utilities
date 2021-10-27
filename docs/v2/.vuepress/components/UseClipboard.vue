<template>
  <section>
    <example-block>
      <template slot="component" class="w-full text-center">
        <input
          type="text"
          class="px-3 py-2 leading-5 border rounded-sm ml-2"
          placeholder="Type something"
          v-model="source"
        />
        <button class="cursor-pointer ml-2 px-4 py-2 border rounded-sm hover:bg-gray-100" @click="copy">Copy to Clipboard</button>
        <button class="cursor-pointer ml-2 px-4 py-2 border rounded-sm bg-gray-100 hover:bg-white" @click="clear">Clear Clipboard</button>
      </template>
      <template slot="code">
        <span>Copied Value: {{ text }}</span>
      </template>
    </example-block>
  </section>
</template>

<script>
import { ref, defineComponent } from 'vue-demi'
// import { useClipboard } from '@vueblocks/vue-use-core'
// Test local bundle
import { useClipboard } from '../../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseClipboard',
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
