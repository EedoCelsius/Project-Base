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
    return 'bg-success-100 text-success-700';
  }

  if (props.tone === 'warning') {
    return 'bg-warning-100 text-warning-700';
  }

  return 'bg-info-100 text-info-700';
});

defineOptions({
  name: 'ToneBadge'
});
</script>
