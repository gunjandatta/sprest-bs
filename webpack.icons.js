const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

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
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
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