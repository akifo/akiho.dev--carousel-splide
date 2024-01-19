<script lang="ts" setup>
defineProps<{ title: string; description: string }>();
</script>

<template>
  <section class="mb-8 border-b pb-8">
    <h2 class="text-xl font-bold mb-2">{{ title }}</h2>
    <p class="text-gray-500 dark:text-gray-400">
      {{ description }}
    </p>
    <slot />
  </section>
</template>
