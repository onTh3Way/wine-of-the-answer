const path = require('path')
const express = require('express')
const app = express()

function listen (gzip, port, host) {
	app
		.use(express.static(path.join(process.cwd(), 'dist')))
		.listen(port, host)

	console.log(`server is listen in http://${host || 'localhost'}:${port}`)
}

listen(true, 3000)