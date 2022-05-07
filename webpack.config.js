const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const port = process.env.PORT || 3000;
module.exports = {
  entry: {
    vendor: ["react", "react-dom", "semantic-ui-react"],
    app: "/src/index.tsx",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
    // extensions: [".ts", ".tsx", ".js"],
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    alias: {
      "react-dom": "@hot-loader/react-dom",
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      { test: /\.(ts|tsx)$/, exclude: /node_modules/, loader: "ts-loader" },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            loader: "img-optimize-loader",
            options: {
              compress: {
                // This will take more time and get smaller images.
                mode: "high", // 'lossless', 'low'
                // disableOnDevelopment: true,
              },
            },
          },
        ],
      },
      {
        test: /\.(pdf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
            },
          },
        ],
      },
      {
        test: /\.html$/,
        use: ["html-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    host: "localhost",
    port: port,
    hot: true,
    historyApiFallback: true,
    open: true,
  },
};
