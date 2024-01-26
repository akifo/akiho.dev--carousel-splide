<script lang="ts" setup>
import { injectCarousel } from "./useCarousel";
import { PlayIcon, PauseIcon } from "@heroicons/vue/20/solid";

const { timer, play, stop } = injectCarousel();
function handleClick() {
  if (timer.value) {
    stop();
    return;
  }
  play();
}
</script>

<template>
  <div class="CarouselRotation">
    <button
      type="button"
      class="inline-flex rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      @click="handleClick"
    >
      {{ timer ? "停止" : "再生" }}
      <PauseIcon v-if="timer" class="-mr-0.5 h-5 w-5" aria-hidden="true" />
      <PlayIcon v-else class="-mr-0.5 h-5 w-5" aria-hidden="true" />
    </button>
  </div>
</template>

<style scoped>
.CarouselRotation {
  position: absolute;
  bottom: 30px;
  z-index: 1;
  left: 50%;
  transform: translateX(-50%);
}
</style>
