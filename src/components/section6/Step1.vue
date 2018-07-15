<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Flow Rate and Turnover Rate
    v-card-text
        p In this section we will practice Calculating flow rate and turnover rate
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section6/overview.jpg'), alt: 'spary pool' }
  }
}
</script>
