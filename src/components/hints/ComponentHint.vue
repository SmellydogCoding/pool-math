<template lang="pug">
  span
    v-btn(color="orange darken-1" dark @click.native.stop="dialog = !dialog") Hint
    v-dialog(v-model="dialog" width="width")
      v-card
        v-card-title.headline {{ title }}
        v-card-text.pt-0
          component(:is="componentToUse")
        v-card-actions
          v-spacer
          v-btn(color="primary" @click.native="dialog = !dialog") Close
</template>

<script>
  const SaturationIndexTable = () => import('../shared/SaturationIndexTable.vue');

  export default {
    data () {
      return { dialog: false, width: '' }
    },
    props: ['title','component'],
    components: { appSaturationIndexTable: SaturationIndexTable },
    computed: {
      data() { return this.$store.getters.select },
      componentToUse() { return `app-${this.component}` }
    },
  }
</script>
