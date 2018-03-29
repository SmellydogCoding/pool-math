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
      image: {src: 'public/img/section1/problem2.jpg', alt: 'pool image for problem 2'},
      units: {flOunces: 260},
      correct: 2.03,
      answers: [2.03,2.54,1.52,1.73],
      hints: {title: 'Hint for Problem 2', text: 'Fluid Ounces / 128 = Gallons'},
      next: {text: 'Problem 3: Fluid Ounces to Cups', route: '/s1p3'},
      newButton: {text: 'New Fluid Ounces to Gallons Problem'}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `1. You need to add ${this.units.flOunces} Fluid Ounces of Sodium Hypochlorite to do breakpoint chlorination for your pool.\u00A0\u00A0How many Gallons is this?` },
    correctMessage() { return `Correct!\u00A0\u00A0${this.units.flOunces} Fluid Ounces / 128 = ${this.correct} Gallons.` },
  },
  methods: {
    
    newProblem() {
      this.resetProblemState();
      // variables specific to this problem
      this.units.flOunces = Math.floor(Math.random() * 500 + 1);
      this.correct = parseFloat((this.amount / 128).toFixed(2));
      //
      this.answers = this.getNewAnswerSet(this.correct);
    }
  }
}
</script>