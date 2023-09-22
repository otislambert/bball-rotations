import type { Player } from "$types/nbacdn";
import { SortValues } from "$types/types";
import type { GPOData } from "$types/types";
import { initialOptions } from "../stores/gamePageOptions";

// Player filtering

function getActivePlayers(players: Player[]): Player[] {
  return players.filter((p) => p.status == "ACTIVE");
}

// Player Sorting

// TODO: add tests for sort Players functions
function sortPlayers(
  players: Player[],
  expanded: boolean = false,
  options: GPOData = initialOptions
): Player[] {
  let sortVal = options.sort;

  let result: Player[] = [];

  switch (sortVal) {
    case SortValues.default:
      result = players;
      break;

    case SortValues.points:
      result = sortPlayersByPoints(players);
      break;
  }

  if (!expanded) {
    result = result.slice(0, 5);
  }

  return result;
}

function SortPlayersByMinutes() {
  // TODO: create function for getting total minutes / seconds
}

function sortPlayersByPoints(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.points - a.statistics.points);
}

export { getActivePlayers, sortPlayers };
