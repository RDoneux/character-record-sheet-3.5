import { FormGroupType } from '../../../../../types/form-group-type';
import { Ability } from '../../abilities/interfaces/i-abilities';

interface ISkill {
  keyAbility: Ability | null;
  skillModifier: number | null;
  abilityModifier: number | null;
  ranks: number | null;
  miscModifier: number | null;
  trainedOnly: boolean | null;
  isClassSkill: boolean | null;
  armourCheckPenalty: number | null;
  specialisation?: string | null;
}

export interface ISkills {
  appraise: ISkill | null;
  balance: ISkill | null;
  bluff: ISkill | null;
  climb: ISkill | null;
  concentration: ISkill | null;
  //   craft: ISkill[] | null;
  decipherScript: ISkill | null;
  diplomacy: ISkill | null;
  disableDevice: ISkill | null;
  disguise: ISkill | null;
  escapeArtist: ISkill | null;
  forgery: ISkill | null;
  gatherInformation: ISkill | null;
  handleAnimal: ISkill | null;
  heal: ISkill | null;
  hide: ISkill | null;
  intimidate: ISkill | null;
  jump: ISkill | null;
  //   knowledge: ISkill[] | null;
  listen: ISkill | null;
  moveSilently: ISkill | null;
  openLock: ISkill | null;
  //   perform: ISkill[] | null;
  //   profession: ISkill[] | null;
  ride: ISkill | null;
  search: ISkill | null;
  senseMotive: ISkill | null;
  sleightOfHand: ISkill | null;
  spellcraft: ISkill | null;
  spot: ISkill | null;
  survival: ISkill | null;
  swim: ISkill | null;
  tumble: ISkill | null;
  useMagicDevice: ISkill | null;
  useRope: ISkill | null;
  //   other: ISkill[] | null;
}
export interface ISkillsForm extends FormGroupType<ISkills> {}

const SKILL_DEFAULT: ISkill = {
  keyAbility: null,
  skillModifier: null,
  abilityModifier: null,
  ranks: null,
  miscModifier: null,
  trainedOnly: null,
  isClassSkill: null,
  armourCheckPenalty: null,
};

export const SKILLS_DEFAULT: ISkills = {
  appraise: SKILL_DEFAULT,
  balance: SKILL_DEFAULT,
  bluff: SKILL_DEFAULT,
  climb: SKILL_DEFAULT,
  concentration: SKILL_DEFAULT,
  //   craft: [SKILL_DEFAULT],
  decipherScript: SKILL_DEFAULT,
  diplomacy: SKILL_DEFAULT,
  disableDevice: SKILL_DEFAULT,
  disguise: SKILL_DEFAULT,
  escapeArtist: SKILL_DEFAULT,
  forgery: SKILL_DEFAULT,
  gatherInformation: SKILL_DEFAULT,
  handleAnimal: SKILL_DEFAULT,
  heal: SKILL_DEFAULT,
  hide: SKILL_DEFAULT,
  intimidate: SKILL_DEFAULT,
  jump: SKILL_DEFAULT,
  //   knowledge: [SKILL_DEFAULT],
  listen: SKILL_DEFAULT,
  moveSilently: SKILL_DEFAULT,
  openLock: SKILL_DEFAULT,
  //   perform: [SKILL_DEFAULT],
  //   profession: [SKILL_DEFAULT],
  ride: SKILL_DEFAULT,
  search: SKILL_DEFAULT,
  senseMotive: SKILL_DEFAULT,
  sleightOfHand: SKILL_DEFAULT,
  spellcraft: SKILL_DEFAULT,
  spot: SKILL_DEFAULT,
  survival: SKILL_DEFAULT,
  swim: SKILL_DEFAULT,
  tumble: SKILL_DEFAULT,
  useMagicDevice: SKILL_DEFAULT,
  useRope: SKILL_DEFAULT,
  //   other: [SKILL_DEFAULT],
};

export const SkillAbilityMap: { [key in keyof ISkills]: Ability } = {
  appraise: Ability.INTELLIGENCE,
  balance: Ability.DEXTERITY,
  bluff: Ability.CHARISMA,
  climb: Ability.STRENGTH,
  concentration: Ability.CONSTITUTION,
  decipherScript: Ability.INTELLIGENCE,
  diplomacy: Ability.CHARISMA,
  disableDevice: Ability.DEXTERITY,
  disguise: Ability.CHARISMA,
  escapeArtist: Ability.DEXTERITY,
  forgery: Ability.INTELLIGENCE,
  gatherInformation: Ability.CHARISMA,
  handleAnimal: Ability.CHARISMA,
  heal: Ability.WISDOM,
  hide: Ability.DEXTERITY,
  intimidate: Ability.CHARISMA,
  jump: Ability.STRENGTH,
  listen: Ability.WISDOM,
  moveSilently: Ability.DEXTERITY,
  openLock: Ability.DEXTERITY,
  ride: Ability.DEXTERITY,
  search: Ability.INTELLIGENCE,
  senseMotive: Ability.WISDOM,
  sleightOfHand: Ability.DEXTERITY,
  spellcraft: Ability.INTELLIGENCE,
  spot: Ability.WISDOM,
  survival: Ability.WISDOM,
  swim: Ability.STRENGTH,
  tumble: Ability.DEXTERITY,
  useMagicDevice: Ability.CHARISMA,
  useRope: Ability.DEXTERITY,
};
