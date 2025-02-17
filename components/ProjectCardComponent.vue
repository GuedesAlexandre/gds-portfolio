<template>
  <div class="flex flex-col">
    <div
      class="bg-cover bg-center lg:w-96 lg:h-60 w-96 h-60 rounded-md"
      :style="{ backgroundImage: `url(${props.project.img})` }"
      aria-label="Project Image"
    ></div>
    <div class="flex flex-col lg:flex-row lg:justify-between items-center mt-3">
      <h3 class="lg:text-lg text-md font-semibold text-Text">
        {{ props.project.name }}
      </h3>
      <NuxtLink :to="{ path: '/project', query: { identifier: props.project.identifier } }">
        <button
          class="font-bold p-2 rounded-full bg-Text hover:bg-Accent cursor-pointer transition-colors duration-500"
        >
          <img
            src="../assets/icons/other/Arrow.svg"
            class="min-w-fit"
            alt="arrow"
          />
        </button>
      </NuxtLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Project } from "~/models/Project";
const props = defineProps<{
  project: Project;
}>();
</script>
