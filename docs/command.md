# 命令行
- start 开启测试用静态服务器,文件在/server/staticServer.js,默认开启gzip,并且压缩等级为最高(level9)
- dev 进入开发模式,监听本地3000端口,配备有热更新,代理请求,源代码映射(sourceMap),eslint,stylelint检测与自动修复(只可修复一些简单的错误,如缩进,属性顺序)
- build 打包源代码,监听本地3000端口,配备有代码压缩,抽取公共模块,去除无用代码,css优化(合并选择器等)
- start:mock 开启mockApi服务器,文件在/server/mockServer.js