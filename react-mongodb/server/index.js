const path = require('path');
const fs = require('fs')
const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const resolve = file => path.resolve(__dirname,file);
const logger = require('morgan');
const debug = require('debug');
const http = require('http');
// const jade = require('jade')
const routerIndex = require('./router/Index');
const routerUser = require('./router/User');


// const config = require('./config')
// console.log(config)
const app = express();

app.set('port', (process.env.port || 3000))
app.use(favicon(resolve('./public/favicon.ico')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cookieParser())
app.use(logger('dev'));     //打印到控制台
app.set('views', resolve('views'));
app.set('view engine', 'jade');
app.locals.pretty = true;
app.use('/public',express.static(resolve('public')));
// console.log(resolve('public'));
let accessLog = fs.createWriteStream(resolve('./logs/access.log'), {flags : 'a'});
app.use(logger('combined', {stream : accessLog}));      //打印到log日志

app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",'3.2.1')
    // res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use('/',routerIndex);
app.use('/user',routerUser);


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

app.listen(app.get('port'), function () {
  console.log('Visit http://localhost:' + app.get('port'))
})
