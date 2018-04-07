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
      problem: 's2p3',
      image: {src: 'src/assets/section2/problem3.jpg', alt: 'illustration for problem 3'},
      hint: {title: 'Hint for Problem 3', text: 'Volume = Length * Width * Average Depth * 7.5<br></br>Average Depth = (Depth in the Deep End + Depth in the Shallow End) / 2'},
      next: {text: 'Problem 4: Volume of Water in a Multi-Depth Pool', route: '/s2p4'},
      newButton: 'New Pool Volume Problem'
    }
  },
  components: { appAnswerBlock: AnswerBlock, appIllustrationBlock: IllustrationBlock },
  computed: {
    title() { return `1. You have a rectangular pool that is ${this.units.length} feet long and ${this.units.width} feet wide.\u00A0\u00A0The Depth of the pool ranges from ${this.units.shallow} feet in the shallow end to ${this.units.deep} feet in the deep end.\u00A0\u00A0What is the volume of water in this pool?` },
    units() { return this.$store.getters.units }
  },
  created() {
    let data = {problem: this.problem, image: this.image, hint: this.hint, next: this.next, newButton: this.newButton};
    this.$store.dispatch('init', data);
  }
}
</script>
