package data

// Race represents a D&D 5e/5.5e race/species
type Race struct {
	ID          string            `json:"id"`
	Name        string            `json:"name"`
	Edition     string            `json:"edition"` // "5e", "5.5e", "both"
	Speed       int               `json:"speed"`
	Size        string            `json:"size"`
	Traits      []Trait           `json:"traits"`
	AbilityBonuses []AbilityBonus `json:"ability_bonuses"`
}

type AbilityBonus struct {
	Ability string `json:"ability"`
	Bonus   int    `json:"bonus"`
}

type Trait struct {
	Name        string `json:"name"`
	Description string `json:"description"`
}

// Class represents a D&D 5e/5.5e class
type Class struct {
	ID               string   `json:"id"`
	Name             string   `json:"name"`
	Edition          string   `json:"edition"`
	HitDie           int      `json:"hit_die"`
	PrimaryAbility   string   `json:"primary_ability"`
	SavingThrows     []string `json:"saving_throws"`
	SkillChoices     int      `json:"skill_choices"`
	AvailableSkills  []string `json:"available_skills"`
	ArmorProficiencies []string `json:"armor_proficiencies"`
	WeaponProficiencies []string `json:"weapon_proficiencies"`
}

var Races = []Race{
	{
		ID: "human", Name: "Human", Edition: "both", Speed: 30, Size: "Medium",
		AbilityBonuses: []AbilityBonus{
			{Ability: "strength", Bonus: 1}, {Ability: "dexterity", Bonus: 1},
			{Ability: "constitution", Bonus: 1}, {Ability: "intelligence", Bonus: 1},
			{Ability: "wisdom", Bonus: 1}, {Ability: "charisma", Bonus: 1},
		},
		Traits: []Trait{
			{Name: "Extra Language", Description: "You can speak, read, and write one extra language."},
		},
	},
	{
		ID: "elf", Name: "Elf", Edition: "both", Speed: 30, Size: "Medium",
		AbilityBonuses: []AbilityBonus{{Ability: "dexterity", Bonus: 2}},
		Traits: []Trait{
			{Name: "Darkvision", Description: "60 ft."},
			{Name: "Fey Ancestry", Description: "Advantage on saves against charm. Can't be put to sleep by magic."},
			{Name: "Trance", Description: "Elves don't need to sleep. Instead, they meditate deeply for 4 hours a day."},
		},
	},
	{
		ID: "dwarf", Name: "Dwarf", Edition: "both", Speed: 25, Size: "Medium",
		AbilityBonuses: []AbilityBonus{{Ability: "constitution", Bonus: 2}},
		Traits: []Trait{
			{Name: "Darkvision", Description: "60 ft."},
			{Name: "Dwarven Resilience", Description: "Advantage on saving throws against poison."},
			{Name: "Stonecunning", Description: "Proficiency in History checks related to stonework."},
		},
	},
	{
		ID: "halfling", Name: "Halfling", Edition: "both", Speed: 25, Size: "Small",
		AbilityBonuses: []AbilityBonus{{Ability: "dexterity", Bonus: 2}},
		Traits: []Trait{
			{Name: "Lucky", Description: "When you roll a 1 on an attack roll, ability check, or saving throw, you can reroll the die."},
			{Name: "Brave", Description: "Advantage on saving throws against being frightened."},
			{Name: "Halfling Nimbleness", Description: "You can move through the space of any creature that is of a size larger than yours."},
		},
	},
	{
		ID: "dragonborn", Name: "Dragonborn", Edition: "both", Speed: 30, Size: "Medium",
		AbilityBonuses: []AbilityBonus{{Ability: "strength", Bonus: 2}, {Ability: "charisma", Bonus: 1}},
		Traits: []Trait{
			{Name: "Draconic Ancestry", Description: "You have draconic ancestry. Choose one dragon type."},
			{Name: "Breath Weapon", Description: "Exhale destructive energy as an action."},
			{Name: "Damage Resistance", Description: "Resistance to the damage type associated with your draconic ancestry."},
		},
	},
	{
		ID: "gnome", Name: "Gnome", Edition: "both", Speed: 25, Size: "Small",
		AbilityBonuses: []AbilityBonus{{Ability: "intelligence", Bonus: 2}},
		Traits: []Trait{
			{Name: "Darkvision", Description: "60 ft."},
			{Name: "Gnome Cunning", Description: "Advantage on Intelligence, Wisdom, and Charisma saving throws against magic."},
		},
	},
	{
		ID: "half-elf", Name: "Half-Elf", Edition: "5e", Speed: 30, Size: "Medium",
		AbilityBonuses: []AbilityBonus{{Ability: "charisma", Bonus: 2}},
		Traits: []Trait{
			{Name: "Darkvision", Description: "60 ft."},
			{Name: "Fey Ancestry", Description: "Advantage on saves against charm. Can't be put to sleep by magic."},
			{Name: "Skill Versatility", Description: "Proficiency in two skills of your choice."},
		},
	},
	{
		ID: "tiefling", Name: "Tiefling", Edition: "both", Speed: 30, Size: "Medium",
		AbilityBonuses: []AbilityBonus{{Ability: "charisma", Bonus: 2}, {Ability: "intelligence", Bonus: 1}},
		Traits: []Trait{
			{Name: "Darkvision", Description: "60 ft."},
			{Name: "Hellish Resistance", Description: "Resistance to fire damage."},
			{Name: "Infernal Legacy", Description: "You know the Thaumaturgy cantrip."},
		},
	},
}

