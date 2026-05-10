<template>
  <header class="border-b border-stone-600 bg-stone-950/80 backdrop-blur sticky top-0 z-50 shadow-sm no-print">
    <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
      <RouterLink to="/" class="flex items-center gap-3">
        <span class="font-body text-lg font-semibold text-parchment tracking-wide">
          D&D Sheet Creator
        </span>
      </RouterLink>
      <nav class="flex items-center gap-6">
        <RouterLink to="/" class="text-stone-400 hover:text-parchment transition-colors text-sm">
          Home
        </RouterLink>
        <RouterLink to="/create" class="btn-primary text-sm">
          New Character
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
</script>
