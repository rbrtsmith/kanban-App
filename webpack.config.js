var path = require('path'),
	HtmlwebpackPlugin = require('html-webpack-plugin'),
	webpack = require('webpack'),
	ROOT_PATH = path.resolve(__dirname);

module.exports = {
	entry: path.resolve(ROOT_PATH, 'app/main'),
	output : {
		path: path.resolve(ROOT_PATH, 'build'),
		filename: 'bundle.js'
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