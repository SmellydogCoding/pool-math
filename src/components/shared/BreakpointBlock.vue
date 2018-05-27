<template lang="pug">
  table
    tr
      td Combined Chlorine
      td {{ combinedCl }}
    tr
      td Breakpoint Value
      td {{ breakpoint }}
    tr
      td Desired Change
      td {{ desiredChange }}
</template>

<script>
export default {
  props: ['combinedCl', 'breakpoint', 'desiredChange']
}
</script>
