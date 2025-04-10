import { FormGroupType } from '../../../../../types/form-group-type';

export interface ISpecialAbilities {
  feats: string[] | null;
  specialAbilities: string[] | null;
  languages: string[] | null;
}
export interface ISpecialAbilitiesForm
  extends FormGroupType<ISpecialAbilities> {}

export const SPECIAL_ABILITIES_DEFAULT: ISpecialAbilities = {
  feats: [''],
  specialAbilities: [''],
  languages: [''],
};
