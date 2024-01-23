<script lang="ts" setup>
import CarouselItem from "./CarouselItem.vue";
import GalleryOne from "./GalleryOne.vue";
import PaginationOne from "./PaginationOne.vue";
import ThumbnailsOne from "./ThumbnailsOne.vue";
</script>

<template>
  <div class="flex flex-col h-screen bg-zinc-300">
    <header class="flex items-center justify-between px-6 py-4 border-b">
      <h1 class="text-2xl font-bold">Splide</h1>
    </header>
    <main class="flex-1 overflow-y-auto p-6">
      <CarouselItem title="Pagenation" description="Description for Section 1">
        <PaginationOne />
      </CarouselItem>
      <CarouselItem title="Thumbnails" description="サムネイルがシンクする">
        <ThumbnailsOne />
      </CarouselItem>
      <CarouselItem title="Gallery" description="Description for Section 1">
        <GalleryOne />
      </CarouselItem>
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
