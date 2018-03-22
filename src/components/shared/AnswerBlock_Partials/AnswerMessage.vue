<template lang="pug">
  v-flex(xs12)
    transition(name="fade" mode="out-in")
      v-alert.title(v-if="showCorrect" color="success" icon="check_circle" value="true") {{ correctMessage }}
      v-alert.title(v-if="showIncorrect" color="error" icon="close" value="true") {{ incorrectMessage }}
</template>

<script>
export default {
  props: ['correctMessage', 'incorrectMessage', 'showCorrect', 'showIncorrect']
}
</script>
