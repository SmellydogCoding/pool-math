<template lang="pug">
  div
    v-select.mt-2(:items="data.answers" label="Select Answer" v-model="answer" :disabled="data.showCorrect")
    v-btn.color--white(color="info" light @click="sendAnswer()" :disabled="answer === 0 || data.showCorrect") Answer
    transition(name="fade")
        app-HintModal(:hints="data.hint" :width="data.width" v-if="data.showHintButton")
</template>

<script>
import HintModal from '../../hints/TextHint'
export default {
   data () {
    return { answer: 0 }
  },
  methods: { sendAnswer() { this.$store.dispatch('answerQuestion', this.answer); } },
  components: { appHintModal: HintModal },
  computed: { 
    data() { 
      return this.$store.getters.select
    } 
  }
}
</script>
