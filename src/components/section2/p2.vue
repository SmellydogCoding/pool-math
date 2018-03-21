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
import answerQuestion from '../../mixins/answerQuestion'
import getNewAnswerSet from '../../mixins/getNewAnswerSet'
import resetProblemState from '../../mixins/resetProblemState'

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
  mixins: [answerQuestion, getNewAnswerSet, resetProblemState],
  computed: {
    title() { return `1. You have a hot tub that is ${this.diameter} ft in diameter.\u00A0\u00A0What is the surface area of this hot tub?` },
    correctMessage() { return `Correct!\u00A0\u00A0${this.radius} ft * ${this.radius} ft * 3.14 = ${this.correct} ft\u00B2` },
  },
  methods: {
    nextProblem() {
      this.$router.push('/s2p3');
    },
    newProblem() {
      this.resetProblemState();
      
      // generate random numbers and create new answer set - change as needed per problem
      this.diameter = Math.floor(Math.random() * 20 + 1);
      this.radius = parseFloat((this.diameter / 2).toFixed(2));
      this.correct = (this.radius * this.radius * 3.14);
      let newAnswers = [this.correct * .75, this.correct, this.correct * 1.5, this.correct / 1.5];

      this.answers = this.getNewAnswerSet(newAnswers);
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