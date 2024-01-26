<script lang="ts" setup>
import { injectCarousel } from "./useCarousel";

const { toNext, toPrev } = injectCarousel();
</script>

<template>
  <div class="CarouselControlButton">
    <button
      type="button"
      class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      @click="toPrev"
    >
      prev
    </button>
    <button
      type="button"
      class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      @click="toNext"
    >
      next
    </button>
  </div>
</template>

<style scoped>
.CarouselControlButton {
  position: absolute;
  bottom: 30px;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  gap: 200px;
}
</style>
