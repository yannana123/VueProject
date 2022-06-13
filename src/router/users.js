const express = require('express');
//调用数据池
const pool = require('../pool.js');
//建立路由器
const router = express.Router();


//用户注册手机号是否存在查询
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：get
// 请求路径："users/register/phone"
router.get('/register/phone', (req, res, next) => {
    var obj = req.query;
    console.log(obj.uphone);
  pool.query(
    'select * from users where uphone=?',
    [obj.uphone],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.length >= 1) {
        res.send({ code: 201, msg: '此手机号已注册' });
      } else {
        res.send({ code: 200, msg: '此手机号可以使用' });
      } //if返回数据结束
    }
  );
}); //路由结束

//用户注册
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/register"
router.post('/register', (req, res, next) => {
  
  var obj = req.body;
  console.log(obj);
  console.log(obj.uphone, obj.upwd);
  pool.query(
    'insert into users(uname,upwd,uphone) VALUES(?,?,?)',
    [obj.uname, obj.upwd,obj.uphone],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.affectedRows==1) {
        res.send({ code: 200, msg:arr.insertId });
      }
    }
  );
}); //路由结束

//将验证码存入数据库
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/sendSms"
router.post('/sendSms', (req, res, next) => {
  var obj = req.body;
  pool.query(
    'insert into sms(phone,sms) VALUES(?,?)',
    [obj.phone, obj.sms],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.affectedRows==1) {
        res.send({ code: 200, msg:arr.insertId });
      }
    }
  );
}); //路由结束

//检查短信验证码是否匹配
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/checkSms"
router.post('/checkSms', (req, res, next) => {
  var obj = req.body;
  pool.query(
    'select * from sms where phone= ?  and  createtime >DATE_ADD(now(),INTERVAL - 5 MINUTE)',
    [obj.phone],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.length>0) {
        res.send({ code: 200, msg:arr[0].sms });
      }else{
        res.send({ code: 400, msg:"" });
      }
    }
  );
}); //路由结束

//用户性别注册
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/register/sex"

router.post('/register/sex', (req, res, next) => {
    var obj = req.body;
  // console.log(obj);
  pool.query(
    'update users set usex=? where uid=?',
    [obj.usex,obj.uid],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.affectedRows==1) {
        res.send({ code: 200, msg:'性别添加成功' });
      }else{
        res.send({ code: 201, msg:'性别添加失败' });
      }
    }
  );
}); //路由结束


//用户身高注册
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/register/height"
router.post('/register/height', (req, res, next) => {
  var obj = req.body;
// console.log(obj);
pool.query(
  'update users set uheight=? where uid=?',
  [obj.uheight,obj.uid],
  (err, arr) => {
    if (err) {
      next(err);
      return;
    } //if结束
    if (arr.affectedRows==1) {
      res.send({ code: 200, msg:'身高添加成功' });
    }else{
      res.send({ code: 201, msg:'身高添加失败' });
    }
  }
);
}); //路由结束


//用户出生日期注册
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/register/age"
router.post('/register/age', (req, res, next) => {
  var obj = req.body;
// console.log(obj);
pool.query(
  'update users set uage=? where uid=?',
  [obj.uage,obj.uid],
  (err, arr) => {
    if (err) {
      next(err);
      return;
    } //if结束
    if (arr.affectedRows==1) {
      res.send({ code: 200, msg:'出生添加成功' });
    }else{
      res.send({ code: 201, msg:'出生添加失败' });
    }
  }
);
}); //路由结束

//用户身高注册
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/register/weight"
router.post('/register/weight', (req, res, next) => {
  var obj = req.body;
// console.log(obj);
pool.query(
  'update users set uweight=? where uid=?',
  [obj.uweight,obj.uid],
  (err, arr) => {
    if (err) {
      next(err);
      return;
    } //if结束
    if (arr.affectedRows==1) {
      res.send({ code: 200, msg:'体重添加成功，完成注册' });
    }else{
      res.send({ code: 201, msg:'体重添加失败' });
    }
  }
);
}); //路由结束

