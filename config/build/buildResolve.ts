import { ResolveOptions } from "webpack"

export function buildresolve(): ResolveOptions {
    return {
        extensions: [".tsx", ".ts", ".js"]
    }
}
