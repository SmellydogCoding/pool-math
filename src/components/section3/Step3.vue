<template lang="pug">
  div
    v-card-title
      p.subheading.ma-a Cyanuric Adid and Adjusted Total Alkalinity
    v-card-text
        p Because Cyanuric Adid contributes to Total Alkalinity, when you have Cyanuric Adid in your pool you have to adjust your Total Alkalinity number before you calculate Saturation Index.
        p To calculate Adjusted Total Alkalinity use the following formula:
        p.blue--text.darken-4 Adjusted Total Alkalinity = Total Alkalinity - (Cyanuric Acid / 3)
        p For example, if your Total Alkalinity reading is #[span.blue--text.darken-4 100ppm] and your Cyanuric Acid reading is #[span.blue--text.darken-4 60ppm], your Adjusted Total Alkalinity is:
        p.blue--text.darken-4 100 - (60 / 3)
        p Divide Cyanuric Acid by 3 first and then subtract that number from your Total Alkalinity:
        p.blue--text.darken-4 100 - 20 = 80
        p In this example, your Adjusted Total Alkalinity is #[span.blue--text.darken-4 80ppm].&nbsp;&nbsp;You would use this number as your Total Alkalinity number when calculating Saturation Index.
</template>
