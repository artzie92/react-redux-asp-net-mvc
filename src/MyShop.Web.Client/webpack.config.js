const path = require('path');

module.exports = {
    entry: {
        products: './apps/products',
        footer: './apps/footer',
    },
    output: {
        path: path.resolve(__dirname, '../MyShop.Web/wwwroot/scripts'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
        ],
    },
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.jsx', '.js'],
    },
};
