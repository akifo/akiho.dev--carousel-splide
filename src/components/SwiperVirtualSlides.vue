<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Navigation, Pagination, Virtual } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperVirtualSlides", {
    modules: [Pagination, Navigation, Virtual],
    slidesPerView: 3,
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    virtual: {
      slides: (function () {
        const slides = [];
        for (let i = 0; i < 600; i += 1) {
          slides.push("Slide " + (i + 1));
        }
        return slides;
      })(),
    },
  });
});
</script>

<template>
  <div id="SwiperVirtualSlides" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>
