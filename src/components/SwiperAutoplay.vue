<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperAutoplay", {
    modules: [Autoplay, Navigation, Pagination],
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<template>
  <div id="SwiperAutoplay" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>
