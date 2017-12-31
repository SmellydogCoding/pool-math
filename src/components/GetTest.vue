<template lang="pug">
  div
    v-layout(column align-center)
      h3 Get User Data from the Outdoor Activity Finders Database
      v-btn(color="primary" @click="getUsers()") Get Data
    v-layout(v-if="fetchUsers.length > 0")
      p User Data
      p {{ fetchUsers }}
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      users: [],
      drawer: false
    }
  },
  methods: {
    getUsers() {
      this.$store.dispatch('getUsers')
    }
  },
  computed: {
    fetchUsers() {
      return this.$store.getters.fetchUsers
    }
  }
}
</script>
