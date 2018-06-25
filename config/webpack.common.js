const path = require('path')
const rootPath = process.cwd()
const srcPath = path.join(rootPath, './src')
const distPath = path.join(rootPath, './dist')
const devMode = process.env.NODE_ENV === 'development'
const {VueLoaderPlugin} = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const ProgressBarPlugin = require('progress-bar-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const StyleLintPlugin = require('stylelint-webpack-plugin')
const chalk = require('chalk')

module.exports = {
	// 上下文路径
	context: srcPath,
	// entry point
	entry: './main.js',
	// 输出路径
	output: {
		path: distPath,
		publicPath: '/'
	},
	resolve: {
		// 后缀自动补全
		extensions: ['.vue', '.js', '.less', '.json', '.html'],
		// 文件夹别名
		alias: {
			'@': '.',
			components: './components',
			assets: './assets'
		},
		// 模块寻找路径
		modules: [
			path.resolve(rootPath, 'src'),
			path.resolve(rootPath, 'node_modules')
		]
	},
	module: {
		// 解析器
		rules: [
			// vue解析
			{
				test: /\.vue$/,
				include: path.join(process.cwd(), 'src'),
				exclude: /node_modules/,
				use: ['cache-loader', 'vue-loader']
			},
			// 文件解析
			{
				test: /\.(png|jpg|jpeg|gif|ico|svg)$/,
				include: path.join(process.cwd(), 'src'),
				exclude: /node_modules/,
				use: [
					'cache-loader',
					{
						loader: 'url-loader',
						options: {limit: 4092}
					}
				]
			},
			// css解析
			{
				test: /\.less$/,
				include: path.join(process.cwd(), 'src'),
				exclude: /node_modules/,
				use: [
					'cache-loader',
					devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
					{
						loader: 'css-loader',
						options: {
							importLoaders: 2,
							modules: true,
							sourceMap: true
						}
					},
					{
						loader: 'postcss-loader',
						options: {
							plugins: () => {
								const plugins = []
								if (!devMode) {
									plugins.push(require('autoprefixer'))
								}
								return plugins
							},
							sourceMap: true
						}
					},
					{
						loader: 'less-loader',
						options: {
							sourceMap: true
						}
					},
					{
						loader: 'style-resources-loader',
						options: {
							patterns: [
								path.join(process.cwd(), './src/less/index.less')
							],
							sourceMap: true
						}
					}]
			},
			// eslint检查
			{
				test: /\.(js|vue)$/,
				include: path.join(process.cwd(), 'src'),
				exclude: /node_modules/,
				enforce: 'pre',
				use: [
					'cache-loader',
					{
						loader: 'eslint-loader',
						options: {
							fix: true,
							configFile: path.join(__dirname, 'lint/eslint.json')
						}
					}
				]
			},
			// babel转换
			{
				test: /\.js$/,
				include: path.join(process.cwd(), 'src'),
				exclude: /node_modules/,
				use: [
					'cache-loader',
					{
						loader: 'babel-loader',
						options: {
							presets: [['@babel/preset-env', {
								loose: true,
								modules: false
							}]],
							plugins: [
								'lodash',
								['@babel/plugin-proposal-decorators', {legacy: true}],
								['@babel/plugin-proposal-class-properties', {loose: true}],
								'@babel/plugin-syntax-dynamic-import'
							],
							comments: devMode,
							compact: !devMode,
							babelrc: false
						}
					}
				]
			}
		]
	},
	plugins: [
		// vue-loader所需插件,主要通过此插件来解析vue中不同的语言块
		// 如script标签会被loader中所有匹配js的加载器处理
		new VueLoaderPlugin(),
		// 样式规范检测器
		new StyleLintPlugin({
			configFile: path.join(__dirname, 'lint/stylelint.json'),
			context: path.join(process.cwd(), 'src'),
			files: '**/*.(less|vue)',
			fix: true
		}),
		// 进度条美化插件
		new ProgressBarPlugin({
			format: `构建中 [:bar] 已完成百分之${chalk.green.bold(':percent')} (:elapsed)秒`
		}),
		// 自动生成html,
		new HtmlPlugin({
			filename: path.join(rootPath, './dist/index.html'),
			template: path.join(rootPath, './src/index.html'),
			favicon: path.join(rootPath, './src/assets/favicon.ico'),
			minify: !devMode,
			title: 'Web App'
		})
	]
}