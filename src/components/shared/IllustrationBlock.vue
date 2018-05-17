<template lang="pug">
  img(:src="src" :alt="alt")
</template>

<script>
export default {
  computed: {
    src() { return this.$store.getters.image.src },
    alt() { return this.$store.getters.image.alt }
  }
}
</script>

<style scoped>
  img { width: 80%; }
</style>
