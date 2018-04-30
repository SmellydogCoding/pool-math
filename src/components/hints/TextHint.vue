<template lang="pug">
  span
    v-btn(color="orange darken-1" dark @click.native.stop="dialog = !dialog") Hint
    v-dialog(v-model="dialog" content-class="hint--dialog-text")
      v-card
        v-card-title.headline {{title}}
        v-card-text(v-html="text")
        v-card-actions
          v-spacer
          v-btn(color="primary" @click.native="dialog = !dialog") Close
</template>

<script>
  export default {
    data () {
      return { dialog: false, textHint: true }
    },
    props: ['title', 'text']
  }
</script>
