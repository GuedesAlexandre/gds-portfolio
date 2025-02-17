<template>
  <div class="px-20 flex flex-col h-full">
    <h1 class="text-Text lg:text-3xl md:text-xl text-lg font-semibold mb-5">
      {{ route.query.identifier }}
    </h1>
    <div
      class="bg-cover bg-center md:h-96 lg:w-full w-full h-96 lg:h-[500px] rounded-md"
      :style="{ backgroundImage: `url(${projectSelected?.img})` }"
      aria-label="Project Image"
    ></div>
    <h2 class="font-bold text-3xl text-Text pt-3">Détails du projet</h2>
    <div class="pt-8 pb-6 text-Text">
      <h2 class="text-Text lg:text-2xl md:text-xl text-lg font-bold pb-2">
        Description
      </h2>
      <p class="text-justify">{{ projectSelected?.description }}</p>
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
    <div class="text-black pt-4" v-if="projectSelected?.url">
      <a :href="projectSelected?.url" target="_blank" rel="noopener noreferrer">
        <button
          class="bg-none flex gap-2 items-center bg-Primary p-4 rounded-md"
        >
          Accèder au projet
          <img src="../assets/icons/other/Arrow.svg" /></button
      ></a>
    </div>
    <div
      v-if="projectSelected?.imgDetails"
      v-for="imgDetails in projectSelected?.imgDetails"
      class="flex flex-col gap-10 pt-3"
    >
      <img
        :src="imgDetails"
        class="pb-7 object-cover"
        alt="Project Detail Image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRoute } from "vue-router";
import { data } from "~/data/Project";
const route = useRoute();
const projectSelected = computed(() =>
  data.find((data) => data.identifier === route.query.identifier)
);
console.log(projectSelected.value);
</script>
