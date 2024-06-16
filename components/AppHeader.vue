<template>
    <header class="text-black p-9">
        <nav class="flex items-center justify-end">
            
            <div class="flex items-center space-x-4 md:hidden">
                <button @click="toggleMenu" class="text-xl">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
            </div>
            <div class="hidden md:flex md:items-center md:space-x-4">
                <ul class="flex space-x-4">
                    <li><a href="#" class="hover:text-red-500">Accueil</a></li>
                    <li><a href="#" class="hover:text-red-500">À propos</a></li>
                    <li><a href="#" class="hover:text-red-500">Mes outils</a></li>
                    <li><a href="#" class="hover:text-red-500">Projets</a></li>
                    <li><a href="#" class="hover:text-red-500">Contact</a></li>
                </ul>
            </div>
        </nav>
        <div v-if="isMenuOpen" class="md:hidden">
            <ul class="flex flex-col space-y-4">
                <li><a href="#" class="hover:text-red-500">Accueil</a></li>
                <li><a href="#" class="hover:text-red-500">À propos</a></li>
                <li><a href="#" class="hover:text-red-500">Mes outils</a></li>
                <li><a href="#" class="hover:text-red-500">Projets</a></li>
                <li><a href="#" class="hover:text-red-500">Contact</a></li>
            </ul>
        </div>
    </header>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
    isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
/* Ajoutez ici vos styles personnalisés */
</style>
