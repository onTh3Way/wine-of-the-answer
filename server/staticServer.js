const path = require('path')
const express = require('express')
const compression = require('compression')
const app = express()

function listen (gzip, port, host) {
	app
		.use(compression({level: 9}))
		.use(express.static(path.join(process.cwd(), 'dist')))
		.listen(port, host)

	console.log(`server is listen in http://${host || 'localhost'}:${port}`)
}

listen(true, 3000)