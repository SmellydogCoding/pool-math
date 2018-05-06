<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Conversions
    v-card-text
      div
        p In this section we will practice conversions that you will need as a Certified Pool Operator.
</template>

<script>
import src from '../../assets/section1/overview.jpg'
export default {
  data() {
    return { src, alt: 'ruler' }
  }
}
</script>
