<template lang="pug">
  v-flex(xs12 lg6)
    img.problem-image(:src="src" :alt="alt")
</template>

<script>
export default {
  computed: {
    src() { return this.$store.getters.image.src },
    alt() { return this.$store.getters.image.alt }
  }
}
</script>
