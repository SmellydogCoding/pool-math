<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Saturation Index and Water Balance
    v-card-text
      div
        p In this section we will practice calculating Saturation Index.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section3/overview.jpg'), alt: 'balance' }
  }
}
</script>
