import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router/router'
import 'vuetify/dist/vuetify.css'
import './global.css'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
