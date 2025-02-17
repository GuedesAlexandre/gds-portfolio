<template>
  <div class="flex justify-center flex-col items-center mt-40" id="Parcours">
    <TitleComponent
      title="Mon parcours"
      subtitle="Mes expériences"
    />
  </div>
  <section
    class="relative flex flex-col justify-center bg-slate-50 overflow-hidden text-white py-7"
    style="color: white"
  >
    <div class="w-full max-w-6xl mx-auto px-4 md:px-6 pt-4">
      <div class="flex flex-col justify-center divide-y divide-slate-200">
        <div class="w-full max-w-3xl mx-auto">
          <div class="-my-6" v-for="item in crontItems" :key="item.name">
            <div class="relative pl-8 sm:pl-32 py-6 group">
              <div class="font-lg text-md text-Accent mb-1 sm:mb-0">
                {{ item.company }}
              </div>
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

<script lang="ts" setup>
import type { Cron } from "~/models/Cron";

const crontItems = ref<Cron[]>([
  {
    name: "Apprenti Développeur FullStack",
    cron: "Aujourd'hui",
    description:
      "Développement de micro-services bancaires dans le cadre d’une architecture micro-services. Développement d’applications web côté client lié au domaine de l’affacturage. Les technologies que j'ai eu l'occasion d'utiliser sont : Java Spring, Angular, Tailwind css, Jenkins, Openshift, Docker, Kubernetes, JUnit, ...",
    company: "BPCE Solutions Informatiques",
  },
  {
    name: "Stagiaire Développeur API DevOps",
    cron: "Mars - Août 2024",
    description:
      "Développement d’une application full stack capable de suivre les informations autour des différents composants du SI de l’entité d’affacturage du groupe. Les technologies que j'ai eu l'occasion d'utiliser sont : Java Spring, Vue.js, Tailwind css, Jenkins, Openshift, Docker, Kubernetes, JUnit, ...",
    company: "BPCE Solutions Informatiques",
  },
  {
    name: "Stagiaire Développeur Web",
    cron: "Juin - Août 2023",
    description: `Intégration de site web sous WordPress, ajout de modules, Maintenance de sécurité des sites web, développement, côté Back, de solutions pour WordPress en PHP.`,
    company: "Azapp",
  },
]);
</script>
