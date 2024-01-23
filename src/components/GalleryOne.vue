<script lang="ts" setup>
import { Options, Splide, SplideSlide } from "@splidejs/vue-splide";
import { generateSlides } from "../utils/generateSlides";
import { onMounted, ref } from "vue";

const main = ref<InstanceType<typeof Splide>>();
const thumbs = ref<InstanceType<typeof Splide>>();
const slides = generateSlides();

const mainOptions: Options = {
  type: "loop",
  perPage: 1,
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
      <SplideSlide v-for="slide in slides" :key="slide.alt" class="thumbnail">
        <img :src="slide.src" :alt="slide.alt" />
      </SplideSlide>
    </Splide>
  </div>
</template>

<style scoped>
.thumbnails {
  display: flex;
  margin: 1rem auto 0;
  padding: 0;
  justify-content: center;
}

.thumbnail {
  width: 70px;
  height: 70px;
  overflow: hidden;
  list-style: none;
  margin: 0 0.2rem;
  cursor: pointer;
  opacity: 0.3;
}

.thumbnail.is-active {
  opacity: 1;
}

.thumbnail img {
  width: 100%;
  height: auto;
}
</style>
