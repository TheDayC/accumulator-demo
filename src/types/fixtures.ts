import { FixtureStatus} from '../enums/fixtures';

interface ITeams {
    home: string;
    away: string;
}

export interface IFixture {
    teams: ITeams;
}

interface IContestant {
    '_id': string;
    id: string;
    name: string;
    shortName: string;
    officialName: string;
    code: string;
    position: string;
}

interface IInsight {
    id: string;
    fact: string;
}

interface ILast5 {
    home: string[];
    away: string[];
}

interface IMetaDetails {
    id: string;
    name: string;
}

interface IMeta {
    tournamentCalendar: IMetaDetails;
    competition: IMetaDetails;
    value: IMetaDetails;
}

interface IMatchPeriod {
    id: string;
    start: Date;
    end: Date;
    lengthMin: number;
    lengthSec: number;
}

interface IMatchScore {
    home: number;
    away: number;
}

interface IMatchScores {
    ht: IMatchScore;
    ft: IMatchScore;
    total: IMatchScore;
}

interface IMatchDetails {
    periodId: number;
    matchStatus: string;
    winner: string;
    matchLengthMin: number;
    matchLengthSec: number;
    period: IMatchPeriod[];
    scores: IMatchScores;
}

interface IGoal {
    contestantId: string;
    periodId: number;
    timeMin: number;
    timeMinSec: string;
    timestamp: Date;
    type: string;
    scorerId: string;
    scorerName: string;
    assistPlayerId: string;
    assistPlayerName: string;
}

interface ICard {
    contestantId: string;
    periodId: number;
    timeMin: number;
    timeMinSec: string;
    timestamp: Date;
    type: string;
    playerId: string;
    playerName: string;
}

interface ISub {
    periodId: number;
    timeMin: number;
    timeMinSec: string;
    timestamp: Date;
    playerOnId: string;
    playerOnName: string;
    playerOffId: string;
    playerOffName: string;
}

interface IPlayerStats {
    shots: number;
    shotsOnTarget: number;
    passes: number;
    tackles: number;
}

interface IPlayer {
    id: string;
    name: string;
    position: string;
    stats: IPlayerStats;
}

interface IStat {
    fh: string;
    sh: string;
    type: string;
    value: string;
}

interface ILineupTeam {
    teamId: string;
    teamName: string;
    first11: IPlayer[];
    subs: IPlayer[];
    stats: IStat[];
}

interface ILineup {
    home: ILineupTeam;
    away: ILineupTeam;
}

interface ILiveData {
    matchDetails: IMatchDetails;
    goal: IGoal[];
    card: ICard[];
    substitute: ISub[];
    lineups: ILineup;
}

interface IMatch {
    id: string;
    description: string;
    data: Date;
    contestant: IContestant[];
    status: FixtureStatus;
    insights: IInsight[];
    prompts: any[];
    last5: ILast5;
    meta: IMeta;
    liveData: ILiveData;
}

interface IMarket {
    '_id': string;
    bookmaker: string;
    commonID: number;
    mappedEventId: string;
    event: string;
    id: string;
    market: string;
    name: string;
    odds: string;
    oddsDecimal: number;
    order: number;
    suspended: boolean;
    type: string;
    typeName: string;
}

export interface IFixtureResponse {
    responseCode: string;
    match: IMatch;
    betBuilderURL: string;
    givemeodds: any[];
    boosts: any[];
    markets: IMarket[];
}
