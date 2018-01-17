<template lang="pug">
  v-container
    v-layout(text-xs-center row wrap)
      v-flex(xs12)
        p.title 1. You have a rectangular pool that is {{length}} feet long and {{width}} feet wide.  What is the area of this pool?
      v-flex(xs12)
        img(src="public/pool-rec.png")
      v-flex(xs12)
        v-select(v-bind:items="answers" label="Select Answer" v-model.number="answer")
        v-tooltip(left v-model="noAnswer")
          v-btn(v-if="showAnswerButton" color="info" dark @click="answerQuestion()") Answer
          span Please select an answer
        v-btn(v-if="showNextButton" color="info" dark @click="nextProblem()") Next Problem
      v-flex(xs12)
        v-alert(v-if="showCorrect" color="success" icon="check_circle" value="true") Correct!&nbsp;&nbsp;{{length}}ft x {{width}}ft = {{correct}}ft#[sup 2]
        v-alert(v-if="showIncorrect" color="error" icon="close" value="true") Bummer!&nbsp;&nbsp;That answer is not correct.&nbsp;&nbsp;Please try again.
        
</template>

<script>
export default {
  data() {
    return {
      length: 25,
      width: 10,
      answer: 0,
      correct: 250,
      answers: [15,250,125,150],
      showCorrect: false,
      showIncorrect: false,
      showAnswerButton: true,
      showNexButton: false,
      noAnswer: false
    }
  },
  computed: {
    correctAnswer() {
      this.correct = this.length * this.width;
    }
  },
  methods: {
    answerQuestion() {
      if (this.answer === 0) { this.noAnswer = true; }
      else if (this.answer === this.correct) {
        this.showCorrect = true;
        this.showIncorrect = false;
        this.showAnswerButton = false;
        this.showNextButton = true;
      } else {
        this.showIncorrect = true;
      }
    },
    nextProblem() {
      this.$router.push('/s2p2');
    }
  }
}
</script>

<style scoped>
  p {
    margin: 2.0rem;
  }
  .alert {
    font-size: 1.5rem;
    margin-top: 1.5rem;
  }
</style>