<template lang="pug">
  div
    table.ma-a.text-xs-center(:class="{'white--text': problemUse || hintModal}")
      tbody.black
        tr
          td 
          td.border--right 
          td(:class="{'hide--pool-volume': problemUse && attempts < 2 && !correctState}").blue.darken-4 {{ poolVolume }} {{ showUnits.waterUnits }}
          td.border--left.border--right
          td(:class="{'hide--desired-change': problemUse && attempts < 2 && !correctState}").green.darken-4 {{ desiredChange }} {{ showUnits.chemUnits }}
          td.border--left
          td 
        tr.slim
          td 
          td.border--right 
          td.grey.darken-2 &divide;
          td.border--left.border--right
          td.grey.darken-2 &divide;
          td.border--left
          td 
        tr
          td 
          td.border--right 
          td(:class="{'hide--chemical-cells': problemUse && attempts < 2 && !correctState}").red.darken-4 {{ unitVolume }} {{ showUnits.waterUnits }}
          td.border--left.border--right
          td(:class="{'hide--chemical-cells': problemUse && attempts < 2 && !correctState}").red.darken-4 {{ changeProvided }} {{ showUnits.chemUnits }}
          td.border--left
          td 
        tr.slim
          td.border--bottom 
          td.border--right.border--bottom 
          td.grey.darken-2 &#61;
          td.border--left.border--right.border--bottom
          td.grey.darken-2 &#61;
          td.border--left.border--bottom
          td.border--bottom
        tr
          td(:class="{'hide--chemical-cells': problemUse && attempts < 2 && !correctState}").red.darken-4 {{ chemicalAmount }} {{ chemicalType }}
          td.grey.darken-2 X
          td(:class="{'hide--water-factor': problemUse && attempts < 3 && !correctState}").purple.darken-4 {{ waterFactor }}
          td.grey.darken-2 X
          td(:class="{'hide--chemical-factor': problemUse && attempts < 3 && !correctState}").orange.darken-4 {{ chemicalFactor }}
          td.grey.darken-2 &#61;
          td(:class="{'hide--total': problemUse && !correctState}").white.black--text.body-2 {{ total }} {{ chemicalType }}
    p.text-xs-center.mt-2(v-if="!conversion")
      a.blue--text.darken-2(:href="cW" target="new") Download the Chemical Adjustment Worksheet
    p.text-xs-center.mt-2.mb-0.subheading(v-if="conversion && correctState") {{ conversion }}
</template>

<script>
import cW from '../../assets/section4/Chemical Adjustment Worksheets.pdf'
export default {
  data() {
    return { cW }
  },
  props: ['poolVolume', 'desiredChange', 'unitVolume', 'changeProvided', 'chemicalAmount', 'chemicalType', 'waterFactor', 'chemicalFactor', 'total', 'conversion', 'problemUse', 'hintModal'],
  computed: {
    attempts() { return this.$store.getters.attempts },
    correctState() { return this.$store.getters.answerMessage.showCorrect },
    // if the saturation index worksheet component is called from the component hint component we don't want to display gallons or ppm
    showUnits() { return !this.hintModal ? { chemUnits: 'ppm', waterUnits: 'gallons' } : { chemUnits: '', waterUnits: '' } }
  }
}
</script>


<style scoped>
  .subheading { font-weight: 600; }
  td { padding: 0.25rem 1.0rem; height: 3.125rem;}
  .hintModal td { color: #fff; }
  /* when using Vuetify colors for table cells the border color is automatically set to the Vuetify color */
  /* in this case I needed to override it */
  .border--bottom { border-bottom: 1px solid #ccc !important; }
  .border--left { border-left: 1px solid #ccc; }
  .border--right { border-right: 1px solid #ccc; }
  /* give the Total cell the same width as the Chemical Amount cell */
  td:last-child { min-width: 2.0rem; }
  /* using vue-show or vue-if to hide the cell was changing the apparence of the table */
  /* so I hide the contents by making the text the same color as the background */
  .hide--pool-volume { color: #0d47a1 !important; }
  .hide--desired-change { color: #1b5e20 !important; }
  .hide--chemical-cells { color: #b71c1c !important; }
  .hide--water-factor { color: #4a148c !important; }
  .hide--chemical-factor { color: #e65100 !important; }
  .hide--math-operator { color: #616161 !important; }
  .hide--total { color: #ffffff !important; }
  @media screen and (max-height: 700px) {
    .slim td { height: 2.0rem; }
  }
</style>