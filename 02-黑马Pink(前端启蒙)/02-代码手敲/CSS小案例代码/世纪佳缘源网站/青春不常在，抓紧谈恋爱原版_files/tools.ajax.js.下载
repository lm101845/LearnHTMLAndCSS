(function() {
	var AJAX = {
	};
	// 基本的扩展机制
	AJAX.extend = function(des, src) {
		if(src instanceof Array) {
			for(var i = 0, len = src.length; i < len; i++)
				AJAX.extend(des, src[i]);
		}
		for( var i in src) {
			des[i] = src[i];
		} 
		return des;
	};
	var toString = Object.prototype.toString;
	// 基本工具
	AJAX.extend(AJAX, {
		noop: function() {},
		isArray: function(obj) {
			return toString.call(obj) === "[object Array]";
		},
		isFunction: function(obj) {
			return toString.call(obj) === "[object Function]";
		},
		each: function(object, callback) {
			var name, i = 0,
			length = object.length,
			isObj = length === undefined || AJAX.isFunction(object);
			if (isObj) {
				for (name in object)
					if (callback.call(object[name], name, object[name]) === false )  break;
			} else {
				for (var value = object[0];
				i < length && callback.call(value, i, value) !== false; value = object[++i] ) {}
			}
			return object;
		}
	});
	// ajax扩展
	var rquery = /\?/,
		r20 = /%20/g;
	AJAX.extend(AJAX, {
		get: function(url, data, callback) {
			if (AJAX.isFunction(data)) {
				callback = data;
				data = null;
			}
			return AJAX.ajax({
				type: "GET",
				url: url,
				data: data,
				success: callback
			});
		},
		post: function(url, data, callback) {
			if ( AJAX.isFunction( data ) ) {
				callback = data;
				data = {};
			}
			return AJAX.ajax({
				type: "POST",
				url: url,
				data: data,
				success: callback
			});
		},
		settings: {
			// cache问题可以自己加上时间戳或者使用POST解决
			// ifModified暂时不支持
			// X-Requested-With 不支持
			// Accept头 不支持
			// 数据类型 只支持txt
			// XML 不支持
			url: location.href,
			timeout: 0,
			type: "POST",
			contentType: "application/x-www-form-urlencoded",
			// 异步
			async: true,
			// 如果设置了context回调函数中会做为this
			context: null,
			// 回调 beforeSend, error, success, complete
			beforeSend: null,
			error: null,
			success: null,
			complete: null,
			// request object
			xhr: window.XMLHttpRequest && (window.location.protocol !== "file:" || !window.ActiveXObject) ?
			function() {
				return new window.XMLHttpRequest();
			} :
			function() {
				try {
					return new window.ActiveXObject("Microsoft.XMLHTTP");
				} catch(e) {}
			}
		},
		setup: function(settings) {
			AJAX.extend(AJAX.settings, settings);
		},
		ajax: function(newSettings) {
			// 合并默认的设置和新设置
			var s = AJAX.extend({}, [AJAX.settings, newSettings]);
			var status = null, data,
			callbackContext = newSettings && newSettings.context || s,
			type = s.type.toUpperCase();

			// 将data转化为查询串形式 
			if (s.data && typeof s.data !== "string") {
				s.data = AJAX.param(s.data);
			}
			// 如果GET方式, 把数据附加到url上
			if (s.data && type === "GET") {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.data;
			}
			var requestDone = false;
			// 创建请求对象
			var xhr = s.xhr();
			if ( !xhr ) {
				return;
			}
			// 打开连接
			xhr.open(type, s.url, s.async);

			// 设置一些请求头
			try {
				if (s.data || origSettings && origSettings.contentType ) {
					xhr.setRequestHeader("Content-Type", s.contentType);
				}
			} catch(e) {}

			// 发送前
			if (s.beforeSend && s.beforeSend.call(callbackContext, xhr, s) === false ) {
				// close opended socket
				xhr.abort();
				return false;
			}
			var onreadystatechange = xhr.onreadystatechange = function(isTimeout) {
				// 终止
				if ( !xhr || xhr.readyState === 0 || isTimeout === "abort" ) {
					if (!requestDone) {
						complete();
					}

					requestDone = true;
					if (xhr) {
						xhr.onreadystatechange = AJAX.noop;
					}
				// 完成或者超时
				} else if (!requestDone && xhr && (xhr.readyState === 4 || isTimeout === "timeout")) {
					requestDone = true;
					xhr.onreadystatechange = AJAX.noop;
					status = isTimeout === "timeout" ?
					"timeout" :
					!AJAX.httpSuccess(xhr) ?
					"error" : AJAX.httpNotModified(xhr, s.url) ?
					"notmodified" : "success";

					if (status === "success") {
						data = xhr.responseText;
					}

					if (status === "success" || status === "notmodified") {
						success();
					} else {
						error(null);
					}

					// Fire the complete handlers
					complete();

					if (isTimeout === "timeout") {
						xhr.abort();
					}

					// Stop memory leaks
					if (s.async) {
						xhr = null;
					}
				}
			}
			try {
				var oldAbort = xhr.abort;
				xhr.abort = function() {
					if ( xhr ) {
						oldAbort.call( xhr );
					}
					onreadystatechange( "abort" );
				};
			} catch(e) {}
			// 超时控制
			if (s.async && s.timeout > 0) {
				setTimeout(function() {
					// Check to see if the request is still happening
					if (xhr && !requestDone) {
						onreadystatechange("timeout");
					}
				}, s.timeout);
			}
			// 发送请求
			try {
				xhr.send(type === "POST" ? s.data : null);
			} catch(e) {
				error(e);
				complete();
			}
			// firefox 1.5 doesn't fire statechange for sync requests
			if ( !s.async ) {
				onreadystatechange();
			}			
			function error(e) {
				if (s.error)
					s.error.call(callbackContext, xhr, status, e);
			}
			function success() {
				if (s.success)
					s.success.call(callbackContext, data, status, xhr);
			}
			function complete() {
				if (s.complete)
					s.complete.call(callbackContext, xhr, status);
			}
			return xhr;
		},
		httpNotModified: function(xhr, url) {
			// Opera returns 0 when status is 304
			return xhr.status === 304 || xhr.status === 0;
		},
		httpSuccess: function(xhr) {
			try {
				return !xhr.status && location.protocol === "file:" ||
				(xhr.status >= 200 && xhr.status < 300) ||
				xhr.status === 304 || xhr.status === 1223 || xhr.status === 0;
			} catch(e) {}
			return false;
		},
		param: function(a) {
			var s = [];
			for (var key in a) {
				buildParams(key, a[key]);
			}
			// Return the resulting serialization
			return s.join("&").replace(r20, "+");

			function buildParams(key, obj) {
				if (AJAX.isArray(obj)) {
					// Serialize array item.
					AJAX.each(obj, function(i, v) {
							buildParams(key + "[" + (typeof v === "object" || AJAX.isArray(v) ? i : "" ) + "]", v);
					});
					
				} else if (obj != null && typeof obj === "object" ) {
					// Serialize object item.
					AJAX.each(obj, function(k, v) {
						buildParams(key + "[" + k + "]", v);
					});
				} else {
					// Serialize scalar item.
					add(key, obj);
				}
			}
			function add(key, value) {
				s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
			}
		}
	});
	window.ajax = AJAX;
	if(typeof window.JY !== "object") {
		window.JY = {};
	}
	if(typeof window.JY.tools !== "object") {
		window.JY.tools = {};
	}
	//window.JY.tools 
	window.JY.tools.ajax = AJAX;
})();