//用户修改头像
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/register/img"
router.post('/register/img', (req, res, next) => {
  var obj = req.body;
// console.log(obj);
pool.query(
  'update users set uimg=? where uid=?',
  [obj.uimg,obj.uid],
  (err, arr) => {
    if (err) {
      next(err);
      return;
    } //if结束
    if (arr.affectedRows==1) {
      res.send({ code: 200, msg:'头像添修改成功' });
    }else{
      res.send({ code: 201, msg:'体重添加失败' });
    }
  }
);
}); //路由结束

//用户登录
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：post
// 请求路劲："users/login"
router.post('/login', (req, res, next) => {
  var obj = req.body;
  console.log(obj.uphone, obj.upwd);
  pool.query(
    'select uphone,upwd,uid from users where uphone=? && upwd=?',
    [obj.uphone, obj.upwd],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.length >= 1) {
        res.send({ code: 200, msg:arr[0].uid });
      } else {
        res.send({ code: 201, msg: '用户名或密码错误' });
      } //if返回数据结束
    }
  );
}); //路由结束

//个人用户数据和动态查询
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：get
// 请求路劲："/users/datas"
router.get('/datas', (req, res, next) => {
  // res.send('验证接口通顺');
  var obj = req.query;
  console.log(obj);
  pool.query('select uname,uheight,uweight,uimg,uintegral,cofimg,cofword,cofgood,coftime from cof join users on cof.cuid=users.uid where users.uid=?', [obj.uid], (err, arr) => {
    if (err) {
      next(err);
      return;
    } //if结束
    if (arr.length >= 1) {
      res.send({ code: 200, msg: arr });
    } //if返回数据结束
  }); //pool结束
}); //路由结束

//查询好友列表
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：get
// 请求路劲："/users/friends"
router.get('/friends', (req, res, next) => {
  // res.send("验证接口通顺")
  var obj = req.query;
  console.log(obj.uuid);
  pool.query(
    'select uid,uname,uheight,uweight,uimg,uintegral from frends join users on frends.fuid=users.uid where frends.uuid=?',
    [obj.uuid],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.length >= 1) {
        res.send({ code: 200, msg: arr });
      }else{
        res.send({ code: 201, msg:"暂无好友" });
      }
       //if返回数据结束
    }
  ); //pool结束
}); //路由结束

//查询所有好友动态
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：get
// 请求路劲："/users/friends/datas"
router.get('/friends/datas', (req, res, next) => {
  // res.send("验证接口通顺")
  var obj = req.query;
  console.log(obj.uuid);
  pool.query(
    'select cuid,cofimg,cofword,cofgood,coftime from cof join frends on cof.cuid=frends.fuid where frends.uuid=?',
    [obj.uuid],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.length >= 1) {
        res.send({ code: 200, msg: arr });
      }else{
        res.send({ code: 201, msg:"暂无好友" });
      }
       //if返回数据结束
    }
  ); //pool结束
}); //路由结束


//搜索某个好友动态或添加好友
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式：get
// 请求路劲："/users/friends/datas"
router.get('/friends/add', (req, res, next) => {
  // res.send("验证接口通顺")
  var obj = req.query;
  console.log(obj.uuid);
  pool.query(
    'select cuid,cofimg,cofword,cofgood,coftime from cof join frends on cof.cuid=frends.fuid where frends.uuid=?',
    [obj.uuid],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.length >= 1) {
        res.send({ code: 200, msg: arr });
      }else{
        res.send({ code: 201, msg:"暂无好友" });
      }
       //if返回数据结束
    }
  ); //pool结束
}); //路由结束



//删除好友
// 请求路径:http://127.0.0.1:3000
// 请求端口：3000
//请求方式:post
// 请求路劲："/users/friends/del"
router.post('/friends/del', (req, res, next) => {
  // res.send("验证接口通顺")
  var obj = req.body;
  console.log(obj.uid);
  pool.query(
    'DELETE FROM users WHERE uid=?',
    [obj.uid],
    (err, arr) => {
      if (err) {
        next(err);
        return;
      } //if结束
      if (arr.affectedRows==1) {
        res.send({ code: 200, msg:'删除成功' });

      }else{
        res.send({ code: 201, msg:"删除失败" });
      }
       //if返回数据结束
    }
  ); //pool结束
}); //路由结束



module.exports = router;
