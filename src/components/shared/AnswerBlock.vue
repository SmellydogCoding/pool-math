<template lang="pug">
  v-content
    v-container.py-0(fill-height)
      v-layout(row wrap)
        v-flex(align-content-space-between)
          app-SelectAnswer
          app-AnswerMessage
          app-NextOrNew
</template>

<script>
import NextOrNew from './NextOrNew'
import AnswerMessage from './AnswerMessage'
import SelectAnswer from './SelectAnswer'

export default {
  components: { appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
}
</script>

<style scoped>
  .content--wrap::before { background: none; position: initial; }
  .flex { height: 100%; }
</style>
