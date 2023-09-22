import type { Player } from "$types/nbacdn";

function getActivePlayers(players: Player[]): Player[] {
  return players.filter((p) => p.status == "ACTIVE");
}

export { getActivePlayers };
