<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a How Filter Size and Flow Rate Relate to Each Other
    v-card-text
      p.mt-2 If you know what the flow rate for your system is, you can calculate how large of a filter is needed for that system using this formula:
      p.blue--text.darken-4 Flow Rate / Filter Media Rate = Filter Area Required (Ft&sup2;)
      p For example, lets say that your current sand filter is under sized and you want to replace it.&nbsp;&nbsp;The flow rate for your system is 150 gallons per minute (gpm) and the filter media rate for the replacement sand filter is 15 gpm/ft&sup2;.&nbsp;&nbsp;You will need to select a filter with a surface area of at least 10ft&sup2; : #[span.blue--text.darken-4 150 / 15 = 10ft&sup2;]
      p.mt-2 If you know the total surface area of your filter, then you can calculate the maximum flow rate that the filter will support:
      p.blue--text.darken-4 Filter Area x Filter Media Rate = Maximum Flow Rate Supported (Ft&sup2;)
      p For example, lets say that the surface area of your sand filter is 13ft&sup2; and the filter media rate for your sand filter is 12 gpm/ft&sup2;&nbsp;&nbsp;The maximum flow rate that your sand filter can support will be 156 gpm : #[span.blue--text.darken-4 13 x 12 = 156gpm]
      p Note: The filter media rate is the amount of flow that a filter can handle per ft&sup2; of surface area.&nbsp;&nbsp;This number will be given to you for each of these problems.&nbsp;&nbsp;In the real world, the filter media rate will be part of the documentation for the filter.
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
