const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path:	path.resolve(__dirname, 'bundle'),
		filename: 'bundle.js',
		publicPath: 'bundle/',
	},
	module: {
		rules: [
			{
				loader: 'babel-loader',
				test: /\.js$/
			},
			{
				// Order matters right to left
				// use: ['style-loader', 'css-loader'],
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
			{
				// url-loader does 2 different behaviors.
				use: [
					{
						loader: 'url-loader',
						// 40 KB.
						options: { limit: 40000 }
					},
					'image-webpack-loader'
				],
				test: /\.(jpe?g|png|gif|svg)$/
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	],
};

module.exports = config;