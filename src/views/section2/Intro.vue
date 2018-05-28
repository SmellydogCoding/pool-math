<template lang="pug">
  v-content
    v-container.pt-0
      v-layout(row wrap justify-center)
        v-flex(xs12 lg10)
          v-stepper.mt-3(v-model="e1" dark)
            v-stepper-header
              template(v-for="index in steps")
                v-stepper-step(:step="index" v-if="index < steps" :complete="e1 > index")
                v-divider(v-if="index < steps")
                v-stepper-step(v-else :step="index")
            v-stepper-items(v-for="index in steps" :key="index")
              v-stepper-content(:step="index")
                v-card(:height="height")
                  component(:is="stepName(index)")
                v-card-actions.pb-0
                  v-btn(v-if="index < steps" color="primary" @click.native="e1 = index + 1") {{ button }}
                  v-btn(v-else color="success" dark @click="nextProblem()") {{ next.buttonText }}
                    v-icon.ml-2 arrow_forward
</template>

<script>
  import Step1 from '../../components/section2/Step1.vue';
  import Step2 from '../../components/section2/Step2.vue';
  import Step3 from '../../components/section2/Step3.vue';
  import Step4 from '../../components/section2/Step4.vue';
  import Step5 from '../../components/section2/Step5.vue';
  import Step6 from '../../components/section2/Step6.vue';
  import Step7 from '../../components/section2/Step7.vue';
  import Step8 from '../../components/section2/Step8.vue';
  import Step9 from '../../components/section2/Step9.vue';
  export default {
    data() { 
      return { 
        e1: 0,
        index: 0,
        steps: 9,
        button: 'next',
        next: {
          buttonText: 'Problem 1 - Area of a Pool',
          link: '/s2p1'
        }
      } 
    },
    methods: {
      nextProblem() { this.$router.push(this.next.link); },
      stepName(index) { return `appStep${index}`; }
    },
    computed: {
      height() { return `${window.innerHeight - 280}px` }
    },
    components: {
      appStep1: Step1,
      appStep2: Step2,
      appStep3: Step3,
      appStep4: Step4,
      appStep5: Step5,
      appStep6: Step6,
      appStep7: Step7,
      appStep8: Step8,
      appStep9: Step9
    }
  }
</script>

<style scoped>
  img { width: 80%; }
</style>
