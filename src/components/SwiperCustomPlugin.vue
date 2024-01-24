<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";

const slides = generateSlidesFromSwiperJs();

// function myPlugin({
//   swiper,
//   extendParams,
//   on,
// }: {
//   swiper: any;
//   extendParams: any;
//   on: any;
// }) {
//   extendParams({
//     debugger: false,
//   });

//   on("init", () => {
//     if (!swiper.params.debugger) return;
//     console.log("init");
//   });
//   on("click", (swiper, e) => {
//     if (!swiper.params.debugger) return;
//     console.log("click");
//   });
//   on("tap", (swiper, e) => {
//     if (!swiper.params.debugger) return;
//     console.log("tap");
//   });
//   on("doubleTap", (swiper, e) => {
//     if (!swiper.params.debugger) return;
//     console.log("doubleTap");
//   });
//   on("sliderMove", (swiper, e) => {
//     if (!swiper.params.debugger) return;
//     console.log("sliderMove");
//   });
//   on("slideChange", () => {
//     if (!swiper.params.debugger) return;
//     console.log("slideChange", swiper.previousIndex, "->", swiper.activeIndex);
//   });
//   on("slideChangeTransitionStart", () => {
//     if (!swiper.params.debugger) return;
//     console.log("slideChangeTransitionStart");
//   });
//   on("slideChangeTransitionEnd", () => {
//     if (!swiper.params.debugger) return;
//     console.log("slideChangeTransitionEnd");
//   });
//   on("transitionStart", () => {
//     if (!swiper.params.debugger) return;
//     console.log("transitionStart");
//   });
//   on("transitionEnd", () => {
//     if (!swiper.params.debugger) return;
//     console.log("transitionEnd");
//   });
//   on("fromEdge", () => {
//     if (!swiper.params.debugger) return;
//     console.log("fromEdge");
//   });
//   on("reachBeginning", () => {
//     if (!swiper.params.debugger) return;
//     console.log("reachBeginning");
//   });
//   on("reachEnd", () => {
//     if (!swiper.params.debugger) return;
//     console.log("reachEnd");
//   });
// }

onMounted(() => {
  new Swiper("#SwiperCustomPlugin", {
    // Install Plugin To Swiper
    // modules: [myPlugin],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    // Enable debugger
    debugger: true,
  });
});
</script>

<template>
  <div id="SwiperCustomPlugin" class="swiper">
    <div class="swiper-wrapper">
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>

    <div class="swiper-pagination"></div>
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>
