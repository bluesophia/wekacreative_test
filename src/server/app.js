const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

//link
const index = require('./routes/index');
// const about = require('./routes/about');
// const support = require('./routes/support');
// const casestudy = require('./routes/casestudy');
// const contact = require('./routes/contact');
// const send = require('./routes/send');
// const sendsupport = require('./routes/sendsupport');



const app = express();
var cors = require('express-cors');

// app.get( "/*", ( req, res ) => {
//   const jsx = ( <Routes /> );
//   const reactDom = renderToString( jsx );

//   res.writeHead( 200, { "Content-Type": "text/html" } );
//   res.end( htmlTemplate( reactDom ) );
// } );


// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/', express.static('dist'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//link
app.use('/api', index);
// app.use('/about', about);
// app.use('/support', support);
// app.use('/casestudy', casestudy);
// app.use('/contact', contact);
// app.use('/send', send);
// app.use('/sendsupport', sendsupport);
app.get('*', (req, res) => {
  res.sendFile('dist/index.html', { root: global });
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
