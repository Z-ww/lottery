const express = require('express');
const fs = require('fs')
const router = express.Router()


router.get('/textt',function(res,req){
    var json = req.query;
    var datas = eval(fs.readFileSync('./text.txt','utf-8'))
    console.log(datas)
    req.send(datas)
})  
module.exports = router