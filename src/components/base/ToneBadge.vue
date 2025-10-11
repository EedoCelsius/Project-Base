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
    return 'bg-primary-100 text-primary-700';
  }

  if (props.tone === 'warning') {
    return 'bg-primary-200 text-primary-800';
  }

  return 'bg-primary/10 text-primary-600';
});

defineOptions({
  name: 'ToneBadge'
});
</script>
