<template lang="pug">
  div
    v-card-title
      p.subheading.ma-a Once you answer the problem correctly you have 2 options.&nbsp;&nbsp;You can click on the blue button to create a new problem.&nbsp;&nbsp;The new problem with have randomly generated numbers and a new set of answers.&nbsp;&nbsp;This will allow you practice the same problem as many times as you want and (most of the time) not have the same problem twice.&nbsp;&nbsp;You can click on the green button to go to the next section.
    v-card-text
      v-card-text
        v-layout(row wrap justify-center text-xs-center)
        v-flex.text-xs-center
          img.shrink-to-fit(src="src/assets/howto/step3.jpg" alt="illustration of a correct answer")
</template>