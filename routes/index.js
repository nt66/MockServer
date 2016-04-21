/**
 * 
 * @authors hualingfeng
 * @date    2016-04-19 19:27:49
 * @version $Id$
 */
var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.render('index', {});
});

module.exports = router;