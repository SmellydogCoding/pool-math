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
              v-stepper-step(step="3" :complete="e1 > 3")
              v-divider
              v-stepper-step(step="4" :complete="e1 > 4")
              v-divider
              v-stepper-step(step="5" :complete="e1 > 5")
              v-divider
              v-stepper-step(step="6" :complete="e1 > 6")
              v-divider
              v-stepper-step(step="7")
            v-stepper-items
              v-stepper-content(step="1")
                v-card(height="475px")
                  v-card-media.center-image(src="../../../public/img/section2/overview.jpg" height="200px" alt="depth marker")
                  v-card-title
                    p.title.ma-a Area and Volume
                  v-card-text
                    div
                      p In this section we will practice calculating the area and volume of a pool and hot tub.
                  v-card-actions
                    v-btn.align-stepper-bottom.mb-3.ml-2(color="primary" @click.native="e1 = 2") Continue
              v-stepper-content(step="2")
                v-card(height="475px")
                  v-card-title
                    p.title.ma-a In this section we will use these formulas:
                  v-card-text
                    table.ma-a
                      tr
                        td Area of a Pool:
                        td Length * Width = Ft&sup2;
                      tr
                        td Area of a Hot Tub:
                        td Radius * Radius * 3.14 = Ft&sup2;
                      tr
                        td Volume of a Pool:
                        td Length * Width * Average Depth * 7.5 = Gallons
                      tr
                        td Volume of a Hot Tub:
                        td Radius * Radius * 3.14 * Average Depth * 7.5 = Gallons
                    ul.ml-4
                      li The Radius is 1/2 of the Diameter (the distance across the hot tub)
                      li 3.14 is a constant - also known as Pi
                      li Average Depth is (depth in the shallow end + depth in the deep end) / 2
                      li 7.5 is a constant - it is the volume of water in 1ft&sup3;
                  v-card-actions.align-stepper-bottom.mb-1
                    v-btn.ml-2(color="primary" @click.native="e1 = 3") Continue
              v-stepper-content(step="3")
                v-card(height="475px")
                  v-card-text
                    v-layout(row wrap justify-center text-xs-center)
                      v-flex(xs12 md6)
                        img.problem-image(src="public/img/section2/problem1.png" alt="area of a pool")
                        p.subheading.ma-a.mt-4 Surface Area of a Pool:
                        p.body-2.ma-a Length * Width
                      v-flex(xs12 md6)
                        img.problem-image(src="public/img/section2/problem2.jpg" alt="area of a hot tub")
                        p.subheading.ma-a.mt-4 Surface Area of a Hot Tub:
                        p.body-2.ma-a Radius * Radius * 3.14
                  v-card-actions.align-stepper-bottom.mb-1
                    v-btn.ml-2(color="primary" @click.native="e1 = 4") Continue
              v-stepper-content(step="4")
                v-card(height="475px")
                  v-card-text
                    v-layout(row wrap justify-center text-xs-center)
                      v-flex(xs10)
                        img.problem-image(src="public/img/section2/problem3.jpg" alt="volume of a pool")
                        p.body-2.ma-a Volume is Surface Area * Average Depth.&nbsp;&nbsp;Calculate the average depth first, then use that to complete the formula.
                  v-card-actions.align-stepper-bottom.mb-1
                     v-btn.ml-2(color="primary" @click.native="e1 = 5") Continue
              v-stepper-content(step="5")
                v-card(height="475px")
                  v-card-text
                    v-layout(row wrap justify-center text-xs-center)
                      v-flex(xs10)
                        img.problem-image(src="public/img/section2/problem4.jpg" alt="volume of a multi depth pool")
                        p.body-2.ma-a If you have a pool with multiple depths, you can seperate the pool into individual sections and calculate the volume for each section.&nbsp;&nbsp;You can add the volumes of the different sections together to get the total volume for the pool.
                  v-card-actions.align-stepper-bottom.mb-1
                    v-btn.ml-2(color="primary" @click.native="e1 = 6") Continue
              v-stepper-content(step="6")
                v-card(height="475px")
                  v-card-text
                    v-layout(row wrap justify-center text-xs-center)
                      v-flex(xs10)
                        img.problem-image(src="public/img/section2/problem5.jpg" alt="volume of a hot tub")
                        p.body-2.ma-a Like a pool, volume of a hot tub is Surface Area * Depth.
                  v-card-actions.align-stepper-bottom.mb-1
                    v-btn.ml-2(color="primary" @click.native="e1 = 7") Continue
              v-stepper-content(step="7")
                v-card(height="475px")
                  v-card-text
                    v-layout(row wrap justify-center text-xs-center)
                      v-flex(xs10)
                        img.problem-image(src="public/img/section2/problem6.jpg" alt="volume of a hot tub with seats")
                        p.body-2.ma-a Like a multi-depth pool, you can seperate the hot tub into 2 sections, the section above the seats and the section below the seats.&nbsp;&nbsp;You can add the volumes of the 2 sections together to get the total volume for the hot tub.
                  v-card-actions.align-stepper-bottom.mb-1
                    v-btn.ml-2(color="success" dark @click="nextProblem()") Problem 1 - Area of Swimming Pool
                      v-icon.ml-2 arrow_forward
</template>

<script>
  export default {
    data() { 
      return { 
        e1: 0 
      } 
      
    },
    methods: {
      nextProblem() { this.$router.push('/s2p1'); }
    }
  }
</script>

<style scoped>
  table {
    border-collapse: collapse;
    border: 1px solid #ccc;
    width: 100%;
  }
  tr:nth-child(even) {
    background-color: rgba(0,0,0,0.17);
  }
  td {
    padding: 0.5rem;
    font-size: 0.95rem;
  }
  tfoot {
    font-size: 0.85rem;
  }
   @media screen and (min-width: 600px) {
    td {
      padding: 0.5rem 1.0rem;
      font-size: 1.0rem;
    }
  }
</style>
