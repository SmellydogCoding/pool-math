<template lang="pug">
  v-flex.select-background.px-2(xs12 lg6)
    app-SelectAnswer(v-on:emitAnswer="submitAnswer" :answers="answers" :showCorrect="showCorrect")
    transition(name="fade")
      app-HintModal(:hints="hints" v-if="showHintButton")
    v-layout(text-xs-center row wrap justify-center)
      app-AnswerMessage(:correctMessage="correctMessage" :incorrectMessage="incorrectMessage" :showCorrect="showCorrect" :showIncorrect="showIncorrect")
    v-layout.mt-3(text-xs-center row wrap justify-center)
      app-NextOrNew(:next="next" :newButton="newButton" :showCorrect="showCorrect")
</template>

<script>
import problems from '../../mixins/problems'
import HintModal from '../hints/TextHint'
import NextOrNew from '../shared/AnswerBlock_Partials/NextOrNew'
import AnswerMessage from '../shared/AnswerBlock_Partials/AnswerMessage'
import SelectAnswer from '../shared/AnswerBlock_Partials/SelectAnswer'

export default {
  components: { appHintModal: HintModal, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  props: ['answers', 'hints', 'correctMessage', 'next', 'newButton'],
  mixins: [problems],
  methods: {
    submitAnswer(payload) {
      this.answer = payload;
      this.answerQuestion();
    }
  }
}
</script>
