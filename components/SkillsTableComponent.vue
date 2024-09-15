<template>
  <div class="flex flex-col align-center items-center lg:items-start gap-4"> 
    <div v-for="skill in props.skills" :key="skill.name" class="flex items-center gap-2">
      <img class="w-6 h-6" :src="skill.icon" @error="onImageError(skill.icon)"/>
      <h3 class="text-lg  text-Text">{{ skill.name }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts" >
import type { Skill } from '~/models/Skill';

const props = defineProps<{
  skills: Skill[]
}>()

const onImageError = (src: string) => {
  console.error(`Image not found: ${src}`);
}
</script>
