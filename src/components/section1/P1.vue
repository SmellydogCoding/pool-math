<template lang="pug">
  v-content
    v-container
      v-layout(text-xs-center row wrap justify-center)
        v-flex(xs12).my-2
          p.title {{ title }}
      v-layout(text-xs-center row wrap justify-center)
        v-flex(xs12 lg6)
          img.problem-image(:src="img" :alt="alt")
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
      img: 'public/img/section1/problem1.jpg',
      alt: 'pool image for problem 1',
      amount: 24,
      answer: 0,
      attempts: 0,
      correct: 1.5,
      answers: [12,6,1.5,3],
      noAnswer: true,
      showCorrect: false,
      showIncorrect: false,
      showHintButton: false,
      hintTitle: 'Hint for Problem 1',
      hintText: 'Ounces / 16 = Pounds',
      hintWidth: '500px',
      next: 'Problem 2: Fluid Ounces to Gallons',
      redo: 'New Ounces to Pounds Problem'
    }
  },
  components: {
    appHintModal: HintModal
  },
  computed: {
    title() { return `1. You need to add ${this.amount} Ounces of Calcium Hypochlorite to your pool to raise the free chlorine level.\u00A0\u00A0How many Pounds is this?` },
    correctMessage() { return `Correct!\u00A0\u00A0${this.amount} Ounces / 16 = ${this.correct} Pounds.` },
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
      this.$router.push('/s1p2');
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
      this.amount = Math.floor(Math.random() * 60 + 1);
      this.correct = (this.amount / 16).toFixed(2);
      let newAnswers = [(this.amount / 2).toFixed(2) , this.correct, (this.correct / 4).toFixed(2), (this.correct / 8).toFixed(2)];
      
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