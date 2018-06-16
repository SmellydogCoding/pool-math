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
      problem: 's6p2',
      image: {src: 'src/assets/section6/problem2.jpg', alt: 'illustration for problem 2'},
      hint: {title: 'Hint for Problem 2', type: 'textHint', text: 'Turnover Rate = Hot Tub Volume / Flow Rate'},
      next: {text: 'Problem 3: Calculate Flow Rate of a Pool', route: '/flow-rate-of-a-pool'},
      newButton: 'New Hot Tub Turnover Rate Problem',
      answerSet: {type: 'turnover', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a ${this.units.volume} Hot Tub that has a flow rate of ${this.units.flow} Gallons Per Minute.\u00A0\u00A0What is the Turnover Rate (in Minutes) of this Hot Tub?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
