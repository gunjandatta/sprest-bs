const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    var cfg = {
        entry: [
            "./node_modules/gd-bs/dist/gd-bs-icons" + (isDev ? "" : ".min") + ".js",
            "./node_modules/gd-sprest/dist/gd-sprest" + (isDev ? "" : ".min") + ".js",
            "./build/index.js"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-sprest-bs" + (isDev ? "" : ".min") + ".js"
        },
        externals: {
            "gd-bs": "$REST",
            "gd-sprest": "$REST"
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["@babel/preset-env"]
                            }
                        }
                    ]
                }
            ]
        }
    };

    // Return the configuration
    return cfg;
}