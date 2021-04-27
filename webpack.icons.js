const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    var cfg = {
        entry: [
            "./build/index-icons.js"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-sprest-bs-icons" + (isDev ? "" : ".min") + ".js"
        },
        target: ["web", "es5"],
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