<template>
  <span class="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium" :class="toneClass">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tone: {
    type: String,
    default: 'info'
  }
});

const toneClass = computed(() => {
  if (props.tone === 'success') {
    return 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300';
  }

  if (props.tone === 'warning') {
    return 'bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300';
  }

  return 'bg-sky-100 text-sky-700 dark:bg-sky-500/10 dark:text-sky-300';
});

defineOptions({
  name: 'ToneBadge'
});
</script>
