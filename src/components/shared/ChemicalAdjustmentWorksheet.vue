<template lang="pug">
  div
    table.ma-a.text-xs-center
      tbody.black
        tr
          td 
          td.border--right 
          td.blue.darken-4 {{ poolVolume }}
          td(:class="{'border--right': !algae }").border--left
          td(:class="{ black: algae, green: !algae }").darken-4 {{ desiredChange }}
          td(:class="{'border--left': !algae }")
          td 
        tr.slim
          td 
          td.border--right 
          td.grey.darken-2 &divide;
          td(:class="{'border--right': !algae }").border--left
          td(:class="{ black: algae, grey: !algae, 'black--text': algae }").darken-2 &divide;
          td(:class="{'border--left': !algae }")
          td 
        tr
          td 
          td.border--right 
          td.red.darken-4 {{ unitVolume }}
          td(:class="{'border--right': !algae }").border--left 
          td(:class="{ black: algae, red: !algae }").darken-4 {{ changeProvided }}
          td(:class="{'border--left': !algae }")
          td 
        tr.slim
          td.border--bottom 
          td.border--right.border--bottom 
          td.grey.darken-2 &#61;
          td(:class="{'border--right': !algae }").border--left.border--bottom
          td(:class="{ black: algae, grey: !algae, 'black--text': algae, 'border--bottom': algae }").darken-2 &#61;
          td(:class="{'border--left': !algae }").border--bottom
          td.border--bottom
        tr
          td.red.darken-4 {{ chemicalAmount }}
          td.grey.darken-2 X
          td.purple.darken-4 {{ waterFactor }}
          td(:class="{ hide: algae }").grey.darken-2 X
          td(:class="{ grey: algae, 'darken-2': algae, orange: !algae, 'darken-4': !algae }") {{ chemicalFactor }}
          td.grey.darken-2 &#61;
          td.white.black--text.body-2 {{ total }}
    p.text-xs-center.mt-2(v-if="!conversion")
      a.blue--text.darken-2(:href="cW" target="new") Download the Chemical Adjustment Worksheet
    p.text-xs-center.mt-2(v-if="conversion") {{ conversion }}
</template>

<script>
import cW from '../../assets/section4/Chemical Adjustment Worksheets.pdf'
export default {
  data() {
    return { cW }
  },
  props: ['poolVolume', 'desiredChange', 'unitVolume', 'changeProvided', 'chemicalAmount', 'waterFactor', 'chemicalFactor', 'total', 'conversion', 'algae']
}
</script>


<style scoped>
  td { padding: 0.25rem 1.0rem; height: 3.125rem;}
  .border--bottom { border-bottom: 1px solid #ccc !important; }
  .border--left { border-left: 1px solid #ccc; }
  .border--right { border-right: 1px solid #ccc; }
  td:last-child { min-width: 2.0rem; }
  .hide { color: #616161; }
  @media screen and (max-height: 700px) {
    .slim td { height: 2.0rem; }
  }
</style>