import webpack from "webpack";
import webpackPaths from "./webpack.paths";
import {dependencies as externals} from "../../release/app/package.json";

const configuration: webpack.Configuration = {
  externals: [...Object.keys(externals || {})],

  stats: "errors-only",

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
          options: {
            transpileOnly: true,
            compilerOptions: {
              module: "esnext",
            },
          },
        },
      },
    ],
  },

  output: {
    path: webpackPaths.srcPath,
    library: {
      type: "commonjs2",
    },
  },

  resolve: {
    extensions: [".js", ".jsx", ".json", ".ts", ".tsx"],
    modules: [webpackPaths.srcPath, "node_modules"],
  },

  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: "production",
    }),
  ],
};

export default configuration;
