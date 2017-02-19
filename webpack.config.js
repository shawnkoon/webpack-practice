const path = require('path');

const config = {
	entry: './src/index.js',
	output: {
		path:	path.resolve(__dirname, 'bundle'),
		filename: 'bundle.js',
	},
};

module.exports = config;