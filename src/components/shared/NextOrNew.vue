<template lang="pug">
  transition(name="fade")
    div.mt-2
      v-btn(v-if="data.showCorrect" color="info" dark @click="makeNew()") {{ data.newButton }}
        v-icon.ml-2 refresh
      v-btn.mt-3(v-if="data.showCorrect" color="success" dark @click="$router.push(data.next.route)") {{ data.next.text }}
        v-icon.ml-2 arrow_forward
</template>

<script>
export default {
  methods: { makeNew() { this.$store.dispatch('newProblem'); } },
  computed: { data() { return this.$store.getters.newOrNext } }
}
</script>
