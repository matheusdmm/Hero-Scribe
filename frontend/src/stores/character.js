import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { emptyCharacter } from '@/types/index.js'
import { useApi } from '@/composables/useApi.js'

export const useCharacterStore = defineStore('character', () => {
  const { fetchRaces, fetchClasses, calculateSheet } = useApi()

  // State
  const draft = ref(emptyCharacter())
  const races = ref([])
  const classes = ref([])
  const sheet = ref(null)
  const currentStep = ref(0)
  const loading = ref(false)
  const error = ref(null)

  // Getters
  const selectedRace = computed(() => races.value.find(r => r.id === draft.value.race))
  const selectedClass = computed(() => classes.value.find(c => c.id === draft.value.class))
  const isComplete = computed(() =>
    draft.value.name && draft.value.race && draft.value.class && draft.value.background
  )

  // Actions
  async function loadData() {
    loading.value = true
    try {
      ;[races.value, classes.value] = await Promise.all([fetchRaces(), fetchClasses()])
    } catch (e) {
      error.value = 'Failed to load game data'
    } finally {
      loading.value = false
    }
  }

  async function calculate() {
    loading.value = true
    try {
      if (!draft.value.createdAt) draft.value.createdAt = new Date().toISOString()
      sheet.value = await calculateSheet({
        race: draft.value.race,
        class: draft.value.class,
        level: draft.value.level,
        abilities: draft.value.abilities,
        background: draft.value.background,
      })
    } catch (e) {
      error.value = 'Failed to calculate character'
    } finally {
      loading.value = false
    }
  }

  function nextStep() { currentStep.value++ }
  function prevStep() { currentStep.value-- }
  function reset() {
    draft.value = emptyCharacter()
    sheet.value = null
    currentStep.value = 0
    error.value = null
  }

  return {
    draft, races, classes, sheet, currentStep, loading, error,
    selectedRace, selectedClass, isComplete,
    loadData, calculate, nextStep, prevStep, reset,
  }
})
