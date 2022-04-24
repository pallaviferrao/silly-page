const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const port = process.env.PORT || 3000;
module.exports = {
  entry: {
    vendor: ["react", "react-dom", "semantic-ui-react"],
    app: "/src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    publicPath: "/",
  },
  resolve: {
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
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //   {
      //     test: /\.(jpg|png)$/,
      //     use: {
      //       loader: "url-loader",
      //     },
      //   },
      {
        test: /\.(gif|png|jpe?g)$/,
        use: [
          {
            // loader: "file-loader",
            // options: {
            //   name: "[name].[ext]",
            //   outputPath: "assets/images/",
            // },
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
        test: /\.html$/,
        use: ["html-loader"],
      },
      //   {
      //     test: /\.css$/,
      //     use: [
      //       {
      //         loader: "style-loader",
      //       },
      //       {
      //         loader: "css-loader",
      //         options: {
      //           modules: true,
      //           localsConvention: "camelCase",
      //           sourceMap: true,
      //         },
      //       },
      //     ],
      //   },
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
