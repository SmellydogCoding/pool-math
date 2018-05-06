<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a We will be using this worksheet :
    v-card-text
      appChemicalAdjustmentWorksheet(:poolVolume='poolVolume', :desiredChange='desiredChange', :unitVolume='unitVolume', :changeProvided='changeProvided', :chemicalAmount='chemicalAmount', :waterFactor='waterFactor', :chemicalFactor='chemicalFactor', :total='total', :conversion='conversion', :algae="algae")
</template>

<script>
import ChemicalAdjustmentWorksheet from '../shared/ChemicalAdjustmentWorksheet'

export default {
  data() {
    return {
      poolVolume: 'Pool Volume', 
      desiredChange: 'Desired Change', 
      unitVolume: 'Unit Volume of Water', 
      changeProvided: 'Change Provided by the Chemical', 
      chemicalAmount: 'Amount of the Chemical', 
      waterFactor: 'Water Factor', 
      chemicalFactor: 'Chemical Factor', 
      total: 'Total',
      algae: false
    }
  },
  components: { appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet}
}
</script>
