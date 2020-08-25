/* eslint-disable */
import { SteamApiBase } from "./steam-api-base";
import { SteamInterfaceBase } from "./steam-interface-base";
export class SteamApi extends SteamApiBase {
    public readonly ICSGOServers_730 = new ICSGOServers_730(this);
    public readonly ICSGOTournaments_730 = new ICSGOTournaments_730(this);
    public readonly IDOTA2Fantasy_205790 = new IDOTA2Fantasy_205790(this);
    public readonly IDOTA2Fantasy_570 = new IDOTA2Fantasy_570(this);
    public readonly IDOTA2MatchStats_205790 = new IDOTA2MatchStats_205790(this);
    public readonly IDOTA2MatchStats_570 = new IDOTA2MatchStats_570(this);
    public readonly IDOTA2Match_205790 = new IDOTA2Match_205790(this);
    public readonly IDOTA2Match_570 = new IDOTA2Match_570(this);
    public readonly IDOTA2StreamSystem_205790 = new IDOTA2StreamSystem_205790(this);
    public readonly IDOTA2StreamSystem_570 = new IDOTA2StreamSystem_570(this);
    public readonly IDOTA2Ticket_205790 = new IDOTA2Ticket_205790(this);
    public readonly IDOTA2Ticket_570 = new IDOTA2Ticket_570(this);
    public readonly IEconDOTA2_205790 = new IEconDOTA2_205790(this);
    public readonly IEconDOTA2_570 = new IEconDOTA2_570(this);
    public readonly IEconItems_205790 = new IEconItems_205790(this);
    public readonly IEconItems_221540 = new IEconItems_221540(this);
    public readonly IEconItems_238460 = new IEconItems_238460(this);
    public readonly IEconItems_440 = new IEconItems_440(this);
    public readonly IEconItems_570 = new IEconItems_570(this);
    public readonly IEconItems_583950 = new IEconItems_583950(this);
    public readonly IEconItems_620 = new IEconItems_620(this);
    public readonly IEconItems_730 = new IEconItems_730(this);
    public readonly IGCVersion_205790 = new IGCVersion_205790(this);
    public readonly IGCVersion_440 = new IGCVersion_440(this);
    public readonly IGCVersion_570 = new IGCVersion_570(this);
    public readonly IGCVersion_583950 = new IGCVersion_583950(this);
    public readonly IGCVersion_730 = new IGCVersion_730(this);
    public readonly IPortal2Leaderboards_620 = new IPortal2Leaderboards_620(this);
    public readonly ISteamApps = new ISteamApps(this);
    public readonly ISteamCDN = new ISteamCDN(this);
    public readonly ISteamDirectory = new ISteamDirectory(this);
    public readonly ISteamEconomy = new ISteamEconomy(this);
    public readonly ISteamEnvoy = new ISteamEnvoy(this);
    public readonly ISteamNews = new ISteamNews(this);
    public readonly ISteamRemoteStorage = new ISteamRemoteStorage(this);
    public readonly ISteamUser = new ISteamUser(this);
    public readonly ISteamUserAuth = new ISteamUserAuth(this);
    public readonly ISteamUserOAuth = new ISteamUserOAuth(this);
    public readonly ISteamUserStats = new ISteamUserStats(this);
    public readonly ISteamWebAPIUtil = new ISteamWebAPIUtil(this);
    public readonly ISteamWebUserPresenceOAuth = new ISteamWebUserPresenceOAuth(this);
    public readonly ITFItems_440 = new ITFItems_440(this);
    public readonly ITFPromos_205790 = new ITFPromos_205790(this);
    public readonly ITFPromos_440 = new ITFPromos_440(this);
    public readonly ITFPromos_570 = new ITFPromos_570(this);
    public readonly ITFPromos_620 = new ITFPromos_620(this);
    public readonly ITFSystem_440 = new ITFSystem_440(this);
    public readonly IGameServersService = new IGameServersService(this);
    public readonly IContentServerConfigService = new IContentServerConfigService(this);
    public readonly IPublishedFileService = new IPublishedFileService(this);
    public readonly IEconService = new IEconService(this);
    public readonly IPlayerService = new IPlayerService(this);
    public readonly IGameNotificationsService = new IGameNotificationsService(this);
    public readonly IInventoryService = new IInventoryService(this);
    public readonly IStoreService = new IStoreService(this);
    public readonly ICheatReportingService = new ICheatReportingService(this);
    public readonly IAccountRecoveryService = new IAccountRecoveryService(this);
}
export class ICSGOServers_730 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ICSGOServers_730", api);
    }
    public GetGameMapsPlaytime1(interval: string, gamemode: string, mapgroup: string) {
        return this.fetch("GET", "GetGameMapsPlaytime", 1, { interval, gamemode, mapgroup });
    }
    public GetGameServersStatus1() {
        return this.fetch("GET", "GetGameServersStatus", 1, {});
    }
}
export class ICSGOTournaments_730 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ICSGOTournaments_730", api);
    }
    public GetTournamentFantasyLineup1(event: number, steamid: string, steamidkey: string) {
        return this.fetch("GET", "GetTournamentFantasyLineup", 1, { event, steamid, steamidkey });
    }
    public GetTournamentItems1(event: number, steamid: string, steamidkey: string) {
        return this.fetch("GET", "GetTournamentItems", 1, { event, steamid, steamidkey });
    }
    public GetTournamentLayout1(event: number) {
        return this.fetch("GET", "GetTournamentLayout", 1, { event });
    }
    public GetTournamentPredictions1(event: number, steamid: string, steamidkey: string) {
        return this.fetch("GET", "GetTournamentPredictions", 1, { event, steamid, steamidkey });
    }
    public UploadTournamentFantasyLineup1(event: number, steamid: string, steamidkey: string, sectionid: number, pickid0: number, itemid0: string, pickid1: number, itemid1: string, pickid2: number, itemid2: string, pickid3: number, itemid3: string, pickid4: number, itemid4: string) {
        return this.fetch("POST", "UploadTournamentFantasyLineup", 1, { event, steamid, steamidkey, sectionid, pickid0, itemid0, pickid1, itemid1, pickid2, itemid2, pickid3, itemid3, pickid4, itemid4 });
    }
    public UploadTournamentPredictions1(event: number, steamid: string, steamidkey: string, sectionid: number, groupid: number, index: number, pickid: number, itemid: string) {
        return this.fetch("POST", "UploadTournamentPredictions", 1, { event, steamid, steamidkey, sectionid, groupid, index, pickid, itemid });
    }
}
export class IDOTA2Fantasy_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2Fantasy_205790", api);
    }
    public GetFantasyPlayerStats1(FantasyLeagueID: number, StartTime: number, EndTime: number, matchid: string, SeriesID: number, PlayerAccountID: number) {
        return this.fetch("GET", "GetFantasyPlayerStats", 1, { FantasyLeagueID, StartTime, EndTime, matchid, SeriesID, PlayerAccountID });
    }
    public GetPlayerOfficialInfo1(accountid: number) {
        return this.fetch("GET", "GetPlayerOfficialInfo", 1, { accountid });
    }
    public GetProPlayerList1() {
        return this.fetch("GET", "GetProPlayerList", 1, {});
    }
}
export class IDOTA2Fantasy_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2Fantasy_570", api);
    }
    public GetFantasyPlayerStats1(FantasyLeagueID: number, StartTime: number, EndTime: number, matchid: string, SeriesID: number, PlayerAccountID: number) {
        return this.fetch("GET", "GetFantasyPlayerStats", 1, { FantasyLeagueID, StartTime, EndTime, matchid, SeriesID, PlayerAccountID });
    }
    public GetPlayerOfficialInfo1(accountid: number) {
        return this.fetch("GET", "GetPlayerOfficialInfo", 1, { accountid });
    }
    public GetProPlayerList1() {
        return this.fetch("GET", "GetProPlayerList", 1, {});
    }
}
export class IDOTA2MatchStats_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2MatchStats_205790", api);
    }
    public GetRealtimeStats1(server_steam_id: string) {
        return this.fetch("GET", "GetRealtimeStats", 1, { server_steam_id });
    }
}
export class IDOTA2MatchStats_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2MatchStats_570", api);
    }
    public GetRealtimeStats1(server_steam_id: string) {
        return this.fetch("GET", "GetRealtimeStats", 1, { server_steam_id });
    }
}
export class IDOTA2Match_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2Match_205790", api);
    }
    public GetLeagueListing1() {
        return this.fetch("GET", "GetLeagueListing", 1, {});
    }
    public GetLiveLeagueGames1(league_id: number, match_id: string) {
        return this.fetch("GET", "GetLiveLeagueGames", 1, { league_id, match_id });
    }
    public GetMatchDetails1(match_id: string) {
        return this.fetch("GET", "GetMatchDetails", 1, { match_id });
    }
    public GetMatchHistory1(hero_id: number, game_mode: number, skill: number, min_players: string, account_id: string, league_id: string, start_at_match_id: string, matches_requested: string, tournament_games_only: string) {
        return this.fetch("GET", "GetMatchHistory", 1, { hero_id, game_mode, skill, min_players, account_id, league_id, start_at_match_id, matches_requested, tournament_games_only });
    }
    public GetMatchHistoryBySequenceNum1(start_at_match_seq_num: string, matches_requested: number) {
        return this.fetch("GET", "GetMatchHistoryBySequenceNum", 1, { start_at_match_seq_num, matches_requested });
    }
    public GetTeamInfoByTeamID1(start_at_team_id: string, teams_requested: number) {
        return this.fetch("GET", "GetTeamInfoByTeamID", 1, { start_at_team_id, teams_requested });
    }
    public GetTopLiveEventGame1(partner: number) {
        return this.fetch("GET", "GetTopLiveEventGame", 1, { partner });
    }
    public GetTopLiveGame1(partner: number) {
        return this.fetch("GET", "GetTopLiveGame", 1, { partner });
    }
    public GetTopWeekendTourneyGames1(partner: number, home_division: number) {
        return this.fetch("GET", "GetTopWeekendTourneyGames", 1, { partner, home_division });
    }
    public GetTournamentPlayerStats1(account_id: string, league_id: string, hero_id: string, time_frame: string, match_id: string, phase_id: number) {
        return this.fetch("GET", "GetTournamentPlayerStats", 1, { account_id, league_id, hero_id, time_frame, match_id, phase_id });
    }
    public GetTournamentPlayerStats2(account_id: string, league_id: string, hero_id: string, time_frame: string, match_id: string, phase_id: number) {
        return this.fetch("GET", "GetTournamentPlayerStats", 2, { account_id, league_id, hero_id, time_frame, match_id, phase_id });
    }
}
export class IDOTA2Match_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2Match_570", api);
    }
    public GetLeagueListing1() {
        return this.fetch("GET", "GetLeagueListing", 1, {});
    }
    public GetLiveLeagueGames1(league_id: number, match_id: string) {
        return this.fetch("GET", "GetLiveLeagueGames", 1, { league_id, match_id });
    }
    public GetMatchDetails1(match_id: string) {
        return this.fetch("GET", "GetMatchDetails", 1, { match_id });
    }
    public GetMatchHistory1(hero_id: number, game_mode: number, skill: number, min_players: string, account_id: string, league_id: string, start_at_match_id: string, matches_requested: string) {
        return this.fetch("GET", "GetMatchHistory", 1, { hero_id, game_mode, skill, min_players, account_id, league_id, start_at_match_id, matches_requested });
    }
    public GetMatchHistoryBySequenceNum1(start_at_match_seq_num: string, matches_requested: number) {
        return this.fetch("GET", "GetMatchHistoryBySequenceNum", 1, { start_at_match_seq_num, matches_requested });
    }
    public GetTeamInfoByTeamID1(start_at_team_id: string, teams_requested: number) {
        return this.fetch("GET", "GetTeamInfoByTeamID", 1, { start_at_team_id, teams_requested });
    }
    public GetTopLiveEventGame1(partner: number) {
        return this.fetch("GET", "GetTopLiveEventGame", 1, { partner });
    }
    public GetTopLiveGame1(partner: number) {
        return this.fetch("GET", "GetTopLiveGame", 1, { partner });
    }
    public GetTopWeekendTourneyGames1(partner: number, home_division: number) {
        return this.fetch("GET", "GetTopWeekendTourneyGames", 1, { partner, home_division });
    }
    public GetTournamentPlayerStats1(account_id: string, league_id: string, hero_id: string, time_frame: string, match_id: string, phase_id: number) {
        return this.fetch("GET", "GetTournamentPlayerStats", 1, { account_id, league_id, hero_id, time_frame, match_id, phase_id });
    }
    public GetTournamentPlayerStats2(account_id: string, league_id: string, hero_id: string, time_frame: string, match_id: string, phase_id: number) {
        return this.fetch("GET", "GetTournamentPlayerStats", 2, { account_id, league_id, hero_id, time_frame, match_id, phase_id });
    }
}
export class IDOTA2StreamSystem_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2StreamSystem_205790", api);
    }
    public GetBroadcasterInfo1(broadcaster_steam_id: string, league_id: number) {
        return this.fetch("GET", "GetBroadcasterInfo", 1, { broadcaster_steam_id, league_id });
    }
}
export class IDOTA2StreamSystem_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2StreamSystem_570", api);
    }
    public GetBroadcasterInfo1(broadcaster_steam_id: string, league_id: number) {
        return this.fetch("GET", "GetBroadcasterInfo", 1, { broadcaster_steam_id, league_id });
    }
}
export class IDOTA2Ticket_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2Ticket_205790", api);
    }
    public ClaimBadgeReward1(BadgeID: string, ValidBadgeType1: number, ValidBadgeType2: number, ValidBadgeType3: number) {
        return this.fetch("GET", "ClaimBadgeReward", 1, { BadgeID, ValidBadgeType1, ValidBadgeType2, ValidBadgeType3 });
    }
    public GetSteamIDForBadgeID1(BadgeID: string) {
        return this.fetch("GET", "GetSteamIDForBadgeID", 1, { BadgeID });
    }
    public SetSteamAccountPurchased1(steamid: string, BadgeType: number) {
        return this.fetch("POST", "SetSteamAccountPurchased", 1, { steamid, BadgeType });
    }
    public SteamAccountValidForBadgeType1(steamid: string, ValidBadgeType1: number, ValidBadgeType2: number, ValidBadgeType3: number) {
        return this.fetch("GET", "SteamAccountValidForBadgeType", 1, { steamid, ValidBadgeType1, ValidBadgeType2, ValidBadgeType3 });
    }
}
export class IDOTA2Ticket_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IDOTA2Ticket_570", api);
    }
    public ClaimBadgeReward1(BadgeID: string, ValidBadgeType1: number, ValidBadgeType2: number, ValidBadgeType3: number) {
        return this.fetch("GET", "ClaimBadgeReward", 1, { BadgeID, ValidBadgeType1, ValidBadgeType2, ValidBadgeType3 });
    }
    public GetSteamIDForBadgeID1(BadgeID: string) {
        return this.fetch("GET", "GetSteamIDForBadgeID", 1, { BadgeID });
    }
    public SetSteamAccountPurchased1(steamid: string, BadgeType: number) {
        return this.fetch("POST", "SetSteamAccountPurchased", 1, { steamid, BadgeType });
    }
    public SteamAccountValidForBadgeType1(steamid: string, ValidBadgeType1: number, ValidBadgeType2: number, ValidBadgeType3: number) {
        return this.fetch("GET", "SteamAccountValidForBadgeType", 1, { steamid, ValidBadgeType1, ValidBadgeType2, ValidBadgeType3 });
    }
}
export class IEconDOTA2_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconDOTA2_205790", api);
    }
    public GetEventStatsForAccount1(eventid: number, accountid: number, language: string) {
        return this.fetch("GET", "GetEventStatsForAccount", 1, { eventid, accountid, language });
    }
    public GetGameItems1(language: string) {
        return this.fetch("GET", "GetGameItems", 1, { language });
    }
    public GetHeroes1(language: string, itemizedonly: any) {
        return this.fetch("GET", "GetHeroes", 1, { language, itemizedonly });
    }
    public GetItemIconPath1(iconname: string, icontype: number) {
        return this.fetch("GET", "GetItemIconPath", 1, { iconname, icontype });
    }
    public GetRarities1(language: string) {
        return this.fetch("GET", "GetRarities", 1, { language });
    }
    public GetTournamentPrizePool1(leagueid: number) {
        return this.fetch("GET", "GetTournamentPrizePool", 1, { leagueid });
    }
}
export class IEconDOTA2_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconDOTA2_570", api);
    }
    public GetEventStatsForAccount1(eventid: number, accountid: number, language: string) {
        return this.fetch("GET", "GetEventStatsForAccount", 1, { eventid, accountid, language });
    }
    public GetGameItems1(language: string) {
        return this.fetch("GET", "GetGameItems", 1, { language });
    }
    public GetHeroes1(language: string, itemizedonly: any) {
        return this.fetch("GET", "GetHeroes", 1, { language, itemizedonly });
    }
    public GetItemIconPath1(iconname: string, icontype: number) {
        return this.fetch("GET", "GetItemIconPath", 1, { iconname, icontype });
    }
    public GetRarities1(language: string) {
        return this.fetch("GET", "GetRarities", 1, { language });
    }
    public GetTournamentPrizePool1(leagueid: number) {
        return this.fetch("GET", "GetTournamentPrizePool", 1, { leagueid });
    }
}
export class IEconItems_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_205790", api);
    }
    public GetEquippedPlayerItems1(steamid: string, class_id: number) {
        return this.fetch("GET", "GetEquippedPlayerItems", 1, { steamid, class_id });
    }
    public GetPlayerItems1(steamid: string) {
        return this.fetch("GET", "GetPlayerItems", 1, { steamid });
    }
    public GetSchema1(language: string) {
        return this.fetch("GET", "GetSchema", 1, { language });
    }
    public GetSchemaURL1() {
        return this.fetch("GET", "GetSchemaURL", 1, {});
    }
    public GetStoreMetaData1(language: string) {
        return this.fetch("GET", "GetStoreMetaData", 1, { language });
    }
}
export class IEconItems_221540 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_221540", api);
    }
    public GetPlayerItems1(steamid: string) {
        return this.fetch("GET", "GetPlayerItems", 1, { steamid });
    }
}
export class IEconItems_238460 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_238460", api);
    }
    public GetPlayerItems1(steamid: string) {
        return this.fetch("GET", "GetPlayerItems", 1, { steamid });
    }
}
export class IEconItems_440 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_440", api);
    }
    public GetPlayerItems1(steamid: string) {
        return this.fetch("GET", "GetPlayerItems", 1, { steamid });
    }
    public GetSchema1(language: string) {
        return this.fetch("GET", "GetSchema", 1, { language });
    }
    public GetSchemaURL1() {
        return this.fetch("GET", "GetSchemaURL", 1, {});
    }
    public GetStoreMetaData1(language: string) {
        return this.fetch("GET", "GetStoreMetaData", 1, { language });
    }
    public GetStoreStatus1() {
        return this.fetch("GET", "GetStoreStatus", 1, {});
    }
}
export class IEconItems_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_570", api);
    }
    public GetEquippedPlayerItems1(steamid: string, class_id: number) {
        return this.fetch("GET", "GetEquippedPlayerItems", 1, { steamid, class_id });
    }
    public GetPlayerItems1(steamid: string) {
        return this.fetch("GET", "GetPlayerItems", 1, { steamid });
    }
    public GetSchema1(language: string) {
        return this.fetch("GET", "GetSchema", 1, { language });
    }
    public GetSchemaURL1() {
        return this.fetch("GET", "GetSchemaURL", 1, {});
    }
    public GetStoreMetaData1(language: string) {
        return this.fetch("GET", "GetStoreMetaData", 1, { language });
    }
}
export class IEconItems_583950 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_583950", api);
    }
    public GetEquippedPlayerItems1(steamid: string, class_id: number) {
        return this.fetch("GET", "GetEquippedPlayerItems", 1, { steamid, class_id });
    }
}
export class IEconItems_620 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_620", api);
    }
    public GetPlayerItems1(steamid: string) {
        return this.fetch("GET", "GetPlayerItems", 1, { steamid });
    }
    public GetSchema1(language: string) {
        return this.fetch("GET", "GetSchema", 1, { language });
    }
}
export class IEconItems_730 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconItems_730", api);
    }
    public GetPlayerItems1(steamid: string) {
        return this.fetch("GET", "GetPlayerItems", 1, { steamid });
    }
    public GetSchema2(language: string) {
        return this.fetch("GET", "GetSchema", 2, { language });
    }
    public GetSchemaURL2() {
        return this.fetch("GET", "GetSchemaURL", 2, {});
    }
    public GetStoreMetaData1(language: string) {
        return this.fetch("GET", "GetStoreMetaData", 1, { language });
    }
}
export class IGCVersion_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGCVersion_205790", api);
    }
    public GetClientVersion1() {
        return this.fetch("GET", "GetClientVersion", 1, {});
    }
    public GetServerVersion1() {
        return this.fetch("GET", "GetServerVersion", 1, {});
    }
}
export class IGCVersion_440 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGCVersion_440", api);
    }
    public GetClientVersion1() {
        return this.fetch("GET", "GetClientVersion", 1, {});
    }
    public GetServerVersion1() {
        return this.fetch("GET", "GetServerVersion", 1, {});
    }
}
export class IGCVersion_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGCVersion_570", api);
    }
    public GetClientVersion1() {
        return this.fetch("GET", "GetClientVersion", 1, {});
    }
    public GetServerVersion1() {
        return this.fetch("GET", "GetServerVersion", 1, {});
    }
}
export class IGCVersion_583950 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGCVersion_583950", api);
    }
    public GetClientVersion1() {
        return this.fetch("GET", "GetClientVersion", 1, {});
    }
    public GetServerVersion1() {
        return this.fetch("GET", "GetServerVersion", 1, {});
    }
}
export class IGCVersion_730 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGCVersion_730", api);
    }
    public GetServerVersion1() {
        return this.fetch("GET", "GetServerVersion", 1, {});
    }
}
export class IPortal2Leaderboards_620 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IPortal2Leaderboards_620", api);
    }
    public GetBucketizedData1(leaderboardName: string) {
        return this.fetch("GET", "GetBucketizedData", 1, { leaderboardName });
    }
}
export class ISteamApps extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamApps", api);
    }
    public GetAppList1() {
        return this.fetch("GET", "GetAppList", 1, {});
    }
    public GetAppList2() {
        return this.fetch("GET", "GetAppList", 2, {});
    }
    public GetServersAtAddress1(addr: string) {
        return this.fetch("GET", "GetServersAtAddress", 1, { addr });
    }
    public UpToDateCheck1(appid: number, version: number) {
        return this.fetch("GET", "UpToDateCheck", 1, { appid, version });
    }
}
export class ISteamCDN extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamCDN", api);
    }
    public SetClientFilters1(key: string, cdnname: string, allowedipblocks: string, allowedasns: string, allowedipcountries: string) {
        return this.fetch("POST", "SetClientFilters", 1, { key, cdnname, allowedipblocks, allowedasns, allowedipcountries });
    }
    public SetPerformanceStats1(key: string, cdnname: string, mbps_sent: number, mbps_recv: number, cpu_percent: number, cache_hit_percent: number) {
        return this.fetch("POST", "SetPerformanceStats", 1, { key, cdnname, mbps_sent, mbps_recv, cpu_percent, cache_hit_percent });
    }
}
export class ISteamDirectory extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamDirectory", api);
    }
    public GetCMList1(cellid: number, maxcount: number) {
        return this.fetch("GET", "GetCMList", 1, { cellid, maxcount });
    }
    public GetCSList1(cellid: number, maxcount: number) {
        return this.fetch("GET", "GetCSList", 1, { cellid, maxcount });
    }
}
export class ISteamEconomy extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamEconomy", api);
    }
    public GetAssetClassInfo1(appid: number, language: string, class_count: number, classid0: string, instanceid0: string) {
        return this.fetch("GET", "GetAssetClassInfo", 1, { appid, language, class_count, classid0, instanceid0 });
    }
    public GetAssetPrices1(appid: number, currency: string, language: string) {
        return this.fetch("GET", "GetAssetPrices", 1, { appid, currency, language });
    }
}
export class ISteamEnvoy extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamEnvoy", api);
    }
    public PaymentOutReversalNotification1() {
        return this.fetch("POST", "PaymentOutReversalNotification", 1, {});
    }
}
export class ISteamNews extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamNews", api);
    }
    public GetNewsForApp1(appid: number, maxlength: number, enddate: number, count: number) {
        return this.fetch("GET", "GetNewsForApp", 1, { appid, maxlength, enddate, count });
    }
    public GetNewsForApp2(appid: number, maxlength: number, enddate: number, count: number, feeds: string) {
        return this.fetch("GET", "GetNewsForApp", 2, { appid, maxlength, enddate, count, feeds });
    }
}
export class ISteamRemoteStorage extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamRemoteStorage", api);
    }
    public GetCollectionDetails1(collectioncount: number, publishedfileids0: string) {
        return this.fetch("POST", "GetCollectionDetails", 1, { collectioncount, publishedfileids0 });
    }
    public GetPublishedFileDetails1(itemcount: number, publishedfileids0: string) {
        return this.fetch("POST", "GetPublishedFileDetails", 1, { itemcount, publishedfileids0 });
    }
    public GetUGCFileDetails1(steamid: string, ugcid: string, appid: number) {
        return this.fetch("GET", "GetUGCFileDetails", 1, { steamid, ugcid, appid });
    }
}
export class ISteamUser extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamUser", api);
    }
    public GetFriendList1(key: string, steamid: string, relationship: string) {
        return this.fetch("GET", "GetFriendList", 1, { key, steamid, relationship });
    }
    public GetPlayerBans1(key: string, steamids: string) {
        return this.fetch("GET", "GetPlayerBans", 1, { key, steamids });
    }
    public GetPlayerSummaries1(key: string, steamids: string) {
        return this.fetch("GET", "GetPlayerSummaries", 1, { key, steamids });
    }
    public GetPlayerSummaries2(key: string, steamids: string) {
        return this.fetch("GET", "GetPlayerSummaries", 2, { key, steamids });
    }
    public GetUserGroupList1(key: string, steamid: string) {
        return this.fetch("GET", "GetUserGroupList", 1, { key, steamid });
    }
    public ResolveVanityURL1(key: string, vanityurl: string, url_type: number) {
        return this.fetch("GET", "ResolveVanityURL", 1, { key, vanityurl, url_type });
    }
}
export class ISteamUserAuth extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamUserAuth", api);
    }
    public AuthenticateUser1(steamid: string, sessionkey: string, encrypted_loginkey: string) {
        return this.fetch("POST", "AuthenticateUser", 1, { steamid, sessionkey, encrypted_loginkey });
    }
    public AuthenticateUserTicket1(key: string, appid: number, ticket: string) {
        return this.fetch("GET", "AuthenticateUserTicket", 1, { key, appid, ticket });
    }
}
export class ISteamUserOAuth extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamUserOAuth", api);
    }
    public GetTokenDetails1(access_token: string) {
        return this.fetch("GET", "GetTokenDetails", 1, { access_token });
    }
}
export class ISteamUserStats extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamUserStats", api);
    }
    public GetGlobalAchievementPercentagesForApp1(gameid: string) {
        return this.fetch("GET", "GetGlobalAchievementPercentagesForApp", 1, { gameid });
    }
    public GetGlobalAchievementPercentagesForApp2(gameid: string) {
        return this.fetch("GET", "GetGlobalAchievementPercentagesForApp", 2, { gameid });
    }
    public GetGlobalStatsForGame1(appid: number, count: number, name0: string, startdate: number, enddate: number) {
        return this.fetch("GET", "GetGlobalStatsForGame", 1, { appid, count, name0, startdate, enddate });
    }
    public GetNumberOfCurrentPlayers1(appid: number) {
        return this.fetch("GET", "GetNumberOfCurrentPlayers", 1, { appid });
    }
    public GetPlayerAchievements1(key: string, steamid: string, appid: number, l: string) {
        return this.fetch("GET", "GetPlayerAchievements", 1, { key, steamid, appid, l });
    }
    public GetSchemaForGame1(key: string, appid: number, l: string) {
        return this.fetch("GET", "GetSchemaForGame", 1, { key, appid, l });
    }
    public GetSchemaForGame2(key: string, appid: number, l: string) {
        return this.fetch("GET", "GetSchemaForGame", 2, { key, appid, l });
    }
    public GetUserStatsForGame1(key: string, steamid: string, appid: number) {
        return this.fetch("GET", "GetUserStatsForGame", 1, { key, steamid, appid });
    }
    public GetUserStatsForGame2(key: string, steamid: string, appid: number) {
        return this.fetch("GET", "GetUserStatsForGame", 2, { key, steamid, appid });
    }
}
export class ISteamWebAPIUtil extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamWebAPIUtil", api);
    }
    public GetServerInfo1() {
        return this.fetch("GET", "GetServerInfo", 1, {});
    }
    public GetSupportedAPIList1(key: string) {
        return this.fetch("GET", "GetSupportedAPIList", 1, { key });
    }
}
export class ISteamWebUserPresenceOAuth extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamWebUserPresenceOAuth", api);
    }
    public PollStatus1(steamid: string, umqid: string, message: number, pollid: number, sectimeout: number, secidletime: number, use_accountids: number) {
        return this.fetch("POST", "PollStatus", 1, { steamid, umqid, message, pollid, sectimeout, secidletime, use_accountids });
    }
}
export class ITFItems_440 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ITFItems_440", api);
    }
    public GetGoldenWrenches1() {
        return this.fetch("GET", "GetGoldenWrenches", 1, {});
    }
    public GetGoldenWrenches2() {
        return this.fetch("GET", "GetGoldenWrenches", 2, {});
    }
}
export class ITFPromos_205790 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ITFPromos_205790", api);
    }
    public GetItemID1(steamid: string, promoid: number) {
        return this.fetch("GET", "GetItemID", 1, { steamid, promoid });
    }
    public GrantItem1(steamid: string, promoid: number) {
        return this.fetch("POST", "GrantItem", 1, { steamid, promoid });
    }
}
export class ITFPromos_440 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ITFPromos_440", api);
    }
    public GetItemID1(steamid: string, promoid: number) {
        return this.fetch("GET", "GetItemID", 1, { steamid, promoid });
    }
    public GrantItem1(steamid: string, promoid: number) {
        return this.fetch("POST", "GrantItem", 1, { steamid, promoid });
    }
}
export class ITFPromos_570 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ITFPromos_570", api);
    }
    public GetItemID1(steamid: string, promoid: number) {
        return this.fetch("GET", "GetItemID", 1, { steamid, promoid });
    }
    public GrantItem1(steamid: string, promoid: number) {
        return this.fetch("POST", "GrantItem", 1, { steamid, promoid });
    }
}
export class ITFPromos_620 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ITFPromos_620", api);
    }
    public GetItemID1(steamid: string, PromoID: number) {
        return this.fetch("GET", "GetItemID", 1, { steamid, PromoID });
    }
    public GrantItem1(steamid: string, PromoID: number) {
        return this.fetch("POST", "GrantItem", 1, { steamid, PromoID });
    }
}
export class ITFSystem_440 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ITFSystem_440", api);
    }
    public GetWorldStatus1() {
        return this.fetch("GET", "GetWorldStatus", 1, {});
    }
}
export class IGameServersService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGameServersService", api);
    }
    public GetAccountList1(key: string) {
        return this.fetch("GET", "GetAccountList", 1, { key });
    }
    public CreateAccount1(key: string, appid: number, memo: string) {
        return this.fetch("POST", "CreateAccount", 1, { key, appid, memo });
    }
    public SetMemo1(key: string, steamid: string, memo: string) {
        return this.fetch("POST", "SetMemo", 1, { key, steamid, memo });
    }
    public ResetLoginToken1(key: string, steamid: string) {
        return this.fetch("POST", "ResetLoginToken", 1, { key, steamid });
    }
    public DeleteAccount1(key: string, steamid: string) {
        return this.fetch("POST", "DeleteAccount", 1, { key, steamid });
    }
    public GetAccountPublicInfo1(key: string, steamid: string) {
        return this.fetch("GET", "GetAccountPublicInfo", 1, { key, steamid });
    }
    public QueryLoginToken1(key: string, login_token: string) {
        return this.fetch("GET", "QueryLoginToken", 1, { key, login_token });
    }
    public GetServerSteamIDsByIP1(key: string, server_ips: string) {
        return this.fetch("GET", "GetServerSteamIDsByIP", 1, { key, server_ips });
    }
    public GetServerIPsBySteamID1(key: string, server_steamids: string) {
        return this.fetch("GET", "GetServerIPsBySteamID", 1, { key, server_steamids });
    }
}
export class IContentServerConfigService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IContentServerConfigService", api);
    }
    public SetSteamCacheClientFilters1(key: string, cache_id: number, cache_key: string, change_notes: string, allowed_ip_blocks: string) {
        return this.fetch("POST", "SetSteamCacheClientFilters", 1, { key, cache_id, cache_key, change_notes, allowed_ip_blocks });
    }
    public GetSteamCacheNodeParams1(key: string, cache_id: number, cache_key: string) {
        return this.fetch("GET", "GetSteamCacheNodeParams", 1, { key, cache_id, cache_key });
    }
    public SetSteamCachePerformanceStats1(key: string, cache_id: number, cache_key: string, mbps_sent: number, mbps_recv: number, cpu_percent: number, cache_hit_percent: number) {
        return this.fetch("POST", "SetSteamCachePerformanceStats", 1, { key, cache_id, cache_key, mbps_sent, mbps_recv, cpu_percent, cache_hit_percent });
    }
}
export class IPublishedFileService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IPublishedFileService", api);
    }
    public QueryFiles1(key: string, query_type: number, page: number, numperpage: number, creator_appid: number, appid: number, requiredtags: string, excludedtags: string, match_all_tags: any, required_flags: string, omitted_flags: string, search_text: string, filetype: number, child_publishedfileid: string, days: number, include_recent_votes_only: any, cache_max_age_seconds: number, language: number, required_kv_tags: any, totalonly: any, ids_only: any, return_vote_data: any, return_tags: any, return_kv_tags: any, return_previews: any, return_children: any, return_short_description: any, return_for_sale_data: any, return_metadata: any, return_playtime_stats: number, return_details: any, strip_description_bbcode: any) {
        return this.fetch("GET", "QueryFiles", 1, { key, query_type, page, numperpage, creator_appid, appid, requiredtags, excludedtags, match_all_tags, required_flags, omitted_flags, search_text, filetype, child_publishedfileid, days, include_recent_votes_only, cache_max_age_seconds, language, required_kv_tags, totalonly, ids_only, return_vote_data, return_tags, return_kv_tags, return_previews, return_children, return_short_description, return_for_sale_data, return_metadata, return_playtime_stats, return_details, strip_description_bbcode });
    }
    public GetDetails1(key: string, publishedfileids: string, includetags: any, includeadditionalpreviews: any, includechildren: any, includekvtags: any, includevotes: any, short_description: any, includeforsaledata: any, includemetadata: any, language: number, return_playtime_stats: number, appid: number, strip_description_bbcode: any) {
        return this.fetch("GET", "GetDetails", 1, { key, publishedfileids, includetags, includeadditionalpreviews, includechildren, includekvtags, includevotes, short_description, includeforsaledata, includemetadata, language, return_playtime_stats, appid, strip_description_bbcode });
    }
    public GetUserFiles1(key: string, steamid: string, appid: number, page: number, numperpage: number, type: string, sortmethod: string, privacy: number, requiredtags: string, excludedtags: string, required_kv_tags: any, filetype: number, creator_appid: number, match_cloud_filename: string, cache_max_age_seconds: number, language: number, totalonly: any, ids_only: any, return_vote_data: any, return_tags: any, return_kv_tags: any, return_previews: any, return_children: any, return_short_description: any, return_for_sale_data: any, return_metadata: any, return_playtime_stats: number, strip_description_bbcode: any) {
        return this.fetch("GET", "GetUserFiles", 1, { key, steamid, appid, page, numperpage, type, sortmethod, privacy, requiredtags, excludedtags, required_kv_tags, filetype, creator_appid, match_cloud_filename, cache_max_age_seconds, language, totalonly, ids_only, return_vote_data, return_tags, return_kv_tags, return_previews, return_children, return_short_description, return_for_sale_data, return_metadata, return_playtime_stats, strip_description_bbcode });
    }
}
export class IEconService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IEconService", api);
    }
    public GetTradeHistory1(key: string, max_trades: number, start_after_time: number, start_after_tradeid: string, navigating_back: any, get_descriptions: any, language: string, include_failed: any, include_total: any) {
        return this.fetch("GET", "GetTradeHistory", 1, { key, max_trades, start_after_time, start_after_tradeid, navigating_back, get_descriptions, language, include_failed, include_total });
    }
    public GetTradeStatus1(key: string, tradeid: string, get_descriptions: any, language: string) {
        return this.fetch("GET", "GetTradeStatus", 1, { key, tradeid, get_descriptions, language });
    }
    public GetTradeOffers1(key: string, get_sent_offers: any, get_received_offers: any, get_descriptions: any, language: string, active_only: any, historical_only: any, time_historical_cutoff: number) {
        return this.fetch("GET", "GetTradeOffers", 1, { key, get_sent_offers, get_received_offers, get_descriptions, language, active_only, historical_only, time_historical_cutoff });
    }
    public GetTradeOffer1(key: string, tradeofferid: string, language: string, get_descriptions: any) {
        return this.fetch("GET", "GetTradeOffer", 1, { key, tradeofferid, language, get_descriptions });
    }
    public GetTradeOffersSummary1(key: string, time_last_visit: number) {
        return this.fetch("GET", "GetTradeOffersSummary", 1, { key, time_last_visit });
    }
    public DeclineTradeOffer1(key: string, tradeofferid: string) {
        return this.fetch("POST", "DeclineTradeOffer", 1, { key, tradeofferid });
    }
    public CancelTradeOffer1(key: string, tradeofferid: string) {
        return this.fetch("POST", "CancelTradeOffer", 1, { key, tradeofferid });
    }
    public GetTradeHoldDurations1(key: string, steamid_target: string, trade_offer_access_token: string) {
        return this.fetch("GET", "GetTradeHoldDurations", 1, { key, steamid_target, trade_offer_access_token });
    }
}
export class IPlayerService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IPlayerService", api);
    }
    public RecordOfflinePlaytime1(steamid: string, ticket: string, play_sessions: any) {
        return this.fetch("POST", "RecordOfflinePlaytime", 1, { steamid, ticket, play_sessions });
    }
    public GetRecentlyPlayedGames1(key: string, steamid: string, count: number) {
        return this.fetch("GET", "GetRecentlyPlayedGames", 1, { key, steamid, count });
    }
    public GetOwnedGames1(key: string, steamid: string, include_appinfo: any, include_played_free_games: any, appids_filter: number) {
        return this.fetch("GET", "GetOwnedGames", 1, { key, steamid, include_appinfo, include_played_free_games, appids_filter });
    }
    public GetSteamLevel1(key: string, steamid: string) {
        return this.fetch("GET", "GetSteamLevel", 1, { key, steamid });
    }
    public GetBadges1(key: string, steamid: string) {
        return this.fetch("GET", "GetBadges", 1, { key, steamid });
    }
    public GetCommunityBadgeProgress1(key: string, steamid: string, badgeid: number) {
        return this.fetch("GET", "GetCommunityBadgeProgress", 1, { key, steamid, badgeid });
    }
    public IsPlayingSharedGame1(key: string, steamid: string, appid_playing: number) {
        return this.fetch("GET", "IsPlayingSharedGame", 1, { key, steamid, appid_playing });
    }
}
export class IGameNotificationsService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGameNotificationsService", api);
    }
    public UserCreateSession1(appid: number, context: string, title: any, users: any, steamid: string) {
        return this.fetch("POST", "UserCreateSession", 1, { appid, context, title, users, steamid });
    }
    public UserUpdateSession1(sessionid: string, appid: number, title: any, users: any, steamid: string) {
        return this.fetch("POST", "UserUpdateSession", 1, { sessionid, appid, title, users, steamid });
    }
    public UserDeleteSession1(sessionid: string, appid: number, steamid: string) {
        return this.fetch("POST", "UserDeleteSession", 1, { sessionid, appid, steamid });
    }
}
export class IInventoryService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IInventoryService", api);
    }
    public SplitItemStack1(key: string, appid: number, itemid: string, quantity: number) {
        return this.fetch("POST", "SplitItemStack", 1, { key, appid, itemid, quantity });
    }
    public CombineItemStacks1(key: string, appid: number, fromitemid: string, destitemid: string, quantity: number) {
        return this.fetch("POST", "CombineItemStacks", 1, { key, appid, fromitemid, destitemid, quantity });
    }
    public GetPriceSheet1(key: string, ecurrency: number) {
        return this.fetch("GET", "GetPriceSheet", 1, { key, ecurrency });
    }
}
export class IStoreService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IStoreService", api);
    }
    public GetAppList1(key: string, if_modified_since: number, have_description_language: string, include_games: any, include_dlc: any, include_software: any, include_videos: any, include_hardware: any, last_appid: number, max_results: number) {
        return this.fetch("GET", "GetAppList", 1, { key, if_modified_since, have_description_language, include_games, include_dlc, include_software, include_videos, include_hardware, last_appid, max_results });
    }
}
export class ICheatReportingService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ICheatReportingService", api);
    }
    public ReportCheatData1(key: string, steamid: string, appid: number, pathandfilename: string, webcheaturl: string, time_now: string, time_started: string, time_stopped: string, cheatname: string, game_process_id: number, cheat_process_id: number, cheat_param_1: string, cheat_param_2: string) {
        return this.fetch("POST", "ReportCheatData", 1, { key, steamid, appid, pathandfilename, webcheaturl, time_now, time_started, time_stopped, cheatname, game_process_id, cheat_process_id, cheat_param_1, cheat_param_2 });
    }
}
export class IAccountRecoveryService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IAccountRecoveryService", api);
    }
    public ReportAccountRecoveryData1(loginuser_list: string, install_config: string, shasentryfile: string, machineid: string) {
        return this.fetch("POST", "ReportAccountRecoveryData", 1, { loginuser_list, install_config, shasentryfile, machineid });
    }
    public RetrieveAccountRecoveryData1(requesthandle: string) {
        return this.fetch("POST", "RetrieveAccountRecoveryData", 1, { requesthandle });
    }
}
