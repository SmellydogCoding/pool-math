<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a We will use the following chart :
    v-card-text
      appSaturationIndexTable
</template>

<script>
import SaturationIndexTable from '../shared/SaturationIndexTable'

export default {
  components: { appSaturationIndexTable: SaturationIndexTable}
}
</script>
