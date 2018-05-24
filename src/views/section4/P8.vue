<template lang="pug">
   v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex.pr-3(xs12 md6)
          appChemicalAdjustmentWorksheet(:poolVolume='units.poolVolume' :unitVolume='units.unitVolume' :desiredChange='units.desiredChange' :chemicalAmount='units.chemicalAmount' :chemicalType='units.chemicalUnit' :changeProvided='units.changeProvided' :waterFactor='units.waterFactor' :chemicalFactor='units.chemicalFactor' :total='units.total' :conversion='units.conversion' :problemUse="problemUse")
          p.mt-2.py-1.px-2.white.d-inline-block.rounded
            a.indigo--text.darken-4(:href="cT" target="new") Download the Chemical Adjustment Table
        v-flex.answer-block--background(xs12 md6)
          app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import ChemicalAdjustmentWorksheet from '../../components/shared/ChemicalAdjustmentWorksheet'
import cT from '../../assets/section4/Chemical Adjustment Chart.pdf'

export default {
  data() {
    return {
      problem: 's4p8',
      hint: {title: 'Hint for Problem 8', type: 'componentHint', text: '', component: 'ChemicalAdjustmentWorksheet'},
      next: {text: 'Intro to Section 5', route: '/s5p0'},
      newButton: 'New Lower Chlorine without a Label Problem',
      answerSet: {type: 'Chemical Adjustment', decimals: 2},
      problemUse: true,
      cT
    }
  },
  components: { appAnswerBlock: AnswerBlock, appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet },
  computed: {
    title() { return `You have a ${this.units.poolVolume} gallon pool.\u00A0\u00A0The current free chlorine in your pool is ${this.units.currentValue} ppm.\u00A0\u00A0You want to lower the free chlorine to ${this.units.newValue} ppm using ${this.units.chemicalName}.\u00A0\u00A0How many ${this.units.conversionType} of ${this.units.chemicalName} are needed?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>

<style scoped>
  .rounded { border-radius: 10px; }
</style>
