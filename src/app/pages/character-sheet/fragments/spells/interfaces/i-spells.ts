import { FormGroupType } from '../../../../../types/form-group-type';

export interface ISpells {
  0: String[] | null;
  1: String[] | null;
  2: String[] | null;
  3: String[] | null;
  4: String[] | null;
  5: String[] | null;
  6: String[] | null;
  7: String[] | null;
  8: String[] | null;
  9: String[] | null;
}
export interface ISpellsForm extends FormGroupType<ISpells> {}

export const SPELLS_DEFAULT: ISpells = {
  0: [''],
  1: [''],
  2: [''],
  3: [''],
  4: [''],
  5: [''],
  6: [''],
  7: [''],
  8: [''],
  9: [''],
};
