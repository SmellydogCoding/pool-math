<template lang="pug">
  v-content
    v-container
      v-layout(text-xs-center row wrap justify-center)
        v-flex(xs12).my-2
          p.title {{ title }}
      v-layout(text-xs-center row wrap justify-center)
        app-IllustrationBlock
        app-AnswerBlock
</template>

<script>
import AnswerBlock from '../../components/shared/AnswerBlock'
import IllustrationBlock from '../../components/shared/IllustrationBlock'

export default {
  data() {
    return {
      problem: 's2p5',
      image: {src: 'src/assets/section2/problem5.jpg', alt: 'illustration for problem 5'},
      hint: {title: 'Hint for Problem 5', type: 'textHint', text: 'Volume = Radius * Radius * 3.14 * Depth * 7.5<br><br>Radius = Diameter / 2'},
      next: {text: 'Problem 6: Volume of a Hot Tub with Seats', route: '/s2p6'},
      newButton: 'New Hot Tub Volume Problem',
      answerSet: {type: 'volume', decimals: 2}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You have a hot tub (without seats) that is ${this.units.diameter} feet in diameter and ${this.units.depth} feet deep.\u00A0\u00A0What is the volume of this hot tub?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
