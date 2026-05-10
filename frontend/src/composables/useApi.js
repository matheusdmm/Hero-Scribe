// composables/useApi.js
const BASE = '/api'

export function useApi() {
  async function fetchRaces() {
    const res = await fetch(`${BASE}/races`)
    return res.json()
  }

  async function fetchClasses() {
    const res = await fetch(`${BASE}/classes`)
    return res.json()
  }

  async function calculateSheet(characterInput) {
    const res = await fetch(`${BASE}/calculate`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(characterInput),
    })
    return res.json()
  }

  return { fetchRaces, fetchClasses, calculateSheet }
}
