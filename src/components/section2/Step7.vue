<template lang="pug">
  v-card-text
    v-layout(row wrap justify-center text-xs-center)
      v-flex
        img.mobile--shrink-to-fit(:src="src" :alt="alt")
        p.body-2.ma-a.mt-2 Like a multi-depth pool, you can seperate the hot tub into 2 sections, the section above the seats and the section below the seats.&nbsp;&nbsp;You can add the volumes of the 2 sections together to get the total volume for the hot tub.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section2/problem6.jpg'), alt: 'volume of a hot tub with seats' }
  }
}
</script>
