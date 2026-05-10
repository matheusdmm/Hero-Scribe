<template>
  <div class="min-h-screen bg-stone-950">
    <AppHeader />
    <main>
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import AppHeader from '@/components/layout/AppHeader.vue'
</script>
