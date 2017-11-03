import "isomorphic-fetch";
import * as querystring from "querystring";

export interface SteamApiConfig {
    ApiEndpoint: string;
    ApiKey: string;
}

export abstract class SteamApiBase {
    private config: SteamApiConfig = {
        ApiEndpoint: "http://api.steampowered.com/",
        ApiKey: "",
    };

    constructor(config: Partial<SteamApiConfig>) {
        this.config = { ...this.config, ...config };
    }

    public async fetch(
        requestMethod: "GET" | "POST",
        interfaceName: string, methodName: string, version: number,
        body: any,
    ) {
        const { ApiEndpoint, ApiKey } = this.config;
        const query = {
            ...(requestMethod === "GET" ? body : {}),
            ...{ format: "json", key: ApiKey },
        };
        const url =
            `${ApiEndpoint}/${interfaceName}/${methodName}/v${version}?` +
            querystring.stringify(query);

        const req = {
            ...(requestMethod === "POST" ? {
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            } : {}),
            ...{ method: requestMethod },
        };
        const res = await fetch(url, req);
        if (!res.ok) throw new Error(`unexpected status ${res.status}`);
        const data = await res.json();
        return data;
    }

}
