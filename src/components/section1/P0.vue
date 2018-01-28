<template lang="pug">
  v-content
    v-container.pt-0
      v-layout(row wrap justify-center)
        v-flex(xs12 lg6)
          v-stepper.mt-3(v-model="e1" dark)
            v-stepper-header
              v-stepper-step(step="1" :complete="e1 > 1")
              v-divider
              v-stepper-step(step="2" :complete="e1 > 2")
              v-divider
              v-stepper-step(step="3")
            v-stepper-items
              v-stepper-content(step="1")
                v-card(height="400px")
                  v-card-media.center-image(src="../../../public/ruler.jpg" height="200px")
                  v-card-title
                    p.title.ma-a Conversions
                  v-card-text
                    div
                      p In this section we will practice conversions that you will need as a Certified Pool Operator.
                  v-card-actions
                    v-btn(color="primary" @click.native="e1 = 2") Continue
              v-stepper-content(step="2")
                v-card(height="400px")
                  v-card-title
                    p.title.ma-a In this section we will practice converting:
                  v-card-text
                    ul.ml-4
                      li Ounces to Pounds
                      li Fluid Ounces to Gallons
                      li Fluid Ounces to Cups
                      li Yards to Feet
                      li Inches to Feet
                    p.mt-4 and we will see examples of where and why these conversions are needed.
                  v-card-actions.align-stepper-bottom.mb-1
                    v-btn(color="primary" @click.native="e1 = 3") Continue
              v-stepper-content(step="3")
                v-card(height="400px")
                  v-card-title
                    p.title.ma-a In this section we will use these formulas:
                  v-card-text
                    table.ma-a
                      tr
                        td Convert ounces to pounds:
                        td Ounces / 16 = Pounds
                      tr
                        td Convert fluid ounces to gallons:
                        td Fluid Ounces / 128 = Gallons
                      tr
                        td Convert fluid ounces to cups:
                        td Fluid Ounces / 8 = Cups
                      tr
                        td Convert Yards to Feet:
                        td Yards * 3 = Feet
                      tr
                        td Convert Inches to Feet:
                        td Inches / 12 = Feet
                    tfoot.ml-4 Key:&nbsp;&nbsp;* - means Multiply&nbsp;&nbsp;&nbsp;&nbsp;/ - means Divide
                    p.mt-4 These formulas are also on page 00 of your Pool and Spa Operator Handbook.
                  v-card-actions.align-stepper-bottom.mb-1
                    v-btn(color="success" dark @click="nextProblem()") Go to Problem 1 - Convert Ounces to Pounds
                      v-icon.ml-2 arrow_forward
</template>

<script>
  export default {
    data() { return { e1: 0 } },
    methods: {
      nextProblem() { this.$router.push('/s1p1'); }
    }
  }
</script>

<style scoped>
  .content--wrap {
    background-image: url('../../../public/water.jpg');
    background-size: cover;
    align-items: center;
  }
  .align-stepper-bottom {
    position: absolute;
    bottom: 0;
  }
  table {
    border-collapse: collapse;
    border: 1px solid #ccc;
    width: 100%;
  }
  tr:nth-child(even) {
    background-color: rgba(0,0,0,0.17);
  }
  td {
    padding: 0.5rem 1.0rem;
  }
  tfoot {
    font-size: 0.85rem;
  }
</style>
