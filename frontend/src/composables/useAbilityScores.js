// composables/useAbilityScores.js
import { computed } from 'vue'
import { ABILITY_NAMES } from '@/types/index.js'

export function useAbilityScores(abilities) {
  function modifier(score) {
    return Math.floor((score - 10) / 2)
  }

  function modifierStr(score) {
    const m = modifier(score)
    return m >= 0 ? `+${m}` : `${m}`
  }

  const modifiers = computed(() => {
    return Object.fromEntries(
      ABILITY_NAMES.map(name => [name, modifier(abilities.value[name])])
    )
  })

  // Standard array method
  const STANDARD_ARRAY = [15, 14, 13, 12, 10, 8]

  // Point buy: each score costs points (base 8, max 15)
  const POINT_BUY_COSTS = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 7, 15: 9 }

  function pointBuyCost(scores) {
    return Object.values(scores).reduce((total, s) => total + (POINT_BUY_COSTS[s] ?? 0), 0)
  }

  return { modifier, modifierStr, modifiers, STANDARD_ARRAY, pointBuyCost }
}
