import { FormGroupType } from '../../../../../types/form-group-type';

export interface IPossession {
  name: string | null;
  pg: number | null;
  weight: number | null;
}

export interface IPossessions {
  items: IPossession[] | null;
  totalWeight: number | null;
  lightLoad: number | null;
  mediumLoad: number | null;
  heavyLoad: number | null;
  liftOverHead: number | null;
  liftOffGround: number | null;
  pushOrDrag: number | null;
  copper: number | null;
  silver: number | null;
  gold: number | null;
  platinum: number | null;
}
export interface IPossessionsForm extends FormGroupType<IPossessions> {}

export const POSSESSION_DEFAULT: IPossession = {
  name: null,
  pg: null,
  weight: null,
};

export const POSSESSIONS_DEFAULT: IPossessions = {
  items: [POSSESSION_DEFAULT],
  totalWeight: null,
  lightLoad: null,
  mediumLoad: null,
  heavyLoad: null,
  liftOverHead: null,
  liftOffGround: null,
  pushOrDrag: null,
  copper: null,
  silver: null,
  gold: null,
  platinum: null,
};
