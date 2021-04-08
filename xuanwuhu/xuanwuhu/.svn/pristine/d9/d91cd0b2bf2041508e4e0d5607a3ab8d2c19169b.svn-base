var serverUrl = 'http://www.tylouchacha.com:85/api/';

mui.plusReady(function() {
	$(window).scroll(function() {
		var sc = $(window).scrollTop();
		var rwidth = $(window).width();
	
		if(sc > 0) {
			$("#goTopBtn").css("display", "block");
			$("#goTopBtn").css("left", (rwidth - 50) + "px");
		} else {
			$("#goTopBtn").css("display", "none");
		}
	});
	
	$("#goTopBtn").click(function() {
		var sc = $(window).scrollTop();
		$("body,html").animate({
			scrollTop: 0
		}, 500);
	});
	
});


(function(doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = 'onorientationchange' in window ? 'onorientationchange' : 'resize',
		recalc = function() {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 750) {
				docEl.style.fontSize = '100px';
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener('DOMContentLoaded', recalc, false);

	// 空函数
	function shield() {
		return false;
	}
	document.addEventListener('touchstart', shield, false); //取消浏览器的所有事件，使得active的样式在手机上正常生效
	document.oncontextmenu = shield; //屏蔽选择函数

})(document, window);


//整理数字
function toNumber(count) {
	countstr = count

	if ((count / 10000000) > 1) {
		count = (count / 100000000).toFixed(2);
		countstr = count + "亿";
	} else if ((count / 10000) > 1) {
		count = (count / 10000).toFixed(2);
		countstr = count + "万";
	}
	return countstr;
}

// 验证手机号
function checkMobile(mobile) {
	if (!(/^1(3|4|5|6|7|8|9)\d{9}$/.test(mobile))) {
		return false;
	}
	return true;
}

// 检测身份证号合法性
function isCnNewID(cid){
    var arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];//加权因子
    var arrValid = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];//校验码
    if(/^\d{17}\d|x$/i.test(cid)){
        var sum = 0, idx;
        for(var i = 0; i < cid.length - 1; i++){
            // 对前17位数字与权值乘积求和
            sum += parseInt(cid.substr(i, 1), 10) * arrExp[i];
        }
        // 计算模（固定算法）
        idx = sum % 11;
        // 检验第18为是否与校验码相等
        return arrValid[idx] == cid.substr(17, 1).toUpperCase();
    }else{
        return false;
    }
};

// 判断是否登录
function isLogin() {
	var stateText = localStorage.getItem('$state') || "{}";
	var stateJson = JSON.parse(stateText);
	return stateJson.token;
}

function nocon() {
	var item = '';
	item = '<div style="width: 2.98rem;height:3.76rem;margin:auto;margin-top:140px;">' +
		'<img src="../img/mei.png" alt="" style="width: 100%" height:100%;position:absolute:top:0;left:0;/>' +
		'</div>';
	return item;
}

/**身份证加密
* str:待处理的字符串
* s:开始位置下标
* e:结束位置下标
*/
function starReplace(str, s, e) {
    if (!str) return str;
    var _k = !!e && e != 0 ? str.substring(s, e) : str.substring(s);
    var _v = "";
    for (var i = 0; i < _k.length; i++) _v += "*";
    return str.replace(_k, _v);
};
