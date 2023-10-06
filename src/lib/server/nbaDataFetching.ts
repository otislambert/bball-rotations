import type { PlayByPlayItem, LeagueSchedule, BoxScore } from "$types/nbacdn";

// TODO: create tests for fetchSchedule
async function fetchSchedule(): Promise<LeagueSchedule> {
  const url =
    "https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json";

  const res = await fetch(url);

  const data = await res.json();

  const schedule = data.leagueSchedule;

  return schedule;
}

// TODO: create tests for fetchBoxScore
async function fetchBoxScore(gameId: string): Promise<BoxScore> {
  if (!gameId) throw new Error("No Game ID Provided.");

  const url = `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`;

  const res = await fetch(url, { cache: "no-cache" });

  const data = await res.json();

  return data.game;
}

async function fetchPlayByPlay(gameId: string): Promise<PlayByPlayItem[]> {
  if (!gameId) throw new Error("No Game ID Provided.");
  const url = `https://cdn.nba.com/static/json/liveData/playbyplay/playbyplay_${gameId}.json`;
  const res = await fetch(url, { cache: "no-cache" });

  const data = await res.json();

  return data.game.actions;
}

export { fetchSchedule, fetchBoxScore, fetchPlayByPlay };
