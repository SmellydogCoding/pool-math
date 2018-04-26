<template lang="pug">
  div
    v-select.mt-2(:items="data.answers" label="Select Answer" v-model="data.answer" :disabled="data.showCorrect" @change="selection")
    v-btn.color--white(color="info" light @click="sendAnswer()" :disabled="data.answer === null || data.showCorrect") Answer
    transition(name="fade")
      component(:is="componentToUse" :component="hint.component" :title="hint.title" v-if="hint.showHintButton")
</template>

<script>
const textHint = () => import('../hints/TextHint.vue')
const componentHint = () => import('../hints/ComponentHint.vue')
export default {
   data () {
    return {  }
  },
  methods: {
    sendAnswer() { this.$store.dispatch('answerQuestion'); },
    selection(value) { this.$store.dispatch('selection', value); }
  },
  components: { apptextHintModal: textHint, appComponentHint: componentHint },
  computed: { 
    data() { return this.$store.getters.select },
    hint() { return this.$store.getters.hint },
    componentToUse() { return `app-${this.hint.type}` }
  }
}
</script>
