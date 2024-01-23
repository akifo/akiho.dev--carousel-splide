<script setup lang="ts">
import AppSideNav from "./AppSideNav.vue";
</script>

<template>
  <div class="flex">
    <AppSideNav class="w-1/4" />
    <div class="w-3/4 p-4">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped></style>
