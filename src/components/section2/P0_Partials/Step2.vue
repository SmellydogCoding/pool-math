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