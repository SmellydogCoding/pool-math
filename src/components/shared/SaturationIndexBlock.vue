<template lang="pug">
  table
    thead
      tr
        th Item
        th Value
        th Factor
    tbody
      tr
        td pH
        td {{ units.pH }}
        td(v-if="attempts >=2 || correctState") {{ units.pH }}
      tr
        td Temperature
        td {{ units.temperature }}
        td(v-if="attempts >=2 || correctState") {{ units.temperaturef }}
      tr
        td Calcium Hardness
        td {{ units.calcium }}
        td(v-if="attempts >=2 || correctState") {{ units.calciumf }}
      tr
        td Total Alkalinity
        td {{ units.alkalinity }}
        td(v-if="attempts >=2 || correctState") {{ units.alkalinityf }}
      tr
        td Sub-Total 
        td 
        td(v-if="attempts >=3 || correctState") {{ units.sub }}
      tr
        td Total Dissolved Solids
        td {{ units.TDS }}
        td(v-if="attempts >=2 || correctState") {{ units.TDSf }}
      tr
        td Saturation Index
        td 
        td(v-if="correctState") {{ correct }}
</template>

<script>
export default {
  computed: {
    units() { return this.$store.getters.units },
    attempts() { return this.$store.getters.attempts },
    correct() { return this.$store.getters.correct },
    correctState() { return this.$store.getters.answerMessage.showCorrect }
  }
}
</script>

<style scoped>
  table { background-color: #424242; color: #fff; }
  thead { border-bottom: 1px solid #333; }
  tbody tr td:first-child { text-align: left; }
</style>
