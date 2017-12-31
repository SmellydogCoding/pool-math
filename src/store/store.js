import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    users: [],
    drawer: false
  },
  getters: {  // send state to a component
    fetchUsers: state => {
      return state.users;
    },
    drawerState: state => {
      return state.drawer
    }
  },
  mutations: { // modify state synchronously
    setUsers: (state, res) => {
      state.users = res.data;
    },
    drawerControl: (state, command) => {
      command === 'open' ? state.drawer = true : state.drawer = false;
    }
  },
  actions: { // modify state aschronously
    getUsers: ({commit}) => {
      axios.get('/users').then(res => {
        commit('setUsers', res);
      });
    },
    drawerControl: ({commit}, command) => {
      commit('drawerControl', command)
    }
  }
});