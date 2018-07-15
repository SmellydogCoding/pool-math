<template lang="pug">
   v-card-text
    v-layout(row wrap justify-center text-xs-center)
      v-flex
        img.mobile--shrink-to-fit(:src="src" :alt="alt")
        p.body-2.ma-a.mt-2 Like a pool, volume of a hot tub is Surface Area * Depth.&nbsp;&nbsp;In this example, the depth of the hot tub doesn't vary, so the average depth calculation is not needed.
        p.body-2.ma-a.mt-2 It is worth noting that the size and shape of hot tubs can vary a lot.  Hot tubs can be really large (I've seen a hot tub that is 15ft in diameter).&nbsp;&nbsp;Also, it's not just hot tubs that are circles.&nbsp;&nbsp;Wading pools (aka kiddie pools) are usually circular.&nbsp;&nbsp;Hot tubs can be squares too!
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section2/problem5.jpg'), alt: 'volume of a hot tub' }
  }
}
</script>
