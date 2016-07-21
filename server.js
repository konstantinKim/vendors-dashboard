var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var app = new (require('express'))()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

app.get("/", function(req, res) {
  res.sendFile(__dirname + '/index.html')
})

app.get("/_lib/css/vendor/bootstrap.css", function(req, res) {
  res.sendFile(__dirname + '/_lib/css/vendor/bootstrap.css')
})
app.get("/_lib/css/vendor/bootstrap-datatables.css", function(req, res) {
  res.sendFile(__dirname + '/_lib/css/vendor/bootstrap-datatables.css')
})
app.get("/_lib/css/styles.css", function(req, res) {
  res.sendFile(__dirname + '/_lib/css/styles.css')
})
app.get("/_lib/css/styles-settings.css", function(req, res) {
  res.sendFile(__dirname + '/_lib/css/styles-settings.css')
})
app.get("/_lib/css/styles-statistics.css", function(req, res) {
  res.sendFile(__dirname + '/_lib/css/styles-statistics.css')
})
app.get("/_lib/js/vendor/jquery-1.10.0.min.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/jquery-1.10.0.min.js')
})
app.get("/_lib/js/vendor/bootstrap-datepicker.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/bootstrap-datepicker.js')
})
app.get("/_lib/js/scripts.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/scripts.js')
})
app.get("/_lib/js/vendor/jquery.reveal.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/jquery.reveal.js')
})
app.get("/_lib/js/vendor/jquery.easing.min.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/jquery.easing.min.js')
})
app.get("/_lib/js/vendor/jquery-easing-compatibility.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/jquery-easing-compatibility.js')
})
app.get("/_lib/js/vendor/highcharts.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/highcharts.js')
})
app.get("/_lib/js/vendor/jquery.datatables.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/jquery.datatables.js')
})
app.get("/_lib/js/vendor/bootstrap.datatables.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/bootstrap.datatables.js')
})
app.get("/_lib/js/vendor/bootstrap.min.js", function(req, res) {
  res.sendFile(__dirname + '/_lib/js/vendor/bootstrap.min.js')
})
app.get("/_lib/fonts/regular.woff", function(req, res) {
  res.sendFile(__dirname + '/_lib/fonts/regular.woff')
})
app.get("/_lib/fonts/bold.woff", function(req, res) {
  res.sendFile(__dirname + '/_lib/fonts/bold.woff')
})
app.get("/_lib/fonts/glyphicons-halflings-regular.woff", function(req, res) {
  res.sendFile(__dirname + '/_lib/fonts/glyphicons-halflings-regular.woff')
})
app.get("/_lib/fonts/italic.woff", function(req, res) {
  res.sendFile(__dirname + '/_lib/fonts/italic.woff')
})
app.get("/_lib/fonts/glyphicons-halflings-regular.ttf", function(req, res) {
  res.sendFile(__dirname + '/_lib/fonts/glyphicons-halflings-regular.ttf')
})
app.get("/_lib/fonts/italic.ttf", function(req, res) {
  res.sendFile(__dirname + '/_lib/fonts/italic.ttf')
})



app.listen(port, function(error) {
  if (error) {
    console.error(error)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})