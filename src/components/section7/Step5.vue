<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a Calculating Required Size of a Diatomaceous Earth Filter
    v-card-text
      p.mt-2 If you know the size of the sand filter or cartridge filter (in ft&sup2;) that you need then you can use that number to go and purchase one.&nbsp;&nbsp;Since a diatomaceous earth filter is made up of an array or square or rectangular grids, you have to do a couple additional steps to calculate how many grids you will need for your filter array.
      p Step 1: Calculate surface area of a single grid.&nbsp;&nbsp;You remember how to calculate the surface area of a square or rectangular pool from Section 2 right?&nbsp;&nbsp;Use the same formula:
      p.blue--text.darken-4 Length x Width = Surface Area (Ft&sup2;)
      p For example, if a diatomaceous earth filter grid is 2 feet long and 2 feet wide the surface area of the grid is 4ft&sup2;: #[span.blue--text.darken-4 2 feet x 2 feet = 4ft&sup2;]
      p Step 2: Many diatomaceous earth filter grids can filter from both sides of the grid.&nbsp;&nbsp;This means that you have double the filtering area on each grid.&nbsp;&nbsp;If you have a grid that can filter from both sides, to find the total filtering area of the grid you multiply the surface area of the grid by 2.
      p.blue--text.darken-4 Surface Area x 2 = Total Grid Filtering Area (Ft&sup2;)
      p Using the example in step 1, if the surface area of the grid is 4ft&sup2;, and the grid filters from both sides, the total grid filtering area is 8ft&sup2;: #[span.blue--text.darken-4 4ft&sup2; x 2 = 8ft&sup2;]
      p Step 3: As you saw on the previous slide, if you know the flow rate of your circulation system and the filter media rate of the filter, you can use those 2 numbers to calculate the total filter area that you need:
      p.blue--text.darken-4 Flow Rate / Filter Media Rate = Total Filtering Area (Ft&sup2;)
      p For Example, If your flow rate is 120 gpm and your filter media rate is 2.0 gpm/ft&sup2; You need a filter with a total area of 60ft&sup2;: #[span.blue--text.darken-4 120 gpm / 2.0 gpm/ft&sup2; = 60ft&sup2;]
      p Step 4: Once you know the total area that you need, divide that number by the surface area provided by each filter:
      p.blue--text.darken-4 Filter Area Needed / Filter Area Provided by Each Grid = Number of Grids Needed
      p In the exmple above, if you need a total of 60ft&sup2; and each grid provides 8ft&sup2;, then you need a total of 8 grids: #[span.blue--text.darken-4 60ft&sup2; / 8ft&sup2; = 7.5]
      p Note: Although 60 / 8 = 7.5, you can't install half of a grid so you have to round up to the next highest number.&nbsp;&nbsp;That is why the answer to this problem would be 8 grids.
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
