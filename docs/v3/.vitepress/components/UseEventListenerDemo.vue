<template>
  <section>
    <example-block>
      <template v-slot:component>
        <div class="w-full text-center">
          <h3 class="mb-4">Drawing with mouse events</h3>
          <canvas id="myPics" ref="refPics" width="560" height="240" class="border m-auto"></canvas>
        </div>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useEventListener } from '@vueblocks/vue-use-core'
// Test local bundle
// import { useEventListener } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UseEventListenerDemo',
  setup () {
    const x = ref(0)
    const y = ref(0)
    const isDrawing = ref(false)
    
    onMounted(() => {
      const myPics = document.getElementById('myPics')
      const context = myPics.getContext('2d')

      const drawLine = (context, x1, y1, x2, y2) => {
        context.beginPath()
        context.strokeStyle = 'black'
        context.lineWidth = 1
        context.moveTo(x1, y1)
        context.lineTo(x2, y2)
        context.stroke()
        context.closePath()
      }

      const onMouseDown = e => {
        x.value = e.offsetX
        y.value = e.offsetY
        isDrawing.value = true
      }

      const onMouseMove = e => {
        if (isDrawing.value === true) {
          drawLine(context, x.value, y.value, e.offsetX, e.offsetY)
          x.value = e.offsetX
          y.value = e.offsetY
        }
      }

      const onMouseUp = e => {
        if (isDrawing.value === true) {
          drawLine(context, x.value, y.value, e.offsetX, e.offsetY);
          x.value = 0
          y.value = 0
          isDrawing.value = false
        }
      }

      useEventListener(myPics, 'mousedown', onMouseDown)
      useEventListener(myPics, 'mousemove', onMouseMove)
      useEventListener(window, 'mouseup', onMouseUp)
    })
  }
})
</script>
