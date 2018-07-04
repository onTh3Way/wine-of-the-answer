const baseConfig = require('./webpack.common')
const merge = require('webpack-merge')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const ManifestPlugin = require('inline-manifest-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = merge(baseConfig, {
	mode: 'production',
	devtool: 'source-map',
	output: {
		filename: '[name].[chunkhash].js',
		chunkFilename: '[name].[chunkhash].js'
	},
	plugins: [
		new OptimizeCssAssetsPlugin(),
		new MiniCssExtractPlugin({
			filename: '[name].css'
		}),
		new ManifestPlugin('manifest')
	],
	optimization: {
		runtimeChunk: {
			name: 'manifest'
		},
		minimize: true,
		minimizer: [
			new UglifyPlugin({
				parallel: true,
				sourceMap: true,
				uglifyOptions: {
					ecma: 5,
					warnings: false,
					output: {
						beautify: false
					},
					compress: {
						drop_console: true
					}
				}
			})
		],
		splitChunks: {
			cacheGroups: {
				style: {
					test: /\.less$/,
<<<<<<< HEAD
					chunks: 'all',
=======
					chunks: 'initial',
>>>>>>> origin/master
					name: 'styles'
				},
				vendor: {
					test: /node_modules/,
<<<<<<< HEAD
					chunks: 'all',
=======
					chunks: 'initial',
>>>>>>> origin/master
					name: 'vendor'
				}
			}
		}
	}
})
