<template lang="pug">
  v-flex.select-background.px-2(xs12 lg6)
    app-SelectAnswer
    v-layout(text-xs-center row wrap justify-center)
      app-AnswerMessage
    v-layout.mt-3(text-xs-center row wrap justify-center)
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
