let path = require('path')
let express = require('express')
let port = process.env.PORT || 3000
let config = require('../config')
let app = express()
let ejs = require('ejs'); 

app.use(express.static(path.join(__dirname,'../dist')))
app.engine('html', ejs.__express);
app.set('views',path.join(__dirname,'../dist'))
app.set('view engine', 'html');
app.get('/', function (req, res) {
  // res.send('Hello World!');
  res.render('index')
});

let server = app.listen(port, function () {
  let host = server.address().address;
  let port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
});