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
  import Step1 from '../../components/section6/Step1.vue';
  import Step2 from '../../components/section6/Step2.vue';
  
  export default {
    data() { 
      return { 
        e1: 0,
        index: 0,
        steps: 2,
        button: 'next',
        next: {
          buttonText: 'Problem 1 - Calculate Turnover Rate of a Pool',
          link: '/turnover-rate-of-a-pool'
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
    }
  }
</script>