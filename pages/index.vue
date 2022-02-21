<template>
  <div class="index-page">
    <h1>
      Yulya Ushakova
      <img src="/wot/wot.png" width="125" alt="wot">
    </h1>
    <client-only>
      <carousel-3d
        v-model="carouselIndex"
        :width="tablet ? 400 : 800"
        :height="tablet ? 300 : 600"
        @after-slide-change="afterCarouselSlideChange"
      >
        <slide v-for="(slide, index) in images" :index="index" :key="index">
          <div class="image-wrapper">
            <img class="slide-image" :src="slide.url" :alt="slide.url" />
            <span class="slide-description">{{ slide.description }}</span>
          </div>
        </slide>
      </carousel-3d>
    </client-only>
    <div class="index-page__actions">
      <button @click="showGallery">Gallery view</button>
    </div>
    <client-only>
      <vue-gallery-slideshow :images="images" :index="galleryIndex" @close="galleryIndex = null" />
    </client-only>
  </div>
</template>

<script>
import VueGallerySlideshow from 'vue-gallery-slideshow'
export default {
  name: 'Index',
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      galleryIndex: null,
      carouselIndex: 0,
      tablet: false,
      mobile: false,
    }
  },
  computed: {
    images() {
      const images = [
        '1.jpg',
        '2.jpg',
        '3.jpg',
        '4.jpg',
        '5.jpg',
        '6.jpg',
        '7.jpg',
        '8.jpg',
        '9.jpg',
        '10.jpg',
        '11.jpg',
        '12.jpg',
        '13.jpg',
        '14.jpg',
        '15.jpg',
        '16.jpg',
        '17.jpg',
        '18.jpg',
        '19.jpg',
        '20.jpg',
        '21.jpg',
        '22.jpg',
        '23.jpg',
        '24.jpg',
        '25.jpg',
        '26.jpg',
        '27.jpg',
        '28.jpg',
        '29.jpg',
        '30.jpg',
        '31.jpg',
        '32.jpg',
        '33.jpg',
        '34.jpg',
        '35.jpg',
        '36.jpg',
        '37.jpg',
        '38.jpg',
        '39.jpg',
        '40.jpg',
        '41.jpg',
        '42.jpg',
      ]
      return images.map(i => ({
        url: `/wot/${i}`,
      }))
    },
  },
  mounted() {
    this.resize()
    window.addEventListener('resize', this.resize)
  },
  methods: {
    afterCarouselSlideChange(index) {
      this.carouselIndex = index
    },
    showGallery() {
      this.galleryIndex = this.carouselIndex
    },
    resize() {
      this.tablet = window.innerWidth <= 1024
      this.mobile = window.innerWidth <= 768
    },
  }
}
</script>

<style>
.index-page {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.index-page__actions {
  display: flex;
  justify-content: center;
}
.carousel-3d-slide {
  border-radius: 16px !important;
  border: 1px solid #fff !important;
}
.image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 16px;
  background-color: black;
}
.image-wrapper img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 100%;
  max-height: 100%;
  width: auto !important;
  height: auto;
}
h1 {
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: normal;
  position: absolute;
  top: 16px;
  left: 16px;
}
.slide-description {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  bottom: 0;
  padding: 15px;
  font-size: 12px;
  min-width: 100%;
  box-sizing: border-box;
}
.slide-description:empty {
  display: none;
}
</style>
