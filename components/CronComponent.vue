<template>
  <div class="flex justify-center flex-col items-center mt-40" id="Parcours">
    <TitleComponent title="Mon parcours" subtitle="Mes études" />
  </div>
  <section
    class="relative flex flex-col justify-center bg-slate-50 overflow-hidden text-white py-7"
    style="color: white"
  >
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 pt-4">
      <div
        class="flex flex-col justify-center divide-y divide-slate-200 "
      >
        <div class="w-full max-w-3xl mx-auto">
          <div class="-my-6" v-for="item in crontItems" :key="item.name">
            <div class="relative pl-8 sm:pl-32 py-6 group">
              <div class="font-lg text-md text-Accent mb-1 sm:mb-0">
                {{ item.company }}
              </div>
              <span class="text-Primary" v-if="item.mention"> Mention : {{ item.mention }}</span>
              <div
                class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-white after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
              >
                <time
                  class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full"
                  >{{ item.cron }}</time
                >
                <div class="text-xl font-bold text-white">
                  {{ item.name }}
                </div>
              </div>

              <div class="text-slate-200 text-sm text-justify">
                {{ item.description }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Cron } from "~/models/Cron";

const crontItems = ref<Cron[]>([
  {
    name: "Baccaleuréat STI2D Option Système d'informations et numérique",
    cron: "2021",
    description:
      "Un baccalauréat technologique en sciences et technologies de l'industrie et du développement durable (STI2D) option système d'informations et numérique où j'ai découvert le développement informatique avec le c et le java",
    mention: "Assez Bien",
    company: "Lycée Martin Luther King à Bussy-Saint-Georges",
  },
  {
    name: "BUT Métiers du Multimédia et de l'internet (Développement Web & Dispositifs intéractifs)",
    cron: "2025",
    description:
      "Au sein de ce BUT j'ai développer des compétences en développement web et mobile, en design graphique et en communication. J'ai également appris à travailler en équipe et à gérer des projets complexe. J'ai développé ma stack durant cette formation avec une apétance particulière autour du langage Java et de l'écosystème Spring découvert durant mes expériences professionnels.",
    mention: "ADMIS",
    company: "Université Gustave Eiffel",
  },
  {
    name: "Cycle ingénieur en informatique, architecture, design et développement de logiciels",
    cron: "Soon",
    description: `Au sein de cette formation je vais concevoir et développer des solutions logicielles pour toute branche de l'industrie et des services.
Développer des compétences de pilotage d'équipes I.T. opérant sur tout type de mission de la vie des projets informatiques (plan, build, run).
Développer une expertise sur les enjeux métiers liés au domaine des réseaux, du développement logiciel ou de la géomatique`,
    mention: "Soon",
    company: "ESIEE Paris",
  },
]);
</script>
