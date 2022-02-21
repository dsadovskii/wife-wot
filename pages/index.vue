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
        'суп_Нт.jpg',
        'спринг_роллы_Нт.jpg',
        'стир_фрай_Нт.jpg',
        'лапша_Нт.jpg',
        'салаты_Нт.jpg',
        'горячее_Нт.jpg',
        'лапша_готовые_Нт.jpg',
        'тортильи_Нт.jpg',
        'десерты_Нт.jpg',
        'кофейная_карта_Нт.jpg',
        'сок-вода_Нт.jpg',
        'Чай.jpg',
        'коктейли-правки_3ьт.jpg',
        'коньяк-пиво-ром_Нт.jpg',
        'горячие_коктейли_Нт.jpg',
        'текила-ликер-вино_Нт.jpg',
        'дианке_отбор_чк_новый.jpg',
        'обложка.jpg',
        'бенто.jpg',
        'нигири.jpg',
        'Сеты.jpg',
        'салат-рулет.jpg',
        'салаты.jpg',
        'горячее.jpg',
        'горячие_закуски.jpg',
        'суп.jpg',
        'лапша.jpg',
        'кофе_и_десерт.jpg',
        'Масута.jpg',
        'сторона.jpg',
        'сторона_десерт.jpg',
        'сторона_кофе_в_печать.jpg',
        'сторона_пицца.jpg',
        'новое!.jpg',
        'самое_новое_2_сторона.jpg',
        'privat_house_часть_2_18,09,2016.jpg',
        'вареник.jpg',
        'afisha_ny_light.jpg',
        'new_1ая_сторона.jpg',
        'new_2ая_сторона.jpg',
        'Безымянный.jpg',
        'pred.jpg',
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
  border-radius: 16px;
  border: 1px solid #fff;
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
  width: auto;
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
