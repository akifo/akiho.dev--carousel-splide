<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import {
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperSlidesPerGroupSkip", {
    modules: [Navigation, Pagination, Scrollbar, Keyboard, Mousewheel],
    slidesPerView: 1,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <div id="SwiperSlidesPerGroupSkip" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-scrollbar"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>
