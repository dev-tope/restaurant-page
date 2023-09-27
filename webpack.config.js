const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: {
        bundle: path.resolve(__dirname, '/src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
      static: {
        directoy: path.resolve(__dirname, 'dist')
      },
      port: 8080,
      open: true,
      hot: true,
      compress: true,
      historyApiFallback: true,
    },
    resolve: {
      alias: {
        images: path.resolve(__dirname, 'src/assets')
      },
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Restaurant',
            filename: 'index.html',
            template: 'src/template.html',
        })
    ]
};