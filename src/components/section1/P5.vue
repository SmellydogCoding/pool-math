<template lang="pug">
  v-content
    v-container
      v-layout(text-xs-center row wrap justify-center)
        v-flex(xs12).my-2
          p.title {{ title }}
      v-layout(text-xs-center row wrap justify-center)
        v-flex(xs12 lg6)
          img.problem-image(:src="img")
        v-flex.select-background.px-2(xs12 lg6)
          v-select.mt-2(:items="answers" label="Select Answer" v-model="answer" :disabled="showCorrect")
          v-btn.color--white(color="info" light @click="answerQuestion()" :disabled="answer === 0 || showCorrect") Answer
          transition(name="fade")
            app-HintModal(:hintTitle="hintTitle" :hintText="hintText" :width="hintWidth" v-if="showHintButton")
          v-layout(text-xs-center row wrap justify-center)
            v-flex(xs12)
              transition(name="fade" mode="out-in")
                v-alert.title(v-if="showCorrect" color="success" icon="check_circle" value="true") {{ correctMessage }}
                v-alert.title(v-if="showIncorrect" color="error" icon="close" value="true") {{ incorrectMessage }}
          v-layout.mt-3(text-xs-center row wrap justify-center)
            transition(name="fade")
              v-flex(xs12)
                v-btn(v-if="showCorrect" color="success" dark @click="nextProblem()") {{ next }}
                  v-icon.ml-2 arrow_forward
                v-btn(v-if="showCorrect" color="info" dark @click="newProblem()") {{ redo }}
                  v-icon.ml-2 refresh
</template>

<script>
import HintModal from '../hints/TextHint.vue'
export default {
  data() {
    return {
      img: 'public/pool-image5.jpg',
      amount: 5,
      answer: 0,
      attempts: 0,
      correct: 0.42,
      answers: [2.5,0.83,0.42,10],
      noAnswer: true,
      showCorrect: false,
      showIncorrect: false,
      showHintButton: false,
      hintTitle: 'Hint for Problem 5',
      hintText: 'Inches / 12 = Feet',
      hintWidth: '500px',
      next: 'Section 2: Area and Volume',
      redo: 'New Inches to Feet Problem'
    }
  },
  components: {
    appHintModal: HintModal
  },
  computed: {
    title() { return `1. Your wading pool lost ${this.amount} inches of water due to a leak.\u00A0\u00A0How many feet is this?` },
    correctMessage() { return `Correct!\u00A0\u00A0${this.amount} Inches / 12 = ${this.correct} Feet.` },
    incorrectMessage() { return `Bummer!\u00A0\u00A0That answer is not correct.\u00A0\u00A0Please try again.` }
  },
  methods: {
    answerQuestion() {
      if (this.answer === this.correct) {
        this.showHintButton = false;
        this.showCorrect = true;
        this.showIncorrect = false;
      } else {
        this.showIncorrect = true;
        this.attempts ++;
        if (this.attempts >= 2) { this.showHintButton = true; }
      }
    },
    nextProblem() {
      this.$router.push('/s1p5');
    },
    newProblem() {
      // state reset - reusable
      this.noAnswer= true;
      this.showCorrect = false;
      this.showIncorrect = false;
      this.showAnswerButton = true;
      this.showNextButton = false;
      this.attempts = 0;
      this.answer = 0;
      let answerPositions = []
      let newAnswerSet = [];
      
      // generate random numbers and create new answer set - change as needed per problem
      this.amount = Math.floor(Math.random() * 18 + 1);
      this.correct = (this.amount / 12).toFixed(2);
      let newAnswers = [(this.amount / 2).toFixed(2) , this.correct, (this.amount / 6).toFixed(2), (this.amount * 2).toFixed(2)];
      
      // create an array with numbers 0-3 in random order. eg: [1,3,0,2]  These are the index positions for the new answers above - reusable
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
  .content--wrap { align-items: start; }
  .select-background { background-color: rgba(256,256,256,0.8); }
  .fade-enter-active, .fade-leave-active { transition: opacity .5s; }
  .fade-enter, .fade-leave-to { opacity: 0; }
</style>