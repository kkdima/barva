const express = require('express');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const bodyParser = require('body-parser');

app
	.prepare()
	.then(() => {
		const server = express();

		server.use(function(req, res, next) {
			res.header('Access-Control-Allow-Origin', 'www.barva-design.com'); // update to match the domain you will make the request from
			res.header(
				'Access-Control-Allow-Headers',
				'Origin, X-Requested-With, Content-Type, Accept'
			);
			next();
		});

		server.all('*', (req, res) => {
			return handle(req, res);
		});

		server.use(bodyParser.urlencoded({ extended: false }));
		server.use(bodyParser.json());

		server.locals.layout = false;

		server.listen(port, err => {
			if (err) throw err;
			console.log(`> Ready on http://localhost:${port}`);
		});
	})
	.catch(ex => {
		console.err(ex.stack);
		process.exit(1);
	});
