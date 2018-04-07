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
      problem: 's1p4',
      image: {src: 'src/assets/section1/problem4.jpg', alt: 'pool image for problem 4'},
      hint: {title: 'Hint for Problem 4', text: 'Yards * 3 = Feet'},
      next: {text: 'Problem 5: Inches to Feet', route: '/s1p5'},
      newButton: 'New Yards to Feet Problem',
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `1. Your pool is ${this.units.yards} Yards long.\u00A0\u00A0How many feet is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
    this.$store.dispatch('init', data);
  }
}
</script>
