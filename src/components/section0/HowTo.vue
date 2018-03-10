<template lang="pug">
 v-content
    v-container.pt-0
      v-layout(row wrap justify-center)
        v-flex(xs12 lg6)
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
                  v-card-actions.align-stepper-bottom.mb-3
                    v-btn.ml-2(v-if="index < steps" color="primary" @click.native="e1 = index + 1") {{ button }}
                    v-btn.ml-2(v-else color="success" dark @click="nextProblem()") {{ next.buttonText }}
                      v-icon.ml-2 arrow_forward
</template>

<script>
  import Step1 from './HowTo_Partials/Step1.vue';
  import Step2 from './HowTo_Partials/Step2.vue';
  import Step3 from './HowTo_Partials/Step3.vue';
  import Step4 from './HowTo_Partials/Step4.vue';
  export default {
    data() {
      return {
        e1: 0,
        index: 0,
        height: '475px',
        steps: 4,
        button: 'next',
        next: {
          buttonText: 'Section 1 - Conversions',
          link: '/s1p0'
        }
      }
    },
    methods: {
      nextProblem() { this.$router.push(this.next.link); },
      stepName(index) { return `appStep${index}`; }
    },
    components: {
      appStep1: Step1,
      appStep2: Step2,
      appStep3: Step3,
      appStep4: Step4,
    }
  }
</script>