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
      problem: 's2p1',
      image: {src: 'src/assets/section2/problem1.png', alt: 'illustration for problem 1'},
      hint: {title: 'Hint for Problem 1', text: 'Surface Area = Length * Width'},
      next: {text: 'Problem 2: Area of a Hot Tub', route: '/s2p2'},
      newButton: 'New Pool Area Problem'
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `1. You have a rectangular pool that is ${this.units.length} feet long and ${this.units.width} feet wide.\u00A0\u00A0What is the surface area of this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
    this.$store.dispatch('init', data);
  }
}
</script>
