const path = require('path')
const express = require('express')
const compression = require('compression')
const router = express()

function listen (gzip, port, host) {
  router
    .use(compression({level: 9}))
    .use(express.static(path.join(process.cwd(), 'dist')))
    .listen(port, host)

  console.log(`server is listen in http://${host || 'localhost'}:${port}`)
}

listen(true, 3000)
