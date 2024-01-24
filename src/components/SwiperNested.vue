<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Pagination } from "swiper/modules";

onMounted(() => {
  new Swiper("#SwiperNested1", {
    modules: [Pagination],
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  new Swiper("#SwiperNested2", {
    modules: [Pagination],
    direction: "vertical",
    spaceBetween: 50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
});
</script>

<template>
  <div id="SwiperNested1" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide">Horizontal Slide 1</div>
      <div class="swiper-slide">
        <div id="SwiperNested2" class="swiper swiper-v">
          <div class="swiper-wrapper">
            <div class="swiper-slide">Vertical Slide 1</div>
            <div class="swiper-slide">Vertical Slide 2</div>
            <div class="swiper-slide">Vertical Slide 3</div>
            <div class="swiper-slide">Vertical Slide 4</div>
            <div class="swiper-slide">Vertical Slide 5</div>
          </div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="swiper-slide">Horizontal Slide 3</div>
      <div class="swiper-slide">Horizontal Slide 4</div>
    </div>

    <div class="swiper-pagination"></div>
  </div>
</template>
