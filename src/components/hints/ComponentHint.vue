<template lang="pug">
  span
    v-btn(color="orange darken-1" dark @click.native.stop="dialog = !dialog") Hint
    v-dialog(v-model="dialog" content-class="hint--dialog-component")
      v-card
        v-card-title.headline {{ title }}
        v-card-text.pt-0
          component(:is="componentToUse" :cyanuric="cyanuric" :poolVolume="poolVolume" :desiredChange="desiredChange" :unitVolume="unitVolume" :changeProvided="changeProvided" :chemicalAmount="chemicalAmount" :waterFactor="waterFactor" :chemicalFactor="chemicalFactor" :total="total" :hintModal="hintModal")
        v-card-actions
          v-spacer
          v-btn(color="primary" @click.native="dialog = !dialog") Close
</template>

<script>
  const SaturationIndexTable = () => import('../shared/SaturationIndexTable.vue');
  const ChemicalAdjustmentTable = () => import('../shared/ChemicalAdjustmentTable.vue');
  const ChemicalAdjustmentWorksheet = () => import('../shared/ChemicalAdjustmentWorksheet.vue');
  const ChemicalAdjustmentWorksheetAlgaecide = () => import('../shared/ChemicalAdjustmentWorksheetAlgaecide.vue');

  export default {
    data () {
      return {
        dialog: false, 
        width: '',
        poolVolume: 'Pool Volume', 
        desiredChange: 'Desired Change', 
        unitVolume: 'Unit Volume of Water', 
        changeProvided: 'Change Provided by the Chemical', 
        chemicalAmount: 'Amount of the Chemical', 
        waterFactor: 'Water Factor', 
        chemicalFactor: 'Chemical Factor', 
        total: 'Total',
        hintModal: true
      }
    },
    props: ['title','component', 'cyanuric'],
    components: {
      appSaturationIndexTable: SaturationIndexTable,
      appChemicalAdjustmentTable: ChemicalAdjustmentTable,
      appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet,
      appChemicalAdjustmentWorksheetAlgaecide: ChemicalAdjustmentWorksheetAlgaecide
    },
    computed: {
      data() { return this.$store.getters.select },
      componentToUse() { return `app-${this.component}` },
    },
  }
</script>
