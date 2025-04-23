export const FormFragment = {
  ABILITIES: { displayName: 'Abilities', route: 'abilities' },
  ATTACKS: { displayName: 'Weapons', route: 'attack' },
  BASE_COMBAT: { displayName: 'Base Combat', route: 'combat' },
  BASE_INFO: { displayName: 'Basic Info', route: 'basic-info' },
  GEAR: { displayName: 'Gear', route: 'gear' },
  HIT_POINTS: { displayName: 'Hit Points', route: 'hit-points' },
  INITIATIVE: { displayName: 'Initiative', route: 'initiative' },
  POSSESSIONS: { displayName: 'Possessions', route: 'possessions' },
  SAVING_THROWS: { displayName: 'Saving Throws', route: 'saving-throws' },
  SKILLS: { displayName: 'Skills', route: 'skills' },
  SPECIAL_ABILITIES: {
    displayName: 'Special Abilities',
    route: 'special-abilities',
  },
  SPELLS: { displayName: 'Spells', route: 'spells' },
} as const;
export type FormFragment = (typeof FormFragment)[keyof typeof FormFragment];
