<template lang="pug">
  v-content
    v-container
      v-layout(text-xs-center row wrap justify-center)
        v-flex(xs12).my-2
          p.title {{ title }}
      v-layout(text-xs-center row wrap justify-center)
        app-SaturationIndexBlock
        app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import SaturationIndexBlock from '../../components/shared/SaturationIndexBlock'

export default {
  data() {
    return {
      problem: 's3p2',
      hint: {title: 'Hint for Problem 2', type: 'componentHint', text: '', component: 'SaturationIndexTable', cyanuric: true},
      next: {text: 'Intro to Section 4', route: '/s4Intro'},
      newButton: 'New Saturation Index Problem',
      answerSet: {type: 'SI', decimals: 1}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appSaturationIndexBlock: SaturationIndexBlock },
  computed: {
    title() { return `The chemistry readings for your pool are:\u00A0\u00A0pH: ${this.units.pH}, Temperature: ${this.units.temperature}, Calcium Hardness: ${this.units.calcium}, Total Alkalinity: ${this.units.alkalinity}, Cyanuric Acid: ${this.units.cyanuric}, Total Dissolved Solids: ${this.units.TDS}.\u00A0\u00A0What is the Saturation Index of this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
