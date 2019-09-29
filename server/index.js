const fs = require('fs');
const path = require('path');
const express = require('express');

const app = express();

app.get('/product/list',function(req,res){
    send([
        {id:'111',name:'跑鞋'}
    ])
})
app.listen(5000,function(){
    console.log(5000);
})