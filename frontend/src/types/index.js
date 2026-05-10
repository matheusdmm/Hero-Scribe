// types/index.js
// Using JSDoc for type hints without requiring TypeScript setup

/**
 * @typedef {Object} AbilityScores
 * @property {number} strength
 * @property {number} dexterity
 * @property {number} constitution
 * @property {number} intelligence
 * @property {number} wisdom
 * @property {number} charisma
 */

/**
 * @typedef {Object} Trait
 * @property {string} name
 * @property {string} description
 */

/**
 * @typedef {Object} AbilityBonus
 * @property {string} ability
 * @property {number} bonus
 */

/**
 * @typedef {Object} Race
 * @property {string} id
 * @property {string} name
 * @property {string} edition
 * @property {number} speed
 * @property {string} size
 * @property {Trait[]} traits
 * @property {AbilityBonus[]} ability_bonuses
 */

/**
 * @typedef {Object} Class
 * @property {string} id
 * @property {string} name
 * @property {string} edition
 * @property {number} hit_die
 * @property {string} primary_ability
 * @property {string[]} saving_throws
 * @property {number} skill_choices
 * @property {string[]} available_skills
 */

/**
 * @typedef {Object} CharacterDraft
 * @property {string} name
 * @property {string} race
 * @property {string} class
 * @property {number} level
 * @property {string} background
 * @property {string} edition
 * @property {AbilityScores} abilities
 * @property {string[]} skills
 * @property {string} alignment
 */

export const ABILITY_NAMES = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma']

export const ABILITY_LABELS = {
  strength: 'STR',
  dexterity: 'DEX',
  constitution: 'CON',
  intelligence: 'INT',
  wisdom: 'WIS',
  charisma: 'CHA',
}

export const SKILL_MAP = [
  { name: 'Acrobatics',      ability: 'dexterity',   key: 'acrobatics' },
  { name: 'Animal Handling', ability: 'wisdom',       key: 'animal_handling' },
  { name: 'Arcana',          ability: 'intelligence', key: 'arcana' },
  { name: 'Athletics',       ability: 'strength',     key: 'athletics' },
  { name: 'Deception',       ability: 'charisma',     key: 'deception' },
  { name: 'History',         ability: 'intelligence', key: 'history' },
  { name: 'Insight',         ability: 'wisdom',       key: 'insight' },
  { name: 'Intimidation',    ability: 'charisma',     key: 'intimidation' },
  { name: 'Investigation',   ability: 'intelligence', key: 'investigation' },
  { name: 'Medicine',        ability: 'wisdom',       key: 'medicine' },
  { name: 'Nature',          ability: 'intelligence', key: 'nature' },
  { name: 'Perception',      ability: 'wisdom',       key: 'perception' },
  { name: 'Performance',     ability: 'charisma',     key: 'performance' },
  { name: 'Persuasion',      ability: 'charisma',     key: 'persuasion' },
  { name: 'Religion',        ability: 'intelligence', key: 'religion' },
  { name: 'Sleight of Hand', ability: 'dexterity',    key: 'sleight_of_hand' },
  { name: 'Stealth',         ability: 'dexterity',    key: 'stealth' },
  { name: 'Survival',        ability: 'wisdom',       key: 'survival' },
]

export const ALL_LANGUAGES = [
  'Abyssal', 'Celestial', 'Common', 'Draconic', 'Deep Speech',
  'Dwarvish', 'Elvish', 'Giant', 'Gnomish', 'Goblin',
  'Halfling', 'Infernal', 'Orc', 'Primordial', 'Sylvan', 'Undercommon',
]

export const RACE_LANGUAGES = {
  human:      ['Common'],
  elf:        ['Common', 'Elvish'],
  dwarf:      ['Common', 'Dwarvish'],
  halfling:   ['Common'],
  dragonborn: ['Common', 'Draconic'],
  gnome:      ['Common', 'Gnomish'],
  'half-elf': ['Common', 'Elvish'],
  tiefling:   ['Common', 'Infernal'],
}

