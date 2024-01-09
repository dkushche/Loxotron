const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  devServer: {
    static: path.join(__dirname, 'build'),
    port: 3000,
    historyApiFallback: true,
    allowedHosts: "all"
  },
  module: {
    rules: [
      {
        test: /\.bundle\.ts$/,
        use: {
          loader: 'bundle-loader',
          options: {
            name: '[name]',
          },
        },
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|gif|jpg|ico)$/,
        use: 'file-loader',
      },
      {
        test: /\.(ttf|eot|woff|woff2)$/,
        loader: 'file-loader',
      },
      {
        test: /\.svg$/i,
        issuer: /\.[jt]sx?$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
    ],
  },
  /* Attempt to resolve these extensions in order.
       If multiple files share the same name but have
       different extensions, webpack will resolve the
       one with the extension listed first in the
       array and skip the rest.
     */
  resolve: {
    alias: {
      assets: path.resolve(__dirname, 'src/assets/'),
      components: path.resolve(__dirname, 'src/components/'),
    },
    extensions: ['.tsx', '.ts', '.js'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
    }),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, 'build'),
  },
};
