<template>
  <RouterView />
</template>

<script setup>
import { usePreferencesStore } from '@/stores/preferences';

usePreferencesStore();
</script>
