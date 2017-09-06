import * as fs from "fs";
import * as path from "path";
import { buildApi } from "./builders";

main();

function main() {
    const apiDescriptor = JSON.parse(fs.readFileSync(path.resolve(__dirname, "builders", "steam-api.json"), "utf8"));
    const apiSource = buildApi(apiDescriptor);
    fs.writeFileSync(path.resolve(__dirname, "api", "steam-api.ts"), apiSource);
}
