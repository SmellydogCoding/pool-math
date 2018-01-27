<template lang="pug">
  v-container
    v-stepper.mt-3(v-model="e1" dark)
      v-stepper-header
        v-stepper-step(step="1" :complete="e1 > 1")
        v-divider
        v-stepper-step(step="2" :complete="e1 > 2")
        v-divider
        v-stepper-step(step="3" :complete="e1 > 3")
        v-divider
        v-stepper-step(step="4")
      v-stepper-items
        v-stepper-content(step="1")
          v-card.mb-5(color="secondary" height="200px") Each problem will have a drop-down menu to choose an answer or will have boxes to fill in
          v-btn(color="primary" @click.native="e1 = 2") Continue
        v-stepper-content(step="2")
          v-card.mb-5(color="secondary" height="200px") After you submit your answer you will see a correct or incorrect dialog box.  You will have as many attempts to answer the question as you need and there is no time limit.
          v-btn(color="primary" @click.native="e1 = 3") Continue
        v-stepper-content(step="3")
          v-card.mb-5(color="secondary" height="200px") Once you answer the problem correctly.  You can go to the next problem or create a new problem of the same type.  You can practice the same problem as many times as you want.
          v-btn(color="primary" @click.native="e1 = 4") Continue
        v-stepper-content(step="4")
          v-card.mb-5(color="secondary" height="200px") You can use the nav drawer to select from the list of all problems available.  You can do the problems in any order, but if you complete Section 1 and Section 2 first it will hlep you later on.
          v-btn(color="success" dark @click="nextProblem()") Go to Overview of Section 1
            v-icon.ml-2 arrow_forward
</template>

<script>
  export default {
    data() { return { e1: 0 } },
    methods: {
      nextProblem() { this.$router.push('/s1p0'); }
    }
  }
</script>