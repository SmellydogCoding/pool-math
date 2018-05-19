<template lang="pug">
   v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex.pr-3(xs12 md6)
          appChemicalAdjustmentWorksheet(:poolVolume='units.poolVolume' :unitVolume='units.unitVolume' :desiredChange='units.desiredChange' :chemicalAmount='units.chemicalAmount' :chemicalType='units.chemicalType' :changeProvided='units.changeProvided' :waterFactor='units.waterFactor' :chemicalFactor='units.chemicalFactor' :total='units.total' :conversion='units.conversion' :problemUse="problemUse")
        v-flex.answer-block--background(xs12 md6)
          app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import ChemicalAdjustmentWorksheet from '../../components/shared/ChemicalAdjustmentWorksheet'

export default {
  data() {
    return {
      problem: 's4p2',
      hint: {title: 'Hint for Problem 2', type: 'componentHint', text: '', component: 'ChemicalAdjustmentWorksheet'},
      next: {text: 'Problem 3: Chemical Adjustment - Raise Alkalinity', route: '/s4p3'},
      newButton: 'New Add Chlorine with a Label Problem',
      answerSet: {type: 'Chemical Adjustment', decimals: 2},
      algae: false,
      problemUse: true
    }
  },
  components: { appAnswerBlock: AnswerBlock, appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet },
  computed: {
    title() { return `You have a ${this.units.poolVolume} gallon pool.\u00A0\u00A0The current free chlorine in your pool is ${this.units.currentValue} ppm.\u00A0\u00A0You want to raise the free chlorine to ${this.units.newValue} ppm using ${this.units.chemicalName}.\u00A0\u00A0The label on the ${this.units.chemicalName} container says that ${this.units.chemicalAmount} ${this.units.chemicalType} will raise the free chlorine ${this.units.changeProvided} ppm per ${this.units.unitVolume} gallons of water.\u00A0\u00A0How many ${this.units.conversionType} of ${this.units.chemicalName} are needed?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
