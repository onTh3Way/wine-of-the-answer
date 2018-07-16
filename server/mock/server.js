require('./data')
const pathUtil = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const helpsMiddlewares = require('./middlewares')
const config = require('./config')
const app = jsonServer.create()
const middlewares = jsonServer.defaults({
  bodyParser: true
})

app
  .use(jsonServer.rewriter({
    '/api/v1/*': '/$1',
    '/api/*': '/$1'
  }))
  .use(middlewares)
  .use(helpsMiddlewares)

function requireAll (path) {
  const stat = fs.statSync(path)
  if (stat.isDirectory()) {
    fs
      .readdirSync(path)
      .forEach(targetPath => {
        requireAll(pathUtil.join(path, targetPath))
      })
  } else if (pathUtil.extname(path) === '.js') {
    require(path)(app)
  }
}

requireAll(pathUtil.join(__dirname, 'api'))

app
  .use((req, res, next) => {
    if (!res.finished) res.end()
    next()
  })
  .use(() => {
    dbUtils.save()
  })

app.listen(config.port, config.host)

console.log(`mock server is listen in ${config.host}: ${config.port}`)