<template>
  <div
    class="flex main-ttl justify-center flex-col items-center text-Text mt-20"
  >
    <span class="lg:text-xl font-sans">Hello, je suis</span>
    <h2 class="lg:text-[35px] text-[20px] font-sans font-bold">
      Alexandre Guedes
    </h2>
    <span>Développeur FullStack chez BPCE SI</span>
  </div>
  <div class="flex justify-center mt-4 gap-5">
    <button
      @click="downloadCV"
      class="bg-Secondary btn-cv text-Text p-3 pl-3 pr-3 rounded-[3px] font-sans font-medium inline-block"
    >
      Télécharge mon cv
    </button>
   <a href="#about"> <button
      class="border-Secondary btn-more border-2 text-Text p-3 pl-3 pr-3 rounded-[3px] font-sans font-medium"
    >
      Voir plus
    </button></a>
  </div>
  <mainPhoto />
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { gsap } from "gsap";

const downloadCV = async (): Promise<void> => {
  try {
    const response = await fetch(
      new URL(
        "../assets/ressources/CV_GUEDES.pdf",
        import.meta.url
      ).toString()
    );
    if (!response.ok) throw new Error("Failed to fetch CV");

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "alexandre_guedes_cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading CV:", error);
  }
};

onMounted(() => {
  gsap.from(".main-ttl", { duration: 1, opacity: 0, y: -50, stagger: 0.2 });
  gsap.from(".btn-cv", {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    delay: 1,
  });
  gsap.from(".btn-more", {
    duration: 0.5,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    delay: 1,
  });
});
</script>
