const express = require('express');
const router = express.Router();
const User = require('../model/User');

// console.log('user')
router.all('/add',function(req, res, next){
  // console.log(global.Promise)
  // console.log('OK')
  let json=[];
  let s =  User.find().then(function(doc){
    // json=doc;
    // console.log(JSON.stringify(doc));
    res.send(JSON.stringify(doc));
  },function(e){
    // return e;
    res.send(JSON.stringify(e));
    // console.log('ddd')
    // console.log(e);
  })
  // console.log(s)

// res.end('ddd')
  // res.send(JSON.stringify(data));
  // res.render('index', { title: 'Express' });
})
router.all("*",function(req, res, next){
  console.log('OK')
  res.send("ddd");
})

module.exports = router;
