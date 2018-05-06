<template lang="pug">
  div
    table.ma-a.text-xs-center
      tbody.black
        tr
          td 
          td.border--right 
          td.blue.darken-4 Pool Volume
          td.border--left.border--right 
          td.green.darken-4 Desired Change
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
          td.red.darken-4 Unit Volume of Water
          td.border--left.border--right 
          td.red.darken-4 Change Provided by Chemical
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
          td.red.darken-4 Amount of the the Chemical
          td.grey.darken-2 X
          td.purple.darken-4 Water Factor
          td.grey.darken-2 X
          td.orange.darken-4 Chemical Factor
          td.grey.darken-2 &#61;
          td.white.black--text.body-2 Total
    p.text-xs-center.mt-2
      a.blue--text.darken-2(:href="cW" target="new") Download the Chemical Adjustment Worksheet
</template>

<script>
import cW from '../../assets/section4/Chemical Adjustment Worksheets.pdf'
export default {
  data() {
    return { cW }
  }
}
</script>


<style scoped>
  td { padding: 0.25rem 1.0rem; height: 3.125rem;}
  .border--bottom { border-bottom: 1px solid #ccc; }
  .border--left { border-left: 1px solid #ccc; }
  .border--right { border-right: 1px solid #ccc; }
  td:last-child { min-width: 2.0rem; }
  @media screen and (max-height: 700px) {
    .slim td { height: 2.0rem; }
  }
</style>