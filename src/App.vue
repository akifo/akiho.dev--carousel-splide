<script setup lang="ts">
import CarouselItem from "./components/CarouselItem.vue";
import PaginationOne from "./components/PaginationOne.vue";
</script>

<template>
  <div class="flex flex-col h-screen">
    <header class="flex items-center justify-between px-6 py-4 border-b">
      <h1 class="text-2xl font-bold">Pagination</h1>
    </header>
    <main class="flex-1 overflow-y-auto p-6">
      <CarouselItem title="Section 1" description="Description for Section 1">
        <PaginationOne />
      </CarouselItem>
      <CarouselItem title="Section 1" description="Description for Section 1">
        <PaginationOne />
      </CarouselItem>
      <CarouselItem title="Section 1" description="Description for Section 1">
        <PaginationOne />
      </CarouselItem>
    </main>
  </div>
</template>

<style scoped></style>
