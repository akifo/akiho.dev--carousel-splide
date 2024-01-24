<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Navigation, Thumbs } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  const swiper = new Swiper("#SwiperThumbsGalleryLoop2", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });
  new Swiper("#SwiperThumbsGalleryLoop1", {
    modules: [Navigation, Thumbs],
    loop: true,
    spaceBetween: 10,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
});
</script>

<template>
  <div id="SwiperThumbsGalleryLoop1" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
  <div id="SwiperThumbsGalleryLoop2" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
  </div>
</template>

<style>
#SwiperThumbsGalleryLoop2 .swiper-slide {
  width: 25%;
  height: 100%;
  opacity: 0.4;
}

#SwiperThumbsGalleryLoop2 .swiper-slide-thumb-active {
  opacity: 1;
}
</style>
