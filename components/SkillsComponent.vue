<template>
  <div class="flex justify-center flex-col items-center mt-40" id="about">
    <TitleComponent title="Mes compétences" subtitle="Ma stack" />
  </div>
  <div class="flex flex-row justify-center items-center gap-4 mt-2">
   
    <SkillsTableComponent :skills="front" />
    <SkillsTableComponent :skills="front" />
    <SkillsTableComponent :skills="front" />

  </div>

</template>

<script lang="ts" setup>
import type { Skill } from '~/models/Skill';


const front = ref<Skill[]>([
  {
    name: "Angular",
    icon: "../assets/icons/front/Angularfront.svg",
  },
  {
    name: "TypeScript",
    icon: "../assets/icons/front/TypeScriptfront.svg",
  },
  {
    name: "React",
    icon: "../assets/icons/front/Reactfront.svg",
  },
  {
    name: "Nuxt",
    icon: "../assets/icons/front/Nuxtfront.svg",
  },
  {
    name: "Tailwind",
    icon: "../assets/icons/front/Tailwindfront.svg",
  },
  {
    name:"Sass",
    icon:"../assets/icons/front/Sassfront.svg"
  }
]);
</script>


