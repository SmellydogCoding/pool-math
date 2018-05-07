<template lang="pug">
  v-container(grid-list text-xs-center)
    v-layout(row wrap)
      v-flex.select-background.px-2
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
