<template>
  <div id="app">
    <HelloWorld />
    <Counter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Counter from './components/Counter.vue'

export default Vue.extend({
  name: 'App',
  components: {
    HelloWorld,
    Counter
  }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
