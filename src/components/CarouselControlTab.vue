<script lang="ts" setup>
import { onMounted, ref, watch } from "vue";
import { injectCarousel } from "./useCarousel";

const { activeIndex, slideLength, setIndex } = injectCarousel();
const itemRefs = ref<HTMLElement[]>([]);
watch(activeIndex, () => {
  itemRefs.value[activeIndex.value].focus();
});
onMounted(() => {
  itemRefs.value[activeIndex.value].focus();
});
</script>

<template>
  <div class="CarouselControlTab" role="tablist">
    <button
      v-for="(item, index) in slideLength"
      :key="index"
      ref="itemRefs"
      type="button"
      :tabindex="activeIndex === index ? 0 : -1"
      class="rounded-full bg-indigo-600 p-1 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      @click="setIndex(index)"
      @keyup.left="setIndex(index - 1)"
      @keyup.right="setIndex(index + 1)"
    >
      {{ item }}
      <!-- <PlusIcon class="h-5 w-5" aria-hidden="true" /> -->
    </button>
  </div>
</template>

<style scoped>
.CarouselControlTab {
  display: flex;
  flex-direction: row;
  gap: 4px;
}
.CarouselControlTab:focus {
  border: 3px solid red;
}
button {
  width: 48px;
  height: 48px;
}
</style>
