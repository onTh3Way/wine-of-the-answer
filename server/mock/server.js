require('./data')
require('./utils')
const path = require('path')
const fs = require('fs')
const jsonServer = require('json-server')
const app = jsonServer.create()
const middlewares = jsonServer.defaults({
  bodyParser: true
})
const apiPath = path.join(__dirname, './api')

app
  .use(jsonServer.rewriter({
    '/api/*': '/$1'
  }))
  .use(middlewares)

fs
  .readdirSync(apiPath)
  .forEach(resourcePath => {
    fs
      .readdirSync(path.join(apiPath, resourcePath))
      .forEach(resource => {
        require(path.join(apiPath, resourcePath, resource))(app, path.join('/' + resourcePath))
      })
  })

app.listen(3000)