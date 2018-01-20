<template lang="pug">
  v-container
    v-layout(text-xs-center row wrap)
      v-flex(xs12)
        p.title 1. You have a rectangular pool that is {{length}} feet long and {{width}} feet wide.  What is the area of this pool?
      v-flex(xs12)
        img(src="public/pool-rec.png")
      v-flex(xs12)
        v-select(:items="answers" label="Select Answer" v-model.number="answer" required)
        v-btn(v-if="!showCorrect" color="info" light @click="answerQuestion()" :disabled="answer === 0") Answer
        v-btn(v-if="showCorrect" color="success" dark @click="nextProblem()") Next Problem: Area of a Hot Tub
        v-btn(v-if="showCorrect" color="info" dark @click="newProblem()") Create a New Pool Area Problem
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
    }
  },
  methods: {
    answerQuestion() {
      if (this.answer === this.correct) {
        this.showCorrect = true;
        this.showIncorrect = false;
      } else {
        this.showIncorrect = true;
      }
    },
    nextProblem() {
      this.$router.push('/s2p2');
    },
    newProblem() {
      // state reset
      this.noAnswer= true;
      this.showCorrect = false;
      this.showIncorrect = false;
      this.showAnswerButton = true;
      this.showNextButton = false;
      this.answer = 0;
      // generate random numbers needed for a new problem
      this.length = Math.floor(Math.random() * 50 + 1);
      this.width = Math.floor(Math.random() * 30 + 1);
      this.correct = this.length * this.width;
      //create new answer set
      let answerPositions = []
      let newAnswers = [this.length + this.width, this.correct, this.correct * 0.75, this.correct * 1.5];
      let newAnswerSet = [];
      // create an array with numbers 0-3 in random order. eg: [1,3,0,2]  These are the index positions for the new answers above
      const getAnswerPosition = () => { 
        return Math.floor(Math.random() * 4);
      }
      for (let i = 1; i < 5; i++) {
        let number;
        // make sure no number is used twice in the answerPositions array
        do {
          number = getAnswerPosition();
        } while (answerPositions.includes(number));
        answerPositions.push(number);
      }
      // using the values in the answerPositions array as index positions and the values in the newAnswers array as values
      // create the newAnswerSet array using newAnswerSet[answerPositions] = newAnswers
      answerPositions.forEach((index, value) => {
        newAnswerSet[value] = newAnswers[index];
      });
      // the result is the values in the newAnswers array are pushed into a new array in random positions
      // this creates a new answer set for the new problem
      this.answers = newAnswerSet;
    }
  }
}
</script>

<style scoped>
  .title {
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

  @media screen and (max-width: 960px) {
    .title {
      margin: 0 0 1.5rem 0
    }
    img {
      width: 80%;
    }
  }
</style>