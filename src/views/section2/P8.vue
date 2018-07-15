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
      problem: 's2p8',
      image: {src: require('../../assets/section2/problem8.jpg'), alt: 'illustration for problem 8'},
      hint: {title: 'Hint for Problem 8', type: 'textHint', text: 'Volume = Radius * Radius * Depth of Water Lost (in Feet) * 3.14<br><br>feet = inches / 12'},
      next: {text: 'Intro to Section 3', route: '/intro-to-section-3'},
      newButton: 'New Hot Tub Water Loss Problem',
      answerSet: {type: 'water loss', decimals: 2}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a hot tub that is ${this.units.diameter} ft in diameter.\u00A0\u00A0This hot tub lost ${this.units.inches} inches of water overnight.\u00A0\u00A0What is the volume of water lost?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>