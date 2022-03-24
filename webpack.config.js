const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const InterpolateHtmlPlugin = require('interpolate-html-plugin');

module.exports = {
  //Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'main.bundle.js'
  },
  //webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    watchContentBase: true
  },
  //Rules of how webpack will take our files, complie & bundle them for the browser
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react"
            ],
            plugins: [
              ["@babel/transform-runtime"]
            ]
          }
        },
      },
      {
        test: /\.(jpe?g|gif|png|ico)$/,
        use: ['file-loader?name=[name].[ext]']
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './public/index.html' }),
    new MiniCssExtractPlugin(),
    new InterpolateHtmlPlugin({ PUBLIC_URL: 'public' })
  ],
}