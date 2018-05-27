<template lang="pug">
   v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex.pr-3(xs12 md6)
          app-IllustrationBlock
        v-flex.answer-block--background(xs12 md6)
          app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import IllustrationBlock from '../../components/shared/IllustrationBlock'

export default {
  data() {
    return {
      problem: 's5p1',
      image: {src: 'src/assets/section5/problem1.jpg', alt: 'pool image for problem 1'},
      hint: {title: 'Hint for Problem 1', type: 'textHint', text: 'Total Chlorine - Free Chlorine = Combined Chlorine<br>Combined Chlorine * 10 = Breakpoint Value'},
      next: {text: 'Problem 2: Breakpoint Chemical Adjustment', route: '/s5p2'},
      newButton: 'New Breakpoint Value Problem',
      answerSet: {type: 'Br', decimals: 1}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `The free chlorine reading for your pool is ${this.units.freeCl} ppm.\u00A0\u00A0The total chlorine reading is ${this.units.totalCl} ppm.\u00A0\u00A0What is the breakpoint value for this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
