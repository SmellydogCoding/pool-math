<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a Chemical Adjustment using Breakpoint value
    v-card-text
      p Once we know the breakpoint value we can use that to calculate othe desired change.&nbsp;&nbsp;The desired change is the breakpoint value minus the free chlorine:
      p.blue--text.darken-4 Breakpoint Value - Free Chlorine = Desired Change
      p Once you know the desired change, you can use that to do a chemical adjustment.&nbsp;&nbsp;The chemical adjustement for breakpoint chlorination is done in the same way as the chemical adjustments in Section 4.
      p.subheading.text-xs-center Sample Problem
      p You have a 65,000 gallon pool.&nbsp;&nbsp;The free chlorine measures 2 ppm and the total chlroine measures 2.5 ppm.&nbsp;&nbsp;How many gallons of sodium hypochlorite do you need to reach the breakpoint for this pool?
      p Combined Chlorine: #[span.blue--text.darken-4 2.5 - 2.0 = 0.5 ppm]
      p Breakpoint Value: #[span.blue--text.darken-4 0.5 * 10 = 5 ppm]
      p Desired Change: #[span.blue--text.darken-4 5 - 2 = 3 ppm]
      p Once you know your Desired Change you can fill out your Chemical Adjustment Worksheet:
      app-ChemicalAdjustmentWorksheet(:poolVolume='poolVolume' :desiredChange='desiredChange' :unitVolume='unitVolume' :changeProvided='changeProvided' :chemicalAmount='chemicalAmount' :waterFactor='waterFactor' :chemicalFactor='chemicalFactor' :total='total' :algae="algae")
      p.text-xs-center.mt-2.subheading {{ conversion }}
</template>

<script>
import ChemicalAdjustmentWorksheet from '../shared/ChemicalAdjustmentWorksheet'

export default {
  data() {
    return {
      poolVolume: '65,000', 
      desiredChange: '3', 
      unitVolume: '10,000', 
      changeProvided: '1', 
      chemicalAmount: '10.7 fl.oz.', 
      waterFactor: '6.5', 
      chemicalFactor: '3', 
      total: '208.65 fl.oz.',
      conversion: '208.65 fl.oz. / 128 = 1.63 gallons',
      algae: false
    }
  },
  components: { appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet}
}
</script>
