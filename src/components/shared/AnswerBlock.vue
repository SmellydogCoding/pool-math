<template lang="pug">
  div.px-3.pt-2
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
