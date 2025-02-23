<template>
  <div class="px-20 flex flex-col h-full">
    <h1 class="text-Text lg:text-3xl md:text-xl text-lg font-semibold mb-5">
      {{ route.query.identifier }}
    </h1>
    <div
      class="bg-cover bg-center md:h-96 lg:w-full w-full h-full lg:h-[600px] rounded-md"
      :style="{ backgroundImage: `url(${projectSelected?.img})` }"
      aria-label="Project Image"
    ></div>
    <h2 class="font-bold text-3xl text-Text pt-3">Détails du projet</h2>
    <div class="pt-4 text-Text">
      <h2 class="text-Text lg:text-2xl md:text-xl text-lg font-bold">
        Date de réalisation
      </h2>
      <div class="pl-2 pt-2">
        <p>{{ projectSelected.date }}</p>
      </div>
    </div>
    <div class="pt-4 text-Text">
      <h2 class="text-Text lg:text-2xl md:text-xl text-lg font-bold">
        Services
      </h2>
      <div v-for="services in projectSelected?.services" class="pl-2 pt-2">
        <p>{{ services }}</p>
      </div>
    </div>
    <div class="text-Text pt-4">
      <h2 class="text-Text lg:text-2xl md:text-xl text-lg font-bold">
        Technologies du projet
      </h2>
      <div
        v-for="technologies in projectSelected?.technologies"
        class="pt-2 pl-2"
      >
        <span>{{ technologies }}</span>
      </div>
    </div>
    <div class="pt-8 pb-6 text-Text">
      <h2 class="text-Text lg:text-2xl md:text-xl text-lg font-bold pb-2">
        Description
      </h2>
      <p class="text-justify w-1/2">{{ projectSelected?.description }}</p>
    </div>
    <div
      class="text-black pt-4 mb-3 flex justify-start items-center gap-3"
    >
      <a  v-if="projectSelected?.url" :href="projectSelected?.url" target="_blank" rel="noopener noreferrer">
        <button
          class="bg-Primary text-black flex p-3 rounded-md gap-3 cursor-pointer"
        >
          Accèder au projet
          <img src="../assets/icons/other/Arrow.svg" /></button
      ></a>
      <div
        class="text-Text text-sm"
        v-if="projectSelected?.github"
        v-for="git in projectSelected?.github"
      >
      <a
        :href="git.html_url"
        target="_blank"
        rel="noopener noreferrer"
        ><button
          class="bg-none border-solid ring-2 border-Accent text-Accent items-center flex p-[9px] rounded-md gap-3 cursor-pointer"
        >
          <img src="../assets/icons/other/github.svg" /><span
            class="text-Accent font-bold"
            >Voir le Github {{ git.name }}</span
          >
        </button></a
      >
    </div>
    </div>
    <div
      v-if="projectSelected?.imgDetails"
      v-for="imgDetails in projectSelected?.imgDetails"
      class="flex flex-col gap-10 pt-3"
    >
      <img
        :src="imgDetails"
        class="pb-7 object-cover h-auto"
        alt="Project Detail Image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { data } from "~/data/Project";
import type { ProjectDetails } from "~/models/Project";
const route = useRoute();
const projectSelected = computed<ProjectDetails>(() =>
  data.find((data) => data.identifier === route.query.identifier)
);
</script>
