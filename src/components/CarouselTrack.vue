<script lang="ts" setup>
import { useDebounceFn } from "@vueuse/core";
import { ref } from "vue";

const activeIndex = ref(0);

// スクロール後に、CarouselTrack が内包する要素が viewport の中にあるかどうかを getBoundingClientRect で判定していく
function calcActiveIndex(e: Event) {
  const track = e.target as HTMLElement;
  const children = track.children;
  const viewport = track.getBoundingClientRect();
  for (let i = 0; i < children.length; i++) {
    const child = children[i] as HTMLElement;
    const rect = child.getBoundingClientRect();
    if (rect.left >= viewport.left && rect.right <= viewport.right) {
      activeIndex.value = i;
      break;
    }
  }
}
const onScroll = useDebounceFn(calcActiveIndex, 40);
</script>

<template>
  <div class="CarouselTrack" @scroll="onScroll">
    <slot />
    <div class="absolute bottom-0 left-0">{{ activeIndex }}</div>
  </div>
</template>

<style scoped>
.CarouselTrack {
  display: flex;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer 10+ */
  max-width: max-content;
}

/* FIXME: scrollbar のありなしは option で設定可能にする */
.CarouselTrack::-webkit-scrollbar {
  /* display: none; */
}
</style>
