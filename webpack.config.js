const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    return {
        entry: [
            "./node_modules/gd-bs/dist/gd-bs.min.js",
            "./node_modules/gd-sprest/dist/gd-sprest.min.js",
            "./src/index.ts"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-sprest-bs" + (isDev ? "" : ".min") + ".js"
        },
        resolve: {
            extensions: [".scss", ".css", ".ts", ".js"]
        },
        externals: {
            "gd-bs": "$REST",
            "gd-sprest": "$REST"
        },
        module: {
            rules: [
                {
                    test: /\.(scss)$/,
                    use: [
                        // Inject CSS to the page
                        { loader: "style-loader" },
                        // Translate CSS to CommonJS
                        { loader: "css-loader" },
                        // Compile SASS to CSS
                        { loader: "sass-loader" }
                    ]
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: "babel-loader",
                            options: {
                                presets: ["env"]
                            }
                        },
                        {
                            loader: "ts-loader"
                        }
                    ]
                }
            ]
        }
    };
}