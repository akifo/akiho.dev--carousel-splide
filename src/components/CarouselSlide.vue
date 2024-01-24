<script lang="ts" setup></script>

<template>
  <div class="CarouselSlide">
    <slot />
  </div>
</template>

<style scoped>
.CarouselSlide {
  flex: none;
  width: 50%;
  scroll-snap-align: start;
}
</style>
