<template class="z-10" >
  <h3 class="text-Text text-lg">
  {{ props.title }}
  </h3>
  <h4 class="text-Secondary text-3xl font-bold">
  {{ props.subtitle }}
  </h4>
</template>

<script setup lang="ts" >
const props = defineProps<{
  title: string
  subtitle: string
}>()
</script>

