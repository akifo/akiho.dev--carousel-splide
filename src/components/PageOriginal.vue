<script lang="ts" setup>
import "swiper/css/bundle";
import AppDemoGroup from "./AppDemoGroup.vue";
import OriginalCarousel from "./OriginalCarousel.vue";
</script>

<template>
  <div class="container mx-auto">
    <h1 class="text-4xl font-bold">Original</h1>
    <input type="text" class="border" />
    <div class="flex flex-col gap-20 py-20">
      <AppDemoGroup>
        <template #title>Slide</template>
        <template #description>オプションなし</template>
        <OriginalCarousel />
      </AppDemoGroup>

      <AppDemoGroup>
        <template #title>Fade</template>
        <template #description>オプションなし</template>
        <OriginalCarousel />
      </AppDemoGroup>
    </div>
  </div>
</template>
