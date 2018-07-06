'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

var _htmlTemplate = require('./htmlTemplate.js');

var _htmlTemplate2 = _interopRequireDefault(_htmlTemplate);

var _index = require('./src/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import helmet from 'helmet';

var app = (0, _express2.default)();

// setup basic security with HelmetJs middleware
/*
app.use(helmet({
  frameguard: { action: 'deny' }
}));
*/

// serve the correct static files
app.use(_express2.default.static(__dirname + '/lib'));

app.get('/', function (req, res) {
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

app.listen(process.env.PORT);
