<script lang="ts" setup>
import "swiper/css/bundle";
import AppDemoGroup from "./AppDemoGroup.vue";
import OriginalCarouselSlide from "./OriginalCarouselSlide.vue";
import OriginalCarouselFade from "./OriginalCarouselFade.vue";
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold">Original</h1>
    <input type="text" class="border" />
    <div class="flex flex-col gap-20 py-20">
      <AppDemoGroup>
        <template #title>Slide</template>
        <template #description></template>
        <OriginalCarouselSlide />
      </AppDemoGroup>
      <AppDemoGroup>
        <template #title>Fade</template>
        <template #description></template>
        <OriginalCarouselFade />
      </AppDemoGroup>
    </div>
  </div>
</template>
