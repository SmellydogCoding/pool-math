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
      problem: 's2p4',
      image: {src: 'src/assets/section2/problem4.jpg', alt: 'illustration for problem 4'},
      hint: {title: 'Hint for Problem 4', type: 'textHint', text: 'Volume = Length * Width * Average Depth * 7.5<br></br>Average Depth = (Depth in the Deepest Part + Depth in the Shallowest Part) / 2<br><br>Find the volume for each section and then add the 2 sections togeather to get the total.'},
      next: {text: 'Problem 5: Volume of Water in a Hot Tub', route: '/volume-of-water-in-a-hot-tub'},
      newButton: 'New Multi-Depth Pool Volume Problem',
      answerSet: {type: 'volume', decimals: 1}
    }
  },
  components: { appIllustrationBlock: IllustrationBlock, appNextOrNew: NextOrNew, appAnswerMessage: AnswerMessage, appSelectAnswer: SelectAnswer },
  computed: {
    title() { return `You have a rectangular pool that is ${this.units.length} feet long and ${this.units.width} feet wide.\u00A0\u00A0The shallow end is ${this.units.slength} feet long and ${this.units.width} feet wide.\u00A0\u00A0The deep end is ${this.units.dlength} feet long and ${this.units.width} feet wide.\u00A0\u00A0The Depth of the shallow end ranges from ${this.units.sshallow} feet in the shallowest part to ${this.units.sdeep} feet in the deepest part.\u00A0\u00A0The Depth of the deep end ranges from ${this.units.dshallow} feet in the shallowest part to ${this.units.ddeep} feet in the deepest part.\u00A0\u00A0What is the volume of water in this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
