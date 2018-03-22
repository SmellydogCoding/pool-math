<template lang="pug">
  div
    v-select.mt-2(:items="answers" label="Select Answer" v-model="answer" :disabled="showCorrect")
    v-btn.color--white(color="info" light @click="sendAnswer()" :disabled="answer === 0 || showCorrect") Answer
</template>

<script>
export default {
   data () {
    return {
      answer: 0
    }
  },
  props: ['answers', 'showCorrect'],
  methods: {
    sendAnswer() {
      this.$emit('emitAnswer', this.answer);
    }
  }
}
</script>
