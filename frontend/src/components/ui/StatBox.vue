<template>
  <div class="bg-stone-900 border border-stone-700 rounded-xl p-4 flex flex-col items-center gap-1 shadow-stat">
    <span class="text-xs text-stone-400 tracking-widest uppercase">{{ label }}</span>
    <span class="text-3xl font-bold text-parchment">{{ value }}</span>
  </div>
</template>

<script setup>
defineProps({
  label: String,
  value: [String, Number],
})
</script>
