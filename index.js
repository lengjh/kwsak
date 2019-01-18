(function () {

	/**
	* @constructor Events
	* @description 事件触发，监听	 
	*/
	function Events() { }
	Events.prototype = {
		constructor: Events,
		__handles: {},
		__events: function () { },
		on: function (eventName, callback) {
			callback = callback || function () { };
			if (!this.__handles[eventName]) {
				this.__handles[eventName] = [];
			}
			this.__handles[eventName].push(callback);
		},
		emit: function () {
			var arr = [];
			for (var i = 0, len = arguments.length; i < len; i++) {
				arr.push(arguments[i]);
			}
			arr.push({ eventType: arr.shift() });
			this.__events({ eventType: arguments[0] });
			//你的代码
			if (this.__handles[arguments[0]]) {
				for (var i = 0; i < this.__handles[arguments[0]].length; i++) {
					this.__handles[arguments[0]][i].apply(this, arr);
				}
			}
		}
	};
	Events.toString = function () {
		return 'Listen Or emit Events';
	};
	function IsType() { };

	IsType.prototype = {
		constructor: IsType,
		is: function (obj, type) {
			return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase() === (type).toLowerCase();
		},
		isArray: function (obj) {
			return this.is(obj, 'array');
		},
		isObject: function (obj) {
			return this.is(obj, 'object');
		},
		isFunction: function (obj) {
			return this.is(obj, 'function');
		},
		isString: function (obj) {
			return this.is(obj, 'string');
		},
		isNumber: function (obj) {
			return this.is(obj, 'number') && isFinite(obj);
		},
		isElement: function (node) {
			return node && node.tagName && node.tagType;
		}
	};

	var __isType = new IsType();
	/**
	* [copy description]
	* @return {[type]} [description]
	*/

	var __copy = function copy() {
		var newObject = {};
		var obj = arguments[0];

		if (!__isType.isObject(obj)) {
			return obj;
		}
		for (var key in obj) {
			if (__isType.isObject(obj[key])) {

				if (__isType.isArray(obj[key])) {

					newObject[key] = [];
					for (var i = 0; i < obj[key].length; i++) {
						newObject[key].push(copy(obj[key][i]));
					}

				} else {
					newObject[key] = copy(obj[key]);
				}

			} else {
				newObject[key] = obj[key];
			}
		}

		return newObject;
	};



	/**
	* [extend description]
	* @param  {[type]} superClass [description]
	* @return {[type]}             [description]
	*/
	var __extend = function (subType, superClass) {
		var F = function () { };
		F.prototype = superClass.prototype;
		var obj = new F();
		for (var key in obj) {
			if (key !== 'constructor') {
				subType.prototype[key] = obj[key];
			}
		}
		subType.constructor = subType;
		return F;
	};


	/**
	 * @description 获取指定范围数字
	 */
	var __getRange = function (start, end) {
		var temp;
		if (!(undefined !== start || undefined !== end)) {
			start = 0;
			end = 10000;
		} else if (undefined === end) {
			end = start;
			start = 0;
		} else if (start > end) {
			temp = start;
			start = end;
			end = temp;
		}
		return start + Math.floor(Math.random() * (end - start));
	};


	var __getTimesTamp = function () {
		return parseInt(new Date().getTime() / 1000) + '';
	};
	/**
	* 补充数字
	* @param  {[Number]} number [要修复的数]
	* @param  {[Number]} length [修复后为几位数]
	* @return {[String]}        [返回结果]
	*/
	var __fixNumber = function fix(number, length) {
		var len = length || fix.size || 0;
		var strList = [];
		len = len - (number.toString()).length;
		for (var l = 0; l < len; l++) {
			strList.push(0);
		}
		return strList.join('') + number;
	};

	/**
	* 截取字符串
	* @param  {[type]} str    [description]
	* @param  {[type]} length [description]
	* @param  {[type]} symbol [description]
	* @return {[type]}        [description]
	*/
	var __slice = function (str, length, symbol) {
		var result = '',
			sym = undefined === symbol ? '...' : symbol;

		if (!str || typeof str !== 'string' || !length) {
			result = str;
		} else {
			if (str.length < length) {
				sym = '';
			}
			result = str.slice(0, length) + sym;
		}

		return result;
	};

	var __each = function (obj, fn) {
		if (__isType.isArray(obj)) {
			for (var i = 0; i < obj.length; i++) {
				if (false === fn.call(this, obj[i], i, obj)) {
					break;
				}
			}
		} else if (__isType.isObject(obj)) {
			for (var key in obj) {
				if (false === fn.call(this, key, obj[key], obj)) {
					break;
				}
			}
		} else {

		}
		return this;
	};
	var __clear = function () {
		try {
			process.stdout.write(process.platform === 'win32' ? '\x1Bc' : '\x1B[2J\x1B[3J\x1B[H');
		} catch (error) {
			console.clear();
		}
	};
	var __getStr = function (length) {
		var len = this.isNumber(length) ? length : 16;
		var temp = [];
		for (var i = 0; i <= Math.floor(len / 11); i++) {
			temp.push(Math.random().toString(36).substr(2));
		}
		return temp.join('').substring(len, -1).toUpperCase();
	};

	var __normalArray = function (array) {
		var array = [];
		if (__isType.isArray(array)) {
			__each.each(function (item) {
				if (undefined !== item) {
					array.push(item);
				}
			});
		} else { }
		return array;
	};

	var __inArray = function (item, obj) {
		var _index = -1;
		this.each(obj, function (_item, index, obj) {
			if (item === _item) {
				_index = index;
				return false;
			}
		});
		return _index;
	};
	var __toArray = function (obj) {
		var arr = [];

		for (var i = 0; i < obj.length; i++) {
			arr.push(obj[i]);
		}
		return arr;
	};
	var __strimHtml = function (str) {
		var reg = /<(?:.|\s)*?>/ig;
		return str.replace(reg, '');
	};


	/**
	* [assign description]
	* @return {[type]} [description]
	*/
	var __assign = function () {
		var obj = {};
		for (var i = 0; i < arguments.length; i++) {
			for (var key in arguments[i]) {
				if (undefined !== arguments[i][key]) {
					obj[key] = arguments[i][key];
				}
			}
		}
		return obj;
	};

	if (typeof Function.inherit !== 'function') {
		Function.prototype.inherit = function () {
			var _this = this,
				arg = arguments;

			arg = __toArray(arg);
			if (!arg.length) {
				return false;
			}
			__each(arg, function (item) {
				__extend(_this, item);
			});
			return true;
		};

	}
	if (typeof Function.add !== 'function') {
		Function.prototype.add = function (name, fn, des) {
			this.prototype[name] = fn;
			if (this.prototype[name]) {
				try {
					this.prototype[name].toString = function () {
						return des || 'Add attr or mehtod In Prototype';
					};
				} catch (error) { }
			}
			return this;
		};
		Function.prototype.add.toString = function () {
			return 'Add attr or mehtod In Prototype!';
		};
	}
	if (typeof Function.static !== 'function') {
		Function.prototype.static = function (name, fn, des) {
			this[name] = fn;
			this[name].toString = function () {
				return des;
			};
			return this;
		};
		Function.static.toString = function () {
			return 'Add static attr or mehtod In Prototype!';
		};
	}

	function Utils() { }

	Utils
		.add('constructor', Utils)
		.add('strimHtml', __strimHtml)
		.add('fixNumber', __fixNumber)
		.add('getTimesTamp', __getTimesTamp)
		.add('copy', __copy, '深度复制')
		.add('slice', __slice, '返回截取后的字符')
		.add('extend', __extend)
		.add('assign', __assign)
		.add('getRange', __getRange, '获取指定范围内的数值')
		.add('getStr', __getStr)
		.add('each', __each)
		.add('normalArray', __normalArray)
		.add('inArray', __inArray)
		.add('clear', __clear);


	var __formatForIE = function (time) {
		time = time || '';
		time = time.toString();
		return time.replace(/-/g, '/');
	}

	/**
	 * @description 时间日期处理
	 * @param {初始参数} options 
	 */
	function MyDate(options) {

		this.ops = __assign({
			format: 'yyyy-mm-dd',
			dateSeparator: '-',
			timeSeparator: ':',
			dateTimeSeparator: ' ',
			yearAfter: '', //'年',
			monthAfter: '', // '月',
			dateAfter: '', //'日',
			hourAfter: '', //'时',
			minuteAfter: '', // '分',
			secondAfter: '', // '秒',
			newDate: null,
			year: 0,
			month: 0,
			date: 0,
			hours: 0,
			minutes: 0,
			seconds: 0
		}, options);

		this.ops.format = this.ops.format.toLowerCase();

		this._date = this.ops.newDate ? new Date(__formatForIE(this.ops.newDate)) : new Date();
		this._date.setFullYear(this._date.getFullYear() + this.ops.year);
		this._date.setMonth(this._date.getMonth() + this.ops.month);
		this._date.setDate(this._date.getDate() + this.ops.date);

		this._date.setHours(this._date.getHours() + this.ops.hours);
		this._date.setMinutes(this._date.getMinutes() + this.ops.minutes);
		this._date.setSeconds(this._date.getSeconds() + this.ops.seconds);

	}
	MyDate
		.static('getDates', function (startTime, endTime) {
			var date = new MyDate();
			var start, end;
			if (arguments.length === 2) {
				start = new Date(__formatForIE(startTime));
				end = new Date(__formatForIE(endTime));
			} else if (arguments.length === 1) {
				start = new Date(date.toDateString());
				end = new Date(arguments[0]);
			} else {
				throw '参数错误:缺少开始时间，结束时间';
			}
			if (isNaN(start) || isNaN(end)) {
				throw '参数错误:参数不合法';
			}
			return Math.floor((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
		}, '返回两个时间的天数')
		.static('isLeapYear', function (year) {
			return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
		});

	MyDate
		.add('toString', function (str) {
			var y = this._date.getFullYear(),
				m = __fixNumber(this._date.getMonth() + 1, 2),
				_m = this._date.getMonth() + 1,
				d = __fixNumber(this._date.getDate(), 2),
				_d = this._date.getDate(),
				h = __fixNumber(this._date.getHours(), 2),
				_h = this._date.getHours(),
				i = __fixNumber(this._date.getMinutes(), 2),
				_i = this._date.getMinutes(),
				s = __fixNumber(this._date.getSeconds(), 2),
				_s = this._date.getSeconds();

			str = str || 'yy-mm-dd';

			str = str.replace(/y{1,}/ig, y);

			str = str.replace(/m{2,}/ig, m);
			str = str.replace(/m{1}/ig, _m);

			str = str.replace(/d{2}/ig, d);
			str = str.replace(/d{1,}/ig, _d);

			str = str.replace(/h{2}/ig, h);
			str = str.replace(/h{1,}/ig, _h);

			str = str.replace(/i{2,}/ig, i);
			str = str.replace(/i{1}/ig, _i);

			str = str.replace(/s{2}/ig, s);
			str = str.replace(/s{1,}/ig, _s);

			return str;
		})
		.add('toDateString', function (options) {
			var ops = __assign(options);
			var result = [];
			var year = __fixNumber(this._date.getFullYear(), 2) + this.ops.yearAfter;
			var month = __fixNumber(this._date.getMonth() + 1, 2) + this.ops.monthAfter;
			var date = __fixNumber(this._date.getDate(), 2) + this.ops.dateAfter;
			var format = ops.format || this.ops.format;
			switch (format) {
				case 'yyyy-mm-dd':
					result = [
						year,
						month,
						date
					];
					break;
				case 'mm-dd-yyyy':
					result = [
						month,
						date,
						year
					];
					break;
				case 'dd-mm-yyyy':
					result = [
						date,
						month,
						year
					];
					break;

				default:
					return this.toString();

			}

			return result.join(this.ops.dateSeparator);
		})
		/**
		 * @description 
		 */
		.add('toTimeString', function () {
			var result = [
				__fixNumber(this._date.getHours(), 2) + this.ops.hourAfter,
				__fixNumber(this._date.getMinutes(), 2) + this.ops.minuteAfter,
				__fixNumber(this._date.getSeconds(), 2) + this.ops.secondAfter
			];
			return result.join(this.ops.timeSeparator);
		})
		.add('toDateTimeString', function () {
			return this.toDateString() + this.ops.dateTimeSeparator + this.toTimeString();
		});

	/**
	 * 
	 */

	var getColor = function getColor(key) {
		var obj = {
			start: {
				black: '\033[22;30m',
				red: '\033[22;31m',
				green: '\033[22;32m',
				brown: '\033[22;33m',
				blue: '\033[22;34m',
				magenta: '\033[22;35m',
				cyan: '\033[22;36m',
				gray: '\033[22;37m',
				darkGray: '\033[01;30m',
				lightRed: '\033[01;31m',
				lightGreen: '\033[01;32m',
				yellow: '\033[01;33m',
				lightBlue: '\033[01;34m',
				lightMagenta: '\033[01;35m',
				lightCyan: '\033[01;36m',
				white: '\033[01;37m'
			},
			end: '\033[0m'
		};
		return function (string) {
			return obj.start[key] + string + obj.end;
		};
	}
	/**
	 * ColorConsole
	 */
	function ColorConsole(options) {
		options = __assign({
			dev: true
		}, options);
		this.dev = options.dev;
	}

	ColorConsole
		.add('clear', __clear)
		.add('__pub', function (ops, msg, color) {
			var
				date = new MyDate(),
				time = '';
			ops = __assign(ops);
			if (ops.showTime) {
				time = '[' + date.toTimeString() + '] ';
			}
			if (ops.clear) {
				this.clear();
			}
			if (__isType.isObject(msg)) {
				msg = JSON.stringify(msg);
			}
			if (typeof process === 'object') {
				this.__print(this.getColor(color)(time + msg));
			} else {
				this.__print('%c' + time + msg, 'color:' + color);
			}
		})
		.add('__print', function () {
			var arg = arguments;
			arg = __toArray(arg);
			try {
				if (this.dev) {
					console.log.apply(this, arg);
				}

			} catch (error) { }
		})
		.add('getColor', function (key) {
			var obj = {
				start: {
					black: '\033[22;30m',
					red: '\033[22;31m',
					green: '\033[22;32m',
					brown: '\033[22;33m',
					blue: '\033[22;34m',
					magenta: '\033[22;35m',
					cyan: '\033[22;36m',
					gray: '\033[22;37m',
					darkGray: '\033[01;30m',
					lightRed: '\033[01;31m',
					lightGreen: '\033[01;32m',
					yellow: '\033[01;33m',
					lightBlue: '\033[01;34m',
					lightMagenta: '\033[01;35m',
					lightCyan: '\033[01;36m',
					white: '\033[01;37m'
				},
				end: '\033[0m'
			};
			return function (string) {
				return obj.start[key] + string + obj.end;
			};
		})
		.add('log', function (msg) {
			this.__print.apply(this, arguments);
		})
		.add('success', function (msg, ops) {
			this.__pub(ops, msg, 'green');
		})
		.add('error', function (msg, ops) {
			this.__pub(ops, msg, 'red');
		})
		.add('info', function (msg, ops) {
			this.__pub(ops, msg, 'cyan');
		})
		.add('warn', function (msg, ops) {
			this.__pub(ops, msg, 'yellow');
		})
		.add('color', function (list, ops) {
			options = __assign({
				clear: false,
				showTime: true,
				beforeContent: ''
			}, ops);
			var date = new MyDate();
			list = typeof list === 'string' ? [list] : list;
			if (options.clear) {
				this.clear();
			}
			console.log(
				this.getColor('lightCyan')(options.beforeContent + ' ') +
				(options.showTime ? (this.getColor('green')('[' + date.toDateTimeString() + ']') + ' ') : '') +
				this.getColor('magenta')(list[0] || '') + ' ' +
				this.getColor('yellow')(list[1] || '') + ' ' +
				this.getColor('lightRed')(list[2] || '') + ' ' +
				this.getColor('cyan')(list[3] || '')
			);
		})
		.add('config', function (options) {
			options = __assign(options);
			this.dev = options.dev;
		});

	var __log = new ColorConsole();

	function Times(options) {
		var ops = __copy(options);
		this.dev = ops.dev || false;
		this.ColorConsole = ops.ColorConsole;
		if (this.ColorConsole) {
			this.log = new ColorConsole();
		}
	}
	Times.add('info', {});
	Times.add('name', 't');
	Times.add('start', function (id) {
		var date = new Date();
		this.info['start' + id] = date.getTime();
	});
	Times.add('end', function (id) {
		var date = new Date();
		var result = '';
		this.info['end' + id] = date.getTime();
		result = this.info['end' + id] - this.info['start' + id];

		if (isNaN(result)) {
			this.log.error('Not defined start id[' + id + ']');
		} else {
			this.log.success('[The ID "' + id + '" execution time ] ' + result + 'ms');
		}
		return result;
	});

	var times = new Times({ dev: true, ColorConsole: ColorConsole });


	/**
	* [description]
	* @param  {[type]} global    [description]
	* @param  {[type]} undefined [description]
	* @return {[type]}           [description]
	*/

	var KW = function () { };

	KW.inherit(Events, IsType, Utils);

	KW
		.add('name', 'Kingwell')
		.add('version', '0.0.1')
		.add('time', times)
		.add('config', function (options) {
			options = this.assign(options);
			this.dev = options.dev;
		})
		.add('date', function (arg) {
			return new MyDate(arg);
		});



	var kw = new KW();
	kw.Events = Events;
	kw.Utils = Utils;
	kw.MyDate = MyDate;
	kw.console = __log;

	/**
	 * 添加Nodejs,Browser支持
	 */
	try {
		module.exports = kw;
	} catch (error) {

		if (typeof define === "function" && define.amd) {
			define("__", [], function () { return kw; });
		} else {
			window.__ = window.kw = kw;
		}
	}

})();