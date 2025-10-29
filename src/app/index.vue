<template>
  <div class="px-6 py-8">
    <header class="mx-auto mb-10 w-full max-w-5xl">
      <Header />
    </header>
    <main class="mx-auto w-full max-w-5xl space-y-6">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import Header from './Header.vue';
</script>
