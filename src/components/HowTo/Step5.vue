<template lang="pug">
  div
    v-card-title
      p.subheading.ma-a Your Screen Size Is: #[span.ok.ml-2(:class="{small: width < 960 }") {{ viewportSize }}]
    v-card-text.pt-0
      v-layout(row wrap justify-center text-xs-center)
        v-flex.text-xs-center
          img(:src="sizeMessage.img" :alt="sizeMessage.alt")
          p.mt-2 {{ sizeMessage.message }}
</template>

<script>
import small from '../../assets/howto/small.jpg'
import ok from '../../assets/howto/ok.jpg'

export default {
  data () {
    return { 
      width: 0, 
      height: 0,
      small: {
        message: 'Although this website will work on any device, for best results it is recommended that you use a device with a minimum screen width of 960px.',
        img: 'src/assets/howto/small.jpg',
        alt: 'big dog in small pool'
      },
      ok: {
        message: 'Your screen size looks good.\u00A0\u00A0Let\u0027s dive in!',
        img: 'src/assets/howto/ok.jpg',
        alt: 'dog diving in lake'
      }
    }
  },
  computed: {
    viewportSize() { return `${this.width}px x ${this.height}px` },
    sizeMessage() { return this.width >= 960 ? this.ok : this.small }
  },
  created() {
    this.width = window.innerWidth 
    this.height = window.innerHeight
  }
}
</script>

<style scoped>
  img { max-width: 100%; }
  .subheading { font-size: 1.0rem !important; }
  .ok { color: #55b442 !important; }
  .small { color: #fa610f !important; }
</style>
