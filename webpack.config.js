const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path:	path.resolve(__dirname, 'bundle'),
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/
			},
			{
				// Order matters
				// use: ['style-loader', 'css-loader'],
				loader: ExtractTextPlugin.extract({
					loader: 'css-loader'
				}),
				test: /\.css$/
			},
		]
	},
	plugins: [
		new ExtractTextPlugin('styles.css'),
	],
};

module.exports = config;