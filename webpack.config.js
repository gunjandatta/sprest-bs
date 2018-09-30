const path = require("path");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";

    // Return the configuration
    return {
        entry: [
            "./node_modules/gd-bs/dist/gd-bs" + (isDev ? "" : ".min") + ".js",
            "./node_modules/gd-sprest/dist/gd-sprest" + (isDev ? "" : ".min") + ".js",
            "./lib/jquery-ui-1.12.1.custom/jquery-ui" + (isDev ? "" : ".min") + ".js",
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
            "gd-bs": "GD",
            "gd-sprest": "$REST",
            "$": "GD.jQuery",
            "jquery": "GD.jQuery"
        },
        module: {
            rules: [
                {
                    test: /\.(s?css)$/,
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
                                presets: ["@babel/preset-env"]
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