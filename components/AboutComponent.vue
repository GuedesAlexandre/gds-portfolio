<template>
  <div class="flex justify-center flex-col items-center mt-40" id="about">
    <TitleComponent title="Mon histoire" subtitle="A propos" />
  </div>
  <div class="flex justify-center mt-4 gap-5">
    <img src="../assets/ressources/profil.png" />
  </div>
  <div class="flex justify-center">
    <p
      class="text-Text text-center mt-8 text-sm lg:text-[16px] w-full lg:w-[1033px] ml-6 mr-6 lg:ml-0 lg:mr-0"
    >
      Originaire de Paris, j’ai toujours été passionné par la technologies.
      Lorsque j’ai obtenu mon bac, j’ai décidé d’orienter mes études vers
      l’informatique où j’ai découvert une véritable passion pour le
      développement d’applications FullStack. Mon objectif est de créer des
      expériences innovantes et enrichissantes pour un maximum d’utilisateurs et
      ceux grâce à l’informatique. Encore dans mes études, j’occupe actuellement
      le poste d’apprenti
      <span class="text-Secondary font-bold">développeur FullStack</span> au
      sein de BPCE Solutions Informatiques.
    </p>
  </div>
  <div class="flex justify-center flex-col lg:flex-row gap-2 lg:gap-6 items-center mt-5">
    <a
      href="https://www.linkedin.com/in/alexandre-guedesmmi/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <button
        class="bg-Accent text-Text flex p-3 rounded-md gap-3 cursor-pointer"
      >
        <img src="../assets/icons/other/linkedin.svg" /><span
          >Voir mon Linkedin</span
        >
      </button></a
    >
    <a
      href="https://github.com/GuedesAlexandre"
      target="_blank"
      rel="noopener noreferrer"
      ><button
        class="bg-none border-solid ring-2 border-Accent text-Accent flex p-3 rounded-md gap-3 cursor-pointer"
      >
        <img src="../assets/icons/other/github.svg" /><span class="text-Accent font-bold"
          >Voir mon Github</span
        >
      </button></a
    >
  </div>
  <CronComponent />
  <CronProComponent />
</template>

<script setup lang="ts"></script>
