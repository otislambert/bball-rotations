import type { ScheduleGame } from "./nbacdn";

export interface Params {
  params: {
    slug: string;
  };
}

export interface GameDatePageData {
  props: {
    date: string;
    games?: ScheduleGame;
  };
}

export interface GPOData {
  sort: SortValues;
  asc: boolean;
  showInactive: boolean;
  expanded: boolean;
}

export enum SortValues {
  default,
  minutes,
  points,
  steals,
  blocks,
  trb,
  orb,
  drb,
  fg,
  fga,
  fgp,
  tp,
  tpa,
  tpp,
}
