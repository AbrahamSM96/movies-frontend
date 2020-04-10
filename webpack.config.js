const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest');
const WorkboxWebpackPlugin = require('workbox-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.html',
    }),
    new WebpackPwaManifestPlugin({
      name: 'MovieMon | App Movies',
      short_name: 'MovieMon🍿',
      description: 'App for search and create lists for add movies',
      background_color: '#323232',
      theme_color: '#323232',
      icons: [
        {
          src: path.resolve('src/assets/icon.png'),
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
    new WorkboxWebpackPlugin.GenerateSW({
      runtimeCaching: [
        {
          urlPattern: new RegExp(
            'https://movie-apollo-ql.herokuapp.com/graphql'
          ),
          handler: 'CacheFirst',
          options: {
            cacheName: 'images',
          },
        },
      ],
      maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.(png|svg|gif|jpg|jp(e*)g)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 100000,
            name: 'images/[hash]-[name].[ext]',
          },
        },
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
