<template>
  <section>
    <example-block>
      <div slot="component" class="w-full text-center">
        <h3>Drawing with mouse events</h3>
        <canvas id="myPics" ref="refPics" width="560" height="240" class="border"></canvas>
      </div>
    </example-block>
  </section>
</template>

<script>
import { onMounted, ref } from 'vue-demi'
// import { useEventListener } from '@vueblocks/vue-use-core'
// Test local bundle
import { useEventListener } from '../../../packages/core/lib/index.cjs'
import ExampleBlock from './ExampleBlock.vue'

export default {
  name: 'UseEventListener',
  components: { ExampleBlock },
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
}
</script>
