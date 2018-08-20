git# 环境搭建与运行
## 环境搭建
1. 安装docker
2. 打开终端(windows: powerShell, mac: Terminal or iTerm)
3. 输入`docker pull onth3way/wota`拉取镜像
4. 使用`docker run --rm -it -v 你的项目目录(绝对路径):/app onth3way/wota bash`
5. 运行`yarn install`安装项目依赖
至此,环境搭建完毕

## 进入docker容器
- 容器未启动: `docker run --rm -it -p 3000:3000 -v 你的项目目录(绝对路径):/app onth3way/wota bash`
- 容器启动在后台: `docker ps`查找id,`docker attach id`

## 重启docker容器
`docker ps`查找容器ID,`docker restart id`即可重启,id不用全部输入,一般来说只用前三位即可,除非有两个容器ID前三位一样

## 挂起docker容器
同时按下ctrl+p+q即可挂起

## 退出docker容器
- 在容器内: 输入`exit`后回车即可退出容器
- 在容器外: `docker ps`查找id,`docker stop id`

## 运行项目
### 开发模式
`yarn dev`
### 生产模式
`yarn build && yarn start`