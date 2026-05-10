<template>
  <div
    class="bg-white border p-4 rounded-xl transition-all duration-200"
    :class="[
      selected
        ? 'border-gold ring-1 ring-gold/40 shadow-card-hover'
        : 'border-stone-600 shadow-card hover:shadow-card-hover hover:border-stone-500',
      clickable ? 'cursor-pointer' : ''
    ]"
    v-bind="$attrs"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  selected: { type: Boolean, default: false },
  clickable: { type: Boolean, default: false },
})
</script>
