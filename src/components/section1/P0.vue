<template lang="pug">
  v-content
    v-container.pt-0
      v-layout(row wrap justify-center)
        v-flex(xs12 lg6)
          v-stepper.mt-3(v-model="e1" dark)
            v-stepper-header
              template(v-for="item in steps")
                v-stepper-step(:step="item.number" v-if="item.number < steps.length" :complete="e1 > item.number")
                v-divider(v-if="item.number < steps.length")
                v-stepper-step(v-else :step="item.number")
            v-stepper-items(v-for="item in steps" :key="item.number")
              v-stepper-content(:step="item.number")
                v-card(:height="height")
                  v-card-media.center-image(v-if="item.number === 1" :src="item.src" :height="item.height" :alt="item.alt")
                  v-card-title
                    p.title.ma-a {{ item.title }}
                  v-card-text.html(v-html="item.text")
                  v-card-actions.align-stepper-bottom.mb-3
                    v-btn(v-if="item.number < steps.length" color="primary" @click.native="e1 = item.number + 1") Continue
                    v-btn(v-else color="success" dark @click="nextProblem()") {{ next.text }}
                      v-icon.ml-2 arrow_forward
</template>

<script>
  export default {
    data() {
      return {
        e1: 0,
        height: '425px',
        steps: [
          {
            number: 1,
            src: '../../../public/img/section1/overview.jpg', 
            height: '200px', 
            alt: 'ruler',
            title: 'conversions',
            text: '<div><p>In this section we will practice conversions that you will need as a Certified Pool Operator.</p></div>'
          },
          {
            number: 2,
            title: 'In this section we will practice converting:',
            text: '<ul class="ml-4"><li>Ounces to Pounds</li><li>Fluid Ounces to Gallons</li><li>Fluid Ounces to Cups</li><li>Yards to Feet</li><li>Inches to Feet</li></ul><p class="mt-4">and we will see examples of where and why these conversions are needed.</p>'
          },
          {
            number: 3,
            title: 'In this section we will use these formulas:',
            text: '<table class="ma-a"><tr><td>Convert ounces to pounds:</td><td>Ounces / 16 = Pounds</td></tr><tr><td>Convert fluid ounces to gallons:</td><td>Fluid Ounces / 128 = Gallons</td></tr><tr><td>Convert fluid ounces to cups:</td><td>Fluid Ounces / 8 = Cups</td></tr><tr><td>Convert Yards to Feet:</td><td>Yards * 3 = Feet</td></tr><tr><td>Convert Inches to Feet:</td><td>Inches / 12 = Feet</td></tr><tfoot class="ml-4">Key:&nbsp;&nbsp;* - means Multiply&nbsp;&nbsp;&nbsp;&nbsp;/ - means Divide</tfoot></table><p class="mt-2">These formulas are also on page 26 of your Pool and Spa Operator Handbook.</p>'
          }
        ],
        next: {
          text: 'Problem 1 - Convert Ounces to Pounds',
          link: '/s1p1'
        }
      }
    },
    methods: {
      nextProblem() { this.$router.push(this.next.link); }
    }
  }
</script>

<style scoped>
  .html >>> table {
    border-collapse: collapse;
    border: 1px solid #ccc;
    width: 100%;
  }
  .html >>> tr:nth-child(even) {
    background-color: rgba(0,0,0,0.17);
  }
  .html >>> td {
    padding: 0.5rem;
    font-size: 0.95rem;
  }
  .html >>> tfoot {
    font-size: 0.85rem;
  }
   @media screen and (min-width: 600px) {
    .html >>> td {
      padding: 0.5rem 1.0rem;
      font-size: 1.0rem;
    }
  }
</style>
