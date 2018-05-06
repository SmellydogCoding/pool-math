<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a Example Problem:
    v-card-text
      p.mt-2 The current chlorine level in your pool is 1 ppm.&nbsp;&nbsp;You want to raise it to 3 ppm using Calcium Hypochlorite.&nbsp;&nbsp;Your pool is 45,000 gallons.&nbsp;&nbsp;How much Calcium Hypochlorite do you need to add?
      p.mt-2 Step 1: Calculate your desired chemical change.&nbsp;&nbsp;The desired chemical change is simply the difference between the chemical reading in your pool now and what you want the change it to.&nbsp;&nbsp;In this example your chlorine is at 1 ppm now and you want to change it to 3 ppm.&nbsp;&nbsp;The difference between 3 and 1 (i.e. 3 - 1) is 2.&nbsp;&nbsp;So in this example our #[span.green--text.darken-4 desired chemical change is 2 ppm].&nbsp;&nbsp;Enter this number in the Desired Chemical Change box on the Chemical Adjustment Worksheet.
      p Step 2: Find the chemical on the Chemical Adjustment Chart to find the Amount of Chemical, Unit Volume of Water, and the Change Provided by the Chemical.&nbsp;&nbsp;In this example we are using Calcium Hypochlorite so if you find Calcium Hypochlorite on the chart you will see that it tells you that 2.0 oz will raise the chlorine level by 1 ppm per 10,000 gallons of water.&nbsp;&nbsp;So in this example the #[span.red--text.darken-4 Amount of Chemical is 2.0 oz., the Unit Volume of Water is 10,000, and the Change Provided by the Chemical is 1 ppm].&nbsp;&nbsp;Enter these numbers in the appropriate boxes on the worksheet.
      p Step 3: The volume of the pool was given to us - #[span.blue--text.darken-4 45,000 gallons] - so enter that number in the Pool Volume box of the worksheet.
      p Step 4: Divide the Pool Volume by the Unit Volume of Water and enter that number in the Water Factor box of the worksheet.
      p Step 5: Divide the Desired Chemical Change by the Change Provided by the Chemical and enter that number in the Chemical Factor box of the worksheet.
      p Step 6: Multiply the Amount of the Chemical, the Water Factor, and the Chemical Factor together and enter that number in the Total box of the worksheet.
      p Step 7: You're almost done!&nbsp;&nbsp;Depending on how big the total is, you may need to covert ounces into pounds or fluid ounces into gallons.&nbsp;&nbsp;You mastered that in Section 2 right?&nbsp;&nbsp;Here is the filled out worksheet for this problem:
      appChemicalAdjustmentWorksheet(:poolVolume='poolVolume', :desiredChange='desiredChange', :unitVolume='unitVolume', :changeProvided='changeProvided', :chemicalAmount='chemicalAmount', :waterFactor='waterFactor', :chemicalFactor='chemicalFactor', :total='total', :conversion='conversion', :algae="algae")
      p So the answer to this question would be: #[span.green--text.lighten-4 1.13 Pounds].
      p.mt-4 An alternative to using the worksheet would be to use this formula:
      p Amount of Chemical * (Pool Volume / Unit Volume of Water) * (Desired Chemical Change / Change Provided By the Chemical) = Total
      p In the example above: 2.0 * (45000 / 10000) * (2 / 1) = 18.&nbsp;&nbsp;You would then covert the total to pounds or gallons if needed.
</template>

<script>
import ChemicalAdjustmentWorksheet from '../shared/ChemicalAdjustmentWorksheet'

export default {
  data() {
    return {
      poolVolume: '45,000', 
      desiredChange: '2', 
      unitVolume: '10,000', 
      changeProvided: '1', 
      chemicalAmount: '2.0 oz.', 
      waterFactor: '4.5', 
      chemicalFactor: '2', 
      total: '18 oz.',
      conversion: '18 oz. / 16 = 1.13 pounds',
      algae: false
    }
  },
  components: { appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet }
}
</script>
