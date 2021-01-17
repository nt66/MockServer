var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var config = require('config');
var mock = require('mockjs');
var app = express();
var Guid = require('Guid');
var Mock = require('mockjs');
var dataSource = {
	data: []
};
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', require('./routes/index'));

// 生成接口地址，mock数据 ，respon 接口地址、mock数据
app.get('/interface', function(req, res, next) {

	// 生成mock数据
	var codeObj = JSON.parse(req.query.code);
	var data = Mock.mock(codeObj);

	//地址和数据映射
	var param = {
		"address": "http://10.3.10.73:8082/interface/" + Guid.raw().split('-').join(''),
		"data": data
	};
	dataSource.data.push(param);
	res.send(param);
});

//访问接口地址，respon mock数据
app.get('/interface/:id', function(req, res, next) {
	var routeID = req.params.id;
	var callback = req.query.callback;
	var url = "http://10.3.10.73:8082/interface/" + routeID;
	dataSource.data.map(function(v, k) {
		if (url == v.address) {
			if (callback) {
				res.jsonp(v.data);
			} else {
				res.send(v.data);
			}
		}
	});
	res.send('该结构无数据生成');
});

module.exports = app;