// Assets Config file

const serverConfiguration = {
  internal: {
    server: {
      baseDir: "dist",
    },
    port: 3000,
  },
  external: {
    proxy: "http://localhost:9000/path/to/project/",
  },
};

const path = require("path");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const ImageMinPlugin = require("imagemin-webpack-plugin").default;
const FileIncludeWebpackPlugin = require("file-include-webpack-plugin");

let targetServerConfiguration = serverConfiguration.internal;

const config = function (env, args) {
  if (args.externalServer !== undefined && args.externalServer) {
    targetServerConfiguration = serverConfiguration.external;
  }

  return {
    entry: {
      app: "./src/js/app.js",
    },
    output: {
      filename: "js/[name].js",
      path: path.resolve(__dirname, "dist"),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            MiniCssExtractPlugin.loader,
            "css-loader",
            "postcss-loader",
            "sass-loader",
          ],
        },
        {
          test: /\.js$/,
          exclude: /(node_modules|bower_components)/,
          loader: "babel-loader",
        },
        {
          test: /\.(png|gif|jpg|jpeg)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "images/design/[name].[hash:6].[ext]",
                publicPath: "../",
                limit: 8192,
              },
            },
          ],
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: [
            {
              loader: "url-loader",
              options: {
                name: "fonts/[name].[hash:6].[ext]",
                publicPath: "../",
                limit: 8192,
              },
            },
          ],
        },
      ],
    },
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true,
        }),
        new OptimizeCssAssetsPlugin({}),
      ],
    },
    watchOptions: {
      poll: 1000,
      ignored: /node_modules/,
    },
    plugins: [
      new BrowserSyncPlugin({
        ...targetServerConfiguration,
        files: ["src/*"],
        ghostMode: {
          clicks: false,
          location: false,
          forms: false,
          scroll: false,
        },
        injectChanges: true,
        logFileChanges: true,
        logLevel: "debug",
        logPrefix: "wepback",
        notify: true,
        reloadDelay: 0,
      }),
      new FileIncludeWebpackPlugin({
        source: "./src", // relative path to your templates
        replace: [
          {
            regex: /\[\[FILE_VERSION]]/, // additional things to replace
            to: "v=1.0.0",
          },
        ],
      }),
      new HtmlWebpackPlugin({
        inject: true,
        hash: false,
        filename: "index.html",
        template: path.resolve(__dirname, "src", "index.html"),
        favicon: path.resolve(__dirname, "src", "favicon.ico"),
      }),
      new HtmlWebpackPlugin({
        filename: 'pick-three-things/index.html',
        template: path.resolve(__dirname, 'src', 'pick-three-things/index.html'),
      }),
      new HtmlWebpackPlugin({
        filename: 'recipes-featuring/index.html',
        template: path.resolve(__dirname, 'src', 'recipes-featuring/index.html'),
      }),
      new HtmlWebpackPlugin({
        filename: 'themes/index.html',
        template: path.resolve(__dirname, 'src', 'themes/index.html'),
      }),
      new HtmlWebpackPlugin({
        filename: 'account/index.html',
        template: path.resolve(__dirname, 'src', 'account/index.html'),
      }),
      new HtmlWebpackPlugin({
        filename: 'account/add-recipe/index.html',
        template: path.resolve(__dirname, 'src', 'account/add-recipe/index.html'),
      }),
      new MiniCssExtractPlugin({
        filename: "css/[name].css",
      }),
      new ImageMinPlugin({ test: /\.(jpg|jpeg|png|gif|svg)$/i }),
      new CleanWebpackPlugin({
        /**
         * Some plugins used do not correctly save to webpack's asset list.
         * Disable automatic asset cleaning until resolved
         */
        cleanStaleWebpackAssets: false,
        verbose: true,
      }),
      new CopyWebpackPlugin([
        {
          from: path.resolve(__dirname, 'src','robots.txt'),
          to: path.resolve(__dirname, 'dist','robots.txt'),
          toType: 'file',
        },
        {
          from: path.resolve(__dirname, 'src','sitemap.xml'),
          to: path.resolve(__dirname, 'dist','sitemap.xml'),
          toType: 'file',
        },
        {
          from: path.resolve(__dirname, 'src','browserconfig.xml'),
          to: path.resolve(__dirname, 'dist','browserconfig.xml'),
          toType: 'file',
        },
        {
          from: path.resolve(__dirname, 'src', 'site.webmanifest'),
          to: path.resolve(__dirname, 'dist', 'site.webmanifest'),
          toType: 'file',
        },
        {
          from: path.resolve(__dirname, "src", "img", "content"),
          to: path.resolve(__dirname, "dist", "img", "content"),
          toType: "dir",
        },
        // Looks like each time a new folder is added inside img, a new rule will need to be added here.
        {
          from: path.resolve(__dirname, "src", "img", "favicon"),
          to: path.resolve(__dirname, "dist", "img", "favicon"),
          toType: "dir",
        },
        {
          from: path.resolve(__dirname, "src", "img", "include"),
          to: path.resolve(__dirname, "dist", "img", "include"),
          toType: "dir",
        },
        {
          from: path.resolve(__dirname, "src", "img", "og"),
          to: path.resolve(__dirname, "dist", "img", "og"),
          toType: "dir",
        },
        {
          from: path.resolve(__dirname, "src", "img", "recipes"),
          to: path.resolve(__dirname, "dist", "img", "recipes"),
          toType: "dir",
        },
        {
          from: path.resolve(__dirname, "src", "img", "ingredients"),
          to: path.resolve(__dirname, "dist", "img", "ingredients"),
          toType: "dir",
        },
        {
          from: path.resolve(__dirname, "src", "img", "themes"),
          to: path.resolve(__dirname, "dist", "img", "themes"),
          toType: "dir",
        },
        {
          from: path.resolve(__dirname, "src", "img", "users"),
          to: path.resolve(__dirname, "dist", "img", "users"),
          toType: "dir",
        },
      ]),
    ],
  };
};

module.exports = config;
