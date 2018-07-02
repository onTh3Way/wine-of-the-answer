# 目录结构
## config 配置文件目录
	lint
		- eslint.json eslint规则配置文件
		- stylelint.json styleint规则配置文件
	- proxy.js 配置请求转发文件
	- webpack.common.js webpack公共配置
	- webpack.dev.js webpack开发配置
	- webpack.prod.js webpack生产配置
## server 服务器端目录
	mockServer.js mock服务器,提供假数据用
	staticServer.js 静态文件服务器,用于测试生产环境下的性能等
## dist 构建目录
## src源文件
	assets 全局资源
	components 全局基础样式组件,不负责数据逻辑
	containers 全局容器组件,容器组件负责数据逻辑
	less 全局less辅助函数,不要直接写选择器
	router 路由文件夹,子目录名即为页面名
	service 网络请求层,所有网络交互都由它负责
	utils 全局工具库
	- main.js 入口文件
	- App.vue 入口组件
	- index.html 入口页面