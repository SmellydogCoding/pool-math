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
          v-select.mt-2(:items="answers" label="Select Answer" v-model.number="answer" :disabled="showCorrect")
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
      img: 'public/img/section2/problem2.jpg',
      alt: 'illustration for problem 2',
      diameter: 12,
      radius: 6,
      answer: 0,
      attempts: 0,
      correct: 113,
      answers: [113,36,170,150],
      noAnswer: true,
      showCorrect: false,
      showIncorrect: false,
      showHintButton: false,
      hintTitle: 'Hint for Problem 2',
      hintText: `Surface Area = Radius * Radius * 3.14<br><br>Radius = Diameter / 2`,
      hintWidth: '500px',
      next: 'Problem 3: Volume of a Swimming Pool',
      redo: 'New Hot Tub Area Problem'
    }
  },
  components: {
    appHintModal: HintModal
  },
  computed: {
    title() { return `1. You have a hot tub that is ${this.diameter} ft in diameter.\u00A0\u00A0What is the surface area of this hot tub?` },
    correctMessage() { return `Correct!\u00A0\u00A0${this.radius} ft * ${this.radius} ft * 3.14 = ${this.correct} ft\u00B2` },
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
      this.$router.push('/s2p3');
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
      this.diameter = Math.floor(Math.random() * 20 + 1);
      this.radius = parseFloat((this.diameter / 2).toFixed(2));
      this.correct = (this.radius * this.radius * 3.14);
      let newAnswers = [this.diameter * this.diameter * 3.14, this.correct, this.correct * 2, this.correct * 1.5];
      
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