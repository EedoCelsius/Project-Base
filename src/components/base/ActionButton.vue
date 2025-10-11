<template>
  <button
    type="button"
    class="inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition"
    :class="toneClass"
  >
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  tone: {
    type: String,
    default: 'default'
  },
  outlined: {
    type: Boolean,
    default: false
  }
});

const toneClass = computed(() => {
  if (props.tone === 'primary') {
    return 'bg-primary-500 text-white hover:bg-primary-400';
  }

  if (props.outlined) {
    return 'border border-primary-300 text-primary-600 hover:bg-primary/10';
  }

  return 'bg-surface-100 text-surface-700 hover:bg-surface-200';
});

defineOptions({
  name: 'ActionButton'
});
</script>
