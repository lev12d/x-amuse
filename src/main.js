import Vue from 'vue'
import App from './App.vue'
import xAmuse from './index.js'
import './assets/css/styles/index.css'

Vue.use(xAmuse)
new Vue({
  el: '#app',
  render: h => h(App)
})
