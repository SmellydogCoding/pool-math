<template lang="pug">
   v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex.CA-container(xs12 md6)
          appChemicalAdjustmentWorksheet(:poolVolume='units.poolVolume' :unitVolume='units.unitVolume' :desiredChange='units.desiredChange' :chemicalAmount='units.chemicalAmount' :chemicalType='units.chemicalUnit' :changeProvided='units.changeProvided' :waterFactor='units.waterFactor' :chemicalFactor='units.chemicalFactor' :total='units.total' :conversion='units.conversion' :problemUse="problemUse")
          p.mt-2.py-1.px-2.white.d-inline-block.rounded
            a.indigo--text.darken-4(:href="cT" target="new") Download the Chemical Adjustment Table
        v-flex.answer-block--background.pa-2(xs12 md6)
          app-SelectAnswer
          app-AnswerMessage
          app-NextOrNew
</template>

<script>
import ChemicalAdjustmentWorksheet from '../../components/shared/ChemicalAdjustmentWorksheet'
import cT from '../../assets/section4/Chemical Adjustment Chart.pdf'
import NextOrNew from '../../components/shared/NextOrNew'
import AnswerMessage from '../../components/shared/AnswerMessage'
import SelectAnswer from '../../components/shared/SelectAnswer'

export default {
  data() {
    return {
      problem: 's4p3',
      hint: {title: 'Hint for Problem 3', type: 'componentHint', text: '', component: 'ChemicalAdjustmentWorksheet'},
      next: {text: 'Problem 4: Chemical Adjustment - no label - Raise Alkalinity', route: '/chemical-adjustment-without-a-label-raise-alkalinity'},
      newButton: 'New Raise Chlorine without a Label Problem',
      answerSet: {type: 'Chemical Adjustment', decimals: 2},
      problemUse: true,
      cT
    }
  },
  components: { appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a ${this.units.poolVolume} gallon pool.\u00A0\u00A0The current free chlorine in your pool is ${this.units.currentValue} ppm.\u00A0\u00A0You want to raise the free chlorine to ${this.units.newValue} ppm using ${this.units.chemicalName}.\u00A0\u00A0How many ${this.units.conversionType} of ${this.units.chemicalName} are needed?` },
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
