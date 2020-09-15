const path = require('path');

module.exports = (env, argv) => ({
	entry: './src/scripts/index.ts',
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: 'ts-loader',
				exclude: /node_modules/
			}
		]
	},
	resolve: {
		extensions: ['.ts']
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, argv.mode === 'development' ? 'out/dev' : 'out/prod')
	}
});