<script lang="ts" setup>
import { CarouselOptions, provideCarousel } from "./useCarousel";

const props = defineProps<{
  options: CarouselOptions;
  slideLength: number;
}>();
provideCarousel(props.options, props.slideLength);
</script>

<template>
  <div class="CarouselContainer">
    <slot />
  </div>
</template>

<style scoped>
.CarouselContainer {
  position: relative;
}
</style>
