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
          p.mb-0.white(v-if="attempts >= 1 || correctState") {{ units.totalCl }} ppm total chlorine - {{ units.freeCl }} ppm free chlorine = {{ units.totalCl - units.freeCl }} ppm combined chlorine
          p.my-0.white(v-if="attempts >= 1 || correctState") {{ units.totalCl - units.freeCl }} ppm combined chlorine * 10 = {{ units.breakpoint }} ppm breakpoint value
          p.mt-0.white(v-if="attempts >= 2 || correctState") {{ units.breakpoint }} ppm breakpoint value - {{ units.freeCl }} ppm free chlorine = {{ units.desiredChange }} ppm desired change
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
      problem: 's5p2',
      hint: {title: 'Hint for Problem 2', type: 'componentHint', text: '', component: 'ChemicalAdjustmentWorksheet'},
      next: {text: 'Intro to Section 6', route: '/soon'},
      newButton: 'New Breakpoint Chemical Adjustment Problem',
      answerSet: {type: 'Chemical Adjustment', decimals: 2},
      problemUse: true,
      cT
    }
  },
  components: { appAnswerBlock: AnswerBlock, appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet },
  computed: {
    title() { return `You have a ${this.units.poolVolume} gallon pool.\u00A0\u00A0The current free chlorine in your pool is ${this.units.freeCl} ppm.\u00A0\u00A0The total chlorine is ${this.units.totalCl} ppm.\u00A0\u00A0How many ${this.units.conversionType} of ${this.units.chemicalName} are needed to reach breakpoint?` },
    correctState() { return this.$store.getters.answerMessage.showCorrect },
    attempts() { return this.$store.getters.attempts },
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
  p { font-weight: 500; }
</style>
