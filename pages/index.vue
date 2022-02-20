<template>
  <div class="index-page">
    <h1>Yulya Ushakova for WoT</h1>
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
      return [
        {
          url: '/imgonline-com-ua-progressivegGMfaoCvb8rc.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivephP6zEOZonBT.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivegGMfaoCvb8rc.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivephP6zEOZonBT.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivegGMfaoCvb8rc.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivephP6zEOZonBT.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivegGMfaoCvb8rc.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivephP6zEOZonBT.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivegGMfaoCvb8rc.jpg',
          description: '',
        },
        {
          url: '/imgonline-com-ua-progressivephP6zEOZonBT.jpg',
          description: '',
        },
      ]
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
  border-radius: 16px;
}
.image-wrapper {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  border-radius: 16px;
}
.image-wrapper img {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: auto;
  border-radius: 16px;
}
h1 {
  text-align: center;
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
