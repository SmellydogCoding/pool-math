<template lang="pug">
 v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex(xs12 md6)
          app-IllustrationBlock
        v-flex.answer-block--background.pa-2(xs12 md6)
          app-SelectAnswer
          app-AnswerMessage
          app-NextOrNew
</template>

<script>
import IllustrationBlock from '../../components/shared/IllustrationBlock'
import NextOrNew from '../../components/shared/NextOrNew'
import AnswerMessage from '../../components/shared/AnswerMessage'
import SelectAnswer from '../../components/shared/SelectAnswer'

export default {
  data() {
    return {
      problem: 's1p1',
      image: {src: 'src/assets/section1/problem1.jpg', alt: 'pool image for problem 1'},
      hint: {title: 'Hint for Problem 1', type: 'textHint', text: 'Ounces / 16 = Pounds'},
      next: {text: 'Problem 2: Fluid Ounces to Gallons', route: '/s1p2'},
      newButton: 'New Ounces to Pounds Problem',
      answerSet: {type: 'conversion', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You need to add ${this.units.ounces} Ounces of Calcium Hypochlorite to your pool to raise the free chlorine level.\u00A0\u00A0How many Pounds is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>