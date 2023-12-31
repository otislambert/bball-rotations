import { ScheduleGame } from "../../src/types/nbacdn";

export const MockGame: ScheduleGame = {
  gameId: "0022300406",
  gameCode: "20231226/BKNDET",
  gameStatus: 1,
  gameStatusText: "7:00 pm ET",
  gameSequence: 1,
  gameDateEst: "2023-12-26T00:00:00Z",
  gameTimeEst: "1900-01-01T19:00:00Z",
  gameDateTimeEst: "2023-12-26T19:00:00Z",
  gameDateUTC: "2023-12-26T05:00:00Z",
  gameTimeUTC: "1900-01-02T00:00:00Z",
  gameDateTimeUTC: "2023-12-27T00:00:00Z",
  awayTeamTime: "2023-12-26T19:00:00Z",
  homeTeamTime: "2023-12-26T19:00:00Z",
  day: "Tue",
  monthNum: 12,
  weekNumber: 10,
  weekName: "Week 10",
  ifNecessary: false,
  seriesGameNumber: "",
  seriesText: "",
  arenaName: "Little Caesars Arena",
  arenaState: "MI",
  arenaCity: "Detroit",
  postponedStatus: "A",
  branchLink: "",
  gameSubtype: "",
  broadcasters: {
    nationalBroadcasters: [],
    nationalRadioBroadcasters: [],
    nationalOttBroadcasters: [],
    homeTvBroadcasters: [],
    homeRadioBroadcasters: [],
    homeOttBroadcasters: [],
    awayTvBroadcasters: [
      {
        broadcasterScope: "away",
        broadcasterMedia: "tv",
        broadcasterId: 175,
        broadcasterDisplay: "YES",
        broadcasterAbbreviation: "YES",
        tapeDelayComments: "",
        broadcasterVideoLink:
          "http://onelink.to/yesapp?rel=2020-21_BKN_Schedule&utm_source=brooklynnetsApp&utm_[...]medium=web&utm_campaign=2020-21_BKN_Schedule&utm_content=YesApp",
        broadcasterTeamId: 1610612751,
      },
    ],
    awayRadioBroadcasters: [],
    awayOttBroadcasters: [],
  },
  homeTeam: {
    teamId: 1610612765,
    teamName: "Pistons",
    teamCity: "Detroit",
    teamTricode: "DET",
    teamSlug: "pistons",
    wins: 0,
    losses: 0,
    score: 0,
    seed: 0,
  },
  awayTeam: {
    teamId: 1610612751,
    teamName: "Nets",
    teamCity: "Brooklyn",
    teamTricode: "BKN",
    teamSlug: "nets",
    wins: 0,
    losses: 0,
    score: 0,
    seed: 0,
  },
  pointsLeaders: [],
};
