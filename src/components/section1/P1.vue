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
import AnswerBlock from '../shared/AnswerBlock'
import IllustrationBlock from '../shared/IllustrationBlock'

export default {
  data() {
    return {
      // units: {ounces: 24},
      problem: 's1p1',
      image: {src: 'public/img/section1/problem1.jpg', alt: 'pool image for problem 1'},
      hint: {title: 'Hint for Problem 1', text: 'Ounces / 16 = Pounds'},
      next: {text: 'Problem 2: Fluid Ounces to Gallons', route: '/s1p2'},
      newButton: 'New Ounces to Pounds Problem'
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `1. You need to add ${this.units.ounces} Ounces of Calcium Hypochlorite to your pool to raise the free chlorine level.\u00A0\u00A0How many Pounds is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
      this.$store.dispatch('init', data);
    }
}
</script>