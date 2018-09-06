const express = require('express'),
	http = require('http');
app = express();
const path = require('path');
const hostname = '127.0.0.1';
const PORT = process.env.PORT || 5000;

// configs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

require('./routes');

http.createServer(app).listen(PORT, () => console.log(`Listening on ${hostname}:${ PORT }`));