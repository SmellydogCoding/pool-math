<template lang="pug">
  div
    v-select(:items="data.answers" label="Select Answer" v-model="data.answer" :disabled="data.showCorrect" @change="selection")
    v-btn.color--white.mb-2(color="info" light @click="sendAnswer()" :disabled="data.answer === null || data.showCorrect") Answer
    transition(name="fade")
      component(:is="componentToUse" :component="hint.component" :title="hint.title" :text="hint.text" :cyanuric="hint.cyanuric" v-if="hint.showHintButton")
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
  components: { appTextHint: textHint, appComponentHint: componentHint },
  computed: { 
    data() { return this.$store.getters.select },
    hint() { return this.$store.getters.hint },
    componentToUse() { return `app-${this.hint.type}` }
  }
}
</script>
