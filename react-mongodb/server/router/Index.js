const express = require('express');
const router = express.Router();
const User = require('../model/User');

router.all('/',function(req, res, next){
  // console.log('ddddddddddddddddddddddddddddddddddddddddddddddddddd');
  res.locals.msg = "开始张彤川"
  res.render('index');
})

module.exports = router;
