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
      problem: 's6p4',
      image: {src: 'src/assets/section6/problem4.jpg', alt: 'illustration for problem 4'},
      hint: {title: 'Hint for Problem ', type: 'textHint', text: 'Flow Rate = Hot Tub Volume / Turnover Rate'},
      next: {text: 'Intro to Section 7 - Filter Sizing and Max Flow', route: '/intro-to-section-7'},
      newButton: 'New Hot Tub Flow Rate Problem',
      answerSet: {type: 'flow', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a ${this.units.volume} gallon hot hub that has a required turnover rate of 30 minutes.\u00A0\u00A0What is the minimum Flow Rate (in Gallons Per Minute) that is required to meet the Turnover Rate?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
