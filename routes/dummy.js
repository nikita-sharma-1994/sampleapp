var express = require('express');
var fs = require('fs');

var router = express.Router();

/* GET */
router.get('/', function(req, res) {
     /*fs.readFile('./data/divisions','utf8',function (err, data) {
        if(err) { res.status(500).send({error : err}); return;}
        res.status(200).json(data);  
     });*/   
     var data = fs.readFileSync('./data/divisions','utf8'); 
     res.status(200).send(data);      
});

module.exports = router;
