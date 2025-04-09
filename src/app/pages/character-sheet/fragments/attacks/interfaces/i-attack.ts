import { FormGroupType } from '../../../../../types/form-group-type';

export interface IAttack {
  weaponName: string | null;
  attackBonus: number | null;
  damage: string | null;
  critical: number | null;
  range: number | null;
  type: number | null;
  notes: string | null;
  ammunitionName: string | null;
  ammunition: boolean[] | null;
}
export interface IAttackForm extends FormGroupType<IAttack> {}

export const ATTACK_DEFAULT: IAttack[] = [
  {
    weaponName: null,
    attackBonus: null,
    damage: null,
    critical: null,
    range: null,
    type: null,
    notes: null,
    ammunitionName: null,
    ammunition: [
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
      false,
    ],
  },
];
