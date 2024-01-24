<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperWatchSlidesVisibility", {
    watchSlidesProgress: true,
    slidesPerView: 3,
  });
});
</script>

<template>
  <div id="SwiperWatchSlidesVisibility" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
  </div>
</template>
