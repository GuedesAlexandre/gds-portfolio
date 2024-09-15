<template>
  <div class="flex justify-center flex-col items-center mt-40" id="projects">
    <TitleComponent title="Mes apprentissages" subtitle="Mes projets"/>
  </div>
  <ProjectGridComponent :projects="projects"/>
</template>

<script setup lang="ts">
import type { Project } from '~/models/Project';

  const projects = ref<Project[]>([
    {
      identifier: "Azathoth",
      name: "Azathoth",
      img:  new URL("@/assets/ressources/Azathoth.png", import.meta.url)
      .href,
    },
    {
      identifier : "Zushi",
      name: "Zushi",
      img: new URL("@/assets/ressources/Zushi.png", import.meta.url).href,
    },
    {
      identifier :"Evolve",
      name: "Evolve",
      img: new URL("@/assets/ressources/Evolve.png", import.meta.url).href,
    },
    {
      identifier: "ACF2L",
      name: "ACF2L",
      img: new URL("@/assets/ressources/ACF2L.png", import.meta.url).href,
    },
    {
    identifier: "WebDoc",
    name: "WebDoc",
    img: new URL("@/assets/ressources/WebDoc.png", import.meta.url).href,
    }
  ])
</script>
