<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Scrollbar } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperScrollbar", {
    modules: [Scrollbar],
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
  });
});
</script>

<template>
  <div id="SwiperScrollbar" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-scrollbar"></div>
  </div>
</template>
