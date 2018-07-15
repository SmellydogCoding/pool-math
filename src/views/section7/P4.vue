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
      problem: 's7p4',
      image: {src: require('../../assets/section7/problem4-5-6.jpg'), alt: 'illustration for problem 4'},
      hint: {title: 'Hint for Problem 4', type: 'textHint', text: 'Total Filter Area = Radius x Radius x 3.14<br>Radius = Diameter / 2'},
      next: {text: 'Problem 5: Sand Filter - Filter Size Required', route: '/sand-filter-size-required'},
      newButton: 'New Sand Filter Size Problem',
      answerSet: {type: 'filter', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a sand filter that has a diameter of ${this.units.diameter}ft.\u00A0\u00A0What is the total filtering area (in ft\u00B2) of this filter?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
