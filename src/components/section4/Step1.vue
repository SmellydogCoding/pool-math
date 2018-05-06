<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Chemical Adjustments
    v-card-text
      div
        p In this section we will practice chemical adjustments.&nbsp;&nbsp;We will practice added algaecide and adjusting chlorine, calcium, alkalinity, and cyanuric acid.
</template>

<script>
import src from '../../assets/section4/overview.jpg'
export default {
  data() {
    return { src, alt: 'balance' }
  }
}
</script>
