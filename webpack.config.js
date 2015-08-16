var path = require('path'),
	HtmlwebpackPlugin = require('html-webpack-plugin'),
	webpack = require('webpack'),
	merge = require('webpack-merge'),
	TARGET = process.env.TARGET,
	ROOT_PATH = path.resolve(__dirname),
	common;

common = {
	entry: path.resolve(ROOT_PATH, 'app/main'),
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	output : {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.css$/,
				loaders: ['style', 'css'],
				includes: path.resolve(ROOT_PATH, 'app')
			}
		]
	},
	devserver: {
		colors: true,
		historyApiFallback: true,
		hot: true,
		inline: true,
		progress: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		new HtmlwebpackPlugin({
			title: 'Kanban app'
		})
	]
};

if(TARGET === 'dev') {
    module.exports = merge(common, {
        devtool: 'eval',
        module: {
            loaders: [
                {
                    test: /\.jsx?$/,
                    loaders: ['react-hot', 'babel?stage=1'],
                    include: path.resolve(ROOT_PATH, 'app')
                }
            ]
        }
    });
}