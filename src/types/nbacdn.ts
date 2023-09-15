// NBA API Types
// scoreboard
export interface NBAScoreboardGame {
  gameId: string;
  gameCode: string;
  gameStatus: number;
  gameStatusText: string;
  period: number;
  gameClock: string;
  gameTimeUTC: Date;
  gameEt: Date;
  regulationPeriods: number;
  ifNecessary: boolean;
  seriesGameNumber: string;
  seriesText: string;
  homeTeam: Team;
  awayTeam: Team;
  gameLeaders: GameLeaders;
  pbOdds: PbOdds;
}

export interface Team {
  teamId: number;
  teamName: string;
  teamCity: string;
  teamTricode: string;
  teamSlug?: string;
  wins?: number;
  losses?: number;
  score?: number;
  seed?: number;
  statistics?: TeamStatistics;
  inBonus?: string;
  timeoutsRemaining?: number;
  players?: Player[];
  periods?: Period[];
}

export interface Period {
  period: number;
  periodType: string;
  score: number;
}

export interface GameLeaders {
  homeLeaders: Leaders;
  awayLeaders: Leaders;
}

export interface Leaders {
  personId: number;
  name: string;
  jerseyNum: string;
  position: string;
  teamTricode: string;
  playerSlug: string;
  points: number;
  rebounds: number;
  assists: number;
}

export interface PbOdds {
  team: null;
  odds: number;
  suspended: number;
}

// box score
export interface BoxScore {
  gameId: string;
  gameTimeLocal: string;
  gameTimeUTC: string;
  gameTimeHome: string;
  gameTimeAway: string;
  gameEt: string;
  duration: number;
  gameCode: string;
  gameStatusText: string;
  gameStatus: number;
  regulationPeriods: number;
  period: number;
  gameClock: string;
  attendance: number;
  sellout: string;
  arena: Arena;
  officials: Official[];
  homeTeam: Team;
  awayTeam: Team;
}

export interface Arena {
  arenaId: number;
  arenaName: string;
  arenaCity: string;
  arenaState: string;
  arenaCountry: string;
  arenaTimezone: string;
}

export interface Period {
  period: number;
  periodType: string;
  score: number;
}

export interface Player {
  status: string;
  order: number;
  personId: number;
  jerseyNum: string;
  position?: string;
  starter: string;
  oncourt: string;
  played: string;
  statistics: PlayerStatistics;
  name: string;
  nameI: string;
  firstName: string;
  familyName: string;
  notPlayingReason?: string;
  notPlayingDescription?: string;
  substitutions?: PlayByPlayItem[];
}

export interface PlayerStatistics {
  assists: number;
  blocks: number;
  blocksReceived: number;
  fieldGoalsAttempted: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsOffensive: number;
  foulsDrawn: number;
  foulsPersonal: number;
  foulsTechnical: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
  freeThrowsPercentage: number;
  minus: number;
  minutes: string;
  minutesCalculated: string;
  plus: number;
  plusMinusPoints: number;
  points: number;
  pointsFastBreak: number;
  pointsInThePaint: number;
  pointsSecondChance: number;
  reboundsDefensive: number;
  reboundsOffensive: number;
  reboundsTotal: number;
  steals: number;
  threePointersAttempted: number;
  threePointersMade: number;
  threePointersPercentage: number;
  turnovers: number;
  twoPointersAttempted: number;
  twoPointersMade: number;
  twoPointersPercentage: number;
}

