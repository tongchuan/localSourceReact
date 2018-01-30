const mongoose = require("mongoose");
const config = require('./config')
mongoose.Promise = global.Promise;

/*调试模式是mongoose提供的一个非常实用的功能，用于查看mongoose模块对mongodb操作的日志，一般开发时会打开此功能，以便更好的了解和优化对mongodb的操作。*/
mongoose.set('debug', true);

/*一般默认没有user和password*/
let conn = config.db.host;
conn+= ':' +  config.db.port ? config.db.port : 80
conn+= '/' +  config.db.dbname
// var db=mongoose.connect(config.db.host+'''mongodb://localhost/myDB');
console.log(conn);
let db = mongoose.connect(conn);
db.connection.on("error", function (error) {
  console.log("数据库连接失败：" + error);
});

db.connection.on("open", function () {
  console.log("数据库连接成功");
});
module.exports = mongoose;
