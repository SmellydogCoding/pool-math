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
      problem: 's2p6',
      image: {src: require('../../assets/section2/problem6.jpg'), alt: 'illustration for problem 6'},
      hint: {title: 'Hint for Problem 6', type: 'textHint', text: 'Volume = Radius * Radius * 3.14 * Depth * 7.5<br><br>Radius = Diameter / 2<br><br>Find the volume for each section and then add the 2 sections togeather to get the total.'},
      next: {text: 'Problem 7: Volume of Water Loss in a Pool', route: '/volume-of-water-loss-in-a-swimming-pool'},
      newButton: 'New Hot Tub with Seats Volume Problem',
      answerSet: {type: 'volume', decimals: 2}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a hot tub where the top section is ${this.units.tdiameter} feet in diameter and ${this.units.tdepth} feet deep.\u00A0\u00A0The bottom section (where the seats are) is ${this.units.sdiameter} feet in diameter and ${this.units.sdepth} feet deep.\u00A0\u00A0What is the volume of this hot tub?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
