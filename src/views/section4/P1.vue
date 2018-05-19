<template lang="pug">
   v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex.pr-3(xs12 md6)
          app-ChemicalAdjustmentWorksheetAlgaecide(:poolVolume='units.poolVolume' :unitVolume='units.unitVolume' :chemicalAmount='units.chemicalAmount' :chemicalType='units.chemicalType' :waterFactor='units.waterFactor' :total='units.total' :conversion='units.conversion' :problemUse="problemUse")
        v-flex.answer-block--background(xs12 md6)
          app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import ChemicalAdjustmentWorksheetAlgaecide from '../../components/shared/ChemicalAdjustmentWorksheetAlgaecide'

export default {
  data() {
    return {
      problem: 's4p1',
      hint: {title: 'Hint for Problem 1', type: 'componentHint', text: '', component: 'ChemicalAdjustmentWorksheetAlgaecide'},
      next: {text: 'Problem 2: Chemical Adjustment with a Label', route: '/s4p2'},
      newButton: 'New Add Algaecide Problem',
      answerSet: {type: 'Chemical Adjustment', decimals: 2},
      problemUse: true
    }
  },
  components: { appAnswerBlock: AnswerBlock, appChemicalAdjustmentWorksheetAlgaecide: ChemicalAdjustmentWorksheetAlgaecide },
  computed: {
    title() { return `You need to add algaecide to your cloudy green ${this.units.poolVolume} gallon pool.\u00A0\u00A0The label on the algaecide says that it takes ${this.units.chemicalAmount} ${this.units.chemicalType} of algaecide per ${this.units.unitVolume} gallons to kill the algae.\u00A0\u00A0How many gallons is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
