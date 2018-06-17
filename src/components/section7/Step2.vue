<template lang="pug">
  div
    v-card-title.pb-0
      p.subheading.ma-a Diatomaceous Earth Filter Size
    v-card-text
      p.mt-2 A diatomaceous earth filter array consists of a set of square or rectangular grids inside a filter container. 
      p.mt-2 Step 1: Calculate surface area of a single grid.&nbsp;&nbsp;You remember how to calculate the surface area of a square or rectangular pool from Section 2 right?&nbsp;&nbsp;Use the same formula:
      p.blue--text.darken-4 Length x Width = Surface Area (Ft&sup2;)
      p For example, if a diatomaceous earth filter grid is 2 feet long and 2 feet wide the surface area of the grid is 4ft&sup2;: #[span.blue--text.darken-4 2 feet x 2 feet = 4ft&sup2;]
      p Step 2: Many diatomaceous earth filter grids can filter from both sides of the grid.&nbsp;&nbsp;This means that you have double the filtering area on each grid.&nbsp;&nbsp;If you have a grid that can filter from both sides, to find the total filtering area of the grid you multiply the surface area of the grid by 2.
      p.blue--text.darken-4 Surface Area x 2 = Total Grid Filtering Area (Ft&sup2;)
      p Using the example in step 1, if the surface area of the grid is 4ft&sup2;, and the grid filters from both sides, the total grid filtering area is 8ft&sup2;: #[span.blue--text.darken-4 4ft&sup2; x 2 = 8ft&sup2;]
      p Step 3: Once you know the total filtering area of a grid, multiply that times the total number of grids in your array to get the total filtering area for your diatomaceous earth filter array.
      p.blue--text.darken-4 Total Grid Filtering Area X Number of Grids = Total Filter Area (Ft&sup2;)
      p Using the example above, if each grid has a total filtering area of 8ft&sup2;, and there are 10 grids in the filter array, then this diatomaceous earth filter has a total filtering area of 80ft&sup2;: #[span.blue--text.darken-4 8ft&sup2; per grid x 10 grids = 80ft&sup2;]
      
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
