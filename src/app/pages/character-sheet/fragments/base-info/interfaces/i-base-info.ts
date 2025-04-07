import { FormGroupType } from "../../../../../types/form-group-type";

export interface IBaseInfo {
  characterName: string | null;
  playerName: string | null;
  class: string | null;
  level: number | null;
  race: string | null;
  alignment: Alignment | null;
  deity: string | null;
  size: string | null;
  age: number | null;
  gender: string | null;
  height: number | null;
  weight: number | null;
  eyeColour: string | null;
  hairColour: string | null;
  skinColour: string | null;
}
export interface IBaseInfoForm extends FormGroupType<IBaseInfo> {}

export const BASE_INFO_DEFAULT: IBaseInfo = {
  characterName: null,
  playerName: null,
  class: null,
  level: null,
  race: null,
  alignment: null,
  deity: null,
  size: null,
  age: null,
  gender: null,
  height: null,
  weight: null,
  eyeColour: null,
  hairColour: null,
  skinColour: null,
};

export const Alignment = {
  LAWFUL_GOOD: 'Lawful Good',
  NEUTRAL_GOOD: 'Neutral Good',
  CHAOTIC_GOOD: 'Chaotic Good',
  LAWFUL_NEUTRAL: 'Lawful Neutral',
  TRUE_NEUTRAL: 'True Neutral',
  CHAOTIC_NEUTRAL: 'Chaotic Neutral',
  LAWFUL_EVIL: 'Lawful Evil',
  NEUTRAL_EVIL: 'Neutral Evil',
  CHAOTIC_EVIL: 'Chaotic Evil',
} as const;
export type Alignment = (typeof Alignment)[keyof typeof Alignment];
