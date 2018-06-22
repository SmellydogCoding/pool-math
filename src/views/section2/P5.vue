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
      problem: 's2p5',
      image: {src: 'src/assets/section2/problem5.jpg', alt: 'illustration for problem 5'},
      hint: {title: 'Hint for Problem 5', type: 'textHint', text: 'Volume = Radius * Radius * 3.14 * Depth * 7.5<br><br>Radius = Diameter / 2'},
      next: {text: 'Problem 6: Volume of a Hot Tub with Seats', route: '/volume-of-water-in-a-hot-tub-with-seats'},
      newButton: 'New Hot Tub Volume Problem',
      answerSet: {type: 'volume', decimals: 2}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a hot tub (without seats) that is ${this.units.diameter} feet in diameter and ${this.units.depth} feet deep.\u00A0\u00A0What is the volume of this hot tub?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
