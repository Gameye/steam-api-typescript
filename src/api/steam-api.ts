// tslint:disable:max-line-length
// tslint:disable:variable-name
import { SteamApiBase } from "./steam-api-base";
import { SteamInterfaceBase } from "./steam-interface-base";
export class SteamApi extends SteamApiBase {
    public readonly IGCVersion_205790 = new IGCVersion_205790(this);
    public readonly IGCVersion_440 = new IGCVersion_440(this);
    public readonly IGCVersion_570 = new IGCVersion_570(this);
    public readonly IGCVersion_730 = new IGCVersion_730(this);
    public readonly IPortal2Leaderboards_620 = new IPortal2Leaderboards_620(this);
    public readonly IPortal2Leaderboards_841 = new IPortal2Leaderboards_841(this);
    public readonly ISteamApps = new ISteamApps(this);
    public readonly ISteamDirectory = new ISteamDirectory(this);
    public readonly ISteamEnvoy = new ISteamEnvoy(this);
    public readonly ISteamNews = new ISteamNews(this);
    public readonly ISteamRemoteStorage = new ISteamRemoteStorage(this);
    public readonly ISteamUserAuth = new ISteamUserAuth(this);
    public readonly ISteamUserOAuth = new ISteamUserOAuth(this);
    public readonly ISteamUserStats = new ISteamUserStats(this);
    public readonly ISteamWebAPIUtil = new ISteamWebAPIUtil(this);
    public readonly ISteamWebUserPresenceOAuth = new ISteamWebUserPresenceOAuth(this);
    public readonly ITFSystem_440 = new ITFSystem_440(this);
    public readonly IPlayerService = new IPlayerService(this);
    public readonly IAccountRecoveryService = new IAccountRecoveryService(this);
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
export class IPortal2Leaderboards_841 extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IPortal2Leaderboards_841", api);
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
export class IPlayerService extends SteamInterfaceBase {
    constructor(api: SteamApi) {
        super("IPlayerService", api);
    }
    public RecordOfflinePlaytime1(steamid: string, ticket: string, play_sessions: any) {
        return this.fetch("POST", "RecordOfflinePlaytime", 1, { steamid, ticket, play_sessions });
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
