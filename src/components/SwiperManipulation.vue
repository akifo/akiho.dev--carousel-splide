<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import { Navigation, Pagination } from "swiper/modules";

const slides = ref(generateSlidesFromSwiperJs());

const swiper = ref<Swiper>();
onMounted(() => {
  swiper.value = new Swiper("#SwiperManipulation", {
    modules: [Navigation, Pagination],
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
  });
});

function onPrependSlide() {
  // 1000 - 1009 までの酢値
  const randomId = Math.floor(Math.random() * 10) + 1000;
  slides.value.unshift({
    src: `https://picsum.photos/id/${randomId}/400/300`,
    alt: `Slide ${randomId}`,
  });
}
function onAppendSlide() {
  // 1000 - 1009 までの酢値
  const randomId = Math.floor(Math.random() * 10) + 1000;
  slides.value.push({
    src: `https://picsum.photos/id/${randomId}/400/300`,
    alt: `Slide ${randomId}`,
  });
}
</script>

<template>
  <div id="SwiperManipulation" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-pagination"></div>
  </div>

  <div class="append-buttons">
    <button class="prepend-slide" @click="onPrependSlide">Prepend Slide</button>
    <button class="append-slide" @click="onAppendSlide">Append Slide</button>
  </div>
</template>

<style scoped>
.append-buttons {
  text-align: center;
  margin-top: 20px;
}

.append-buttons button {
  display: inline-block;
  cursor: pointer;
  border: 1px solid #007aff;
  color: #007aff;
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 4px;
  margin: 0 10px;
  font-size: 13px;
}
</style>
