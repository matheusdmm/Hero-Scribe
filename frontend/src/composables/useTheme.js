import { ref } from 'vue'

const theme = ref(
  typeof localStorage !== 'undefined' ? (localStorage.getItem('theme') ?? 'dark') : 'dark'
)

function applyTheme(t) {
  document.documentElement.classList.toggle('dark', t === 'dark')
  localStorage.setItem('theme', t)
}

applyTheme(theme.value)

export function useTheme() {
  function toggle() {
    theme.value = theme.value === 'light' ? 'dark' : 'light'
    applyTheme(theme.value)
  }

  return { theme, toggle }
}
