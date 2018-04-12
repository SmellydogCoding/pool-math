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
      problem: 's2p7',
      image: {src: 'src/assets/section2/problem7.jpg', alt: 'illustration for problem 7'},
      hint: {title: 'Hint for Problem 7', text: 'Volume = Length * Width * Depth of Water Lost (in Feet) * 7.5<br><br>Feet = Inches / 12'},
      next: {text: 'Problem 8: Volume of Water Lost in a Hot Tub', route: '/s2p8'},
      newButton: 'New Pool Water Loss Problem'
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You have a rectangular pool that is ${this.units.length} feet long and ${this.units.width} feet wide.\u00A0\u00A0This pool lost ${this.units.inches} inches of water overnight.\u00A0\u00A0What is the volume of water that was lost?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
    this.$store.dispatch('init', data);
  }
}
</script>
