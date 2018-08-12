const path = require("path");
const webpack = require("webpack");

module.exports = (env, argv) => {
    return {
        entry: "./src/index.ts",
        output: {
            path: path.resolve(__dirname, "dist"),
            filename: "gd-bs.js"
        },
        resolve: {
            extensions: [".scss", ".css", ".ts", ".js"]
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
                        // Loader for webpack to process CSS with PostCSS
                        {
                            loader: "postcss-loader",
                            options: {
                                plugins: function () {
                                    return [
                                        require("autoprefixer")
                                    ]
                                }
                            }
                        },
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