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
      problem: 's2p2',
      image: {src: 'src/assets/section2/problem2.jpg', alt: 'illustration for problem 2'},
      hint: {title: 'Hint for Problem 2', type: 'textHint', text: 'Surface Area = Radius * Radius * 3.14<br><br>Radius = Diameter / 2'},
      next: {text: 'Problem 3: Volume of a Swimming Pool', route: '/s2p3'},
      newButton: 'New Hot Tub Area Problem',
      answerSet: {type: 'area', decimals: 2}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You have a hot tub that is ${this.units.diameter} ft in diameter.\u00A0\u00A0What is the surface area of this hot tub?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>