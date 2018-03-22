<template lang="pug">
  transition(name="fade")
    v-flex(xs12)
      v-btn(v-if="showCorrect" color="success" dark @click="$router.push(next.route)") {{ next.text }}
        v-icon.ml-2 arrow_forward
      v-btn(v-if="showCorrect" color="info" dark @click="makeNewProblem()") {{ newButton.text }}
        v-icon.ml-2 refresh
</template>

<script>
export default {
  props: ['next', 'newButton', 'showCorrect'],
  methods: {
    new() {
      this.$emit('makeNewProblem');
    }
  }
}
</script>
