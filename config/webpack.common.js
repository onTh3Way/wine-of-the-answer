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
    extensions: ['.vue', '.js', '.less', '.png', '.jpg', 'gif', 'jpeg', '.json', '.html'],
    // 文件夹别名
    alias: {
      '@': path.resolve(srcPath),
      assets: path.resolve(srcPath, 'assets'),
      components: path.resolve(srcPath, 'components'),
      containers: path.resolve(srcPath, 'containers'),
      less: path.resolve(srcPath, 'less'),
      router: path.resolve(srcPath, 'router'),
      service: path.resolve(srcPath, 'service'),
      utils: path.resolve(srcPath, 'utils')
    },
    // 模块寻找路径
    modules: [
      './',
      'node_modules'
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
        use: ['cache-loader', {
          loader: 'vue-loader',
          options: {
            compilerOptions: {
              preserveWhitespace: false
            }
          }
        }]
      },
      // 文件解析
      {
        test: /\.(png|jpe?g|gif|ico|svg)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {limit: 4092}
          },
          {
            loader: 'image-webpack-loader',
            options: {
              disable: devMode,
              mozjpeg: {
                quality: 70
              },
              optipng: {
                enabled: false
              },
              pngquant: {
                quality: '70-70'
              },
              webp: {
                quality: 70
              }
            }
          }
        ]
      },
      // css解析
      // 不能使用cache-loader,会导致构建的hash与文件hash对应不上
      {
        test: /\.(less|css)$/,
        include: path.join(process.cwd(), 'src'),
        exclude: /node_modules/,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 3,
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
                '@babel/plugin-syntax-dynamic-import',
                'transform-vue-jsx'
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
      template: path.join(srcPath, 'index.html'),
      favicon: path.join(srcPath, './assets/favicon.ico'),
      minify: !devMode,
      cache: devMode,
      title: 'Web App'
    })
  ]
}