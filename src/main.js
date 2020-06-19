import Vue from 'vue'
import App from './App.vue'
import VueAgile from 'vue-agile'

require("typeface-alegreya")

Vue.config.productionTip = false

Vue.use(VueAgile)

new Vue({
  render: h => h(App),
}).$mount('#app')
