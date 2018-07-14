require('./data')
const path = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const helpsMiddlewares = require('./middlewares')
const config = require('./config')
const app = jsonServer.create()
const middlewares = jsonServer.defaults({
  bodyParser: true
})
const apiPath = path.join(__dirname, './api')

app
  .use(jsonServer.rewriter({
    '/api/v1/*': '/$1'
  }))
  .use(middlewares)
  .use(helpsMiddlewares)

fs
  .readdirSync(apiPath)
  .forEach(resourcePath => {
    fs
      .readdirSync(path.join(apiPath, resourcePath))
      .forEach(resource => {
        require(path.join(apiPath, resourcePath, resource))(app, path.join('/' + resourcePath))
      })
  })

app.listen(config.port, config.host)

console.log(`mock server is listen in ${config.host}: ${config.port}`)