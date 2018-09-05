const express = require('express')
const path = require('path')
const hostname = '127.0.0.1'
const port = process.env.port || 5000

express()
	.use(express.static(path.join(__dirname, 'public')))
	.set('views', path.join(__dirname, 'views'))
	.set('view engine', 'ejs')
	.get('/', (req, res) => res.render('index'))
	.listen(port, () => console.log(`Listening on ${hostname}:${ port }`))