<template lang="pug">
  div
    v-card-media.center-image(:src="src" :height="height" :alt="alt")
    v-card-title
      p.title.ma-a Conversions
    v-card-text
      div
        p In this section we will practice conversions that you will need as a Certified Pool Operator.
</template>

<script>
export default {
  data() {
    return {
      src: 'src/assets/section1/overview.jpg',
      alt: 'ruler',
      height: '200px'
    }
  }
}
</script>
