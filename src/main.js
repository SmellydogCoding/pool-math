import 'es6-promise/auto'
import 'babel-polyfill'
import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import router from './router/router'
import store from './store/store'
import 'vuetify/dist/vuetify.css'
import './global.css'

Vue.use(Vuetify)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
