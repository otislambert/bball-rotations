import type { ScheduleGame } from "./nbacdn";
import type { SortValues } from "./enums";

// parameters
export interface Params {
  params: {
    slug: string;
  };
}

// game page data types
// passed from game page server file
export interface GameDatePageData {
  props: {
    date: string;
    games?: ScheduleGame;
  };
}

// interface for game page options 
// set from game page options store
export interface GPOData {
  sort: SortValues;
  asc: boolean;
  showInactive: boolean;
  expanded: boolean;
}

