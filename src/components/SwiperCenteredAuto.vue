<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Pagination } from "swiper/modules";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper("#SwiperCenteredAuto", {
    modules: [Pagination],
    slidesPerView: "auto",
    centeredSlides: true,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <div id="SwiperCenteredAuto" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>

<style scoped>
#SwiperCenteredAuto /deep/ .swiper-slide {
  width: 60%;
}

#SwiperCenteredAuto /deep/ .swiper-slide:nth-child(2n) {
  width: 40%;
}

#SwiperCenteredAuto /deep/ .swiper-slide:nth-child(3n) {
  width: 20%;
}
</style>
