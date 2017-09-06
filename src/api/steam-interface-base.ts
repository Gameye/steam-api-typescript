import "fetch";

import { SteamApiBase } from ".";

export abstract class SteamInterfaceBase {
    constructor(private interfaceName: string, private api: SteamApiBase) {
    }

    public async fetch(
        requestMethod: "GET" | "POST",
        methodName: string, version: number,
        body: any,
    ) {
        const { api, interfaceName } = this;
        return api.fetch(requestMethod, interfaceName, methodName, version, body);
    }

}
