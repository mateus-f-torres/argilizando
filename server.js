import express from 'express';
// import helmet from 'helmet';

import React from 'react';
import ReactDOMServer from 'react-dom/server';

/*
import htmlTemplate from './htmlTemplate.js';
import Root from './src/index.js';
*/

const app = express();

// setup basic security with HelmetJs middleware
/*
app.use(helmet({
  frameguard: { action: 'deny' }
}));
*/

// serve the correct static files
app.use(express.static(__dirname + '/lib'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/lib/index.html');
});

/*
app.get('/*', (req, res) => {
  const reactDOM = ReactDOMServer.renderToString(<Root />);

  res.writeHead(200, {"Content-Type": "text/html"});
  res.write(htmlTemplate(reactDOM));
  res.end();
})

let listener = app.listen(process.env.PORT, process.env.IP, () => {
  console.log('Server for C9 Running in DEVELOPMENT MODE ' + listener.address().port);
});
*/

app.listen(process.env.PORT, process.env.IP);