export interface AwayTeamStatistics {
  assists: number;
  assistsTurnoverRatio: number;
  benchPoints: number;
  biggestLead: number;
  biggestLeadScore: string;
  biggestScoringRun: number;
  biggestScoringRunScore: string;
  blocks: number;
  blocksReceived: number;
  fastBreakPointsAttempted: number;
  fastBreakPointsMade: number;
  fastBreakPointsPercentage: number;
  fieldGoalsAttempted: number;
  fieldGoalsEffectiveAdjusted: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsOffensive: number;
  foulsDrawn: number;
  foulsPersonal: number;
  foulsTeam: number;
  foulsTechnical: number;
  foulsTeamTechnical: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
  freeThrowsPercentage: number;
  leadChanges: number;
  minutes: string;
  minutesCalculated: string;
  points: number;
  pointsAgainst: number;
  pointsFastBreak: number;
  pointsFromTurnovers: number;
  pointsInThePaint: number;
  pointsInThePaintAttempted: number;
  pointsInThePaintMade: number;
  pointsInThePaintPercentage: number;
  pointsSecondChance: number;
  reboundsDefensive: number;
  reboundsOffensive: number;
  reboundsPersonal: number;
  reboundsTeam: number;
  reboundsTeamDefensive: number;
  reboundsTeamOffensive: number;
  reboundsTotal: number;
  secondChancePointsAttempted: number;
  secondChancePointsMade: number;
  secondChancePointsPercentage: number;
  steals: number;
  threePointersAttempted: number;
  threePointersMade: number;
  threePointersPercentage: number;
  timeLeading: string;
  timesTied: number;
  trueShootingAttempts: number;
  trueShootingPercentage: number;
  turnovers: number;
  turnoversTeam: number;
  turnoversTotal: number;
  twoPointersAttempted: number;
  twoPointersMade: number;
  twoPointersPercentage: number;
}

export interface Official {
  personId: number;
  name: string;
  nameI: string;
  firstName: string;
  familyName: string;
  jerseyNum: string;
  assignment: string;
}

// PlayByPlay

export interface PlayByPlayItem {
  actionNumber: number;
  clock: string;
  timeActual?: string;
  period: number;
  periodType?: string;
  actionType: string;
  subType: string;
  qualifiers?: string[];
  personId: number;
  x: number | null;
  y: number | null;
  possession?: number;
  scoreHome?: string;
  scoreAway?: string;
  edited?: string;
  orderNumber?: number;
  isTargetScoreLastPeriod?: boolean;
  xLegacy?: number | null;
  yLegacy?: number | null;
  isFieldGoal?: number;
  side: string | null;
  description: string;
  personIdsFilter: number[];
  teamId?: number;
  teamTricode?: string;
  descriptor?: string;
  jumpBallRecoveredName?: string;
  jumpBallRecoverdPersonId?: number;
  playerName?: string;
  playerNameI?: string;
  jumpBallWonPlayerName?: string;
  jumpBallWonPersonId?: number;
  jumpBallLostPlayerName?: string;
  jumpBallLostPersonId?: number;
  area?: string;
  areaDetail?: string;
  shotDistance?: number;
  shotResult?: string;
  pointsTotal?: number;
  assistPlayerNameInitial?: string;
  assistPersonId?: number;
  assistTotal?: number;
  shotActionNumber?: number;
  reboundTotal?: number;
  reboundDefensiveTotal?: number;
  reboundOffensiveTotal?: number;
  officialId?: number;
  turnoverTotal?: number;
  foulPersonalTotal?: number;
  foulTechnicalTotal?: number;
  foulDrawnPlayerName?: string;
  foulDrawnPersonId?: number;
  blockPlayerName?: string;
  blockPersonId?: number;
  stealPlayerName?: string;
  stealPersonId?: number;
  personsIdFilter?: number[];
  id?: string; // added by parseSubstitutionsByPlayer function
}

// league schedule

export interface LeagueSchedule {
  seasonYear: string;
  leagueId: string;
  gameDates: GameDate[];
  weeks: Week[];
}

export interface GameDate {
  gameDate: string;
  games: ScheduleGame[];
}

export interface ScheduleGame {
  gameId: string;
  gameCode: string;
  gameStatus: number;
  gameStatusText: string;
  gameSequence: number;
  gameDateEst: string;
  gameTimeEst: string;
  gameDateTimeEst: string;
  gameDateUTC: string;
  gameTimeUTC: string;
  gameDateTimeUTC: string;
  awayTeamTime: string;
  homeTeamTime: string;
  day: string;
  monthNum: number;
  weekNumber: number;
  weekName: string;
  ifNecessary: boolean;
  seriesGameNumber: string;
  seriesText: string;
  arenaName: string;
  arenaState: string;
  arenaCity: string;
  postponedStatus: string;
  branchLink: string;
  gameSubtype: string;
  broadcasters: Broadcasters;
  homeTeam: Team;
  awayTeam: Team;
  pointsLeaders: string[];
}

