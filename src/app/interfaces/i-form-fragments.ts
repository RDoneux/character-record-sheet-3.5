export const FormFragment = {
  OVERVIEW: { displayName: 'Overview', route: 'overview', isComposite: true },
  ABILITIES: {
    displayName: 'Abilities',
    route: 'abilities',
    isComposite: false,
  },
  HIT_POINTS: {
    displayName: 'Hit Points',
    route: 'hit-points',
    isComposite: false,
  },
  INITIATIVE: {
    displayName: 'Initiative',
    route: 'initiative',
    isComposite: false,
  },
  SAVING_THROWS: {
    displayName: 'Saving Throws',
    route: 'saving-throws',
    isComposite: false,
  },
  ATTACKS: { displayName: 'Weapons', route: 'attack', isComposite: false },
  BASE_COMBAT: {
    displayName: 'Base Combat',
    route: 'combat',
    isComposite: false,
  },
  BASE_INFO: {
    displayName: 'Basic Info',
    route: 'basic-info',
    isComposite: false,
  },
  GEAR: { displayName: 'Gear', route: 'gear', isComposite: false },
  POSSESSIONS: {
    displayName: 'Possessions',
    route: 'possessions',
    isComposite: false,
  },
  SKILLS: { displayName: 'Skills', route: 'skills', isComposite: false },
  SPECIAL_ABILITIES: {
    displayName: 'Special Abilities',
    route: 'special-abilities',
    isComposite: false,
  },
  SPELLS: { displayName: 'Spells', route: 'spells', isComposite: false },
} as const;
export type FormFragment = (typeof FormFragment)[keyof typeof FormFragment];
