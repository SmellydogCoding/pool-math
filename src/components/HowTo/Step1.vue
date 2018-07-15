<template lang="pug">
  div
    v-card-title
      p.subheading.ma-a Each problem will have a drop-down menu with 4 choices.
    v-card-text
      v-layout(row wrap justify-center text-xs-center)
      v-flex.text-xs-center
        img.shrink-to-fit(src="../../assets/howto/step1-1.jpg" alt="illustration of the selct drop down")
      p.subheading.text-xs-center.my-3 Once you choose an answer, click the answer button to submit.
      v-flex.text-xs-center
        img.shrink-to-fit(src="../../assets/howto/step1-2.jpg" alt="illustration of the selct drop down")
</template>
