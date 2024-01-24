<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Pagination } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperSlidesPerViewAuto", {
    modules: [Pagination],
    slidesPerView: "auto",
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <div id="SwiperSlidesPerViewAuto" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>

<style scoped>
#SwiperSlidesPerViewAuto /deep/ .swiper-slide {
  width: 80%;
}

#SwiperSlidesPerViewAuto /deep/ .swiper-slide:nth-child(2n) {
  width: 60%;
}

#SwiperSlidesPerViewAuto /deep/ .swiper-slide:nth-child(3n) {
  width: 40%;
}
</style>
