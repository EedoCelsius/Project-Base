<template>
  <div class="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-100 dark:bg-slate-900 dark:ring-slate-800">
    <slot />
  </div>
</template>

<script setup>
defineOptions({
  name: 'Card'
});
</script>
