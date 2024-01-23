<script lang="ts" setup>
import { Options, Splide, SplideSlide } from "@splidejs/vue-splide";
import { generateSlides } from "../utils/generateSlides";
import { onMounted, ref } from "vue";

const main = ref<InstanceType<typeof Splide>>();
const thumbs = ref<InstanceType<typeof Splide>>();
const slides = generateSlides();

const mainOptions: Options = {
  type: "loop",
  perPage: 2,
  perMove: 1,
  gap: "1rem",
  pagination: false,
};

const thumbsOptions: Options = {
  type: "slide",
  rewind: true,
  gap: "1rem",
  pagination: false,
  fixedWidth: 110,
  fixedHeight: 70,
  cover: true,
  focus: "center",
  isNavigation: true,
  updateOnMove: true,
};

onMounted(() => {
  const thumbsSplide = thumbs.value?.splide;

  if (thumbsSplide) {
    main.value?.sync(thumbsSplide);
  }
});
</script>

<template>
  <div class="wrapper">
    <h2 id="thumbnail-example-heading">Thumbnails</h2>

    <Splide
      ref="main"
      aria-labelledby="thumbnail-example-heading"
      :options="mainOptions"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt" />
      </SplideSlide>
    </Splide>

    <Splide
      ref="thumbs"
      aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
      :options="thumbsOptions"
    >
      <SplideSlide v-for="slide in slides" :key="slide.alt">
        <img :src="slide.src" :alt="slide.alt" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.splide--dynamic .splide__list {
  min-height: 15rem;
}
</style>
