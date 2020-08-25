/* eslint-disable */
import { SteamApiBase } from "./steam-api-base";
import { SteamInterfaceBase } from "./steam-interface-base";
export class SteamApi extends SteamApiBase {
    public readonly IClientStats_1046930 = new IClientStats_1046930(this);
    public readonly IGCVersion_1046930 = new IGCVersion_1046930(this);
    public readonly IGCVersion_205790 = new IGCVersion_205790(this);
    public readonly IGCVersion_440 = new IGCVersion_440(this);
    public readonly IGCVersion_570 = new IGCVersion_570(this);
    public readonly IGCVersion_583950 = new IGCVersion_583950(this);
    public readonly IGCVersion_730 = new IGCVersion_730(this);
    public readonly IPortal2Leaderboards_620 = new IPortal2Leaderboards_620(this);
    public readonly ISteamApps = new ISteamApps(this);
    public readonly ISteamBroadcast = new ISteamBroadcast(this);
    public readonly ISteamDirectory = new ISteamDirectory(this);
    public readonly ISteamNews = new ISteamNews(this);
    public readonly ISteamRemoteStorage = new ISteamRemoteStorage(this);
    public readonly ISteamUserAuth = new ISteamUserAuth(this);
    public readonly ISteamUserOAuth = new ISteamUserOAuth(this);
    public readonly ISteamUserStats = new ISteamUserStats(this);
    public readonly ISteamWebAPIUtil = new ISteamWebAPIUtil(this);
    public readonly ISteamWebUserPresenceOAuth = new ISteamWebUserPresenceOAuth(this);
    public readonly ITFSystem_440 = new ITFSystem_440(this);
    public readonly IBroadcastService = new IBroadcastService(this);
    public readonly IContentServerDirectoryService = new IContentServerDirectoryService(this);
    public readonly IPublishedFileService = new IPublishedFileService(this);
    public readonly IPlayerService = new IPlayerService(this);
    public readonly IGameNotificationsService = new IGameNotificationsService(this);
}
export class IClientStats_1046930 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IClientStats_1046930", api);
    }
    public ReportEvent1() {
        return this.fetch("POST", "ReportEvent", 1, {});
    }
}
export class IGCVersion_1046930 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IGCVersion_1046930", api);
    }
    public GetClientVersion1() {
        return this.fetch("GET", "GetClientVersion", 1, {});
    }
    public GetServerVersion1() {
        return this.fetch("GET", "GetServerVersion", 1, {});
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
    public GetSDRConfig1(appid: number, partner: string) {
        return this.fetch("GET", "GetSDRConfig", 1, { appid, partner });
    }
    public GetServersAtAddress1(addr: string) {
        return this.fetch("GET", "GetServersAtAddress", 1, { addr });
    }
    public UpToDateCheck1(appid: number, version: number) {
        return this.fetch("GET", "UpToDateCheck", 1, { appid, version });
    }
}
export class ISteamBroadcast extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamBroadcast", api);
    }
    public ViewerHeartbeat1(steamid: string, sessionid: string, token: string, stream: number) {
        return this.fetch("GET", "ViewerHeartbeat", 1, { steamid, sessionid, token, stream });
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
    public GetSteamPipeDomains1() {
        return this.fetch("GET", "GetSteamPipeDomains", 1, {});
    }
}
export class ISteamNews extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamNews", api);
    }
    public GetNewsForApp1(appid: number, maxlength: number, enddate: number, count: number, tags: string) {
        return this.fetch("GET", "GetNewsForApp", 1, { appid, maxlength, enddate, count, tags });
    }
    public GetNewsForApp2(appid: number, maxlength: number, enddate: number, count: number, feeds: string, tags: string) {
        return this.fetch("GET", "GetNewsForApp", 2, { appid, maxlength, enddate, count, feeds, tags });
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
}
export class ISteamUserAuth extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ISteamUserAuth", api);
    }
    public AuthenticateUser1(steamid: string, sessionkey: string, encrypted_loginkey: string) {
        return this.fetch("POST", "AuthenticateUser", 1, { steamid, sessionkey, encrypted_loginkey });
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
export class ITFSystem_440 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("ITFSystem_440", api);
    }
    public GetWorldStatus1() {
        return this.fetch("GET", "GetWorldStatus", 1, {});
    }
}
export class IBroadcastService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IBroadcastService", api);
    }
    public PostGameDataFrameRTMP1(appid: number, steamid: string, rtmp_token: string, frame_data: string) {
        return this.fetch("POST", "PostGameDataFrameRTMP", 1, { appid, steamid, rtmp_token, frame_data });
    }
}
export class IContentServerDirectoryService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IContentServerDirectoryService", api);
    }
    public GetServersForSteamPipe1(cell_id: number, max_servers: number, ip_override: string, launcher_type: number) {
        return this.fetch("GET", "GetServersForSteamPipe", 1, { cell_id, max_servers, ip_override, launcher_type });
    }
    public GetClientUpdateHosts1(cached_signature: string) {
        return this.fetch("GET", "GetClientUpdateHosts", 1, { cached_signature });
    }
    public GetDepotPatchInfo1(appid: number, depotid: number, source_manifestid: string, target_manifestid: string) {
        return this.fetch("GET", "GetDepotPatchInfo", 1, { appid, depotid, source_manifestid, target_manifestid });
    }
}
export class IPublishedFileService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IPublishedFileService", api);
    }
    public GetUserVoteSummary1(publishedfileids: string) {
        return this.fetch("GET", "GetUserVoteSummary", 1, { publishedfileids });
    }
}
export class IPlayerService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IPlayerService", api);
    }
    public RecordOfflinePlaytime1(steamid: string, ticket: string, play_sessions: any) {
        return this.fetch("POST", "RecordOfflinePlaytime", 1, { steamid, ticket, play_sessions });
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
