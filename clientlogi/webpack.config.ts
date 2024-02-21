import path from 'path';
import webpack from 'webpack';
// in case you run into any typescript error when configuring `devServer`
import 'webpack-dev-server';

const config: webpack.Configuration = {
  mode: 'production',
  resolve: {
    extensions: ['.ts', '.tsx'],
  },
  // module: {
  //   rules: [
  //     // all files with a `.ts`, `.cts`, `.mts` or `.tsx` extension will be handled by `ts-loader`
  //     { 
  //       test: /\.([cm]?ts|tsx)$/, 
  //       exclude: /node_modules/,
  //       use: [
  //         {
  //           loader: 'babel-loader',
  //           options: {
  //             presets: ['solid'],
  //           },
  //         },
  //         {
  //           loader: 'ts-loader',
  //         },
  //      ]
  //     }
  //   ]
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        include: path.join(__dirname, 'src/components'),
        use: [
          'style-loader',
          {
            loader: 'typings-for-css-modules-loader',
            options: {
              modules: true,
              namedExport: true
            }
          }
        ]
      }
    ]
  },
  // entry: './src',
  // output: {
  //   path: path.resolve(__dirname, '.next'),
  //   filename: '.next',
  // },
};

export default config;