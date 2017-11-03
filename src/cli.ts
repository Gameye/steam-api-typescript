#!/usr/bin/env node

import { SteamApi } from "./main";

main(process.argv.slice(2));

async function main(args: string[]) {
    // tslint:disable:no-console

    if (args.length < 2) {
        console.log(`
usage: steam-api <ServiceName> <MethodName> <...MethodArg>
`.trim());
        process.exit(1);
    }

    const [serviceName, methodName, ...methodArgs] = args;
    const { env } = process;

    const api = new SteamApi({
        ApiEndpoint: env.STEAM_API_ENDPOINT || "http://api.steampowered.com",
        ApiKey: env.STEAM_API_KEY,
    }) as any;

    if (!(serviceName in api)) {
        console.log(`Unknown service '${serviceName}'`);
        process.exit(1);
    }
    const apiService = api[serviceName] as any;

    if (!(methodName in apiService)) {
        console.log(`unknown method '${methodName}' for service '${serviceName}'`);
        process.exit(1);
    }
    const apiMethod = apiService[methodName] as (...args: any[]) => Promise<any>;

    const result = await apiMethod.apply(apiService, methodArgs);

    console.log(JSON.stringify(result));
}
