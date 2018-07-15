<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Chemical Adjustments
    v-card-text
      div
        p In this section we will practice chemical adjustments.&nbsp;&nbsp;We will practice adding algaecide and adjusting chlorine, calcium, alkalinity, and cyanuric acid.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section4/overview.jpg'), alt: 'chlorine' }
  }
}
</script>
