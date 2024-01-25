<script lang="ts" setup>
import { computed } from "vue";
import { injectCarousel } from "./useCarousel";

const props = defineProps<{
  index: number;
}>();

const { options, activeIndex, isFade, isSlide } = injectCarousel();
const isActive = computed(() => activeIndex.value === props.index);
const width = computed(() => {
  if (options.effect === "slide" && options.slidesPerView) {
    return `${100 / options.slidesPerView}%`;
  }
  return "100%";
});
</script>

<template>
  <div class="CarouselSlide" :class="{ isSlide, isFade, isActive }">
    <slot />
  </div>
</template>

<style scoped>
.CarouselSlide {
  position: relative;
}
.isSlide {
  flex: none;
  /* width: 50%; */
  width: v-bind(width);
  scroll-snap-align: start;
}
.isFade {
  width: 100%;
  flex: 1 0 100%;
}
.isFade:nth-child(2) {
  left: -100%;
}
.isFade:nth-child(3) {
  left: -200%;
}
.isFade:nth-child(4) {
  left: -300%;
}
.isFade:nth-child(5) {
  left: -400%;
}
.isFade:nth-child(6) {
  left: -500%;
}
.isFade:nth-child(7) {
  left: -600%;
}
.isFade:nth-child(8) {
  left: -700%;
}
.isFade:nth-child(9) {
  left: -800%;
}
.isFade:nth-child(10) {
  left: -900%;
}
.isFade:nth-child(11) {
  left: -1000%;
}
.isFade:nth-child(12) {
  left: -1100%;
}

.isFade {
  opacity: 0;
  transition: opacity 0.5s ease-in-out;
}
.isFade.isActive {
  opacity: 1;
}
</style>
