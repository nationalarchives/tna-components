const path = require('path');

const discovery_version = `1.2.1`;
const website_version = `1.1.1`;

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
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				issuer: {
					test: /\.jsx?$/
				},
				use: ['babel-loader', '@svgr/webpack', 'url-loader'],
			},
			{
				test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
				loader: 'url-loader',
				options: {
					esModule: false,
				}
			}
		]
	}
};
