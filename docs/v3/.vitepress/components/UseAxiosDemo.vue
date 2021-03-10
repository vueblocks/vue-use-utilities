<template>
  <example-block>
    <template v-slot:component class="w-full text-center">
      <section class="text-gray-700 body-font mb-2">
        <div class="flex flex-col text-center w-full mb-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bitcoin Price</h1>
          <h3 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-700">
            $ {{ data && data.bpi.USD.rate_float }}
          </h3>
        </div>
      </section>
    </template>
  </example-block>
</template>

<script lang="ts">
import { onMounted, defineComponent } from 'vue-demi'
import { useAxios } from '@vueblocks/vue-use-axios'
// Test local bundle
// import { useAxios } from '../../../packages/axios/lib/index.cjs'

export default defineComponent({
  name: 'UseAxiosDemo',
  setup () {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

    const { refetch, data } = useAxios(url)
    
    const fetchBitcoinRate = () => {
      setInterval(() => {
        refetch()
      }, 20000)
    }

    onMounted(fetchBitcoinRate)

    return {
      data
    }
  }
})
</script>
