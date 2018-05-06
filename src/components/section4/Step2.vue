<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a We will be using this worksheet :
    v-card-text
      appChemicalAdjustmentWorksheet
</template>

<script>
import ChemicalAdjustmentWorksheet from '../shared/ChemicalAdjustmentWorksheet'

export default {
  components: { appChemicalAdjustmentWorksheet: ChemicalAdjustmentWorksheet}
}
</script>
