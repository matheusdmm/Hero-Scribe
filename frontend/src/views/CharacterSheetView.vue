<template>
  <div class="max-w-7xl mx-auto px-4 py-8">
    <div v-if="!store.sheet" class="text-center py-20 text-stone-400">
      No character data. <RouterLink to="/create" class="text-gold underline">Create one</RouterLink>.
    </div>

    <div v-else class="space-y-5">

      <!-- ── HEADER ── -->
      <div class="card !p-5 flex items-start justify-between gap-6 flex-wrap">
        <div class="flex-1 min-w-0">
          <h1 class="text-4xl font-semibold text-parchment leading-tight truncate">
            {{ store.draft.name }}
          </h1>
          <div class="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2 text-sm">
            <span class="capitalize font-semibold text-crimson">
              {{ store.sheet.input.class }} {{ store.sheet.input.level }}
            </span>
            <span class="text-stone-600">·</span>
            <span class="text-stone-400 capitalize">{{ store.sheet.input.race }}</span>
            <span class="text-stone-600">·</span>
            <span class="text-stone-400">{{ store.draft.background }}</span>
            <span class="text-stone-600">·</span>
            <span class="text-stone-400">{{ store.draft.alignment }}</span>
            <span class="px-2 py-0.5 bg-gold/10 text-gold border border-gold/30 rounded text-xs font-medium">
              {{ store.draft.edition }}
            </span>
          </div>
          <!-- Player name & creation date -->
          <div class="flex gap-4 mt-2 text-xs text-stone-500">
            <span v-if="store.draft.playerName">
              Player: <strong class="text-stone-400">{{ store.draft.playerName }}</strong>
            </span>
            <span v-if="store.draft.createdAt">
              Created: <strong class="text-stone-400">{{ createdDate }}</strong>
            </span>
          </div>
        </div>
        <div class="flex gap-2 shrink-0 no-print">
          <button class="btn-secondary text-sm" @click="exportJSON">Export JSON</button>
          <button class="btn-secondary text-sm" @click="savePDF">Save as PDF</button>
          <RouterLink to="/create" class="btn-primary text-sm">New Character</RouterLink>
        </div>
      </div>

      <!-- ── 3-COLUMN BODY ── -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">

        <!-- ── LEFT: Abilities / Saves / Skills ── -->
        <div class="lg:col-span-3 space-y-4">

          <!-- Ability Scores -->
          <div class="card !p-4">
            <h2 class="section-title">Ability Scores</h2>
            <div class="grid grid-cols-2 gap-2">
              <div
                v-for="ability in ABILITY_NAMES"
                :key="ability"
                class="flex flex-col items-center py-3 bg-stone-800 border border-stone-700 rounded-xl"
              >
                <span class="text-[10px] text-stone-400 uppercase tracking-widest">{{ ABILITY_LABELS[ability] }}</span>
                <span
                  class="text-2xl font-bold leading-none mt-1"
                  :class="store.sheet.modifiers[ability] >= 0 ? 'text-vivid' : 'text-red-500'"
                >
                  {{ formatMod(store.sheet.modifiers[ability]) }}
                </span>
                <span class="text-sm font-semibold text-parchment mt-1 leading-none">
                  {{ store.sheet.input.abilities[ability] }}
                </span>
              </div>
            </div>
          </div>

          <!-- Saving Throws -->
          <div class="card !p-4">
            <h2 class="section-title">Saving Throws</h2>
            <ul class="space-y-1.5">
              <li v-for="save in savingThrows" :key="save.ability" class="flex items-center gap-2 text-sm">
                <span
                  class="w-3 h-3 rounded-full border-2 shrink-0 transition-colors"
                  :class="save.isProficient ? 'bg-crimson border-crimson' : 'border-stone-500'"
                />
                <span class="w-8 text-right font-semibold shrink-0"
                  :class="save.bonus >= 0 ? 'text-parchment' : 'text-red-500'">
                  {{ formatMod(save.bonus) }}
                </span>
                <span class="text-stone-400 capitalize text-xs">{{ save.ability }}</span>
              </li>
            </ul>
          </div>

          <!-- Skills -->
          <div class="card !p-4">
            <h2 class="section-title">Skills</h2>
            <ul class="space-y-1 skills-print-list">
              <li v-for="skill in skills" :key="skill.name" class="flex items-center gap-1.5 text-xs">
                <span
                  class="w-2.5 h-2.5 rounded-full border-2 shrink-0"
                  :class="skill.isProficient ? 'bg-crimson border-crimson' : 'border-stone-600'"
                />
                <span class="w-6 text-right font-semibold shrink-0"
                  :class="skill.modifier >= 0 ? 'text-parchment' : 'text-red-500'">
                  {{ formatMod(skill.modifier) }}
                </span>
                <span class="text-stone-400 flex-1 truncate">{{ skill.name }}</span>
                <span class="text-stone-600 uppercase text-[10px] shrink-0">{{ ABILITY_LABELS[skill.ability] }}</span>
              </li>
            </ul>
            <div class="mt-3 pt-2 border-t border-stone-700 flex justify-between text-xs">
              <span class="text-stone-400">Passive Perception</span>
              <span class="font-semibold text-parchment">{{ passivePerception }}</span>
            </div>
          </div>

        </div>

        <!-- ── CENTER: Combat / HP / Equipment ── -->
        <div class="lg:col-span-5 space-y-4">

          <!-- Core combat stats -->
          <div class="grid grid-cols-3 gap-3">
            <div class="card !p-4 text-center">
              <span class="text-3xl font-bold text-parchment">{{ store.sheet.armor_class }}</span>
              <div class="section-title !mb-0 mt-1">Armor Class</div>
            </div>
            <div class="card !p-4 text-center">
              <span class="text-3xl font-bold"
                :class="store.sheet.initiative >= 0 ? 'text-parchment' : 'text-red-500'">
                {{ formatMod(store.sheet.initiative) }}
              </span>
              <div class="section-title !mb-0 mt-1">Initiative</div>
            </div>
            <div class="card !p-4 text-center">
              <span class="text-3xl font-bold text-parchment">
                {{ store.selectedRace?.speed ?? '—' }}
              </span>
              <div class="section-title !mb-0 mt-1">Speed (ft)</div>
            </div>
          </div>

          <!-- HP / Hit Dice / Prof Bonus -->
          <div class="grid grid-cols-3 gap-3">
            <div class="card !p-4 col-span-1">
              <div class="section-title">Max HP</div>
              <span class="text-4xl font-bold text-parchment">{{ store.sheet.max_hp }}</span>
              <!-- HP breakdown -->
              <div v-if="hpBreakdown" class="mt-2 pt-2 border-t border-stone-700 space-y-0.5 text-[11px] text-stone-500 leading-relaxed">
                <div>
                  Lv 1: d{{ hpBreakdown.hitDie }}
                  <span v-if="hpBreakdown.conMod !== 0">
                    {{ hpBreakdown.conMod > 0 ? '+' : '' }}{{ hpBreakdown.conMod }} CON
                  </span>
                  = <span class="text-stone-400 font-medium">{{ hpBreakdown.level1HP }}</span>
                </div>
                <div v-if="hpBreakdown.additionalLevels > 0">
                  Lv 2+: {{ hpBreakdown.avgPerLevel }}
                  <span v-if="hpBreakdown.conMod !== 0">
                    {{ hpBreakdown.conMod > 0 ? '+' : '' }}{{ hpBreakdown.conMod }} CON
                  </span>
                  = {{ hpBreakdown.perLevel }}
                  <span class="text-stone-600">× {{ hpBreakdown.additionalLevels }}</span>
                  = <span class="text-stone-400 font-medium">{{ hpBreakdown.additionalHP }}</span>
                </div>
              </div>
            </div>
            <div class="card !p-4 col-span-1">
              <div class="section-title">Hit Dice</div>
              <span class="text-2xl font-bold text-parchment">
                {{ store.sheet.input.level }}d{{ store.selectedClass?.hit_die ?? '8' }}
              </span>
              <div class="mt-2 text-[11px] text-stone-500">
                Max per die: {{ store.selectedClass?.hit_die ?? '8' }}<br/>
                Avg per die: {{ hpBreakdown?.avgPerLevel ?? '—' }}
              </div>
            </div>
            <div class="card !p-4 col-span-1">
              <div class="section-title">Prof. Bonus</div>
              <span class="text-2xl font-bold text-gold">
                {{ formatMod(store.sheet.proficiency_bonus) }}
              </span>
            </div>
          </div>

          <!-- Death Saves -->
          <div class="card !p-4">
            <h2 class="section-title">Death Saves</h2>
            <div class="flex gap-8">
              <div class="flex items-center gap-2">
                <span class="text-xs text-stone-400">Successes</span>
                <div class="flex gap-1.5">
                  <div v-for="i in 3" :key="i"
                    class="w-4 h-4 rounded-full border-2 border-stone-600" />
                </div>
              </div>
              <div class="flex items-center gap-2">
                <span class="text-xs text-stone-400">Failures</span>
                <div class="flex gap-1.5">
                  <div v-for="i in 3" :key="i"
                    class="w-4 h-4 rounded-full border-2 border-stone-600" />
                </div>
              </div>
            </div>
          </div>

          <!-- Equipment -->
          <div v-if="store.draft.equipment?.length || store.draft.gold" class="card !p-4">
            <h2 class="section-title">Equipment</h2>
            <ul class="space-y-1.5 mb-3">
              <li v-for="item in store.draft.equipment" :key="item"
                class="flex items-center gap-2 text-sm">
                <span class="text-gold text-xs shrink-0">◆</span>
                <span class="text-parchment">{{ item }}</span>
              </li>
            </ul>
            <div class="flex items-center gap-2 pt-3 border-t border-stone-700">
              <span class="text-xl font-bold text-gold">{{ store.draft.gold }}</span>
              <span class="text-stone-400 text-sm">gp</span>
            </div>
          </div>

          <!-- Proficiencies -->
          <div v-if="store.selectedClass" class="card !p-4">
            <h2 class="section-title">Proficiencies & Languages</h2>
            <div class="space-y-3 text-sm">
              <div>
                <p class="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Armor</p>
                <p class="text-parchment capitalize">
                  {{ store.selectedClass.armor_proficiencies.join(', ') || 'None' }}
                </p>
              </div>
              <div>
                <p class="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Weapons</p>
                <p class="text-parchment capitalize">
                  {{ store.selectedClass.weapon_proficiencies.join(', ') }}
                </p>
              </div>
              <div v-if="store.draft.languages?.length">
                <p class="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Languages</p>
                <div class="flex flex-wrap gap-1.5">
                  <span
                    v-for="lang in store.draft.languages" :key="lang"
                    class="text-xs px-2 py-0.5 bg-stone-800 border border-stone-700 text-parchment rounded-full"
                  >{{ lang }}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        <!-- ── RIGHT: Personality / Traits / Class ── -->
        <div class="lg:col-span-4 space-y-4">

          <!-- Personality -->
          <div class="card !p-4">
            <h2 class="section-title">Personality</h2>
            <div class="space-y-3">
              <div v-for="f in personalityFields" :key="f.key">
                <p class="text-[10px] text-stone-400 uppercase tracking-widest mb-0.5">{{ f.label }}</p>
                <p class="text-sm text-parchment leading-relaxed min-h-[1.25rem]">
                  {{ store.draft[f.key] || '—' }}
                </p>
              </div>
            </div>
          </div>

          <!-- Race Traits -->
          <div v-if="store.selectedRace" class="card !p-4">
            <h2 class="section-title">{{ store.selectedRace.name }} Traits</h2>
            <ul class="space-y-2 mb-3">
              <li v-for="trait in store.selectedRace.traits" :key="trait.name" class="text-sm">
                <span class="font-semibold text-parchment">{{ trait.name }}.</span>
                <span class="text-stone-300 ml-1">{{ trait.description }}</span>
              </li>
            </ul>
            <div class="pt-3 border-t border-stone-700 flex flex-wrap gap-x-4 gap-y-1 text-xs text-stone-400">
              <span>Size: <strong class="text-parchment">{{ store.selectedRace.size }}</strong></span>
              <span>Speed: <strong class="text-parchment">{{ store.selectedRace.speed }} ft</strong></span>
            </div>
            <div v-if="store.selectedRace.ability_bonuses?.length" class="flex flex-wrap gap-1 mt-2">
              <span
                v-for="b in store.selectedRace.ability_bonuses" :key="b.ability"
                class="text-xs px-1.5 py-0.5 bg-gold/10 text-gold border border-gold/30 rounded"
              >+{{ b.bonus }} {{ b.ability.slice(0,3).toUpperCase() }}</span>
            </div>
          </div>

          <!-- Class Features -->
          <div v-if="store.selectedClass" class="card !p-4">
            <h2 class="section-title">{{ store.selectedClass.name }} Features</h2>
            <div class="space-y-2 text-sm">
              <div class="flex justify-between">
                <span class="text-stone-400">Hit Die</span>
                <span class="font-semibold text-parchment">d{{ store.selectedClass.hit_die }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-stone-400">Primary Ability</span>
                <span class="font-semibold text-parchment capitalize">{{ store.selectedClass.primary_ability }}</span>
              </div>
              <div class="flex justify-between">
                <span class="text-stone-400">Saving Throws</span>
                <span class="font-semibold text-parchment capitalize text-right">
                  {{ store.selectedClass.saving_throws.join(', ') }}
                </span>
              </div>
              <div class="flex justify-between">
                <span class="text-stone-400">Skill Choices</span>
                <span class="font-semibold text-parchment">{{ store.selectedClass.skill_choices }}</span>
              </div>
              <div class="pt-2 border-t border-stone-700">
                <p class="text-[10px] text-stone-400 uppercase tracking-widest mb-1">Available Skills</p>
                <p class="text-parchment capitalize text-xs leading-relaxed">
                  {{ store.selectedClass.available_skills.join(', ').replace(/_/g, ' ') }}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useCharacterStore } from '@/stores/character.js'
