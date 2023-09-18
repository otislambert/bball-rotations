import type { LeagueSchedule } from "../types/nbacdn";

async function fetchSchedule(): Promise<LeagueSchedule> {
  const url =
    "https://cdn.nba.com/static/json/staticData/scheduleLeagueV2.json";

  const res = await fetch(url);

  const data = await res.json();

  const schedule = data.leagueSchedule;

  return schedule;
}

export { fetchSchedule };
