<template lang="pug">
  div
    v-card-media.center-image(:src="src" :height="height" :alt="alt")
    v-card-title
      p.title.ma-a Saturation Index and Water Balance
    v-card-text
      div
        p In this section we will practice calculating Saturation Index.
</template>

<script>
export default {
  data() {
    return {
      src: 'src/assets/section3/step1.jpg',
      alt: 'balance',
      height: '200px'
    }
  }
}
</script>