import { ABILITY_NAMES, ABILITY_LABELS, SKILL_MAP } from '@/types/index.js'

const store = useCharacterStore()

const savingThrows = computed(() => {
  if (!store.sheet || !store.selectedClass) return []
  return ABILITY_NAMES.map(ability => {
    const isProficient = store.selectedClass.saving_throws.includes(ability)
    const bonus = store.sheet.modifiers[ability] + (isProficient ? store.sheet.proficiency_bonus : 0)
    return { ability, isProficient, bonus }
  })
})

const skills = computed(() => {
  if (!store.sheet) return []
  return SKILL_MAP.map(s => {
    const isProficient = store.draft.skills?.includes(s.key) ?? false
    const modifier = store.sheet.modifiers[s.ability] + (isProficient ? store.sheet.proficiency_bonus : 0)
    return { ...s, modifier, isProficient }
  })
})

const passivePerception = computed(() =>
  store.sheet ? 10 + store.sheet.modifiers.wisdom : 10
)

const hpBreakdown = computed(() => {
  if (!store.sheet || !store.selectedClass) return null
  const hitDie   = store.selectedClass.hit_die
  const conMod   = store.sheet.modifiers.constitution
  const level    = store.sheet.input.level
  const avgPerLevel    = Math.floor(hitDie / 2) + 1
  const perLevel       = avgPerLevel + conMod
  const level1HP       = hitDie + conMod
  const additionalLevels = level - 1
  return { hitDie, conMod, level, avgPerLevel, perLevel, level1HP, additionalLevels, additionalHP: perLevel * additionalLevels }
})

const createdDate = computed(() => {
  if (!store.draft.createdAt) return ''
  return new Date(store.draft.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
})

const personalityFields = [
  { key: 'trait', label: 'Personality Trait' },
  { key: 'ideal', label: 'Ideal' },
  { key: 'bond',  label: 'Bond' },
  { key: 'flaw',  label: 'Flaw' },
]

function formatMod(n) {
  return n >= 0 ? `+${n}` : `${n}`
}

function savePDF() {
  const name   = store.draft.name || 'Character'
  const player = store.draft.playerName ? ` — ${store.draft.playerName}` : ''
  const date   = createdDate.value ? ` (${createdDate.value})` : ''
  const prev   = document.title
  document.title = `${name}${player}${date}`
  window.print()
  document.title = prev
}

function exportJSON() {
  const data = JSON.stringify({ draft: store.draft, sheet: store.sheet }, null, 2)
  const blob = new Blob([data], { type: 'application/json' })
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = `${store.draft.name || 'character'}.json`
  a.click()
  URL.revokeObjectURL(url)
}
</script>
