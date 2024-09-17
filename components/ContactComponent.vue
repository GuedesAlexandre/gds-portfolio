<template>
  <div class="flex justify-center flex-col items-center mt-40" id="contact">
    <TitleComponent
      title="Des questions ? Travaillons ensemble !"
      subtitle="Contact"
    />
  </div>
  <div class="flex flex-col justify-center items-center gap-4 mt-6">
    <div class="flex justify-center items-center gap-3">
      <img src="../assets/icons/other/mail.svg" /><span class="text-Text"
        >alexandreguedes77600@gmail.com</span
      >
    </div>
    <div class="flex justify-center items-center gap-3">
      <img src="../assets/icons/other/phone.svg" /><span class="text-Text"
        >+33 6 61 50 60 29</span
      >
    </div>
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
  </div>
</template>

<script setup lang="ts"></script>
