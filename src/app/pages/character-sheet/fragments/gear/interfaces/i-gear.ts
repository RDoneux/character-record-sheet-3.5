import { FormGroupType } from '../../../../../types/form-group-type';

export interface IGear {
  armourName: string | null;
  armourType: string | null;
  armourAcBonus: number | null;
  armourMaxDex: number | null;
  armourCheckPenalty: number | null;
  armourSpellFailure: number | null;
  armourSpeed: number | null;
  armourWeight: number | null;
  armourSpecialProperties: string | null;
  shieldName: string | null;
  shieldAcBonus: number | null;
  shieldWeight: number | null;
  shieldCheckPenalty: number | null;
  shieldSpellFailure: number | null;
  shieldSpecialProperties: string | null;
  protectiveItems: IProtectiveItem[];
}
interface IProtectiveItem {
  name: string | null;
  acBonus: number | null;
  weight: number | null;
  specialProperties: string | null;
}
export interface IGearForm extends FormGroupType<IGear> {}

export const PROTECTIVE_ITEM_DEFAULT: IProtectiveItem = {
  name: null,
  acBonus: null,
  weight: null,
  specialProperties: null,
};
export const GEAR_DEFAULT: IGear = {
  armourName: null,
  armourType: null,
  armourAcBonus: null,
  armourMaxDex: null,
  armourCheckPenalty: null,
  armourSpellFailure: null,
  armourSpeed: null,
  armourWeight: null,
  armourSpecialProperties: null,
  shieldName: null,
  shieldAcBonus: null,
  shieldWeight: null,
  shieldCheckPenalty: null,
  shieldSpellFailure: null,
  shieldSpecialProperties: null,
  protectiveItems: [PROTECTIVE_ITEM_DEFAULT],
};
