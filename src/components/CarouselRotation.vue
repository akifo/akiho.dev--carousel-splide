<script lang="ts" setup>
import { injectCarousel } from "./useCarousel";

const { play, stop } = injectCarousel();
</script>

<template>
  <div>
    <button @click="play">再生</button>
    <button @click="stop">停止</button>
  </div>
</template>

<style scoped>
button {
  margin-top: 20px;
  margin-right: 20px;
}
</style>
