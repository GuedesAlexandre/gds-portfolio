<template>
  <div class="w-full h-[14rem] blur-[200px] bg-blend-luminosity absolute bg-Secondary z-0 flex justify-center mt-52">
     
  </div>
  <div class="flex justify-center mt-2">
      <img class="p-3 z-10 w-1/2 lg:w-[380px] lg:h-[538px]" src="../assets/ressources/main-photo.png" />
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  name: "MainPhoto",
  mounted() {

    gsap.from("img", { duration: 1, opacity: 0, scale: 0.8, delay: 0.5 });
  }
};
</script>