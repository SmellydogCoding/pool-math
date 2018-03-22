<template lang="pug">
  v-flex(xs12 lg6)
    img.problem-image(:src="image.src" :alt="image.alt")
</template>

<script>
export default {
  props: ['image']
}
</script>
