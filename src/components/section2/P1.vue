<template lang="pug">
  v-container
    v-layout(text-xs-center row wrap)
      v-flex(xs12)
        p.title 1. You have a rectangular pool that is {{length}} feet long and {{width}} feet wide.  What is the area of this pool?
      v-flex(xs12)
        img(src="public/pool-rec.png")
      v-flex(xs12)
        v-select(:items="answers" label="Select Answer" v-model.number="answer" required)
        v-btn(v-if="showAnswerButton" color="info" light @click="answerQuestion()" :disabled="noAnswer") Answer
        v-btn(v-if="showNextButton" color="success" dark @click="nextProblem()") Next Problem
        v-btn(v-if="showNextButton" color="info" dark @click="newProblem()") Create a New Pool Area Problem
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
      noAnswer: true,
      showCorrect: false,
      showIncorrect: false,
      showAnswerButton: true,
      showNextButton: false,
    }
  },
  computed: {
    enableAnswerButton() {
      if (this.answer != 0) { this.noAnswer = false; }
    }
  },
  methods: {
    answerQuestion() {
      if (this.answer === this.correct) {
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
    },
    newProblem() {
      this.noAnswer= true;
      this.showCorrect = false;
      this.showIncorrect = false;
      this.showAnswerButton = true;
      this.showNextButton = false;
      this.length = Math.floor(Math.random() * 50 + 1);
      this.width = Math.floor(Math.random() * 30 + 1);
      this.correct = this.length * this.width;
      this.answer = 0;
      let answerPositions = []
      let newAnswers = [this.length + this.width, this.correct, this.correct * 0.75, this.correct * 1.5];
      let newAnswerSet = [];
      const getAnswerPosition = () => { 
        return Math.floor(Math.random() * 4);
      }
      for (let i = 1; i < 5; i++) {
        let number;
        do {
          number = getAnswerPosition();
        } while (answerPositions.includes(number));
        answerPositions.push(number);
      }
      answerPositions.forEach((index, value) => {
        newAnswerSet[value] = newAnswers[index];
      });
      this.answers = newAnswerSet;
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
  /* disabled dark theme button disappears on light background. */
  /* fix is to use light theme button and change button color */
  .btn {
    color: #fff !important;
  }
</style>