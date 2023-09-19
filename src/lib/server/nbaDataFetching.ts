import type { LeagueSchedule, BoxScore } from "$types/nbacdn";

async function fetchSchedule(): Promise<LeagueSchedule> {
  const url =
    "https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json";

  const res = await fetch(url);

  const data = await res.json();

  const schedule = data.leagueSchedule;

  return schedule;
}

async function fetchBoxScore(gameId: string): Promise<BoxScore> {
  const url = `https://cdn.nba.com/static/json/liveData/boxscore/boxscore_${gameId}.json`;

  const res = await fetch(url, { cache: "no-cache" });

  const data = await res.json();

  return data.game;
}

export { fetchSchedule, fetchBoxScore };
