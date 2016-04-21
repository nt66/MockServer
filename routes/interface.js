/**
 * 
 * @authors hualingfeng
 * @date    2016-04-19 19:27:49
 * @version $Id$
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	//if(req.path == '/'){
		//if(req.query.code){
			res.write('ok');
		//}
	//}
});

module.exports = router;