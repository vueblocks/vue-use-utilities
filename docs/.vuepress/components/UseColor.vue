<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <ul class="list-none p-0 m-0">
          <li class="h-8 mb-4" :style="colorStyle(hexColor)">{{ hexColor }}</li>
          <li class="h-8 mb-4" :style="colorStyle(hslaColor)">{{ hslaColor }}</li>
          <li class="h-8 mb-4" :style="colorStyle(rgbaColor)">{{ rgbaColor }}</li>
          <li class="h-8 mb-4" :style="colorStyle(darkenColor)">{{ darkenColor }}</li>
          <li class="h-8 mb-4" :style="colorStyle(lightenColor)">{{ lightenColor }}</li>
          <li class="h-8 mb-4" :style="colorStyle(tintColor)">{{ tintColor }}</li>
          <li class="h-8 mb-4" :style="colorStyle(shadeColor)">{{ shadeColor }}</li>
        </ul>
        
        <div>
          <input type="color" id="choose-color" name="choose-color" :value="mainColor" @input="onInput">
          <label for="choose-color">Choose Color</label>
        </div>
        <div>
          <input type="number" name="choose-number" id="choose-number" min="0" max="1" step="0.1" v-model="mainAmount">
          <label for="choose-color">Choose Amount</label>
        </div>
      </div>
      <span slot="code">color:</span>
    </example-block>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue-demi'
// import { useColor } from '@vueblocks/vue-use-core'
// Test local bundle
import { useColor } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseColor',
  components: { ExampleBlock },
  setup () {
    const mainColor = ref('#44aaff')
    const mainAmount = ref(0.5)
    const onInput = e => mainColor.value = e.target.value

    const tinyColor = useColor(mainColor, mainAmount)
    const { usePalette } = tinyColor

    const colorStyle = color => {
      return {
        color: usePalette.readableColor(color),
        backgroundColor: color
      }
    }

    return {
      mainColor,
      mainAmount,
      onInput,
      colorStyle,
      ...tinyColor
    }
  }
}
</script>
