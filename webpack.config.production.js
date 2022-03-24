const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = {
  mode: "production",
  entry: {
    vendor: ["semantic-ui-react"],
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
          //   {
          //     loader: "file-loader",
          //     options: {
          //       name: "[name].[ext]",
          //       outputPath: "assets/images/",
          //     },
          //   },
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
  devtool: "source-map",
  optimization: {
    splitChunks: {
      cacheGroups: {
        styles: {
          name: "styles",
          test: /\.css$/,
          chunks: "all",
          enforce: true,
        },
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor",
          enforce: true,
        },
      },
    },
    minimizer: [
      new ImageMinimizerPlugin({
        minimizer: {
          implementation: ImageMinimizerPlugin.imageminMinify,
          options: {
            plugins: [
              ["gifsicle", { interlaced: true }],
              ["jpegtran", { progressive: true }],
              ["optipng", { optimizationLevel: 5 }],
            ],
          },
        },
      }),
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
  ],
};
