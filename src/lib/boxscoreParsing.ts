import type { Player } from "$types/nbacdn";
import { SortValues } from "$types/enums";
import { getTotalSeconds } from "./statParsing";

// Player filtering
function getActivePlayers(players: Player[]): Player[] {
  return players.filter((p) => p.status == "ACTIVE");
}

function filterDNPs(players: Player[]): Player[] {
  return players.filter((p) => getTotalSeconds(p.statistics.minutes) !== 0);
}

// Player Sorting

// TODO: add tests for sort Players functions
function sortPlayers(
  players: Player[],
  sortVal: SortValues,
  expanded: boolean = false,
  showDNPs: boolean = false,
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
      result = sortPlayersByMinutes(players);
      break;

    case SortValues.steals:
      result = sortPlayersBySteals(players);
      break;

    case SortValues.blocks:
      result = sortPlayersByBlocks(players);
      break;

    case SortValues.trb:
      result = sortPlayersByTrb(players);
      break;

    case SortValues.orb:
      result = sortPlayersByOrb(players)
      break;

    case SortValues.drb:
      result = sortPlayersByDrb(players);
      break;

    case SortValues.fg:
      result = sortPlayersByFG(players);
      break;

    case SortValues.fga:
      result = sortPlayersByFGA(players);
      break;

    case SortValues.fgp:
      result = sortPlayersByFGP(players);
      break;

    case SortValues.tp:
      result = sortPlayersByTPM(players);
      break;

    case SortValues.tpa:
      result = sortPlayersByTPM(players);
      break;

    case SortValues.tpp:
      result = sortPlayersByTPP(players);
      break;
  }

  if (!expanded) {
    result = result.slice(0, 5);
  };

  if (!showDNPs) {
    result = filterDNPs(result);
  }

  return result;
}

// Sorting Methods
function sortPlayersByMinutes(players: Player[]): Player[] {
  return players.sort((a, b) => getTotalSeconds(b.statistics.minutes) - getTotalSeconds(a.statistics.minutes));
}

function sortPlayersByPoints(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.points - a.statistics.points);
}

function sortPlayersBySteals(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.steals - a.statistics.steals);
}

function sortPlayersByBlocks(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.steals - a.statistics.steals);
}

function sortPlayersByTrb(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.reboundsTotal - a.statistics.reboundsTotal);
}

function sortPlayersByOrb(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.reboundsOffensive - a.statistics.reboundsOffensive);
}

function sortPlayersByDrb(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.reboundsDefensive - a.statistics.reboundsDefensive);
}

function sortPlayersByFG(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.fieldGoalsMade - a.statistics.fieldGoalsMade);
}

function sortPlayersByFGA(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.fieldGoalsAttempted - a.statistics.fieldGoalsAttempted);
}

function sortPlayersByFGP(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.fieldGoalsPercentage - a.statistics.fieldGoalsPercentage);
}

function sortPlayersByTPM(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.threePointersMade - a.statistics.threePointersMade);
}

function sortPlayersByTPA(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.threePointersAttempted - a.statistics.threePointersAttempted);
}

function sortPlayersByTPP(players: Player[]): Player[] {
  return players.sort((a, b) => b.statistics.threePointersPercentage - a.statistics.threePointersPercentage);
}

export { getActivePlayers, sortPlayers };
