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
      problem: 's7p1',
      image: {src: 'src/assets/section7/problem1-2-3.jpg', alt: 'illustration for problem 1'},
      hint: {title: 'Hint for Problem 1', type: 'textHint', text: 'Total Filter Area = Grid Length x Grid Width x 2 x Number of Grids'},
      next: {text: 'Problem 2: Required Size of Diatomaceous Earth Filter', route: '/diatomaceous-earth-filter-size-required'},
      newButton: 'New Diatomaceous Earth Filter Size Problem',
      answerSet: {type: 'filter', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a diatomaceous earth filter array that consists of ${this.units.grids} grids that are ${this.units.length} ft long and ${this.units.width} ft wide.\u00A0\u00A0Each grid filters from both sides.\u00A0\u00A0What is the total filtering area (in ft\u00B2) provided by this filter array?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
