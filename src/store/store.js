import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    drawer: false
  },
  getters: {  // send state to a component
    navDrawer: state => {
      return state.drawer
    }
  },
  mutations: { // modify state synchronously
    navDrawer: (state, command) => {
      command === 'open' ? state.drawer = true : state.drawer = false;
    }
  },
  actions: { // modify state aschronously
    navDrawer: ({commit}, command) => {
      commit('navDrawer', command)
    }
  }
});