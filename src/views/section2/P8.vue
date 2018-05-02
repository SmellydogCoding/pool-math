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
      problem: 's2p8',
      image: {src: 'src/assets/section2/problem8.jpg', alt: 'illustration for problem 8'},
      hint: {title: 'Hint for Problem 8', type: 'textHint', text: 'Volume = Radius * Radius * Depth of Water Lost (in Feet) * 3.14<br><br>feet = inches / 12'},
      next: {text: 'Intro to Section 3', route: '/s3Intro'},
      newButton: 'New Hot Tub Water Loss Problem',
      answerSet: {type: 'water loss', decimals: 2}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You have a hot tub that is ${this.units.diameter} ft in diameter.\u00A0\u00A0This hot tub lost ${this.units.inches} inches of water overnight.\u00A0\u00A0What is the volume of water lost?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>