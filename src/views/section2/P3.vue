<template lang="pug">
   v-content
    v-container(grid-list text-xs-center)
      v-layout(row wrap)
        v-flex(xs12).my-2
          p.title {{ title }}
        v-flex(xs12 md6)
          app-IllustrationBlock
        v-flex.answer-block--background.pa-2(xs12 md6)
          app-SelectAnswer
          app-AnswerMessage
          app-NextOrNew
</template>

<script>
import IllustrationBlock from '../../components/shared/IllustrationBlock'
import NextOrNew from '../../components/shared/NextOrNew'
import AnswerMessage from '../../components/shared/AnswerMessage'
import SelectAnswer from '../../components/shared/SelectAnswer'

export default {
  data() {
    return {
      problem: 's2p3',
      image: {src: 'src/assets/section2/problem3.jpg', alt: 'illustration for problem 3'},
      hint: {title: 'Hint for Problem 3', type: 'textHint', text: 'Volume = Length * Width * Average Depth * 7.5<br></br>Average Depth = (Depth in the Deep End + Depth in the Shallow End) / 2'},
      next: {text: 'Problem 4: Volume of Water in a Multi-Depth Pool', route: '/volume-of-water-in-a-multi-depth-pool'},
      newButton: 'New Pool Volume Problem',
      answerSet: {type: 'volume', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a rectangular pool that is ${this.units.length} feet long and ${this.units.width} feet wide.\u00A0\u00A0The Depth of the pool ranges from ${this.units.shallow} feet in the shallow end to ${this.units.deep} feet in the deep end.\u00A0\u00A0What is the volume of water in this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
