const {merge} = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: '/',
            disableDotRule: true,
        },
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                homePage: 'homePage@http://localhost:8081/remoteEntry.js',
                booking: 'booking@http://localhost:8082/remoteEntry.js'
            },
            shared: ['react', 'react-dom']
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        })
    ]
}

module.exports = merge(commonConfig, devConfig);