export const CLASS_GOLD_ROLLS = {
  barbarian: { count: 2, die: 4, multiplier: 10, label: '2d4×10' },
  bard:      { count: 5, die: 4, multiplier: 10, label: '5d4×10' },
  cleric:    { count: 5, die: 4, multiplier: 10, label: '5d4×10' },
  druid:     { count: 2, die: 4, multiplier: 10, label: '2d4×10' },
  fighter:   { count: 5, die: 4, multiplier: 10, label: '5d4×10' },
  monk:      { count: 5, die: 4, multiplier:  1, label: '5d4' },
  paladin:   { count: 5, die: 4, multiplier: 10, label: '5d4×10' },
  ranger:    { count: 5, die: 4, multiplier: 10, label: '5d4×10' },
  rogue:     { count: 4, die: 4, multiplier: 10, label: '4d4×10' },
  sorcerer:  { count: 3, die: 4, multiplier: 10, label: '3d4×10' },
  warlock:   { count: 4, die: 4, multiplier: 10, label: '4d4×10' },
  wizard:    { count: 4, die: 4, multiplier: 10, label: '4d4×10' },
}

export const CLASS_STARTING_EQUIPMENT = {
  barbarian: ['Greataxe', 'Two handaxes', "Explorer's pack", '4 javelins'],
  bard:      ['Rapier', "Diplomat's pack", 'Lute', 'Leather armor', 'Dagger'],
  cleric:    ['Mace', 'Scale mail', 'Light crossbow & 20 bolts', "Priest's pack", 'Shield', 'Holy symbol'],
  druid:     ['Wooden shield', 'Scimitar', 'Leather armor', "Explorer's pack", 'Druidic focus'],
  fighter:   ['Chain mail', 'Martial weapon & shield', 'Light crossbow & 20 bolts', "Dungeoneer's pack"],
  monk:      ['Shortsword', "Dungeoneer's pack", '10 darts'],
  paladin:   ['Martial weapon & shield', 'Chain mail', 'Holy symbol', "Priest's pack"],
  ranger:    ['Scale mail', 'Two shortswords', "Dungeoneer's pack", 'Longbow & 20 arrows'],
  rogue:     ['Rapier', 'Shortbow & 20 arrows', "Burglar's pack", 'Leather armor', 'Two daggers', "Thieves' tools"],
  sorcerer:  ['Light crossbow & 20 bolts', 'Component pouch', "Dungeoneer's pack", '2 daggers'],
  warlock:   ['Light crossbow & 20 bolts', 'Arcane focus', "Scholar's pack", 'Leather armor', 'Two daggers'],
  wizard:    ['Quarterstaff', 'Component pouch', "Scholar's pack", 'Spellbook'],
}

export const ALIGNMENTS = [
  'Lawful Good', 'Neutral Good', 'Chaotic Good',
  'Lawful Neutral', 'True Neutral', 'Chaotic Neutral',
  'Lawful Evil', 'Neutral Evil', 'Chaotic Evil',
]

export const BACKGROUNDS = [
  'Acolyte', 'Charlatan', 'Criminal', 'Entertainer',
  'Folk Hero', 'Guild Artisan', 'Hermit', 'Noble',
  'Outlander', 'Sage', 'Sailor', 'Soldier', 'Urchin',
]

/** @returns {CharacterDraft} */
export function emptyCharacter() {
  return {
    name: '',
    race: '',
    class: '',
    level: 1,
    background: '',
    edition: '5e',
    alignment: '',
    skills: [],
    abilities: {
      strength: 10,
      dexterity: 10,
      constitution: 10,
      intelligence: 10,
      wisdom: 10,
      charisma: 10,
    },
    playerName: '',
    createdAt: null,
    gold: 0,
    languages: [],
    equipment: [],
    trait: '',
    ideal: '',
    bond: '',
    flaw: '',
  }
}
