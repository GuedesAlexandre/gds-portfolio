<template>
  <div class="flex justify-center flex-col items-center mt-40" id="about">
    <TitleComponent title="Mes compétences" subtitle="Ma stack" />
  </div>
  <div
    class="flex lg:flex-row flex-col justify-center items-center gap-10 mt-8 lg:ml-8"
  >
    <SkillsTableComponent :skills="front" />
    <SkillsTableComponent :skills="back" />
    <SkillsTableComponent :skills="other" />
  </div>
</template>

<script lang="ts" setup>
import type { Skill } from "~/models/Skill";

const front = ref<Skill[]>([
  {
    name: "TypeScript",
    icon: new URL("@/assets/icons/front/TypeScriptfront.svg", import.meta.url)
      .href,
  },
  {
    name: "React",
    icon: new URL("@/assets/icons/front/Reactfront.svg", import.meta.url).href,
  },
  {
    name: "Nuxt",
    icon: new URL("@/assets/icons/front/Nuxtfront.svg", import.meta.url).href,
  },
  {
    name: "Tailwind",
    icon: new URL("@/assets/icons/front/Tailwindfront.svg", import.meta.url)
      .href,
  },
  {
    name: "Sass",
    icon: new URL("@/assets/icons/front/Sassfront.svg", import.meta.url).href,
  },
]);

const back = ref<Skill[]>([
  {
    name: "Spring",
    icon: new URL("@/assets/icons/back/Spring.svg", import.meta.url).href,
  },
  {
    name: "Docker",
    icon: new URL("@/assets/icons/back/Docker.svg", import.meta.url).href,
  },
  {
    name: "Laravel",
    icon: new URL("@/assets/icons/back/Laravel.svg", import.meta.url).href,
  },
  {
    name: "PostGreSql",
    icon: new URL("@/assets/icons/back/PostGre.svg", import.meta.url).href,
  },
  {
    name: "Kubernetes",
    icon: new URL("@/assets/icons/back/Kubernetes.svg", import.meta.url).href,
  },
]);

const other = ref<Skill[]>([
  {
    name: "Arc",
    icon: new URL("@/assets/icons/other/Arc.svg", import.meta.url).href,
  },
  {
    name: "Figma",
    icon: new URL("@/assets/icons/other/Figma.svg", import.meta.url).href,
  },
  {
    name: "Git",
    icon: new URL("@/assets/icons/other/Git.svg", import.meta.url).href,
  },
  {
    name: "StackOverflow",
    icon: new URL("@/assets/icons/other/StackOverflow.svg", import.meta.url)
      .href,
  },
]);
</script>
