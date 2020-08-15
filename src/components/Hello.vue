<template>
  <div>
    <div class="block-avatar"><div class="block-item "><div></div> <a href="#"><div><img width="65" src="//s.taplink.cc/a/c/9/d/8/2929eb.jpg?2" alt="natalyonpattern" style="border-radius: 50%;"></div></a> <div><i style="padding-right: 0px !important; visibility: hidden;"></i></div></div> <div class="color: #777777 !important;">@natalyonpattern</div></div>
    <div v-if="isRu">
      <h1 id="title1">Buy fabrics with my prints on <a href="https://marketshmarket.com/collection/all?characteristics[]=85386478">Shmarket</a></h1>
      <agile class="main" ref="main1" :options="optionsMain1" :as-nav-for="asNavFor1_1">
        <div class="slide" v-for="(slide, index) in slides1_big" :key="index" :class="`slide--${index}`" @click="goUrl(hrefs1[index])"><img :src="slide"/></div>
      </agile>
      <agile class="thumbnails" ref="thumbnails1" :options="optionsThumb1" :as-nav-for="asNavFor1_2">
        <div class="slide slide--thumbniail" v-for="(slide, index) in slides1_small" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails1.goTo(index)"><img :src="slide"/></div>
        <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
        <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
      </agile>
    </div>
    <h1 id="title2">Buy my designs on <a href="https://www.redbubble.com/people/natalyon/shop">Redbubble</a></h1>
    <agile class="main" ref="main2" :options="optionsMain2" :as-nav-for="asNavFor2_1">
      <div class="slide" v-for="(slide, index) in slides2_big" :key="index" :class="`slide--${index}`" @click="goUrl(hrefs2[index])"><img :src="slide"/></div>
    </agile>
    <agile class="thumbnails" ref="thumbnails2" :options="optionsThumb2" :as-nav-for="asNavFor2_2">
      <div class="slide slide--thumbniail" v-for="(slide, index) in slides2_small" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails2.goTo(index)"><img :src="slide"/></div>
      <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
      <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
    </agile>
    <h1 id="title3">Buy my patterns on <a href="https://creativemarket.com/natalyon">Creative market</a></h1>
    <agile class="main" ref="main3" :options="optionsMain3" :as-nav-for="asNavFor3_1">
      <div class="slide" v-for="(slide, index) in slides3_big" :key="index" :class="`slide--${index}`" @click="goUrl(hrefs3[index])"><img :src="slide"/></div>
    </agile>
    <agile class="thumbnails" ref="thumbnails3" :options="optionsThumb3" :as-nav-for="asNavFor3_2">
      <div class="slide slide--thumbniail" v-for="(slide, index) in slides3_small" :key="index" :class="`slide--${index}`" @click="$refs.thumbnails3.goTo(index)"><img :src="slide"/></div>
      <template slot="prevButton"><i class="fas fa-chevron-left"></i></template>
      <template slot="nextButton"><i class="fas fa-chevron-right"></i></template>
    </agile>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  props: {
    marketJson: null,
    shmarketJson: null,
    redbubbleJson: null,
  },
  data: () => ({
    hrefs1: [
      'https://marketshmarket.com/product/zavitki-na-serom-3',
      'https://marketshmarket.com/product/treugolniki-monohrom',
      'https://marketshmarket.com/product/romashki-af214d',
      'https://marketshmarket.com/product/polosatye-serdtsa',
      'https://marketshmarket.com/product/rybnyy-potok',
      'https://marketshmarket.com/product/morskaya-verevka'
    ],

    slides1_big: [
      'https://static-eu.insales.ru/images/products/1/3635/318402099/output_5d9d35a0f0f96d6d424485dc318f42c0_fabric1.jpg',
      'https://static-eu.insales.ru/images/products/1/6616/319183320/output_4c598c9a5eed7b00813284aedfb0bc2f_fabric1.jpg',
      'https://static-eu.insales.ru/images/products/1/5923/320640803/output_3f25cf5f5b10622304484922f4d6c992_fabric1.jpg',
      'https://static-eu.insales.ru/images/products/1/7270/321084518/output_802d4eeb335b98101e9b3a3a0b49f643_fabric1.jpg',
      'https://static-eu.insales.ru/images/products/1/4067/327053283/output_f34c30d9114aa208da52a3f301d2daaf_fabric1.jpg',
      'https://static-eu.insales.ru/images/products/1/4698/327053914/output_5f518fcf66f688d71c1ada96bb521e8e_fabric1.jpg'
    ],

    slides1_small: [
      'https://static-eu.insales.ru/images/products/1/3628/318402092/large_output_5d9d35a0f0f96d6d424485dc318f42c0_scale.jpg',
      'https://static-eu.insales.ru/images/products/1/6615/319183319/large_output_4c598c9a5eed7b00813284aedfb0bc2f_scale.jpg',
      'https://static-eu.insales.ru/images/products/1/5921/320640801/large_output_3f25cf5f5b10622304484922f4d6c992_scale.jpg',
      'https://static-eu.insales.ru/images/products/1/7268/321084516/large_output_802d4eeb335b98101e9b3a3a0b49f643_scale.jpg',
      'https://static-eu.insales.ru/images/products/1/4065/327053281/large_output_f34c30d9114aa208da52a3f301d2daaf_scale.jpg',
      'https://static-eu.insales.ru/images/products/1/4695/327053911/large_output_5f518fcf66f688d71c1ada96bb521e8e_scale.jpg'
    ],
    hrefs2: [
      'https://www.redbubble.com/i/greeting-card/Sport-shoes-snickers-sketch-by-natalyon/50364622.5MT14',
      'https://www.redbubble.com/i/mask/Colorful-abstract-swirls-on-red-by-natalyon/49680866.9G0D8',
      'https://www.redbubble.com/i/mask/Flowers-on-red-by-natalyon/48679159.9G0D8',
      'https://www.redbubble.com/i/mug/Vibrant-tiger-stripes-animal-print-by-natalyon/49689669.9Q0AD',
    ],

    slides2_big: [
      'https://ih1.redbubble.net/image.1310899262.4622/sn,x1000-pad,750x1000,f8f8f8.jpg',
      'https://ih1.redbubble.net/image.1279571903.0866/ur,mask_three_quarter,tall_portrait,750x1000.jpg',
      'https://ih1.redbubble.net/image.1235607022.9159/icr,iphone_11_soft,back,a,x1000-bg,f8f8f8.jpg',
      'https://ih1.redbubble.net/image.1279959523.9669/ur,mug_lifestyle,tall_portrait,750x1000.jpg',
    ],

    slides2_small: [
      'https://ih1.redbubble.net/image.1310899315.4622/papergc,300x,w,f8f8f8-pad,600x600,f8f8f8.jpg',
      'https://ih1.redbubble.net/image.1279571903.0866/ur,mask_flatlay_front,product,600x600.jpg',
      'https://ih0.redbubble.net/image.1235607022.9159/icr,iphone_11_soft,back,a,x750-pad,828x898,f8f8f8.jpg',
      'https://ih1.redbubble.net/image.1279959523.9669/mug,standard,x334,right-pad,600x600,f8f8f8.jpg',
    ],

    hrefs3: [
      'https://creativemarket.com/natalyon/4973997-Simple-yellow-daisy-seamless-pattern',
      'https://creativemarket.com/natalyon/4967811-Tiger-skin-striped-seamless-pattern',
      'https://creativemarket.com/natalyon/4966116-Blue-geo-low-poly-seamless-pattern',
      'https://creativemarket.com/natalyon/4963347-Bold-flowers-on-red-seamless-pattern',
      'https://creativemarket.com/natalyon/4836359-Black-polygonal-seamless-pattern',
      'https://creativemarket.com/natalyon/4755599-Ice-creams-on-dark-blue-seamless',
      'https://creativemarket.com/natalyon/4613039-Green-viruses-on-black-pattern'
    ],

    slides3_big: [
      'https://images.creativemarket.com/0.1.0/ps/8382575/910/607/m1/fpnw/wm0/6prev-.jpg?1589978658&s=e2b5f716ad33838f613fdff6f1eddad9',
      'https://images.creativemarket.com/0.1.0/ps/8373595/910/607/m1/fpnw/wm0/5prev-.jpg?1589884256&s=f3c6cd35ac2226fbaa4478d954ba065e',
      'https://images.creativemarket.com/0.1.0/ps/8370943/910/607/m1/fpnw/wm0/7prev-.jpg?1589855516&s=43ec3af4b0062c2bb8114a5225f42f4a',
      'https://images.creativemarket.com/0.1.0/ps/8366715/910/607/m1/fpnw/wm0/1prev-.jpg?1589801303&s=ca1460c40216b253b0c7f4972e77e0b8',
      'https://images.creativemarket.com/0.1.0/ps/8166624/910/607/m1/fpnw/wm0/5prev-.jpg?1587364855&s=40133435421a43f31b49d787f9d7934d',
      'https://images.creativemarket.com/0.1.0/ps/8036373/910/607/m1/fpnw/wm0/2prev-.jpg?1585545469&s=6ec9da49610f3208208defcab0fa2093',
      'https://images.creativemarket.com/0.1.0/ps/7816815/910/607/m1/fpnw/wm0/24prev-.jpg?1582612117&s=35ef03dec009e105cc1789ff7cd92f89'
    ],

    slides3_small: [
      'https://images.creativemarket.com/0.1.0/ps/8382575/910/607/m1/fpnw/wm0/6prev-.jpg?1589978658&s=e2b5f716ad33838f613fdff6f1eddad9',
      'https://images.creativemarket.com/0.1.0/ps/8373595/910/607/m1/fpnw/wm0/5prev-.jpg?1589884256&s=f3c6cd35ac2226fbaa4478d954ba065e',
      'https://images.creativemarket.com/0.1.0/ps/8370943/910/607/m1/fpnw/wm0/7prev-.jpg?1589855516&s=43ec3af4b0062c2bb8114a5225f42f4a',
      'https://images.creativemarket.com/0.1.0/ps/8366715/910/607/m1/fpnw/wm0/1prev-.jpg?1589801303&s=ca1460c40216b253b0c7f4972e77e0b8',
      'https://images.creativemarket.com/0.1.0/ps/8166624/910/607/m1/fpnw/wm0/5prev-.jpg?1587364855&s=40133435421a43f31b49d787f9d7934d',
      'https://images.creativemarket.com/0.1.0/ps/8036373/910/607/m1/fpnw/wm0/2prev-.jpg?1585545469&s=6ec9da49610f3208208defcab0fa2093',
      'https://images.creativemarket.com/0.1.0/ps/7816815/910/607/m1/fpnw/wm0/24prev-.jpg?1582612117&s=35ef03dec009e105cc1789ff7cd92f89'
    ],

    isRu: false,
    asNavFor1_1: [],
    asNavFor1_2: [],
    asNavFor2_1: [],
    asNavFor2_2: [],
    asNavFor3_1: [],
    asNavFor3_2: [],

    optionsMain1: {
      autoplay: true,
      dots: false,
      fade: true,
      navButtons: false
    },

    optionsMain2: {
      autoplay: false,
      dots: false,
      fade: true,
      navButtons: false
    },

    optionsMain3: {
      autoplay: false,
      dots: false,
      fade: true,
      navButtons: false
    },

    optionsThumb1: {
      autoplay: false,
      centerMode: true,
      dots: true,
      navButtons: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1000,
          settings: {
            navButtons: false
          }
        }
      ]
    },

    optionsThumb2: {
      autoplay: false,
      centerMode: true,
      dots: true,
      navButtons: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1000,
          settings: {
            navButtons: false
          }
        }
      ]
    },

    optionsThumb3: {
      autoplay: false,
      centerMode: true,
      dots: true,
      navButtons: true,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 1000,
          settings: {
            navButtons: false
          }
        }
      ]
    },
  }),
  methods: {
    goUrl(url) {
      location = url
    },
    handleScroll: function () {
      if (document.querySelector('#title3').offsetTop < window.scrollY + window.innerHeight/2) {
        if (!this.optionsMain3.autoplay) {
          this.optionsMain3.autoplay = true
          this.$refs.thumbnails3.reload()
          this.$refs.thumbnails3.goToNext()
          this.$refs.main3.goToNext()
          if (this.$refs.thumbnails1 && this.optionsMain1.autoplay) {
            this.optionsMain1.autoplay = false
            this.$refs.thumbnails1.reload()
          }
          if (this.optionsMain2.autoplay) {
            this.optionsMain2.autoplay = false
            this.$refs.thumbnails2.reload()
          }
        }
      } else if (document.querySelector('#title2').offsetTop < window.scrollY + window.innerHeight/2) {
        if (!this.optionsMain2.autoplay) {
          this.optionsMain2.autoplay = true
          this.$refs.thumbnails2.reload()
          this.$refs.thumbnails2.goToNext()
          this.$refs.main2.goToNext()
          if (this.$refs.thumbnails1 && this.optionsMain1.autoplay) {
            this.optionsMain1.autoplay = false
            this.$refs.thumbnails1.reload()
          }
          if (this.optionsMain3.autoplay) {
            this.optionsMain3.autoplay = false
            this.$refs.thumbnails3.reload()
          }
        }
      } else {
        if (this.optionsMain1 && !this.optionsMain1.autoplay) {
          this.optionsMain1.autoplay = true
          this.$refs.thumbnails1.reload()
          this.$refs.thumbnails1.goToNext()
          this.$refs.main1.goToNext()
          if (this.optionsMain2.autoplay) {
            this.optionsMain2.autoplay = false
            this.$refs.thumbnails2.reload()
          }
          if (this.optionsMain3.autoplay) {
            this.optionsMain3.autoplay = false
            this.$refs.thumbnails3.reload()
          }
        }
      }
      return false
    }
  },
  beforeMount () {
    this.isRu = navigator.languages.includes('ru') || navigator.languages.includes('ru_RU')
    if (this.shmarketJson) {
      this.hrefs1 = this.shmarketJson.links
      this.slides1_big = this.shmarketJson.big
      this.slides1_small = this.shmarketJson.small
    }
    if (this.redbubbleJson) {
      this.hrefs2 = this.redbubbleJson.links
      this.slides2_big = this.redbubbleJson.big
      this.slides2_small = this.redbubbleJson.small
    }
    if (this.marketJson) {
      this.hrefs3 = this.marketJson.links
      this.slides3_big = this.marketJson.big
      this.slides3_small = this.marketJson.small
    }
    if (this.isRu) {
      setTimeout(() => {
        this.asNavFor1_1.push(this.$refs.thumbnails1)
        this.asNavFor1_2.push(this.$refs.main1)
      })
    } else {
      this.optionsMain2.autoplay = true
    }
    this.asNavFor2_1.push(this.$refs.thumbnails2)
    this.asNavFor2_2.push(this.$refs.main2)
    this.asNavFor3_1.push(this.$refs.thumbnails3)
    this.asNavFor3_2.push(this.$refs.main3)
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll)
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '~vue-agile/dist/VueAgile.css';
.block-avatar {
  margin-top: 20px;
}
h1 {
  font-size: 5.55vw;
  margin: 15px 0;
}
@media screen and (min-width: 500px) {
  h1 {
    font-size: 28px;
  }
}
.h1-sub {
  font-size: 3.57vw;
  color: darkgrey;
}
.main {
  margin-top: 8px;
  margin-bottom: 8px;
}
.thumbnails {
  margin: 0 -5px;
  width: calc(100% + 10px);
}

.agile__nav-button {
  background: transparent;
  border: none;
  color: #ccc;
  cursor: pointer;
  font-size: 24px;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
}

.thumbnails .agile__nav-button--prev {
  left: -45px;
}
.thumbnails .agile__nav-button--next {
  right: -45px;
}
.agile__nav-button:hover {
  color: #888;
}
.agile__dot {
  margin: 0 10px;
}
.agile__dot button {
  background-color: #ccc;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: block;
  height: 10px;
  font-size: 0;
  line-height: 0;
  margin: 0;
  padding: 0;
  -webkit-transition-duration: 0.3s;
  transition-duration: 0.3s;
  width: 10px;
}
.agile__dot--current button, .agile__dot:hover button {
  background-color: #888;
}

.slide {
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  color: #fff;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
}
.slide--thumbniail {
  cursor: pointer;
  height: 100px;
  padding: 0 5px;
  -webkit-transition: opacity 0.3s;
  transition: opacity 0.3s;
}
.slide--thumbniail:hover {
  opacity: 0.75;
}
.slide img {
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  -o-object-position: center;
  object-position: center;
  width: 100%;
}
</style>
