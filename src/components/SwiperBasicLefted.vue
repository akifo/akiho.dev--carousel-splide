<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper(".SwiperBasicLefted", {
    modules: [Navigation, Pagination],
    loop: true, // ループ
    speed: 300, // 少しゆっくり(デフォルトは300)
    slidesPerView: 3.5, // 一度に表示する枚数
    spaceBetween: 30, // スライド間の距離
    autoplay: {
      // 自動再生
      delay: 1000, // 1秒後に次のスライド
      disableOnInteraction: false, // 矢印をクリックしても自動再生を止めない
    },
    // ページネーション
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    // 前後の矢印
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
});
</script>

<template>
  <p>
    slidesPerView で 1.5 を指定しつつ、centeredSlides を false にすると、
    右側のスライドが半分だけ表示される状態になる。
  </p>

  <!-- Slider main container -->
  <div class="swiper SwiperBasicLefted">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <div v-for="slide in slides" :key="slide.alt" class="swiper-slide">
        <img :src="slide.src" :alt="slide.alt" />
      </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

    <!-- If we need scrollbar -->
    <div class="swiper-scrollbar"></div>
  </div>
</template>
