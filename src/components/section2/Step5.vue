<template lang="pug">
  v-card-text
    v-layout(row wrap justify-center text-xs-center)
      v-flex
        img.mobile--shrink-to-fit(:src="src" :alt="alt")
        p.body-2.ma-a.mt-2 If you have a pool with multiple depths, you can seperate the pool into individual sections and calculate the volume for each section.&nbsp;&nbsp;You can add the volumes of the different sections together to get the total volume for the pool.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section2/problem4.jpg'), alt: 'volume of a multi depth pool' }
  }
}
</script>
