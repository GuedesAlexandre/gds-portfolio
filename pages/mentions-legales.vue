<template>
  <div class="container mx-auto px-4 py-8 max-w-4xl">
    <h1 class="text-3xl font-bold mb-6 text-Text">Mentions Légales</h1>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-Text">1. Éditeur du site</h2>
      <p class="mb-2 text-Text">Ce site est édité par :</p>
      <p class="mb-1 text-Text">Alexandre GUEDES</p>
      <p class="mb-1 text-Text">Email : alexandreguedes77600@gmail.com</p>
    </section>
    
    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-Text">2. Hébergement</h2>
      <p class="mb-2 text-Text">Ce site est hébergé par :</p>
      <p class="mb-1 text-Text">Vercel Inc.</p>
      <p class="mb-1 text-Text">440 N Barranca Ave #4133</p>
      <p class="mb-1 text-Text">Covina, CA 91723</p>
      <p class="mb-1 text-Text">États-Unis</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-Text">3. Données personnelles</h2>
      <p class="mb-2 text-Text">Ce site ne collecte et ne stocke aucune donnée personnelle des visiteurs.</p>
      <p class="mb-2 text-Text">Aucun cookie n'est utilisé sur ce site.</p>
    </section>

    <section class="mb-8">
      <h2 class="text-2xl font-semibold mb-4 text-Text">4. Propriété intellectuelle</h2>
      <p class="mb-2 text-Text">L'ensemble du contenu de ce site est la propriété d'Alexandre GUEDES.</p>
    </section>
  </div>
</template>

<script setup>
useHead({
  title: 'Mentions Légales - Alexandre GUEDES',
  meta: [
    { name: 'description', content: 'Mentions légales du portfolio d\'Alexandre GUEDES' }
  ]
})
</script>