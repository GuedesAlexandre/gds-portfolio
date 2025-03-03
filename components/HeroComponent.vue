<template>
  <div class="flex  main-ttl justify-center flex-col items-center text-Text mt-20">
    <span class="lg:text-xl font-sans">Hello, je suis</span>
    <h2 class="lg:text-[35px] text-[20px] font-sans font-bold">Alexandre Guedes</h2>
    <span>Développeur FullStack chez BPCE SI</span>
  </div>
  <div class="flex justify-center mt-4 gap-5">
    <button class="bg-Secondary btn-cv text-Text p-3 pl-3 pr-3 rounded-[3px] font-sans font-medium">Télécharge mon cv</button>
    <button class="border-Secondary btn-more border-2 text-Text p-3 pl-3 pr-3 rounded-[3px] font-sans font-medium">Voir plus</button>
  </div>
  <mainPhoto />
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "HeroComponent",
  mounted() {
    gsap.from(".main-ttl", { duration: 1, opacity: 0, y: -50, stagger: 0.2 });
    gsap.from(".btn-cv ", { duration: 0.5, opacity: 0, y: 50, stagger: 0.2, delay: 1 });
    gsap.from(".btn-more ", { duration: 0.5, opacity: 0, y: 50, stagger: 0.2, delay: 1 });
  }
};
</script>