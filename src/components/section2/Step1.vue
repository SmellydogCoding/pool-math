<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Area and Volume
    v-card-text
      div
        p In this section we will practice calculating the area and volume of a pool and hot tub, as well as water loss in a pool and hot tub.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section2/overview.jpg'), alt: 'depth marker' }
  }
}
</script>
