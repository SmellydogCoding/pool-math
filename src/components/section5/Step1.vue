<template lang="pug">
  div
    v-card-media.center-image(:src="src" :alt="alt")
    v-card-title
      p.title.ma-a Breakpoint Chlorination
    v-card-text
        p In this section we will practice breakpoint calculations.&nbsp;&nbsp;Doing a breakpoint chlorination involves 2 things:
        p.mb-0 1. Calculating the breakpoint value.#[br]2. Use the breakpoint value to do a chemical adjustment.
</template>

<script>
export default {
  data() {
    return { src: require('../../assets/section5/overview.jpg'), alt: 'reaction' }
  }
}
</script>
