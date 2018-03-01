<template lang="pug">
  div
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
      ul.ml-4.mt-2
        li The Radius is 1/2 of the Diameter (the distance across the hot tub)
        li 3.14 is a constant - also known as Pi
        li Average Depth is (depth in the shallow end + depth in the deep end) / 2
        li 7.5 is a constant - it is the volume of water in 1ft&sup3;
</template>

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