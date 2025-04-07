import { FormGroupType } from '../../../../../types/form-group-type';

export interface IHitPoints {
  totalHitPoints: number | null;
  currentHitPoints: number | null;
  nonLethalDamage: number | null;
  speed: number | null;
  totalArmourClass: number | null;
  armourBonus: number | null;
  shieldBonus: number | null;
  dexterityModifier: number | null;
  sizeModifier: number | null;
  naturalArmour: number | null;
  deflectionModifier: number | null;
  miscModifier: number | null;
  damageReduction: number | null;
}
export interface IHitPointsForm extends FormGroupType<IHitPoints> {}

export const HIT_POINTS_DEFAULT: IHitPoints = {
  totalHitPoints: null,
  currentHitPoints: null,
  nonLethalDamage: null,
  speed: null,
  totalArmourClass: null,
  armourBonus: null,
  shieldBonus: null,
  dexterityModifier: null,
  sizeModifier: null,
  naturalArmour: null,
  deflectionModifier: null,
  miscModifier: null,
  damageReduction: null,
};
