<template lang="pug">
  v-container
    v-stepper.mt-3(v-model="e1" dark)
      v-stepper-header
        v-stepper-step(step="1" :complete="e1 > 1") Name of step 1
        v-divider
        v-stepper-step(step="2" :complete="e1 > 2") Name of step 2
        v-divider
        v-stepper-step(step="3") Name of step 3
      v-stepper-items
        v-stepper-content(step="1")
          v-card.mb-5(color="secondary" height="200px") some content
          v-btn(color="primary" @click.native="e1 = 2") Continue
          v-btn(flat dark) Cancel
        v-stepper-content(step="2")
          v-card.mb-5(color="secondary" height="200px") some more content
          v-btn(color="primary" @click.native="e1 = 3") Continue
          v-btn(flat dark) Cancel
        v-stepper-content(step="3")
          v-card.mb-5(color="secondary" height="200px") content, content, content
          v-btn(color="primary" @click.native="e1 = 1") Continue
          v-btn(flat dark) Cancel
</template>

<script>
  export default {
    data() {
      return { e1: 0 }
    }
  }
</script>