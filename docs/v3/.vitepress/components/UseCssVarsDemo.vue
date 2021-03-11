<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full">
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
      </template>
    </example-block>
  </section>
</template>

<script>
import { ref, defineComponent } from '@vue/runtime-core'
import { useCssVars } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useCssVars } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseCssVarsDemo',
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
})
</script>

