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
    return 'bg-indigo-600 text-white hover:bg-indigo-500 dark:bg-indigo-500 dark:hover:bg-indigo-400';
  }

  if (props.outlined) {
    return 'border border-indigo-500 text-indigo-600 hover:bg-indigo-50 dark:border-indigo-400 dark:text-indigo-200 dark:hover:bg-indigo-500/10';
  }

  return 'bg-slate-100 text-slate-700 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700';
});

defineOptions({
  name: 'ActionButton'
});
</script>
