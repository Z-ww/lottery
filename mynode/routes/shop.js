express = require('express');

fs = require('fs');

router = express.Router();

router.get('/shops',function(req,res){
    res.setHeader('access-control-allow-origin', '*');
    var data = fs.readFileSync('./shopList.txt','utf8');
    da =eval(data)
    var arr = [];
    arr.push(duihuan)
    arr.push(goshop)
    console.log(arr)
    res.send({type:'0',data:{duihuan:duihuan,shop:goshop}})
})



module.exports = router;