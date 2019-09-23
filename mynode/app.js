var express = require('express');
var files = require('./routes/file');
var loggs = require('./routes/users');
var texts = require('./routes/texts');
const https = require('https')
var cheerio = require('cherio')
var fs = require('fs')
var app = express();

app.use(express.urlencoded());
app.use('/logg', loggs);  
app.use('/fileee', files);
app.use('/txtss', texts);
setInterval(() => {
https.get('https://kuai3.cjcp.com.cn/beijing/', res => {
  res.setEncoding('utf-8')
  var html = ''
   var file = []
  res.on('data', function (data) {
    html += data
  })
  res.on('end', function () {
    var $ = cheerio.load(html)
    
    $('#kjinfos1 tr').each(function (index, el) {
      var el = $(el);
      
      if (el.find('td').eq(1).text() == "-") return;
      file.push({
        issue: el.find('td').eq(0).text(),  //期号
        time: el.find('td').eq(1).text(),   //时间
        for_no: el.find('td').eq(2).text(), // 奖号
        sun_value: el.find('td').eq(3).text(), //和值
        three_number: el.find('td').eq(4).text(), //三同号
        two_number: el.find('td').eq(5).text(), //二同号
        three_different: el.find('td').eq(6).text(), //三不同
        two_different: el.find('td').eq(7).text(), //二不同
        three_numbers: el.find('td').eq(8).text(), //三连号
      })
    })
    fs.writeFile("text.txt", JSON.stringify(file), function (err) {
      if (err) return;
      console.log("成功")
    });
  })
  
})
}, 1e4);
app.use(express.static('./public'))
app.listen(3000, function () {
  console.log('成功')
})
module.exports = app;
