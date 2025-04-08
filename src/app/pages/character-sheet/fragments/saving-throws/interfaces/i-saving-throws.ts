import { FormGroupType } from '../../../../../types/form-group-type';
import { Ability } from '../../abilities/interfaces/i-abilities';

export interface ISavingThrows {
  fortitude: ISavingThrow | null;
  reflex: ISavingThrow | null;
  will: ISavingThrow | null;
}

interface ISavingThrow {
  total: number | null;
  baseSave: number | null;
  abilityModifier: number | null;
  magicModifier: number | null;
  miscModifier: number | null;
  temporaryModifier: number | null;
}
export interface SavingThrowsForm extends FormGroupType<ISavingThrows> {}

const SAVING_THROW_DEFAULT: ISavingThrow = {
  total: null,
  baseSave: null,
  abilityModifier: null,
  magicModifier: null,
  miscModifier: null,
  temporaryModifier: null,
};

export const SAVING_THROWS_DEFAULT: ISavingThrows = {
  fortitude: SAVING_THROW_DEFAULT,
  reflex: SAVING_THROW_DEFAULT,
  will: SAVING_THROW_DEFAULT,
};

export const SavingThrowsAbilityMap = {
  fortitude: Ability.CONSTITUTION,
  reflex: Ability.DEXTERITY,
  will: Ability.WISDOM,
} as const;
export type SavingThrowsAbilityMap =
  (typeof SavingThrowsAbilityMap)[keyof typeof SavingThrowsAbilityMap];
