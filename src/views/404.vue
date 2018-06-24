<template lang="pug">
  v-content.text-xs-center
    v-container
      v-layout(align-center)
        v-flex(xs12)
          p.title 404 - Pool Not Found
          p.body-2 Sorry, I couldn't find the page that you were looking for.&nbsp;&nbsp;Please use the menu on the upper-left to select a problem.&nbsp;&nbsp;If you feel like you are seeing this message in error (i.e. this should be an actual page) please click the "contact me" button and let me know.
          img(src='../assets/404.jpg' alt='abandoned pool')
</template>

<style scoped>
  img { max-width: 100%; }
</style>