var Classes = []Class{
	{
		ID: "barbarian", Name: "Barbarian", Edition: "both", HitDie: 12,
		PrimaryAbility: "strength", SavingThrows: []string{"strength", "constitution"},
		SkillChoices: 2, AvailableSkills: []string{"animal_handling", "athletics", "intimidation", "nature", "perception", "survival"},
		ArmorProficiencies: []string{"light", "medium", "shields"}, WeaponProficiencies: []string{"simple", "martial"},
	},
	{
		ID: "bard", Name: "Bard", Edition: "both", HitDie: 8,
		PrimaryAbility: "charisma", SavingThrows: []string{"dexterity", "charisma"},
		SkillChoices: 3, AvailableSkills: []string{"any"},
		ArmorProficiencies: []string{"light"}, WeaponProficiencies: []string{"simple", "hand_crossbow", "longsword", "rapier", "shortsword"},
	},
	{
		ID: "cleric", Name: "Cleric", Edition: "both", HitDie: 8,
		PrimaryAbility: "wisdom", SavingThrows: []string{"wisdom", "charisma"},
		SkillChoices: 2, AvailableSkills: []string{"history", "insight", "medicine", "persuasion", "religion"},
		ArmorProficiencies: []string{"light", "medium", "shields"}, WeaponProficiencies: []string{"simple"},
	},
	{
		ID: "druid", Name: "Druid", Edition: "both", HitDie: 8,
		PrimaryAbility: "wisdom", SavingThrows: []string{"intelligence", "wisdom"},
		SkillChoices: 2, AvailableSkills: []string{"arcana", "animal_handling", "insight", "medicine", "nature", "perception", "religion", "survival"},
		ArmorProficiencies: []string{"light", "medium", "shields_non_metal"}, WeaponProficiencies: []string{"clubs", "daggers", "darts", "javelins", "maces", "quarterstaffs", "scimitars", "sickles", "slings", "spears"},
	},
	{
		ID: "fighter", Name: "Fighter", Edition: "both", HitDie: 10,
		PrimaryAbility: "strength", SavingThrows: []string{"strength", "constitution"},
		SkillChoices: 2, AvailableSkills: []string{"acrobatics", "animal_handling", "athletics", "history", "insight", "intimidation", "perception", "survival"},
		ArmorProficiencies: []string{"all", "shields"}, WeaponProficiencies: []string{"simple", "martial"},
	},
	{
		ID: "monk", Name: "Monk", Edition: "both", HitDie: 8,
		PrimaryAbility: "dexterity", SavingThrows: []string{"strength", "dexterity"},
		SkillChoices: 2, AvailableSkills: []string{"acrobatics", "athletics", "history", "insight", "religion", "stealth"},
		ArmorProficiencies: []string{}, WeaponProficiencies: []string{"simple", "shortswords"},
	},
	{
		ID: "paladin", Name: "Paladin", Edition: "both", HitDie: 10,
		PrimaryAbility: "strength", SavingThrows: []string{"wisdom", "charisma"},
		SkillChoices: 2, AvailableSkills: []string{"athletics", "insight", "intimidation", "medicine", "persuasion", "religion"},
		ArmorProficiencies: []string{"all", "shields"}, WeaponProficiencies: []string{"simple", "martial"},
	},
	{
		ID: "ranger", Name: "Ranger", Edition: "both", HitDie: 10,
		PrimaryAbility: "dexterity", SavingThrows: []string{"strength", "dexterity"},
		SkillChoices: 3, AvailableSkills: []string{"animal_handling", "athletics", "insight", "investigation", "nature", "perception", "stealth", "survival"},
		ArmorProficiencies: []string{"light", "medium", "shields"}, WeaponProficiencies: []string{"simple", "martial"},
	},
	{
		ID: "rogue", Name: "Rogue", Edition: "both", HitDie: 8,
		PrimaryAbility: "dexterity", SavingThrows: []string{"dexterity", "intelligence"},
		SkillChoices: 4, AvailableSkills: []string{"acrobatics", "athletics", "deception", "insight", "intimidation", "investigation", "perception", "performance", "persuasion", "sleight_of_hand", "stealth"},
		ArmorProficiencies: []string{"light"}, WeaponProficiencies: []string{"simple", "hand_crossbow", "longsword", "rapier", "shortsword"},
	},
	{
		ID: "sorcerer", Name: "Sorcerer", Edition: "both", HitDie: 6,
		PrimaryAbility: "charisma", SavingThrows: []string{"constitution", "charisma"},
		SkillChoices: 2, AvailableSkills: []string{"arcana", "deception", "insight", "intimidation", "persuasion", "religion"},
		ArmorProficiencies: []string{}, WeaponProficiencies: []string{"daggers", "darts", "slings", "quarterstaffs", "light_crossbows"},
	},
	{
		ID: "warlock", Name: "Warlock", Edition: "both", HitDie: 8,
		PrimaryAbility: "charisma", SavingThrows: []string{"wisdom", "charisma"},
		SkillChoices: 2, AvailableSkills: []string{"arcana", "deception", "history", "intimidation", "investigation", "nature", "religion"},
		ArmorProficiencies: []string{"light"}, WeaponProficiencies: []string{"simple"},
	},
	{
		ID: "wizard", Name: "Wizard", Edition: "both", HitDie: 6,
		PrimaryAbility: "intelligence", SavingThrows: []string{"intelligence", "wisdom"},
		SkillChoices: 2, AvailableSkills: []string{"arcana", "history", "insight", "investigation", "medicine", "religion"},
		ArmorProficiencies: []string{}, WeaponProficiencies: []string{"daggers", "darts", "slings", "quarterstaffs", "light_crossbows"},
	},
}
