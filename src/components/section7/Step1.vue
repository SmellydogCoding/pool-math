<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Filter Sizing and Maximum Flow
    v-card-text
        p In this section we will practice Calculating filter size for Diatomaceous Earth and sand filters.&nbsp;&nbsp;We will also calculate how big a filter needs to be for a paticular system and the maximum flow rate that a filter system can support.
</template>

<script>
import src from '../../assets/section7/overview.jpg'
export default {
  data() {
    return { src, alt: 'sand filter' }
  }
}
</script>
