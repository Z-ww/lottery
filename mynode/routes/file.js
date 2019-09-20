const express = require('express');

const path = require('path');

const fs = require('fs');

const multer = require('multer');

const router = express.Router();





//头像
router.use(multer({dest:'./public/images'}).any())
router.post('/file',function(req,res){
	var file = req.files[0];
	var oldname = file.filename;
	var newname = oldname+path.parse(file.originalname).ext;
	fs.renameSync('./public/images/'+oldname,'./public/images/'+newname)
	res.send(newname)
})


 module.exports = router;