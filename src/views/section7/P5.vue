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
      problem: 's7p5',
      image: {src: require('../../assets/section7/problem4-5-6.jpg'), alt: 'illustration for problem 5'},
      hint: {title: 'Hint for Problem 5', type: 'textHint', text: 'Filter Area Required = Flow Rate / Filter Media Rate'},
      next: {text: 'Problem 6: Sand Filter - Maximum Flow Provided', route: '/sand-filter-max-flow-provided'},
      newButton: 'New Sand Filter Size Required Problem',
      answerSet: {type: 'filter', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `Your circulation system has a flow rate of ${this.units.flow} gpm.\u00A0\u00A0You are purchasing a new sand filter that has a filter media rate of ${this.units.fmr} gpm/ft\u00B2.\u00A0\u00A0What is the minimum area (in ft\u00B2) that this new sand filter needs to be?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
