const path = require("path");
const UglifyJsPlugin = require ("uglifyjs-webpack-plugin");

module.exports = (env, argv) => {
    var isDev = argv.mode === "development";
    var includeIcons = argv.icons === "true";

    // Return the configuration
    let cfg = {
        entry: [
            "./node_modules/gd-bs/dist/gd-bs" + (includeIcons ? "-icons" : "") + (isDev ? "" : ".min") + ".js",
            //"./node_modules/gd-sprest/dist/gd-sprest" + (isDev ? "" : ".min") + ".js",
            "../sprest/dist/gd-sprest" + (isDev ? "" : ".min") + ".js",
            "./lib/jquery-ui-1.12.1.custom/jquery-ui" + (isDev ? "" : ".min") + ".js",
            "./src/index" + (includeIcons ? "-icons" : "") + ".ts"
        ],
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-sprest-bs" + (includeIcons ? "-icons" : "") + (isDev ? "" : ".min") + ".js"
        },
        externals: {
            "gd-bs": "GD",
            "gd-sprest": "$REST",
            "$": "GD.jQuery",
            "jquery": "GD.jQuery"
        },
        resolve: {
            extensions: [".scss", ".css", ".ts", ".js"]
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

    // Minify the production output
    if (!isDev) {
        cfg.optimization = {
            minimizer: [new UglifyJsPlugin()]
        };
    }

    // Return the configuration
    return cfg;
}