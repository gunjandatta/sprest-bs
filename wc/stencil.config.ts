import { Config } from "@stencil/core";

export const config: Config = {
    globalScript: "../dist/gd-sprest-bs-icons.js",
    namespace: "gd-sprest-bs",
    outputTargets: [
        {
            type: "dist"
        }
    ]
}