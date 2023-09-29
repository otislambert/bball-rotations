import type { Player } from "$types/nbacdn";
import { SortValues } from "$types/enums";
import type { GPOData } from "$types/types";
import { getTotalSeconds } from "./statParsing";

// Player filtering

function getActivePlayers(players: Player[]): Player[] {
  return players.filter((p) => p.status == "ACTIVE");
}

// Player Sorting

// TODO: add tests for sort Players functions
function sortPlayers(
  players: Player[],
  sortVal: SortValues,
  expanded: boolean = false,
): Player[] {
  let result: Player[] = [];

  switch (sortVal) {
    case SortValues.default:
      result = players;
      break;

    case SortValues.points:
      result = sortPlayersByPoints(players);
      break;

    case SortValues.minutes:
      result = SortPlayersByMinutes(players);
      break;
  }

  if (!expanded) {
    result = result.slice(0, 5);
  }

  return result;
}

function SortPlayersByMinutes(players: Player[]): Player[] {
  return players.sort((a, b) => getTotalSeconds(b.statistics.minutes) - getTotalSeconds(a.statistics.minutes));
}

function sortPlayersByPoints(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.points - a.statistics.points);
}

export { getActivePlayers, sortPlayers };
