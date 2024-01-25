<script lang="ts" setup>
import { CarouselOptions, provideCarousel } from "./useCarousel";

const props = defineProps<{
  options: CarouselOptions;
}>();
provideCarousel(props.options);
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
