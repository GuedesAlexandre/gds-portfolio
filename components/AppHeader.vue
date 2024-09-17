<template>
    <header class="text-black p-9 mt-3">
        <nav class="flex items-center lg:justify-center text-Text font-sans lg:text-[16px] text-[12px] text-base">
            
            <div class="flex items-center space-x-4 md:hidden ">
                <button @click="toggleMenu" class="text-xl">
                    <div v-if="!isMenuOpen"><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg></div>
                    <div v-else><svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></div>
                </button>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-4">
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-red-500">Accueil</a></li>
                    <li><a href="#about" class="hover:text-red-500">À propos</a></li>
                    <li><a href="#projects" class="hover:text-red-500">Projets</a></li>
                    <li><a href="#contact" class="hover:text-red-500">Contact</a></li>
                </ul>
            </div>
        </nav>
        <transition name="fade">
            <div v-if="isMenuOpen" class="md:hidden text-Text font-sans lg:text-[16px] text-[12px] text-base">
            <ul class="flex flex-col space-y-4 text-Text font-sans lg:text-[16px] text-[12px] text-base mt-12  w-full h-full p-6">
                <li><a href="#" class="hover:text-red-500">Accueil</a></li>
                <li><a href="#about" class="hover:text-red-500">À propos</a></li>
                <li><a href="#projects" class="hover:text-red-500">Projets</a></li>
                <li><a href="#contact" class="hover:text-red-500">Contact</a></li>
            </ul>
            </div>
        </transition>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);
const state = ref('')
function toggleMenu() {

    isMenuOpen.value = !isMenuOpen.value;
    state.value = isMenuOpen.value ? 'open' : 'closed';
}
</script>