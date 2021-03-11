<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full">
        <h3>Reactive Color</h3>
        <div class="grid grid-cols-2 gap-2">
          <div class="">
            <label for="">Hex Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(hexColor)">{{ hexColor }}</div>
          </div>
          <div class="">
            <label for="">HSLA Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(hslaColor)">{{ hslaColor }}</div>
          </div>
          <div class="">
            <label for="">RGBA Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(rgbaColor)">{{ rgbaColor }}</div>
          </div>
          <div class="">
            <label for="">Readable Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(readableColor)">{{ readableColor }}</div>
          </div>
          <div class="">
            <label for="">Invert Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(invertColor)">{{ invertColor }}</div>
          </div>
          <div class="">
            <label for="">Color Luminance</label>
            <div class="flex items-center p-2 border" :style="colorStyle(readableColor)">{{ luminance }}</div>
          </div>
        </div>
        <h3>Color With Amount</h3>
        <div class="grid grid-cols-2 gap-2">
          <div class="">
            <label for="">Ligthen  Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(lightenColor)">{{ lightenColor }}</div>
          </div>
          <div class="">
            <label for="">Darken Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(darkenColor)">{{ darkenColor }}</div>
          </div>
          <div class="">
            <label for="">Tint Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(tintColor)">{{ tintColor }}</div>
          </div>
          <div class="">
            <label for="">Shade Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(shadeColor)">{{ shadeColor }}</div>
          </div>
          <div class="">
            <label for="">Saturate Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(saturateColor)">{{ saturateColor }}</div>
          </div>
          <div class="">
            <label for="">Desaturate Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(desaturateColor)">{{ desaturateColor }}</div>
          </div>
          <div class="">
            <label for="">Transparentize Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(transparentizeColor)">{{ transparentizeColor }}</div>
          </div>
          <div class="">
            <label for="">Opacify Color</label>
            <div class="flex items-center p-2 border" :style="colorStyle(opacifyColor)">{{ opacifyColor }}</div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-2 text-center mt-8">
          <div>
            <input type="color" id="choose-color" name="choose-color" :value="mainColor" @input="onInput">
            <label for="choose-color">Choose Color</label>
          </div>
          <div>
            <input type="number" id="choose-number" name="choose-number" min="0" max="1" step="0.1" v-model="mainAmount" class="border">
            <label for="choose-color">Choose Amount</label>
          </div>
        </div>
      </template>
    </example-block>

    <example-block>
      <template v-slot:component class="w-full">
        <h3>Transparentize Color</h3>
        <p>Takes in a color and makes it more transparent by convert to rgba and decreasing the amount in the alpha channel.</p>
        <div class="grid grid-cols-10 transparent-background h-16">
          <div
            v-for="(color, index) in transparentColors"
            :key="index"
            class="flex items-center justify-center"
            :style="{ backgroundColor: color }"
          >{{ (10 - index) / 10 }}</div>
        </div>
        <h3>Tint Color</h3>
        <p>Tints a color by mixing it with white.</p>
        <div class="grid grid-cols-10 transparent-background h-16 text-xs">
          <div
            v-for="(color, index) in tintColors"
            :key="index"
            class="flex items-center justify-center"
            :style="{ backgroundColor: color, color: usePalette.readableColor(color) }"
          >{{ usePalette.toHex(color) }}</div>
        </div>
        <h3>Shade Color</h3>
        <p>Shades a color by mixing it with black.</p>
        <div class="grid grid-cols-10 transparent-background h-16 text-xs">
          <div
            v-for="(color, index) in shadeColors"
            :key="index"
            class="flex items-center justify-center"
            :style="{ backgroundColor: color, color: usePalette.readableColor(color) }"
          >{{ usePalette.toHex(color) }}</div>
        </div>

        <div class="text-center mt-8">
          <div>
            <input type="color" id="choose-color" name="choose-color" :value="amountColor" @input="onInputAmount">
            <label for="choose-color">Choose Color</label>
          </div>
        </div>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { computed, ref, defineComponent } from '@vue/runtime-core'
import { useColor, usePalette } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useColor, usePalette } from '../../../../packages/core/lib/index.esm'

const range = (end: any, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end - start + 1) / step) }, (v, i) => i * step + start)

export default defineComponent({
  name: 'UseColorDemo',
  setup () {
    const mainColor = ref('#3eaf7c')
    const amountColor = ref('#3eaf7c')
    const mainAmount = ref(0.5)
    const onInput = (e: any) => mainColor.value = e.target.value
    const onInputAmount = (e: any) => amountColor.value = e.target.value

    const reactiveColors = useColor(mainColor, mainAmount)

    const colorStyle = (color: string) => {
      return {
        color: usePalette.readableColor(color),
        backgroundColor: color
      }
    }

    const transparentColors = computed(() => {
      return range(9, 0, 1).map(item => {
        return usePalette.transparentize(amountColor.value, item / 10)
      })
    })
    const tintColors = computed(() => {
      return range(9, 0, 1).map(item => {
        return usePalette.tint(amountColor.value, (10 - item) / 10)
      })
    })
    const shadeColors = computed(() => {
      return range(9, 0, 1).map(item => {
        return usePalette.shade(amountColor.value, (10 - item) / 10)
      })
    })

    return {
      mainColor,
      amountColor,
      mainAmount,
      onInput,
      onInputAmount,
      colorStyle,
      transparentColors,
      tintColors,
      shadeColors,
      usePalette,
      ...reactiveColors
    }
  }
})
</script>

<style scoped>
.transparent-background {
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%),
    linear-gradient(-45deg, #eee 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #eee 75%),
    linear-gradient(-45deg, transparent 75%, #eee 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
</style>
