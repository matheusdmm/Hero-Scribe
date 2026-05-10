<template>
  <div class="flex items-center justify-center gap-0">
    <template v-for="(step, i) in steps" :key="i">
      <div class="flex flex-col items-center">
        <div
          class="w-8 h-8 flex items-center justify-center text-sm font-bold rounded-full border-2 transition-all duration-200"
          :class="
            i < current
              ? 'bg-crimson border-crimson text-white'
              : i === current
              ? 'bg-gold border-gold text-ink shadow-btn'
              : 'bg-transparent border-stone-600 text-stone-500'
          "
        >
          {{ i < current ? '✓' : i + 1 }}
        </div>
        <span class="text-xs mt-1 text-stone-400">{{ step }}</span>
      </div>
      <div
        v-if="i < steps.length - 1"
        class="w-8 h-0.5 mb-5 rounded-full transition-colors duration-200"
        :class="i < current ? 'bg-gold/60' : 'bg-stone-700'"
      />
    </template>
  </div>
</template>

<script setup>
defineProps({
  steps: { type: Array, required: true },
  current: { type: Number, required: true },
})
</script>
