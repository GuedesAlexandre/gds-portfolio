<template>
  <div v-for="skill in props.skills" class="flex flex-col align-center">
    <div class="flex items-center gap-2">
      <img class="w-6 h-6" :src="skill.icon" />
      <h3 class="text-lg font-bold">{{ skill.name }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts" >
//define props with type skills
const props = defineProps<{
  skills: Skill[]
}>()
</script>
