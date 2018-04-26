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
      problem: 's3p1',
      hint: {title: 'Hint for Problem 1', type: 'componentHint', component: 'SaturationIndexTable'},
      next: {text: 'Problem 2: Saturation Index with Cyanuric Acid', route: '/s3p2'},
      newButton: 'New Saturation Index Problem',
      answersetType: 'SI'
    }
  },
  components: { appAnswerBlock: AnswerBlock, appSaturationIndexBlock: SaturationIndexBlock },
  computed: {
    title() { return `The chemistry readings for your pool are:\u00A0\u00A0pH: ${this.units.pH}, Temperature: ${this.units.temperature}, Calcium Hardness: ${this.units.calcium}, Total Alkalinity: ${this.units.alkalinity}, Total Dissolved Solids: ${this.units.TDS}.\u00A0\u00A0What is the Saturation Index of this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, hint: this.hint, next: this.next, newButton: this.newButton, answersetType: this.answersetType};
    this.$store.dispatch('init', data);
  }
}
</script>
