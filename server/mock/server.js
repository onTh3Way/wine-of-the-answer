require('./data')
const pathUtil = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const helpsMiddlewares = require('./middlewares')
const config = require('./config')
const express = require('express')
const app = jsonServer.create()
const middlewares = jsonServer.defaults({
  bodyParser: true
})
const wotaRouter = express.Router()
const wxRouter = express.Router()

function requireAll (path, ...args) {
  const stat = fs.statSync(path)
  if (stat.isDirectory()) {
    fs
      .readdirSync(path)
      .forEach(targetPath => {
        requireAll(pathUtil.join(path, targetPath), ...args)
      })
  } else if (pathUtil.extname(path) === '.js') {
    const target = require(path)
    if (Object.prototype.toString.call(target) === '[object Function]') target.apply(null, args)
  }
}

requireAll(pathUtil.join(__dirname, 'api/wx'), wxRouter)
requireAll(pathUtil.join(__dirname, 'api/resources'), wotaRouter)
requireAll(pathUtil.join(__dirname, 'api/users'), wotaRouter)

app
  .use(jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/api/*': '/$1'
  }))
  .use(middlewares)
  .use(wxRouter)
  .use(helpsMiddlewares)
  .use(wotaRouter)
  .use((req, res, next) => {
    if (!res.finished) {
      res.statusCode = 404
      res.end()
    }
    next()
  })
  .use(() => {
    dbUtils.save()
  })
  .listen(config.port, config.host)

console.log(`mock server is listen in ${config.host}: ${config.port}`)