<template lang="pug">
  div.pa-3
    table.ma-a.text-xs-center
      tr
        th(colspan=3) Temperature
        th(colspan=2) Calcium Hardness
        th(colspan=2) Total Alkalinity
        th(colspan=2) Total Dissolved Solids
      tr
        td &deg;F
        td &deg;C
        td Tf
        td PPM
        td Cf
        td PPM
        td Af
        td PPM
        td TDSf
      tr
        td 32
        td 0.0
        td 0.0
        td 25
        td 1.0
        td 25
        td 1.4
        td less than 1000
        td 12.1
      tr
        td 37
        td 2.89
        td 0.1
        td 50
        td 1.3
        td 50
        td 1.7
        td 1000 or more
        td 12.2
      tr
        td 46
        td 7.8
        td 0.2
        td 75
        td 1.5
        td 75
        td 1.9
      tr
        td 53
        td 11.7
        td 0.3
        td 100
        td 1.6
        td 100
        td 2.0
      tr
        td 60
        td 15.6
        td 0.4
        td 125
        td 1.7
        td 125
        td 2.1
        td
      tr
        td 66
        td 18.9
        td 0.5
        td 150
        td 1.8
        td 150
        td 2.2
      tr
        td 76
        td 24.4
        td 0.6
        td 200
        td 1.9
        td 200
        td 2.3
      tr
        td 84
        td 28.9
        td 0.7
        td 250
        td 2.0
        td 250
        td 2.4
      tr
        td 94
        td 34.4
        td 0.8
        td 300
        td 2.1
        td 300
        td 2.5
      tr
        td 105
        td 40.6
        td 0.9
        td 400
        td 2.2
        td 400
        td 2.6
      tr
        td 
        td 
        td 
        td 800
        td 2.5
        td 800
        td 2.9
    tfoot.ml-4 Key:&nbsp;&nbsp;Tf - Temperature Factor&nbsp;&nbsp;&nbsp;&nbsp;Cf - Calcuim Factor&nbsp;&nbsp;&nbsp;&nbsp;Af - Alkalinity Factor&nbsp;&nbsp;&nbsp;&nbsp;TDSf - Total Dissolved Solids Factor
    p.mt-2 If you are taking the Certified Pool Operator class, this chart is also on page 69 of your Pool and Spa Operator Handbook.&nbsp;&nbsp;Use the chart to find the factor for each chemistry value.&nbsp;&nbsp;I your value is between 2 of the values on the table, then use the factor for the next highest value.&nbsp;&nbsp;For example, if the temperature is 79F, use the factor for 84F.&nbsp;&nbsp;use the factors to find Saturation Index using the following formula: #[br]
      span.light-blue--text Saturation Index = pH + Tf + Cf + Af - TDSf
    p.body-2(:class="{ 'mb-0': !cyanuric}") Download #[a(:href="siT" target="new") this table (as a PDF).] #[span.right Download a #[a(:href="siW" target="new") Saturation Index WorkSheet.]]
    p.mb-0(v-if="cyanuric") Remember that if your pool has Cyanuric Acid you have to use the Adjusted Total Alkalinity to find the Alkalinity Factor. #[br]
      span.light-blue--text(v-if="cyanuric") Adjusted Total Alkalinity = Total Alkalinity - (Cyanuric Adid / 3).
</template>

<script>
import siT from '../../assets/section3/Saturation Index Table.pdf'
import siW from '../../assets/section3/Saturation Index Worksheets.pdf'
export default {
  data() {
    return { siT, siW }
  },
  props: [ 'cyanuric' ]
}
</script>

<style scoped>
  td, th { padding: 0.25rem 1.0rem; }
  th, td:nth-of-type(3), td:nth-of-type(5), td:nth-of-type(7) { border-right: 1px solid #ccc; }
  span.right { float: right; }
</style>
