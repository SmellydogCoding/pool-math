<template lang="pug">
   v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex.px-2(xs12 md6)
          app-SaturationIndexBlock
        v-flex.answer-block--background.pa-2(xs12 md6)
          app-SelectAnswer
          app-AnswerMessage
          app-NextOrNew
</template>

<script>
import SaturationIndexBlock from '../../components/shared/SaturationIndexBlock'
import NextOrNew from '../../components/shared/NextOrNew'
import AnswerMessage from '../../components/shared/AnswerMessage'
import SelectAnswer from '../../components/shared/SelectAnswer'

export default {
  data() {
    return {
      problem: 's3p1',
      hint: {title: 'Hint for Problem 1', type: 'componentHint', text: '', component: 'SaturationIndexTable'},
      next: {text: 'Problem 2: Saturation Index with Cyanuric Acid', route: '/s3p2'},
      newButton: 'New Saturation Index Problem',
      answerSet: {type: 'SI', decimals: 1}
    }
  },
  components: { appSaturationIndexBlock: SaturationIndexBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `The chemistry readings for your pool are:\u00A0\u00A0pH: ${this.units.pH}, Temperature: ${this.units.temperature}, Calcium Hardness: ${this.units.calcium}, Total Alkalinity: ${this.units.alkalinity}, Total Dissolved Solids: ${this.units.TDS}.\u00A0\u00A0What is the Saturation Index of this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
