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
      problem: 's2p2',
      image: {src: require('../../assets/section2/problem2.jpg'), alt: 'illustration for problem 2'},
      hint: {title: 'Hint for Problem 2', type: 'textHint', text: 'Surface Area = Radius * Radius * 3.14<br><br>Radius = Diameter / 2'},
      next: {text: 'Problem 3: Volume of a Swimming Pool', route: '/volume-of-water-in-a-swimming-pool'},
      newButton: 'New Hot Tub Area Problem',
      answerSet: {type: 'area', decimals: 2}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a hot tub that is ${this.units.diameter} ft in diameter.\u00A0\u00A0What is the surface area of this hot tub?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>