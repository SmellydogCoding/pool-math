<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a Breakpoint Value Calculation
    v-card-text
      p.mt-2 The breakpoint value is the value that you have to raise the free chlorine to in order to start the breakpoint reaction.
      p.mt-2 Step 1: Calculate the amount of combined chlorine in your pool.
      p When you use your DPD test kit you measure the amount of free chlorine in the pool and then the amount of total chlorine.&nbsp;&nbsp;The amount of combined chlorine is your total chlorine minus your free chlorine:
      p.blue--text.darken-4 Total Chlorine - Free Chlorine = Combined Chlorine
      p Step 2: Multiply the amount of combined chlorine by 10 to get your breakpoint value:
      p.blue--text.darken-4 Combined Chlorine * 10 = Breakpoint Value
      p.subheading.text-xs-center Sample Problem
      p Your free chlorine measures 2 ppm and your total chlroine measures 2.5 ppm.&nbsp;&nbsp;What is the breakpoint value?
      p.blue--text.darken-4 2.5 - 2.0 = 0.5 ppm
      p.blue--text.darken-4 0.5 * 10 = 5 ppm
      p The breakpoint value is #[span.blue--text.darken-4 5 ppm]
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
