<script lang="ts" setup>
import { injectCarousel } from "./useCarousel";

const { toNext, toPrev } = injectCarousel();
</script>

<template>
  <button @click="toNext">next</button>
  <button @click="toPrev">prev</button>
</template>

<style scoped>
button {
  margin-top: 20px;
  margin-right: 20px;
}
</style>
