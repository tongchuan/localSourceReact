const express = require('express');
const router = express.Router();
const User = require('../model/User');
// console.log(req.body.user); //post获取参数
// console.log(req.params.user); //根据url中的路由获取参数
// console.log(req.query.user); //get 获取参数
router.all('/useradd',function(req, res, next){
  User.save(req.body).then(()=>{
    res.send({"code":10000,"msg":"","data":[]})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})
router.all('/userfindOne',function(req, res, next){
  let email = req.body.email;
  let pwd = req.body.pwd;
  let data = {
    email:email,
    pwd:pwd
  }
  User.findOne(data).then((data)=>{
    if(data.email){
      res.cookie("user",data.email);
      res.send({"code":10000,"msg":"","data":data})
    }else{
      res.send({"code":10002,"msg":"","data":null})
    }

  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":null})
  })
})
router.all('/userlist',function(req, res, next){
  User.find().then((data)=>{
    res.send({"code":10000,"msg":"","data":data})
  },(err)=>{
    res.send({"code":10001,"msg":err.toString(),"data":[]})
  })
})


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
