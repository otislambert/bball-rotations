import type { ScheduleGame } from "./nbacdn";

export interface Params {
  params: Parameters;
}

export interface Parameters {
  slug: string;
}

export interface GameDatePageData {
  props: {
    date: string;
    games?: ScheduleGame;
  };
}
