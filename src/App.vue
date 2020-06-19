<template>
  <div id="app">
    <Hello/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'

export default {
  name: 'App',
  components: {
    Hello
  }
}
</script>

<style>
html {
  background-image: none;
  background-color: #eff2f7 !important;
  min-height: 100%;
}
#app {
  font-family: Alegreya, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 10px auto;
  width: 100%;
}
</style>
