<template lang="pug">
  v-container
    v-layout(text-xs-center row wrap)
      v-flex(xs12)
        p.title 1. You have a rectangular pool that is {{length}} feet long and {{width}} feet wide.  What is the area of this pool?
      v-flex(xs12)
        img(src="public/pool-rec.png")
      v-flex(xs12)
        v-select(v-bind:items="answers" label="Select Answer" v-model.number="answer")
        v-btn(color="info" dark @click="answerQuestion()") Answer
      v-flex(xs12)
        v-alert(v-if="question.answered && question.correct" color="success" icon="check_circle") Correct!&nbsp;&nbsp;{{length}} x {{width}} = {{correct}}
        v-alert(v-if="question.answered && !question.correct" color="warning" icon="close") Bummer! &nbsp;&nbsp;That answer is not correct.
        
</template>

<script>
export default {
  data() {
    return {
      length: 25,
      width: 10,
      answer: 0,
      correct: 0,
      question: { answered: false, correct: false },
      answers: [15,250,125,150]
    }
  },
  computed: {
    correctAnswer() {
      this.correct = this.length * this.width
    }
  },
  methods: {
    answerQuestion() {
      this.question.answered = true;
      this.answer === this.correct ? this.question.correct = true : this.question.correct = false;
    }
  }
}
</script>

<style scoped>
  p {
    margin: 2.0rem;
  }
</style>