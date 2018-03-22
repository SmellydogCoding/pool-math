<template lang="pug">
  v-content
    v-container
      v-layout(text-xs-center row wrap justify-center)
        v-flex(xs12).my-2
          p.title {{ title }}
      v-layout(text-xs-center row wrap justify-center)
        app-IllustrationBlock(:image="image")
        app-AnswerBlock(v-on:makeNewProblem="newProblem" :answers="answers" :hints="hints", :correctMessage="correctMessage", :next="next", :newButton="newButton")
</template>

<script>
import AnswerBlock from '../shared/AnswerBlock'
import IllustrationBlock from '../shared/IllustrationBlock'

export default {
  data() {
    return {
      image: {src: 'public/img/section1/problem1.jpg', alt: 'pool image for problem 1'},
      units: { ounces: 24 },
      correct: 1.5,
      answers: [2.25,1.88,1.5,1.13],
      hints: {title: 'Hint for Problem 1', text: 'Ounces / 16 = Pounds'},
      next: {text: 'Problem 2: Fluid Ounces to Gallons', route: '/s1p2'},
      newButton: {text: 'New Ounces to Pounds Problem'}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `1. You need to add ${this.units.ounces} Ounces of Calcium Hypochlorite to your pool to raise the free chlorine level.\u00A0\u00A0How many Pounds is this?` },
    correctMessage() { return `Correct!\u00A0\u00A0${this.units.ounces} Ounces / 16 = ${this.correct} Pounds.` }
  },
  methods: {
    newProblem() {
      this.resetProblemState();
      // variables specific to this problem
      this.units.ounces = Math.floor(Math.random() * 60 + 1);
      this.correct = parseFloat((this.units.ounces / 16).toFixed(2));
      //
      this.answers = this.getNewAnswerSet(this.correct);
    }
  }
}
</script>