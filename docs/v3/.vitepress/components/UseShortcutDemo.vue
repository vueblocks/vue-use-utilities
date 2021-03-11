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
import { defineComponent, onUnmounted, ref } from '@vue/runtime-core'
// import { useShortcut } from '@vueblocks/vue-use-core'
// Test local bundle
import { useShortcut } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseShortcutDemo',
  setup () {
    const pressedKeyCodes = ref([])

    const shortcut = useShortcut({
      'shift+d': (event, handler) => {
        if (handler.shortcut) pressedKeyCodes.value.push(handler.shortcut)
        alert("The 'Shift' and 'd' keys were pressed at the same time")
      },
      '⌘+d, ctrl+d': (event: any, handler: any) => {
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
})
</script>

<style scoped>
kbd {
    background: linear-gradient(180deg ,#eee,#fff);
    background-color: #eee;
    border: 1px solid #cdd5d7;
    border-radius: 6px;
    box-shadow: 0 1px 2px 1px #cdd5d7;
    font-family: consolas,"Liberation Mono",courier,monospace;
    font-size: .9rem;
    font-weight: 700;
    line-height: 1;
    margin: 3px;
    padding: 4px 6px;
    white-space: nowrap;
}
</style>