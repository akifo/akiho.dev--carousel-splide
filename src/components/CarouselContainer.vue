<script lang="ts" setup>
export type CarouselOptions = {
  effect: "slide" | "fade" | "webgl";
};

defineProps<{
  options: CarouselOptions;
}>();
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
