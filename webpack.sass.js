const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = (env, argv) => {
    // Return the configuration
    return {
        entry: "./src/styles/index.scss",
        output: {
            path: path.resolve(__dirname, "build"),
            filename: "styles.js"
        },
        target: ["web", "es5"],
        resolve: {
            extensions: [".scss"]
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin()]
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
                }
            ]
        }
    };
}