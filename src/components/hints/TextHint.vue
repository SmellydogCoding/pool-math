<template lang="pug">
  span
    v-btn(color="orange darken-1" dark @click.native.stop="dialog = !dialog") Hint
    v-dialog(v-model="dialog" :width="width")
      v-card
        v-card-title.headline {{hints.title}}
        v-card-text(v-html="hints.text")
        v-card-actions
          v-spacer
          v-btn(color="primary" @click.native="dialog = !dialog") Close
</template>

<script>
  export default {
    data () {
      return { dialog: false }
    },
    props: ['hints', 'width']
  }
</script>