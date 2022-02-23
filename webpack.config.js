const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const path = require('path')
const glob = require('glob')

// this is like setting baseUrl in tsconfig.json to './src'
const alias = glob.sync('./src/*').reduce((a, name) => {
	const paths = name.split('/')
	const pathWithoutExtension = paths[paths.length - 1].split('.')[0]
	a[pathWithoutExtension] = path.join(__dirname, name)
	return a
}, {})

module.exports = {
	entry: './src/index.tsx',
	devtool: 'source-map',
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*'
		}
	},
	stats: {
		all: false,
		errors: true,
		warnings: true,
		builtAt: true
	},
	resolve: {
		alias,
		extensions: ['.ts', '.tsx', '.js']
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader', 'postcss-loader']
			},
			{
				test: /\.(jpg|png|svg)$/,
				use: [
					{
						loader: 'url-loader',
						options: { name: 'img/[hash]-[name].[ext]' }
					}
				],
				exclude: /node_modules/
			}
		]
	},
	plugins: [new HtmlWebPackPlugin({ template: './src/index.html' }), new MiniCssExtractPlugin({ filename: '[name].css' })]
}
