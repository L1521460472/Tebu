const fs = require('fs');
const path = require('path');
const express = require('express');

const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const db = require('./test-db');


// 本文件有后端程序猿 编写 给前端程序猿 提供服务
const app = express();
// const fakeDb = require('./fakeDB');
app.use(bodyParser.json());
app.use(cookieParser());

const codeMap = new Map();

app.post('/user/sendVerifyCode', function (req, res) {
    let phone = req.body.phone;
    let code = Math.floor(Math.random() * 9000) + 1000;

    codeMap.set(phone, String(code));
    console.log(phone, code);

    res.send({
        ok: true
    })
});

app.post('/user/loginByCode', async function (req, res) {

    console.log(req.body);

    console.log(codeMap);

    let code = codeMap.get(req.body.phone);
    if (code === req.body.code) {

        if (!await db.existUser(req.body.phone)) {
            // let md5 = crypto.createHash('md5');
            // 对用户密码 进行 md5 加密
            // let password = md5.update(req.body.password).digest('hex');
            let password = String(Math.floor(Math.random() * 90000000) + 10000000);
            let ret = await db.createUser({user_phone: req.body.phone,user_pwd:password});
            console.log(ret);
        }

        let user = await db.getUserByPhone(req.body.phone);
        console.log(user);
        let token = jwt.sign(user, 'abc');

        res.cookie('token', token);

        res.send({
            ok: true
        })
    } else {
        res.send({
            ok: false
        })
    }

});

app.post('/user/register', async function (req, res) {
    if (!await db.existUser(req.body.user_phone)) {
        let ret = await db.registerUser(req.body);
            res.send({
                success: ret.ok
            })
    } else {
        res.send({
            false:'此手机已经注册',
            msg:'该手机号已注册'
        })
    }
});

app.post('/user/plogin', async function (req, res) {
    
    let user = await db.getUserByPhone(req.body.phone);
    
    if (user) {
        let pwd = req.body.pwd
        if (pwd === user.user_pwd) {
            jwt.sign(user, 'abc', function (err, token) {
                if (err) {
                    res.send({
                        login_ok: true,
                        msg:error.message
                    });
                    return;
                }
                res.cookie('token', token);
                res.send({
                    login_ok: true,
                });
            });
            return;
        }
    }
    res.send({
        login_ok: false,
    })
});


app.get('/product/detail', function (req, res) {

    res.send(
    [{ id:'10001',name: '38码',text: `1特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 839.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10002',name: '39码',text: `2特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 360.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10003',name: '40码',text: `3特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 559.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10004',name: '41码',text: `4特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 949.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10005',name: '42码',text: `5特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 369.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10006',name: '43码',text: `6特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 389.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10007',name: '44码',text: `7特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 439.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10008',name: '45码',text: `8特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 639.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"},
    { id:'10009',name: '46码',text: `9特步 专柜款 男子休闲鞋 2019秋新款复古老爹鞋气垫炫彩透气柔软休闲981319320020`,price: 539.00,pic:"http://image.xtep.com.cn/util/upload/product/201909111020/20199111020382312A9BA4CCE424849F125E6A54E5625D81.jpg"}
        ]);
});

app.get('/product/about',function(req,res){
    res.send(
        [
            {color:"黑色"},
            {color:"白色"},
            {color:"红色"}
        ]
    )
})

app.listen(7000);
