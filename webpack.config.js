const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    var cfg = {
        entry: [
            "./node_modules/gd-sprest/dist/gd-sprest" + (isDev ? "" : ".min") + ".js",
            "./build/index.js"
        ],
        externals: {
            "gd-sprest": "$REST"
        },
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-sprest-bs" + (isDev ? "" : ".min") + ".js"
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
                },
                {
                    test: /\.svg$/,
                    use: [{
                        loader: 'html-loader',
                        options: {
                            minimize: true
                        }
                    }]
                }

            ]
        }
    };

    // Return the configuration
    return cfg;
}