<template>
  <div class="flex flex-col">
    <div 
      class="bg-cover bg-center lg:w-96 lg:h-60 w-72 h-60  rounded-md" 
      :style="{ backgroundImage: `url(${props.project.img})` }"
      aria-label="Project Image"
    >
    </div>
    <div class="flex flex-col lg:flex-row lg:justify-between items-center mt-3">
      <h3 class="lg:text-lg text-md font-semibold text-Text">{{props.project.name }}</h3>
      <button class="text-2xl font-bold p-2 rounded-full bg-Text hover:bg-Accent hover:ring-1 cursor-pointer transition-colors "><img src="../assets/icons/other/Arrow.svg" ></button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from '~/models/Project';
const props = defineProps<{
  project: Project;
}>();
</script>