export enum ArenaState {
  Ab = "AB",
  Al = "AL",
  Az = "AZ",
  CA = "CA",
  Co = "CO",
  Dc = "DC",
  Empty = "",
  FL = "FL",
  Ga = "GA",
  IL = "IL",
  In = "IN",
  La = "LA",
  Ma = "MA",
  Mi = "MI",
  Mn = "MN",
  Nc = "NC",
  Nv = "NV",
  Ny = "NY",
  Oh = "OH",
  Ok = "OK",
  On = "ON",
  Or = "OR",
  Pa = "PA",
  Qc = "QC",
  Tn = "TN",
  Tx = "TX",
  Ut = "UT",
  Wa = "WA",
  Wi = "WI",
}

export interface Broadcasters {
  nationalBroadcasters: Broadcaster[];
  nationalRadioBroadcasters: Broadcaster[];
  nationalOttBroadcasters: any[];
  homeTvBroadcasters: Broadcaster[];
  homeRadioBroadcasters: Broadcaster[];
  homeOttBroadcasters: any[];
  awayTvBroadcasters: Broadcaster[];
  awayRadioBroadcasters: Broadcaster[];
  awayOttBroadcasters: any[];
}

export interface Broadcaster {
  broadcasterScope: string;
  broadcasterMedia: "radio" | "tv";
  broadcasterId: number;
  broadcasterDisplay: string;
  broadcasterAbbreviation: string;
  tapeDelayComments: string;
  broadcasterVideoLink: string;
}

export enum BroadcasterMedia {
  Radio = "radio",
  Tv = "tv",
}

export enum BroadcasterScope {
  Away = "away",
  Home = "home",
  Natl = "natl",
}

export enum Day {
  Fri = "Fri",
  Mon = "Mon",
  Sat = "Sat",
  Sun = "Sun",
  Thu = "Thu",
  Tue = "Tue",
  Wed = "Wed",
}

export interface PointsLeader {
  personId: number;
  firstName: string;
  lastName: string;
  teamId: number;
  teamCity: string;
  teamName: string;
  teamTricode: string;
  points: number;
}

export enum PostponedStatus {
  A = "A",
}

export interface Week {
  weekNumber: number;
  weekName: string;
  startDate: string;
  endDate: string;
}

export interface TeamStatistics {
  assists: number;
  assistsTurnoverRatio: number;
  benchPoints: number;
  biggestLead: number;
  biggestLeadScore: string;
  biggestScoringRun: number;
  biggestScoringRunScore: string;
  blocks: number;
  blocksReceived: number;
  fastBreakPointsAttempted: number;
  fastBreakPointsMade: number;
  fastBreakPointsPercentage: number;
  fieldGoalsAttempted: number;
  fieldGoalsEffectiveAdjusted: number;
  fieldGoalsMade: number;
  fieldGoalsPercentage: number;
  foulsOffensive: number;
  foulsDrawn: number;
  foulsPersonal: number;
  foulsTeam: number;
  foulsTechnical: number;
  foulsTeamTechnical: number;
  freeThrowsAttempted: number;
  freeThrowsMade: number;
  freeThrowsPercentage: number;
  leadChanges: number;
  minutes: string;
  minutesCalculated: string;
  points: number;
  pointsAgainst: number;
  pointsFastBreak: number;
  pointsFromTurnovers: number;
  pointsInThePaint: number;
  pointsInThePaintAttempted: number;
  pointsInThePaintMade: number;
  pointsInThePaintPercentage: number;
  pointsSecondChance: number;
  reboundsDefensive: number;
  reboundsOffensive: number;
  reboundsPersonal: number;
  reboundsTeam: number;
  reboundsTeamDefensive: number;
  reboundsTeamOffensive: number;
  reboundsTotal: number;
  secondChancePointsAttempted: number;
  secondChancePointsMade: number;
  secondChancePointsPercentage: number;
  steals: number;
  threePointersAttempted: number;
  threePointersMade: number;
  threePointersPercentage: number;
  timeLeading: string;
  timesTied: number;
  trueShootingAttempts: number;
  trueShootingPercentage: number;
  turnovers: number;
  turnoversTeam: number;
  turnoversTotal: number;
  twoPointersAttempted: number;
  twoPointersMade: number;
  twoPointersPercentage: number;
}
