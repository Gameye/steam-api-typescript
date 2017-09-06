import "fetch";

export interface SteamApiConfig {
    ApiEndpoint: string;
    ApiKey: string;
}

export abstract class SteamApiBase {
    constructor(private config: SteamApiConfig) {

    }

    public async fetch(
        requestMethod: "GET" | "POST",
        interfaceName: string, methodName: string, version: number,
        body: any,
    ) {
        const { ApiEndpoint, ApiKey } = this.config;
        const url =
            `${ApiEndpoint}/${interfaceName}/${methodName}/v${version}?` +
            `format=json&key=${ApiKey}`;

        const result = await fetch(url, {
            method: requestMethod,
        });
        if (!result.ok) throw new Error(`unexpected status ${result.status}`);
        const data = await result.json();
        return data;
    }

}
