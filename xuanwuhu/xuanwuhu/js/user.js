(function($, owner) {
	/**
	 * 用户登录
	 **/
	owner.login = function(loginInfo, callback) {
		callback = callback || $.noop;
		loginInfo = loginInfo || {};
		loginInfo.account = loginInfo.account || '';
		loginInfo.Code = loginInfo.Code || '';
		if(!checkMobile(loginInfo.account)) {
			return callback('手机号填写错误');
		}
		if(!loginInfo.Code) {
			return callback('请输入验证码');
		}
		
		$.ajax(serverUrl+'MyCenter/Login', {
			data: {
				phone: loginInfo.account,
				Code: loginInfo.Code,
				mobilecode: loginInfo.mobilecode
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				console.log(JSON.stringify(data));
				if(data.status == 1) {
					owner.createState(data, callback);
				} else {
					callback(data.info);
				}
			},
			error: function(xhr, type, errorThrown) {
				callback("亲，您的网络环境不稳定，请稍后再试！");
			}
		});
	};

	owner.createState = function(data, callback) {
		var state = owner.getState();
		state.userid = data.userinfo.ID;
		state.phone = data.userinfo.phone;
		state.realName = data.userinfo.realName;
		state.companyname = data.userinfo.companyname;
		// state.passwrod = data.userinfo.passwrod;
		// state.createtime = data.userinfo.createtime;
		// state.logincount = data.userinfo.logincount;
		// state.last_logintime = data.userinfo.last_logintime;
		// state.last_loginip = data.userinfo.last_loginip;
		state.balance = data.userinfo.balance;
		state.status = data.userinfo.status;
		state.token = data.userinfo.token;
		// state.mobilecode = data.userinfo.mobilecode;
		// state.codestatus = data.userinfo.codestatus;
		owner.setState(state);
		return callback();
	};

	/**
	 * 获取当前状态
	 **/  
	owner.getState = function() {
		var stateText = localStorage.getItem('$state') || "{}";
		return JSON.parse(stateText);
	};

	/**
	 * 设置当前状态
	 **/
	owner.setState = function(state) {
		localStorage.setItem('$state', JSON.stringify(state));
	};
	
	owner.sendSMS = function(obj, phone, callback){
		callback = callback || mui.noop;
		var _this = obj;
		var time = 150;
		var timer = null;
		if(!checkMobile(phone)){
			return callback("请输入有效的手机号");
		}
		mui.ajax(serverUrl + 'MyCenter/GetMobileCode', {
			data: {
				mobile: phone
			},
			async: true,
			type: 'post',
			timeout: 10000,
			dataType: 'json',
			headers: {
				"Content-Type": "application/json"
			},
			success: function(data) {
				if(data.status == 1) {
					mui.toast(data.info);
					timer = setInterval(function() {
						_this.disabled = true;
						time--;
						_this.innerText = time + "秒";
						if(time == 0) {
							clearInterval(timer);
							_this.innerText = "重新获取";
							_this.disabled = false;
						}
					}, 1000)
				} else {
					return callback(data.info);
				}
			},
			error: function(xhr, type, errorThrown) {
				return callback("亲，您的网络环境不稳定，请稍后再试！");
			}
		});
	};
	
	owner.feedback = function(backInfo, callback) {
		callback = callback || $.noop;
		backInfo = backInfo || {};
		backInfo.userid = backInfo.userid || '';
		backInfo.token = backInfo.token || '';
		
		$.ajax(serverUrl+'FeedBack/FeedBack', {
			data: {
				userid: backInfo.userid,
				name: backInfo.name,
				code: backInfo.code,
				located: backInfo.located,
				type: backInfo.type,
				describe: backInfo.describe,
				token: backInfo.token
			},
			dataType: 'json', //服务器返回json格式数据
			type: 'post', //HTTP请求类型
			timeout: 10000, //超时时间设置为10秒；
			success: function(data) {
				console.log(JSON.stringify(data));
				if(data.status == 1) {
					callback(data.info);
				} else {
					callback(data.info);
				}
			},
			error: function(xhr, type, errorThrown) {
				callback("亲，您的网络环境不稳定，请稍后再试！");
			}
		});
	};
	
}(mui, window.app = {}));