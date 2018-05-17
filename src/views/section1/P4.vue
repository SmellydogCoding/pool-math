<template lang="pug">
  v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex(xs12 md6)
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
      problem: 's1p4',
      image: {src: 'src/assets/section1/problem4.jpg', alt: 'pool image for problem 4'},
      hint: {title: 'Hint for Problem 4', type: 'textHint', text: 'Yards * 3 = Feet'},
      next: {text: 'Problem 5: Inches to Feet', route: '/s1p5'},
      newButton: 'New Yards to Feet Problem',
      answerSet: {type: 'conversion', decimals: 0}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `Your pool is ${this.units.yards} Yards long.\u00A0\u00A0How many feet is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
