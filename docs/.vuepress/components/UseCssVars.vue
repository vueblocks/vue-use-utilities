<template>
  <section>
    <example-block>
      <div slot="component" class="w-full">
        <h3>Color Variables</h3>
        <div class="grid">
          <div class="">
            <!-- <label for="">Text Color</label> -->
            <div
              class="flex items-center p-2 border"
              :style="{
                color: 'var(--text-color)',
                backgroundColor: 'var(--bg-color)'
              }"
              ref="textEl"
            >
              Color Variables
            </div>
          </div>
        </div>
        
        <div class="grid grid-cols-2 gap-2 text-center mt-8">
          <div>
            <input type="color" id="choose-color" name="choose-color" :value="textColor" @input="onInputTextColor">
            <label for="choose-color">Choose Text Color</label>
          </div>
          <div>
            <input type="color" id="choose-color" name="choose-color" :value="bgColor" @input="onInputBgColor">
            <label for="choose-color">Choose Background Color</label>
          </div>
        </div>
      </div>
    </example-block>
  </section>
</template>

<script>
import { ref } from 'vue-demi'
// import { useCssVars } from '@vueblocks/vue-use-core'
// Test local bundle
import { useCssVars } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseCssVars',
  components: { ExampleBlock },
  setup () {
    const textEl = ref(null)
    const onInputTextColor = e => textColor.value = e.target.value
    const onInputBgColor = e => bgColor.value = e.target.value
    
    const textColor = useCssVars(textEl, '--text-color', '#000')
    const bgColor = useCssVars(textEl, '--bg-color', '#3eaf7c')

    return {
      textEl,
      textColor,
      bgColor,
      onInputTextColor,
      onInputBgColor
    }
  }
}
</script>

<style lang="stylus" scoped>
.transparent-background {
  background-image: linear-gradient(45deg, #eee 25%, transparent 25%),
    linear-gradient(-45deg, #eee 25%, transparent 25%),
    linear-gradient(45deg, transparent 75%, #eee 75%),
    linear-gradient(-45deg, transparent 75%, #eee 75%);
  background-size: 20px 20px;
  background-position: 0 0, 0 10px, 10px -10px, -10px 0px;
}
</style>
