var express = require('express');
var router = express.Router();
var obj = new Array();

/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.send(obj[req.params.id]);
	/*i=req.params.id;
	res.jason(obj[i]);*/
});

router.post('/', function(req, res, next) {
  obj.push(req.body);
  obj[obj.length-1].msg=[];
  console.log(req.body);
  res.send(obj.length-1+"");
});

router.put('/:id', function(req, res, next) {
	id = req.params.id;
	if(req.body.firstName!=undefined)
		obj[id].firstName=req.body.firstName;
	if(req.body.lastName!=undefined)
		obj[id].lastName=req.body.lastName;
	if(req.body.phone!=undefined)
		obj[id].phone=req.body.phone;
	res.send(obj[id]);
  //console.log(req.body);

});
router.post('/:id/message',function(req,res,next){
	var cmid = req.params.id;
	var msg_id;
	//console.log(obj[cmid].msgs.push(req.body.msg));
	msg_id = obj[cmid].msg.push(req.body.msg);
	msg_id--;
	res.json(''+msg_id);
});
router.get('/:id/message/:mid',function(req,res,next){
	var c_id = req.params.id;
	var m_id = req.params.mid;
	console.log(c_id);
	console.log(m_id);
	res.json(obj[c_id].msg[m_id]);
});

module.exports = router;
