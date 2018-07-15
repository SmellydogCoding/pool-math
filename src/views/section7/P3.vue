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
      problem: 's7p3',
      image: {src: require('../../assets/section7/problem1-2-3.jpg'), alt: 'illustration for problem 3'},
      hint: {title: 'Hint for Problem 3', type: 'textHint', text: 'Maximum Flow Rate = Filter Area x Filter Media Rate'},
      next: {text: 'Problem 4: Sand Filter - Calculate Filter Size', route: '/sand-filter-calculate-filter-size'},
      newButton: 'New Diatomaceous Earth Max Flow Provided Problem',
      answerSet: {type: 'filter', decimals: 0}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a diatomaceous earth filter array that has a total filtering area of ${this.units.area}ft\u00B2 and a filter media rate of ${this.units.fmr}gpm/ft\u00B2.\u00A0\u00A0What is the maximum flow rate (in gpm) that this filter array can handle?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
