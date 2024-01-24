<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { History, Navigation, Pagination } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperHistory", {
    modules: [Navigation, Pagination, History],
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    history: {
      key: "slide",
    },
  });
});
</script>

<template>
  <div id="SwiperHistory" class="swiper">
    <div class="swiper-wrapper">
      <div
        v-for="slide in slides"
        :key="slide.alt"
        class="swiper-slide"
        :data-history="slide.alt"
      >
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>
</template>
