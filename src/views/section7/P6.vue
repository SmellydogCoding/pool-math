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
      problem: 's7p6',
      image: {src: require('../../assets/section7/problem4-5-6.jpg'), alt: 'illustration for problem 6'},
      hint: {title: 'Hint for Problem 6', type: 'textHint', text: 'Maximum Flow Provided = Filter Area x Filter Media Rate'},
      next: {text: 'Problem 7: Cartridge Filter - Filter Size Required', route: '/cartridge-filter-size-required'},
      newButton: 'New Sand Filter Maximum Flow Provided Problem',
      answerSet: {type: 'filter', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `Your sand filter has a total filtering area of ${this.units.area}ft\u00B2.\u00A0\u00A0Your sand filter has a filter media rate of ${this.units.fmr} gpm/ft\u00B2.\u00A0\u00A0What is the maximum flow (in gpm) that this sand filter can handle?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
