<script lang="ts" setup>
import CarouselContainer from "./CarouselContainer.vue";
import CarouselSlide from "./CarouselSlide.vue";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";
import CarouselTrack from "./CarouselTrack.vue";
import { CarouselOptions } from "./useCarousel";
import CarouselControlButton from "./CarouselControlButton.vue";
import CarouselControlTab from "./CarouselControlTab.vue";
import CarouselRotation from "./CarouselRotation.vue";
import { computed } from "vue";

const slides = generateSlidesFromSwiperJs();
const slideLength = computed(() => slides.length);

const options: CarouselOptions = {
  effect: "slide",
  slidesPerView: 3.5,
};
</script>

<template>
  <pre
    class="bg-slate-800 text-white text-xs p-4"
  ><code>{{ options }}</code></pre>
  <CarouselContainer :options="options" :slide-length="slideLength">
    <CarouselRotation />
    <CarouselControlButton />
    <CarouselControlTab />
    <CarouselTrack>
      <CarouselSlide
        v-for="(slide, index) in slides"
        :key="slide.alt"
        :index="index"
      >
        <div class="m-2 p-2 border-solid border-red-50 bg-blue-200">
          <img :src="slide.src" :alt="slide.alt" />
        </div>
      </CarouselSlide>
    </CarouselTrack>
  </CarouselContainer>
</template>
