<template lang="pug">
  div
    table.ma-a.text-xs-center.chart
      thead
        tr.blue.darken-3
          td.body-3 Amount of Water Treated
          td.body-3(colspan="3") 10,000 Gallons
        tr.brown.lighten-5.grey--text.text--darken-4
          td.body-3 Chemical
          td.body-3(colspan="3") Desired Change
      tbody
        tr.brown.darken-1.body-2
          td.label.body-3 Increase Chlorine
          td.body-3 1 ppm
          td.body-3 5 ppm
          td.body-3 10 ppm
        tr
          td Chlorine Gas
          td 1.3 oz.
          td 6.7 oz.
          td 13 oz.
        tr
          td Calcium Hypochlorite (67%)
          td 2.0 oz.
          td 10 oz.
          td 20 oz.
        tr
          td Sodium Hypochlorite (12%)
          td 10.7 fl.oz.
          td 54.4 fl.oz.
          td 105.6 fl.oz.
        tr
          td Lithium Hypochlorite
          td 3.8 oz.
          td 19.2 oz.
          td 38.4 oz.
        tr
          td Dichlor (62%)
          td 2.1 oz.
          td 10.75 oz.
          td 20.8 oz.
        tr
          td Dichlor (56%)
          td 2.4 oz.
          td 12 oz.
          td 22.4 oz.
        tr
          td Trichlor
          td 1.5 oz.
          td 7.5 oz.
          td 14 oz.
        tr.green.darken-1.body-2
          td.label.body-3 Increase Total Alkalinity
          td.body-3 10 ppm
          td.body-3 30 ppm
          td.body-3 50 ppm
        tr
          td Sodium Bicarbonate
          td 1.4 lbs.
          td 4.2 lbs.
          td 7.0 lbs.
        tr
          td Sodium Carbonate
          td 0.875 lbs.
          td 2.6 lbs.
          td 4.4 lbs.
        tr
          td Sodium Sesquicarbonate
          td 1.25 lbs.
          td 3.75 lbs.
          td 6.25 lbs.
        tr.green.darken-3.body-2
          td.label.body-3 Decrease Total Alkalinity
          td.body-3 10 ppm
          td.body-3 30 ppm
          td.body-3 50 ppm
        tr
          td Muriatic Acid (31.4%)
          td 26 fl.oz.
          td 76.8 fl.oz.
          td 128 fl.oz.
        tr
          td Sodium Bisulfate
          td 2.1 lbs.
          td 6.4 lbs.
          td 10.5 lbs.
        tr.light-blue.darken-2.body-2
          td.label.body-3 Increase Calcium Hardness
          td.body-3 10 ppm
          td.body-3 30 ppm
          td.body-3 50 ppm
        tr
          td Calcium Chloride (100%)
          td 0.9 lbs.
          td 2.8 lbs.
          td 4.6 lbs.
        tr
          td Calcium Chloride (77%)
          td 1.2 lbs.
          td 3.6 lbs.
          td 6.0 lbs.
        tr
          td Calcium Chloride (77%)
          td 1.2 lbs.
          td 3.6 lbs.
          td 6.0 lbs.
        tr.orange.darken-4.body-2
          td.label.body-3 Increase Stabilizer
          td.body-3 10 ppm
          td.body-3 30 ppm
          td.body-3 50 ppm
        tr
          td Cyanuric Acid
          td 0.81 lbs.
          td 2.5 lbs.
          td 4.1 lbs.
        tr.red.darken-2.body-2
          td.label.body-3 Neutralize Chlorine
          td.body-3 1 ppm
          td.body-3 5 ppm
          td.body-3 10 ppm
        tr
          td Sodium Theosulfate
          td 2.6 oz.
          td 13 oz.
          td 26 oz.
        tr
          td Sodium Sulfite
          td 2.4 oz.
          td 12 oz.
          td 24 oz.
    p.subheading.mt-2.text-xs-center How to use this chart
    p The number to the right of each chemical name shows how much chemical it takes to raise or lower a chemical level in your pool by a certain amount per unit volume of water.
    p For example, if you find Calcium Hypochlorite on the chart it tells you that 2.0 oz will raise the chlorine level by 1 ppm per 10,000 gallons of water.&nbsp;&nbsp;This is how it relates to the Chemical Adjustment Worksheet:
    table.example.text-xs-center
      thead
        tr.blue.darken-3
          td Amount of Chemical
          td Unit Volume of Water
          td Change Provided by the Chemical
      tbody
        tr
          td 2.0 oz.
          td 10,000
          td 1 ppm
    p.text-xs-center.mt-4
      a.blue--text.darken-2(:href="cC" target="new") Download the Chemical Adjustment Chart
</template>

<script>
import cC from '../../assets/section4/Chemical Adjustment Chart.pdf'
export default {
  data() {
    return { cC }
  }
}
</script>


<style scoped>
  .body-3 { font-size: 1.1rem; font-weight: 500; }
  table.chart td { padding: 0.25rem 1.0rem; border-right: 1px solid #ccc;}
  table.chart thead tr td { border-right: none; }
  table.chart tbody td:first-child:not(.label) { text-align: left; }
  table.example td { border: 1px solid #ccc; padding: 0.25rem 1.0rem; }
</style>