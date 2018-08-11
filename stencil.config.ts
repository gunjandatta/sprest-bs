import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
    globalStyle: "src/styles.scss",
    namespace: "gd-bs",
    outputTargets: [
        {
            type: "dist"
        }
    ],
    plugins: [
        sass()
    ]
}