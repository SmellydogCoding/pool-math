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
      problem: 's2p7',
      image: {src: 'src/assets/section2/problem7.jpg', alt: 'illustration for problem 7'},
      hint: {title: 'Hint for Problem 7', type: 'textHint', text: 'Volume = Length * Width * Depth of Water Lost (in Feet) * 7.5<br><br>Feet = Inches / 12'},
      next: {text: 'Problem 8: Volume of Water Lost in a Hot Tub', route: '/volume-of-water-loss-in-a-hot-tub'},
      newButton: 'New Pool Water Loss Problem',
      answerSet: {type: 'water loss', decimals: 2}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a rectangular pool that is ${this.units.length} feet long and ${this.units.width} feet wide.\u00A0\u00A0This pool lost ${this.units.inches} inches of water overnight.\u00A0\u00A0What is the volume of water that was lost?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
