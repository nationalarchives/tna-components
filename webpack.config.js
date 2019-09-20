const path = require('path');

const discovery_version = `1.1.8`;
const website_version = `1.0.0`;

module.exports = {
	entry: {
		[`discovery-${discovery_version}`]: './src/discovery.js',
		[`website-${website_version}`]: './src/website.js'
	},
	mode: 'production',
	output: {
		filename: '[name].js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							{
								plugins: ['@babel/plugin-proposal-class-properties']
							}
						]
					}
				}
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader', // creates style nodes from JS strings
					'css-loader', // translates CSS into CommonJS
					'sass-loader' // compiles Sass to CSS, using Node Sass by default
				]
			}
		]
	}
};
