<template>
  <div class="hello">
    <input type="text" v-model="inputVal" />
    <button @click="copy">Copy</button>
    <button @click="clear">Clear</button>

    <h1>{{ inputVal }}</h1>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue-demi'
import { useClipboard, useDebouncedRef, useInstance } from '@vueblocks/vue-use-core'

export default defineComponent({
  name: 'HelloWorld',

  setup () {
    console.log(useInstance())
    const inputVal = useDebouncedRef('Hello World!')
    const { copy, clear } = useClipboard({ source: inputVal.value })

    return {
      inputVal,
      copy,
      clear
    }
  }
})
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
