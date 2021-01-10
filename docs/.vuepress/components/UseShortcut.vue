<template>
  <example-block>
    <div slot="component">
      <div class="my-4">
        <kbd>Shift</kbd> + <kbd>D</kbd>
      </div>
      <div>
        <kbd>Command</kbd> + <kbd>D</kbd>
      </div>
    </div>
    <span slot="code">Pressed KeyCodes: {{ pressedKeyCodes }}</span>
  </example-block>
</template>

<script>
import { onUnmounted, ref } from 'vue-demi'
// import { useShortcut } from '@vueblocks/vue-use-core'
// Test local bundle
import { useShortcut } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseShortcut',
  components: { ExampleBlock },
  setup () {
    const pressedKeyCodes = ref([])

    const shortcut = useShortcut({
      'shift+d': (event, handler) => {
        pressedKeyCodes.value.push(handler.shortcut)
        alert("The 'Shift' and 'd' keys were pressed at the same time")
      },
      '⌘+d, ctrl+d': (event, handler) => {
        pressedKeyCodes.value.push(handler.shortcut)
        alert("Either 'Control+d' or 'Meta+d' were pressed")
      }
    })

    console.log(shortcut)

    onUnmounted(() => pressedKeyCodes.value = [])

    return {
      pressedKeyCodes
    }
  }
}
</script>
