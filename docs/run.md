# 环境搭建与运行
## 环境搭建
1. 安装docker
2. 打开终端(windows: powerShell, mac: Terminal or iTerm)
3. 输入`docker pull onth3way/wota`拉取镜像
4. 使用`docker run -it -v 你的项目目录(绝对路径):/app onth3way/wota bash`
5. 运行`yarn install`安装项目依赖
至此,环境搭建完毕

## 运行项目
### 开发模式
`yarn dev`
### 生产模式
`yarn build && yarn start`