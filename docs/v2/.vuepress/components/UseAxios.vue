<template>
  <example-block>
    <div slot="component" class="w-full text-center">
      <section class="text-gray-700 body-font mb-2">
        <div class="flex flex-col text-center w-full mb-8">
          <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Bitcoin Price</h1>
          <h3 class="sm:text-2xl text-2xl font-medium title-font mb-4 text-gray-700">
            $ {{ bitcoin && bitcoin.bpi.USD.rate_float }}
          </h3>
        </div>
      </section>
    </div>
  </example-block>
</template>

<script>
import { onMounted, ref } from 'vue-demi'
// import { useAxios } from '@vueblocks/vue-use-axios'
// Test local bundle
import { useAxios } from '@vueblocks/vue-use-axios'

export default {
  name: 'UseAxios',
  setup () {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice.json'

    const { refetch, data } = useAxios(url)
    
    const bitcoin = ref(data)

    const fetchBitcoinRate = () => {
      setInterval(() => {
        refetch()
      }, 20000)
    }

    onMounted(() => {
      fetchBitcoinRate()
    })

    return {
      bitcoin
    }
  }
}
</script>
