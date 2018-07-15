<template lang="pug">
  div
    v-card-title
      p.subheading.ma-a After you submit your answer you will see a correct or incorrect dialog box.&nbsp;&nbsp;You will have as many attempts to answer the question as you need and there is no time limit.
    v-card-text
       v-card-text
        v-layout(row wrap justify-center text-xs-center)
        v-flex.text-xs-center
          img.shrink-to-fit(src="../../assets/howto/step2-1.jpg" alt="illustration of an incorrect answer")
        p.subheading.text-xs-center.my-3 If you choose an incorrect answer twice, a hint button will display that you can click on to get a hint about how to complete the problem.
        v-flex.text-xs-center
          img.shrink-to-fit(src="../../assets/howto/step2-2.jpg" alt="illustration of the hint button")
        p.subheading.text-xs-center.my-3 Problems with a worksheet will also fill in part of the worksheet after 2 or more incorrect answers.
        v-flex.text-xs-center
          img.shrink-to-fit(src="../../assets/howto/step2-3.jpg" alt="illustration of the worksheet")
</template>