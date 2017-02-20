const path = require('path');

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
				use: ['style-loader', 'css-loader'],
				test: /\.css$/
			},
		]
	}
};

module.exports = config;