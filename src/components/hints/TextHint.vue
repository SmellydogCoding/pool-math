<template lang="pug">
  span
    v-btn(color="orange darken-1" dark @click.native.stop="dialog = !dialog") Hint
    v-dialog(v-model="dialog" v-resize="onResize" :width="width")
      v-card
        v-card-title.headline {{hintTitle}}
        v-card-text {{hintText}}
        v-card-actions
          v-spacer
          v-btn(color="primary" @click.native="dialog = !dialog") Close
</template>

<script>
  export default {
    data () {
      return { dialog: false }
    },
    props: ['hintTitle', 'hintText', 'width']
  }
</script>