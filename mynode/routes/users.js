var express = require('express');
var router = express.Router();
var fs = require('fs');
//登录
router.post('/usee', function(req, res) {
  var js = req.body;
  
  var key_type = true;
  for(var key in js){
    if(js[key] == ''){
      key_type = false;
    }
  }
  if(key_type){
    js.mouny = 1000;
    js.bo_inte = 0;
    var vip = eval(fs.readFileSync('./login.txt','utf8'))
    var vip_type=true;
    for(var i = 0;i<vip.length;i++){
      if(vip[i].user == js.user){
        vip_type = false;
      }
    }
    if(vip_type){
      vip.push(js)
      console.log(js)
      fs.writeFileSync('./login.txt',JSON.stringify(vip),'utf8');
      res.send({type:'1',data:js})
    }else{
      res.send({type:'2',data:js})
      console.log(js)
    }
  }else{
    res.send({type:'0',data:'参数缺失'})
  }
});
//修改个人信息
router.post('/modu',function(req,res){
  var js = req.body;
  var vip = eval(fs.readFileSync('./login.txt','utf8'))
  var key_type = true;
  for(var key in js){
    if(js[key] == ''){
      key_type = false;
    }
  }
  if(key_type){
    for(var i = 0;i<vip.length;i++){
      if(js.user == vip[i].user){
        console.log(vip[i])
      }
    }
    var indexs = '';
    vip.map(function(item,index){
      if(item.user == js.user){
        // console.log(index)
        indexs = index
      }
    })
    vip.splice(indexs,1,js)
    console.log(vip)
    fs.writeFileSync('./login.txt',JSON.stringify(vip),'utf8');
    res.send({type:0,data:js})
  }else{
    res.send({type:1,data:''})
  }
 
})
module.exports = router;
