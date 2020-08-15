<template>
  <div id="app">
    <Hello v-if="!loading" :marketJson="marketJson" :shmarketJson="shmarketJson" :redbubbleJson="redbubbleJson"/>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import axios from 'axios'
export default {
  name: 'App',
  components: {
    Hello
  },
  data: () => ({
    loading: true,
    marketJson: null,
    shmarketJson: null,
    redbubbleJson: null,
  }),
  mounted () {
    const rand = Math.random()
    const host = 'https://raw.githubusercontent.com/chumakov-azoft/insta-patterns/master/public/'
    Promise.all([
      axios.get(host + 'market.json?v=' + rand),
      axios.get(host + 'shmarket.json?v=' + rand),
      axios.get(host + 'redbubble.json?v=' + rand),
    ]).then((values) => {
      this.marketJson = values[0]?.data
      this.shmarketJson = values[1]?.data
      this.redbubbleJson = values[2]?.data
    }).catch(response => {
      console.error(response)
    }).finally(response => {
      this.loading = false
    })
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
