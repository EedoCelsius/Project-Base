<template>
  <div class="rounded-2xl bg-surface-0 p-6 shadow-sm ring-1 ring-surface-200">
    <slot />
  </div>
</template>

<script setup>
defineOptions({
  name: 'Card'
});
</script>
