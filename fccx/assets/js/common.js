/** EasyWeb iframe v3.1.3 date:2019-07-12 License By http://easyweb.vip */

// 以下代码是配置layui扩展模块的目录，每个页面都需要引入
layui.config({
	version: true,
	base: getProjectUrl() + 'assets/module/'
}).extend({
	formSelects: 'formSelects/formSelects-v4',
	treetable: 'treetable-lay/treetable',
	dropdown: 'dropdown/dropdown',
	notice: 'notice/notice',
	step: 'step-lay/step',
	dtree: 'dtree/dtree',
	citypicker: 'city-picker/city-picker',
	tableSelect: 'tableSelect/tableSelect',
	Cropper: 'Cropper/Cropper',
	zTree: 'zTree/zTree',
	introJs: 'introJs/introJs',
	fileChoose: 'fileChoose/fileChoose',
	tagsInput: 'tagsInput/tagsInput'
}).use(['layer', 'admin'], function() {
	var $ = layui.jquery;
	var layer = layui.layer;
	var admin = layui.admin;

	// 移除loading动画
	setTimeout(function() {
		admin.removeLoading();
	}, window == top ? 600 : 100);

});

// 获取当前项目的根路径，通过获取layui.js全路径截取assets之前的地址
function getProjectUrl() {
	var layuiDir = layui.cache.dir;
	if (!layuiDir) {
		var js = document.scripts,
			last = js.length - 1,
			src;
		for (var i = last; i > 0; i--) {
			if (js[i].readyState === 'interactive') {
				src = js[i].src;
				break;
			}
		}
		var jsPath = src || js[last].src;
		layuiDir = jsPath.substring(0, jsPath.lastIndexOf('/') + 1);
	}
	return layuiDir.substring(0, layuiDir.indexOf('assets'));
}

var ip = 'http://www.shie1d.top:8080/';
//设置cookie
function setCookie(name, value, expdays, path) {
	var expdate = new Date().getTime();
	//设置Cookie过期日期
	expdate = new Date(expdate + expdays * 60 * 1000 * 60 * 12);
	//添加Cookie并转码
	document.cookie = encodeURI(name) + "=" + escape(value) + ";expires=" + expdate.toUTCString() + ";path=" + path;

}

//得到cookie
function getCookie(name) {
	//获取name在Cookie中起止位置
	var start = document.cookie.indexOf(name + "=");
	if (start != -1) {
		start = start + name.length + 1;
		//获取value的终止位置
		var end = document.cookie.indexOf(";", start);
		if (end == -1)
			end = document.cookie.length;
		//截获cookie的value值,并返回
		return unescape(document.cookie.substring(start, end));
	}
	return "";
}

//删除cookie
function delCookie(name) {
	setCookie(name, "", -1);
}
var Request = new UrlSearch() //实例化
//获取传递的值
function UrlSearch() {
	var name, value;
	var str = location.href; //取得整个地址栏
	var num = str.indexOf("?")
	str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]

	var arr = str.split("&"); //各个参数放到数组里
	for (var i = 0; i < arr.length; i++) {
		num = arr[i].indexOf("=");
		if (num > 0) {
			name = arr[i].substring(0, num);
			value = arr[i].substr(num + 1);
			this[name] = value;
		}
	}
}
//获取当前时间
			function getTime(iTime) {
				var myDate = new Date();
				 var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
				    var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
				    var myToday = myDate.getDate(); //获取当前日(1-31)
			    return myYear + "-" + myMonth + "-" + myToday;
			}
var level = getCookie("level");
var phone = getCookie("phone");
var update = getCookie("update");
