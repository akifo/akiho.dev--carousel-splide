<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { FreeMode, Pagination } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperFreemode", {
    modules: [Pagination, FreeMode],
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <div id="SwiperFreemode" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>
