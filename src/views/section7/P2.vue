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
      problem: 's7p2',
      image: {src: 'src/assets/section7/problem1-2-3.jpg', alt: 'illustration for problem 2'},
      hint: {title: 'Hint for Problem 2', type: 'textHint', text: 'Filter Area Required = Flow Rate / Filter Media Rate<br>Grid Filtering Area = Length x Width x 2<br>Total Grids Needed = Filter Area Required / Grid Filtering Area'},
      next: {text: 'Problem 3: Maximum Flow Provided by a Diatomaceous Earth Filter', route: '/diatomaceous-earth-max-flow-provided'},
      newButton: 'New Diatomaceous Earth Grids Required Problem',
      answerSet: {type: 'filter grid', decimals: 0}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a diatomaceous earth filter array that consists of grids that are ${this.units.length} ft long and ${this.units.width} ft wide.\u00A0\u00A0Each grid filters from both sides.\u00A0\u00A0The flow rate is ${this.units.flow}gpm and the filter media rate is ${this.units.fmr}gpm/ft\u00B2.\u00A0\u00A0How many grids are required for this filter array?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
