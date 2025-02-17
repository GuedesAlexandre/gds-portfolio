<template>
  <div class="flex justify-center flex-col items-center mt-40" id="Parcours">
    <TitleComponent title="Développer mes connaissances" subtitle="Ma veille technologique"/>
  </div>
  <div class="flex  flex-col justify-center items-center">
    <p
        class="text-Text text-center mt-8 text-sm lg:text-[16px] w-full lg:w-[1033px] ml-6 mr-6 lg:ml-0 lg:mr-0"
    >
      Étant passionné par les nouvelles technologies, je suis constamment à la recherche de nouvelles informations et de
      nouvelles compétences à acquérir. Développant principalement à l'aide d'Angular et de Spring, je me documente
      constamment autour de Java, TypeScript et autour des nouveautés de ces technologies. Je suis également très
      intéressé par les technologies liées aux infrastructures et à la sécurité informatique.
    </p>
    <h4 class="mt-4 text-Primary font-gilroy_bold">Mes outils de veille technologique</h4>
    <div class="flex  flex-col  items-center justify-center gap-5 mt-4">
      <div class="text-Text flex-col flex gap-3 items-center justify-center text-center">
        <img src="../assets/icons/other/StackOverflow.svg" class="w-9" />
        <a href="https://stackoverflow.com/questions" class="hover:text-Secondary" >
          <span class="font-bold">StackOverflow</span>
        </a>
      </div>
      <div class="text-Text flex-col flex gap-3 items-center justify-center text-center">
        <img src="../assets/icons/other/daily-dev-dark.svg" class="w-9" />
        <a href="https://daily.dev/" class="hover:text-Secondary">
          <span class="font-bold">Daily.Dev</span>
        </a>
      </div>
      <div class="text-Text flex-col flex gap-3 items-center justify-center text-center">
        <img src="../assets/icons/other/Devto_dark.svg" class="w-9" />
        <a href="https://dev.to/" class="hover:text-Secondary">
          <span class="font-bold">Devto</span>
        </a>
      </div>
      <div class="text-Text flex-col flex gap-3 items-center justify-center text-center">
        <img src="../assets/icons/back/Spring.svg"  class="w-9"/>
        <a href="https://www.baeldung.com/" class="hover:text-Secondary">
          <span class="font-bold">Baeldung</span>
        </a>
      </div>

      <img src="https://www.devoxx.fr/wp-content/uploads/2023/11/18-728x90-Leaderboard.png"/>
      <p
          class="text-Text text-center justify-center mt-8 text-sm lg:text-[16px] w-full lg:w-[1033px] ml-6 mr-6 lg:ml-0 lg:mr-0"
      >
        J'assiste énormément à des conférences organisées lors de salons de développeurs comme le Devoxx. Le Devoxx France
        est d’abord un ensemble de conférences pour les développeurs, et ensuite un salon classique, avec stands et
        exposants. J'assiste principalement à des conférences qui concernent Java, Spring, Angular, TypeScript et les
        patterns d'architecture logicielle.
      </p>
    </div>
  </div>

</template>
<script setup lang="ts">
</script>