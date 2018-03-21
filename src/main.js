import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
// import { store } from './store/store'
// import axios from 'axios'
import { routes } from './routes'

// axios.defaults.baseURL = 'http://localhost:8081/'

const router = new VueRouter({
  mode: 'history',
  routes
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  next();
});

Vue.use(Vuetify)
Vue.use(VueRouter)

new Vue({
  el: '#app',
  router,
  // store,
  render: h => h(App)
})
