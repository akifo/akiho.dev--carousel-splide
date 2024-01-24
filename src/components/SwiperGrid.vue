<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Grid, Pagination } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperGrid", {
    modules: [Pagination, Grid],
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <div id="SwiperGrid" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>
