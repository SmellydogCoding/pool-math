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
      problem: 's1p5',
      image: {src: 'src/assets/section1/problem5.jpg', alt: 'pool image for problem 5'},
      hint: {title: 'Hint for Problem 5', type: 'textHint', text: 'Inches / 12 = Feet'},
      next: {text: 'Section 2: Area and Volume', route: '/intro-to-section-2'},
      newButton: 'New Inches to Feet Problem',
      answerSet: {type: 'conversion', decimals: 2}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `Your wading pool lost ${this.units.inches} inches of water due to a leak.\u00A0\u00A0How many feet is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
