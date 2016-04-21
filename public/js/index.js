/**
 * 配置页面逻辑
 * @authors hualingfeng
 * @date    2016-04-20 15:12:44
 * @version $Id$
 */

$(function() {
	$('#submit').bind('click', function() {
			var code = $('#code').val();
			// $.ajax({
			// 	url: 'http://localhost:8082/interface',
			// 	type: 'get',
			// 	data: {
			// 		code:code
			// 	},
			// 	dataType: 'json',
			// 	timeout: 10000,
			// 	contentType: "application/x-www-form-urlencoded; charset=utf-8",
			// 	success: function(data) {

			// 	},
			// 	error: function(r) {

			// 	}
			// })
			$.getJSON("http://10.3.10.73:8082/interface",
				{code:code},  
                function(data) { 
                	$('#data').html(JSON.stringify(data.data));
                	$('#url').html(data.address);
                }); 
		})
		//获取textarea值
		//ajax请求
})