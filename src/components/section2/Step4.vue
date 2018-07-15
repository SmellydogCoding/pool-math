<template lang="pug">
  v-card-text
    v-layout(row wrap justify-center text-xs-center)
      v-flex
        img.mobile--shrink-to-fit(:src="src" :alt="alt")
        p.body-2.ma-a.mt-2 Volume is Surface Area * Average Depth.&nbsp;&nbsp;Calculate the average depth first, then use that to complete the formula.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section2/problem3.jpg'), alt: 'volume of a pool' }
  }
}
</script>
