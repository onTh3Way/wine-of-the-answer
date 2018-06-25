const http = require('http')
const path = require('path')
const fs = require('fs')
const zlib = require('zlib')
const mime = require('mime-types')

function listen (gzip, port) {
	http
		.createServer((req, res) => {
			const ext = path.extname(req.url)
			const filePath = path.join(__dirname, `dist${req.url}`)
			res.writeHead(200, {
				'Content-Type': mime.contentType(ext)
			})
			if (gzip) {
				res.writeHead(200, {
					'Accept-Encoding': 'gzip',
					'Content-Encoding': 'gzip'
				})
			}

			if (ext && fs.existsSync(filePath)) {
				if (gzip) res.end(zlib.gzipSync(fs.readFileSync(filePath)))
				else res.end(fs.readFileSync(filePath))
				return
			}

			res.end()
		})
		.listen(port)
}

listen(true, 3000)