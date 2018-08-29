import { Config } from "@stencil/core";

export const config: Config = {
    globalScript: "../dist/gd-sprest-bs.js",
    namespace: "gd-sprest-bs",
    outputTargets: [
        {
            type: "dist"
        }
    ]
}