<template>
  <div class="max-w-4xl mx-auto px-6 py-20 text-center">
    <div class="text-gold text-6xl mb-6">⚔</div>
    <h1 class="text-4xl font-body font-semibold text-parchment mb-4 tracking-wide">
      D&D Character Sheet
    </h1>
    <p class="text-stone-400 text-lg mb-3 max-w-xl mx-auto">
      Build characters for D&D 5e and 5.5e. Choose your race, class, abilities, and background
      — get a complete character sheet instantly.
    </p>
    <p class="text-stone-500 text-sm mb-10">Supports both 5e and 5.5e (2024) rules.</p>

    <RouterLink to="/create" class="btn-primary text-base px-8 py-3 inline-block">
      Create a Character
    </RouterLink>

    <div class="mt-20 grid grid-cols-3 gap-6 text-left">
      <div class="card border-stone-700">
        <div class="text-gold text-2xl mb-2">🧝</div>
        <h3 class="text-parchment font-semibold mb-1">Races & Species</h3>
        <p class="text-stone-400 text-sm">All SRD races with full trait descriptions and ability bonuses.</p>
      </div>
      <div class="card border-stone-700">
        <div class="text-gold text-2xl mb-2">⚡</div>
        <h3 class="text-parchment font-semibold mb-1">Auto-calculated Stats</h3>
        <p class="text-stone-400 text-sm">HP, modifiers, proficiency bonus, and AC calculated automatically.</p>
      </div>
      <div class="card border-stone-700">
        <div class="text-gold text-2xl mb-2">📜</div>
        <h3 class="text-parchment font-semibold mb-1">Export Ready</h3>
        <p class="text-stone-400 text-sm">Export your character as JSON to use in your favorite VTT.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
