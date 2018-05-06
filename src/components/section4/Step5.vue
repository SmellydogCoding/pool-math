<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a About Problem 1:
    v-card-text
      p Problem 1 is adding an Algaecide.&nbsp;&nbsp;Although this is not a chemical adjustment, you can still use the Chemical Adjustment Worksheet, you just don't fill in the 3rd column.
      p For example, if you need to add an algaecide to a 85,000 gallon pool and the label says to add 8 fl.oz. of the algaecide for every 10,000 gallons of pool water, you would use the worksheet like this:
      appChemicalAdjustmentWorksheet(:poolVolume='poolVolume', :desiredChange='desiredChange', :unitVolume='unitVolume', :changeProvided='changeProvided', :chemicalAmount='chemicalAmount', :waterFactor='waterFactor', :chemicalFactor='chemicalFactor', :total='total', :conversion='conversion', :algae="algae")
</template>

<script>
import ChemicalAdjustmentWorksheet from '../shared/ChemicalAdjustmentWorksheet'

export default {
  data() {
    return {
      poolVolume: '85,000', 
      desiredChange: '', 
      unitVolume: '10,000', 
      changeProvided: '', 
      chemicalAmount: '12.0 fl.oz.', 
      waterFactor: '8.5', 
      chemicalFactor: '', 
      total: '102 fl.oz.',
      conversion: '102 fl.oz. / 128 = 0.8 gallons',
      algae: true
    }
  },
  components: { appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet }
}
</script>
