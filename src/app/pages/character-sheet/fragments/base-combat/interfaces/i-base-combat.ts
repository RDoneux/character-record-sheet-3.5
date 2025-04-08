import { FormGroupType } from '../../../../../types/form-group-type';

export interface IBaseCombat {
  baseAttackBonus: number | null;
  spellResistance: number | null;
  grapple: IGrapple | null;
}

interface IGrapple {
  total: number | null;
  baseAttackBonus: number | null;
  strengthModifier: number | null;
  sizeModifier: number | null;
  miscModifier: number | null;
}
export interface IBaseCombatForm extends FormGroupType<IBaseCombat> {}

export const BASE_COMBAT_DEFAULT: IBaseCombat = {
  baseAttackBonus: null,
  spellResistance: null,
  grapple: {
    total: null,
    baseAttackBonus: null,
    strengthModifier: null,
    sizeModifier: null,
    miscModifier: null,
  },
};
