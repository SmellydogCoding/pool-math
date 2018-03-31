<template lang="pug">
  v-content.text-xs-center
    v-container.d-inline-flex
      v-layout(align-center)
        v-flex
          p.display-1 Welcome to Pool Math
          p.title Practice math problems that you need to master in order to become a Certified Pool Operator.
          v-btn(color="success" dark @click="$router.push(nextRoute)") Let's Get Started!
    v-layout(row justify-center)
      v-dialog(v-model="small" persistent max-width="50%")
        v-card
          v-card-text This website is optimized for laptops and tablets with a screen resolution 960px or wider.&nbsp;&nbsp;The website will still work on smaller devices but some items may be hard to see or not render properly.
          v-card-actions
            v-spacer
            v-btn(color="primary" @click.native="small = false") OK
</template>

<script>
export default {
  data() {
    return {
      small: false,
      nextRoute: '/howto'
    }
  },
  methods: {
    smallScreen() {
      if(window.innerWidth < 960) { 
        this.small = true;
      }
    }
  },
  mounted: function() { this.smallScreen() } // show warning that the app does not fuction as well on small screens less than 960px
}
</script>

<style scoped>
  .content--wrap { background-image: url('../assets/home.png'); }
  .content--wrap::before { background: none; }
  .content--wrap { align-items: center; }
  
  .container {
    background-color: rgba(200,200,200,0.8);
    width: inherit;
    margin: auto;
  }
  
</style>