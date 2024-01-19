<script setup lang="ts">
import { Splide, SplideSlide } from "@splidejs/vue-splide";

const options = {
  rewind: true,
  gap: "1rem",
};
</script>

<template>
  <Splide :options="options" aria-label="お気に入りの写真">
    <SplideSlide>
      <img
        src="https://fastly.picsum.photos/id/402/200/200.jpg?hmac=9PZqzeq_aHvVAxvDPNfP6GuD58m4rilq-TUrG4e7V80"
        alt="Sample 1"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://fastly.picsum.photos/id/794/200/200.jpg?hmac=qNLJvkiBmg4TyCSCwU__daf9sb5La0_1eRzJewRgIyU"
        alt="Sample 2"
      />
    </SplideSlide>
    <SplideSlide>
      <img
        src="https://fastly.picsum.photos/id/197/200/200.jpg?hmac=QpHQ9OiY_-qagHPzHZgTw7I_nE3LevYjH_1k3-xLpPk"
        alt="Sample 3"
      />
    </SplideSlide>
  </Splide>
</template>

<style scoped></style>
