<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Conversions
    v-card-text
      div
        p In this section we will practice volume and distance conversions.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section1/overview.jpg'), alt: 'ruler' }
  }
}
</script>
