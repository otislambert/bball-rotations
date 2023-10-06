import type { PlayByPlayItem } from "$types/nbacdn";
import { getTotalSeconds } from "./statParsing";

function findSubs(plays: PlayByPlayItem[]): PlayByPlayItem[] {
  let result = plays;

  return result;
}

function getGameTimeTotal(plays: PlayByPlayItem[]): number {
  const gamePeriods = plays.filter(p => p.actionType === "period" && p.subType === "start");

  let total = 0;

  gamePeriods.forEach(p => total += getTotalSeconds(p.clock));

  return total;
}

export { findSubs, getGameTimeTotal };
