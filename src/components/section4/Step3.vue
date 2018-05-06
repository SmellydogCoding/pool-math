<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a We will use the following chart :
    v-card-text
      appChemicalAdjustmentTable
</template>

<script>
import ChemicalAdjustmentTable from '../shared/ChemicalAdjustmentTable'

export default {
  components: { appChemicalAdjustmentTable: ChemicalAdjustmentTable}
}
</script>
