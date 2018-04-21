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
      problem: 's1p5',
      image: {src: 'src/assets/section1/problem5.jpg', alt: 'pool image for problem 5'},
      hint: {title: 'Hint for Problem 5', text: 'Inches / 12 = Feet'},
      next: {text: 'Section 2: Area and Volume', route: '/s2Intro'},
      newButton: 'New Inches to Feet Problem',
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `Your wading pool lost ${this.units.inches} inches of water due to a leak.\u00A0\u00A0How many feet is this?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
    this.$store.dispatch('init', data);
  }
}
</script>
