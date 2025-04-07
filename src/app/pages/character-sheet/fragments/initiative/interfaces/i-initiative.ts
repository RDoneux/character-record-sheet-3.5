import { FormGroupType } from '../../../../../types/form-group-type';

export interface IInitiative {
  touch: number | null;
  flatFooted: number | null;
  initiative: IInitiativeMods | null;
}

interface IInitiativeMods {
  total: number | null;
  dexterityModifier: number | null;
  miscModifier: number | null;
}
export interface IInitiativeForm extends FormGroupType<IInitiative> {}

export const INITIATIVE_DEFAULT: IInitiative = {
  touch: null,
  flatFooted: null,
  initiative: {
    total: null,
    dexterityModifier: null,
    miscModifier: null,
  },
};
