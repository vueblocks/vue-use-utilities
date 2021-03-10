<template>
  <example-block>
    <template v-slot:component>
      <div>
        <kbd>Shift</kbd> + <kbd>D</kbd>
      </div>
      <div class="mt-4">
        <kbd>⌘</kbd> + <kbd>D</kbd> or <kbd>Ctrl</kbd> + <kbd>D</kbd>
      </div>
    </template>
    <template v-slot:code>
      <span>Pressed KeyCodes: {{ pressedKeyCodes }}</span>
    </template>
  </example-block>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from 'vue-demi'
import { useShortcut } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useShortcut } from '../../../packages/core/lib/index.cjs'

export default defineComponent({
  name: 'UseShortcutDemo',
  setup () {
    const pressedKeyCodes = ref([])

    const shortcut = useShortcut({
      'shift+d': (event: any, handler: any) => {
        pressedKeyCodes.value.push(handler.shortcut)
        alert("The 'Shift' and 'd' keys were pressed at the same time")
      },
      '⌘+d, ctrl+d': (event: any, handler: any) => {
        pressedKeyCodes.value.push(handler.shortcut)
        alert("Either 'Control+d' or 'Meta+d' were pressed")
      }
    }, null)

    console.log(shortcut)

    onUnmounted(() => pressedKeyCodes.value = [])

    return {
      pressedKeyCodes
    }
  }
})
</script>
