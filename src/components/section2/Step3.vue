<template lang="pug">
   v-card-text
    v-layout(row wrap justify-center text-xs-center)
      v-flex(xs12 md6).pr-2
        img.shrink-to-fit(src="src/assets/section2/problem1.png" alt="area of a pool")
        p.subheading.ma-a.mt-4 Surface Area of a Pool:
        p.body-2.ma-a.mb-4 Length * Width
      v-flex(xs12 md6).pl-2
        img.shrink-to-fit(src="src/assets/section2/problem2.jpg" alt="area of a hot tub")
        p.subheading.ma-a.mt-4 Surface Area of a Hot Tub:
        p.body-2.ma-a Radius * Radius * 3.14
</template>
