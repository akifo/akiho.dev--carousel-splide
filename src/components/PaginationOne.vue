<script lang="ts" setup>
import {
  Options,
  Splide,
  SplideSlide,
  SplideTrack,
} from "@splidejs/vue-splide";
import { generateSlides } from "../utils/generateSlides";

const slides = generateSlides();
const options: Options = {
  rewind: true,
  gap: "1rem",
  autoplay: false,
};
</script>

<template>
  <Splide
    ref="rootRef"
    :has-track="false"
    :options="options"
    aria-label="お気に入りの写真"
  >
    <SplideTrack>
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt" />
      </SplideSlide>
    </SplideTrack>
  </Splide>
</template>

<style scoped></style>
