import { FormGroupType } from '../../../../../types/form-group-type';

interface IAbility {
  score: number | null;
  modifier: number | null;
  temporaryScore: number | null;
  temporaryModifier: number | null;
}

export interface IAbilities {
  strength: IAbility | null;
  dexterity: IAbility | null;
  constitution: IAbility | null;
  intelligence: IAbility | null;
  wisdom: IAbility | null;
  charisma: IAbility | null;
}
export interface IAbilitiesForm extends FormGroupType<IAbilities> {}

export const ABILITIES_DEFAULT: IAbilities = {
  strength: {
    score: null,
    modifier: null,
    temporaryScore: null,
    temporaryModifier: null,
  },
  dexterity: {
    score: null,
    modifier: null,
    temporaryScore: null,
    temporaryModifier: null,
  },
  constitution: {
    score: null,
    modifier: null,
    temporaryScore: null,
    temporaryModifier: null,
  },
  intelligence: {
    score: null,
    modifier: null,
    temporaryScore: null,
    temporaryModifier: null,
  },
  wisdom: {
    score: null,
    modifier: null,
    temporaryScore: null,
    temporaryModifier: null,
  },
  charisma: {
    score: null,
    modifier: null,
    temporaryScore: null,
    temporaryModifier: null,
  },
};
