import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import router from './router/router'

Vue.use(Vuetify)

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
