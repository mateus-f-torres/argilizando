'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import helmet from 'helmet';

var app = (0, _express2.default)();

// serve the correct static files
app.use(_express2.default.static(__dirname + '/lib'));

app.get('*', function (req, res) {
  res.sendFile(__dirname + '/lib/index.html');
});

var listener = app.listen(process.env.PORT, process.env.IP, function () {
  console.log('Server for C9 Running in DEVELOPMENT MODE ');
});

//app.listen(process.env.PORT, process.env.IP);
