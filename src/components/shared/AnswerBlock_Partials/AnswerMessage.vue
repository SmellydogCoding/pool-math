<template lang="pug">
  v-flex(xs12)
    transition(name="fade" mode="out-in")
      v-alert.title(v-if="data.showCorrect" color="success" icon="check_circle" value="true") {{ data.correctMessage }}
      v-alert.title(v-if="data.showIncorrect" color="error" icon="close" value="true") {{ data.incorrectMessage }}
</template>

<script>
export default {
  computed: { data() { return this.$store.getters.answerMessage } }
}
</script>
