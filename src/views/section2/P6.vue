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
      problem: 's2p6',
      image: {src: 'src/assets/section2/problem6.jpg', alt: 'illustration for problem 6'},
      hint: {title: 'Hint for Problem 6', text: 'Volume = Radius * Radius * 3.14 * Depth * 7.5<br><br>Radius = Diameter / 2<br><br>Find the volume for each section and then add the 2 sections togeather to get the total.'},
      next: {text: 'Problem 7: Volume of Water Loss in a Pool', route: '/s2p7'},
      newButton: 'New Hot Tub with Seats Volume Problem'
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `You have a hot tub where the top section is ${this.units.tdiameter} feet in diameter and ${this.units.tdepth} feet deep.\u00A0\u00A0The bottom section (where the seats are) is ${this.units.sdiameter} feet in diameter and ${this.units.sdepth} feet deep.\u00A0\u00A0What is the volume of this hot tub?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
    this.$store.dispatch('init', data);
  }
}
</script>
