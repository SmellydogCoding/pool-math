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
      problem: 's6p1',
      image: {src: require('../../assets/section6/problem1.jpg'), alt: 'illustration for problem 1'},
      hint: {title: 'Hint for Problem 1', type: 'textHint', text: 'Turnover Rate = Pool Volume / Flow Rate / 60'},
      next: {text: 'Problem 2: Calculate Turnover Rate of a Hot Tub', route: '/turnover-rate-of-a-hot-tub'},
      newButton: 'New Pool Turnover Rate Problem',
      answerSet: {type: 'turnover', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a ${this.units.volume} gallon pool that has a flow rate of ${this.units.flow} Gallons Per Minute.\u00A0\u00A0What is the Turnover Rate (in Hours) of this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
