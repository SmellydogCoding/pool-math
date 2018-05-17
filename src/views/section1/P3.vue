<template lang="pug">
  v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex(xs12 md6)
          app-IllustrationBlock
        v-flex.answer-block--background(xs12 md6)
          app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import IllustrationBlock from '../../components/shared/IllustrationBlock'

export default {
  data() {
    return {
      problem: 's1p3',
      image: {src: 'src/assets/section1/problem3.jpg', alt: 'pool image for problem 3'},
      hint: {title: 'Hint for Problem 3', type: 'textHint', text: 'Fluid Ounces / 8 = Cups'},
      next: {text: 'Problem 4: Yards to Feet', route: '/s1p4'},
      newButton: 'New Fluid Ounces to Cups Problem',
      answerSet: {type: 'conversion', decimals: 1}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You need to add ${this.units.flOunces} Fluid Ounces of Muriatic Acid to lower the total alkalinity in your hot tub.\u00A0\u00A0How many cups is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
