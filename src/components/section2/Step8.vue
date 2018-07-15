<template lang="pug">
  v-card-text
    v-layout(row wrap justify-center text-xs-center)
      v-flex
        img.mobile--shrink-to-fit(:src="src" :alt="alt")
        p.body-2.ma-a.mt-2 Calculating water loss in a pool uses the same formula as volume of a pool.&nbsp;&nbsp;The only difference is that, instead of using the average depth of the pool, we use the depth of the water that was lost.
        p.body-2.ma-a.mt-2 Since the amount of water lost is usually in inches we need to convert inches to feet.&nbsp;&nbsp;Feet = Inches / 12
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section2/problem7.jpg'), alt: 'volume of water loss in a pool' }
  }
}
</script>
