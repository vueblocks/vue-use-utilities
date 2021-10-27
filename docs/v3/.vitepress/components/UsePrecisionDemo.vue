<template>
  <section>
    <example-block>
      <template v-slot:component class="w-full text-center">
        <table>
          <thead>
            <tr>
              <th>Operations</th><th>Examples</th><th>⛔&nbsp; Imprecise Number</th><th>🧮&nbsp; Precise Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style="text-align: left;">➕ &nbsp; Plus</td>
              <td>{{ n1 }} + {{ n2 }}</td>
              <td style="text-align: right;">{{plusI1}}</td>
              <td>{{plusN1}}</td>
            </tr>
            <tr>
              <td style="text-align: left;">➖ &nbsp; Minus</td>
              <td>{{ n3 }} - {{ n4 }}</td>
              <td style="text-align: right;">{{minusI1}}</td>
              <td>{{minusN1}}</td>
            </tr>
            <tr>
              <td style="text-align: left;">✖️ &nbsp; Times</td>
              <td>{{ n5 }} * {{ n6 }}</td>
              <td style="text-align: right;">{{timesI1}}</td>
              <td>{{timesN1}}</td>
            </tr>
            <tr>
              <td style="text-align: left;">➗ &nbsp; Divide</td>
              <td>{{ n7 }} / {{ n8 }}</td>
              <td style="text-align: right;">{{divideI1}}</td>
              <td>{{divideN1}}</td>
            </tr>
            <tr>
              <td style="text-align: left;">🧮 &nbsp; Strip</td>
              <td>{{ n1 }} + {{ n2 }}</td>
              <td style="text-align: right;">{{plusI1}}</td>
              <td>{{strip}}</td>
            </tr>
            <tr>
              <td style="text-align: left;">🔃 &nbsp; Round</td>
              <td>0.105</td>
              <td style="text-align: right;">0.105.toFixed(2)==='0.10'</td>
              <td>{{roundN2}}</td>
            </tr>
          </tbody>
        </table>
        <div class="text-center">
          <button class="cursor-pointer px-3 py-2 bg-gray-100" @click="randomNumbers">Random</button>
        </div>
      </template>
    </example-block>
  </section>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, computed } from 'vue'
import { usePrecision } from '@vueblocks/vue-use-core'
// Test local bundle
// import { usePrecision } from '../../../../packages/core/lib/index.esm'

export default defineComponent({
  name: 'UsePrecisionDemo',
  setup () {
    const { strip, times, plus, minus, divide, round } = usePrecision()

    const n = reactive({
      n1: 0.1,
      n2: 0.2,
      n3: 1.0,
      n4: 0.9,
      n5: 7,
      n6: 0.2,
      n7: 1.21,
      n8: 1.1
    })

    const refN = toRefs(n)

    const localState = reactive({
      plusI1: computed(() => Number(refN.n1.value) + Number(refN.n2.value)),
      plusN1: plus(refN.n1, refN.n2),
      minusI1: computed(() => Number(refN.n3.value) - Number(refN.n4.value)),
      minusN1: minus(refN.n3, refN.n4),
      timesI1: computed(() => Number(refN.n5.value) * Number(refN.n6.value)),
      timesN1: times(refN.n5, refN.n6),
      divideI1: computed(() => Number(refN.n7.value) / Number(refN.n8.value)),
      divideN1: divide(refN.n7, refN.n8),
      // roundI2: ,
      roundN2: round(0.105, 2),
      strip: strip(computed(() => Number(refN.n1.value) + Number(refN.n2.value)))
    })

    const randomNumbers = () => {
      const getN = (): string => Math.random().toFixed(2)
      Object.keys(n).map((key: string) => n[key] = getN())
    }

    return {
      ...refN,
      ...toRefs(localState),
      randomNumbers
    }
  }
})
</script>
