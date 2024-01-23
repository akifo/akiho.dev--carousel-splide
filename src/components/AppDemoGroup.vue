<script lang="ts" setup></script>

<template>
  <div class="flex flex-col gap-4">
    <div class="flex flex-col gap-1">
      <h2 class="text-2xl font-bold">
        <slot name="title"></slot>
      </h2>
      <p class="text-base text-slate-500">
        <slot name="description"></slot>
      </p>
    </div>
    <slot></slot>
  </div>
</template>

<style scoped></style>
