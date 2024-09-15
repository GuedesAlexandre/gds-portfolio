<template>
  <div class="flex justify-center items-center mt-8">
    <div class="lg:grid lg:grid-cols-2 lg:gap-9 gap-5 flex flex-col">
      <div v-for="project in projects" :key="project.identifier">
        <ProjectCardComponent :project="project"/>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Project } from '~/models/Project';

const props = defineProps<{
  projects: Project[];
}>();
</script>

<style>

</style>