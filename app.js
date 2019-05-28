var express = require('express');
var path = require('path');
var logger = require('morgan');
var index = require('./routes/index');
var app = express();
var minifyHTML = require('express-minify-html');
const dotenv = require('dotenv');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(minifyHTML({
  override:      true,
  exception_url: false,
  htmlMinifier: {
      removeComments:            true,
      collapseWhitespace:        true,
      collapseBooleanAttributes: true,
      removeAttributeQuotes:     true,
      removeEmptyAttributes:     true,
      minifyJS:                  true
  }
}));

// set path for static assets
app.use(express.static(path.join(__dirname, 'public'), { maxAge: '30 days' }));

// live reload (on chnage of ejs, css or js) files
var livereload = require('livereload').createServer({
  exts: ['js', 'css', 'ejs']
});
livereload.watch(path.join(__dirname, 'views'));
livereload.watch(path.join(__dirname, 'public'));

// routes
app.use('/', index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', {status:err.status, message:err.message});
});

// initialize the .env file
dotenv.config();
console.log(`Server is running in port: ${process.env.PORT}`);

module.exports = app;

// required to inject the env variables to the client
require('express-dynamic-helpers-patch')(app);
app.dynamicHelpers({
  ENVOBJ: function (req, res) {
    return {
      UI_HOST: process.env.UI_HOST,
      YOUTUBE_API_KEY: process.env.YOUTUBE_API_KEY,
    }
  }
});
// append the versions in css and js
app.locals.deployVersion = (new Date).getTime();