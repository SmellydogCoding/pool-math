import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import { store } from './store/store'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:8081/'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
