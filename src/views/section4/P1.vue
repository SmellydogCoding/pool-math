<template lang="pug">
  v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex(xs12 md6)
          appChemicalAdjustmentWorksheet(:poolVolume='units.poolVolume', :unitVolume='units.unitVolume', :chemicalAmount='units.chemicalAmount', :chemicalType='units.chemicalType', :waterFactor='units.waterFactor', :total='units.total', :conversion='units.conversion', :algae="algae", :problemUse="problemUse")
        v-flex(xs12 md6)
          app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import ChemicalAdjustmentWorksheet from '../../components/shared/ChemicalAdjustmentWorksheet'

export default {
  data() {
    return {
      problem: 's4p1',
      hint: {title: 'Hint for Problem 1', type: 'componentHint', text: '', component: 'ChemicalAdjustmentTable'},
      next: {text: 'Problem 2: Chemical Adjustment - Raise Chlorine', route: '/s4p2'},
      newButton: 'New Add Algaecide Problem',
      answerSet: {type: 'Chemical Adjustment', decimals: 2},
      algae: true,
      problemUse: true
    }
  },
  components: { appAnswerBlock: AnswerBlock, appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet },
  computed: {
    title() { return `You need to add algaecide to your cloudy green pool.\u00A0\u00A0The label on the algaecide says that it takes ${this.units.chemicalAmount} ${this.units.chemicalType} of algaecide per ${this.units.unitVolume} gallons to kill the algae.\u00A0\u00A0How may gallons is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
