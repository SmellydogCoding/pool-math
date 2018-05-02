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
      problem: 's1p3',
      image: {src: 'src/assets/section1/problem3.jpg', alt: 'pool image for problem 3'},
      hint: {title: 'Hint for Problem 3', type: 'textHint', text: 'Fluid Ounces / 8 = Cups', component: ''},
      next: {text: 'Problem 4: Yards to Feet', route: '/s1p4'},
      newButton: 'New Fluid Ounces to Cups Problem',
      answerSet: {type: 'conversion', decimals: 1}
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You need to add ${this.units.flOunces} Fluid Ounces of Muriatic Acid to lower the total alkalinity in your hot tub.\u00A0\u00A0How many cups is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton, answerSet: this.answerSet};
    this.$store.dispatch('init', data);
  }
}
</script>
