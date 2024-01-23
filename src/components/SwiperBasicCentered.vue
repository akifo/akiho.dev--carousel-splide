<script lang="ts" setup>
import { onMounted } from "vue";
import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import { generateSlidesFromSwiperJs } from "../utils/generateSlides";

const slides = generateSlidesFromSwiperJs();

onMounted(() => {
  new Swiper(".SwiperBasicCentered", {
    modules: [Navigation, Pagination],
    loop: true, // ループ
    speed: 300, // 少しゆっくり(デフォルトは300)
    slidesPerView: 1.5, // 一度に表示する枚数
    spaceBetween: 30, // スライド間の距離
    centeredSlides: true, // アクティブなスライドを中央にする
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
    slidesPerView で 1.5 とか指定すれば、中央に１枚、左右に 0.5 枚ずつ表示される
  </p>

  <!-- Slider main container -->
  <div class="swiper SwiperBasicCentered">
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
