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
      problem: 's1p2',
      image: {src: 'src/assets/section1/problem2.jpg', alt: 'pool image for problem 2'},
      hint: {title: 'Hint for Problem 2', text: 'Fluid Ounces / 128 = Gallons'},
      next: {text: 'Problem 3: Fluid Ounces to Cups', route: '/s1p3'},
      newButton: 'New Fluid Ounces to Gallons Problem',
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You need to add ${this.units.flOunces} Fluid Ounces of Sodium Hypochlorite to do breakpoint chlorination for your pool.\u00A0\u00A0How many Gallons is this?` },
    units() { return this.$store.getters.units },
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
    this.$store.dispatch('init', data);
  }
}
</script>