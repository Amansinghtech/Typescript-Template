const path = require('path')

module.exports = {
	name: 'devlopment',
	entry: './src/main.ts',
	devtool: 'inline-source-map',
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'server.js',
		path: path.resolve(__dirname, 'dist'),
	},
}
