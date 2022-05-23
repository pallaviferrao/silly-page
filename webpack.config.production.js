const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
// const BundleAnalyzerPlugin =
//   require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  mode: "production",
  entry: {
    vendor: ["react", "react-dom", "semantic-ui-react"],
    app: {
      import: "/src/index.tsx",
      dependOn: "shared",
    },
    shared: "/src/components/CustomGame/Login.tsx",
  },
  output: {
    filename: "[name].bundle.js",
    // path: path.resolve(__dirname, "dist"),
    // publicPath: "/",
  },
  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    // alias: {
    //   "react-dom": "@hot-loader/react-dom",
    // },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|json|ts|tsx")$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
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
                compress: {
                  // This will transform your png/jpg into webp.
                  webp: true,
                  disableOnDevelopment: true,
                },
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
        chunks: "all",
        // vendor: {
        //   chunks: "initial",
        //   test: "vendor",
        //   name: "vendor",
        //   enforce: true,
        // },
      },
    },
    minimizer: [
      new CssMinimizerPlugin(),
      // new ImageMinimizerPlugin({
      //   minimizer: {
      //     implementation: ImageMinimizerPlugin.imageminMinify,
      //     options: {
      //       plugins: [
      //         ["gifsicle", { interlaced: true }],
      //         ["jpegtran", { progressive: true }],
      //         ["optipng", { optimizationLevel: 5 }],
      //       ],
      //     },
      //   },
      // }),
      new TerserPlugin(),
    ],
  },
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
    }),
    // new BundleAnalyzerPlugin(),
  ],
};
