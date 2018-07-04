/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
(function (global, factory) {
<<<<<<< HEAD
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory()
	: typeof define === 'function' && define.amd ? define(factory)
	: (global.Vue = factory())
}(this, function () {
	'use strict'

	/*  */

	var emptyObject = Object.freeze({})

	// these helpers produces better vm code in JS engines due to their
	// explicitness and function inlining
=======
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
		typeof define === 'function' && define.amd ? define(factory) :
			(global.Vue = factory());
}(this, (function () { 'use strict';

	/*  */

	var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
>>>>>>> origin/master
	function isUndef (v) {
		return v === undefined || v === null
	}

	function isDef (v) {
		return v !== undefined && v !== null
	}

	function isTrue (v) {
		return v === true
	}

	function isFalse (v) {
		return v === false
	}

	/**
	 * Check if value is primitive
	 */
	function isPrimitive (value) {
		return (
			typeof value === 'string' ||
			typeof value === 'number' ||
			// $flow-disable-line
			typeof value === 'symbol' ||
			typeof value === 'boolean'
		)
	}

	/**
	 * Quick object check - this is primarily used to tell
	 * Objects from primitive values when we know the value
	 * is a JSON-compliant type.
	 */
	function isObject (obj) {
		return obj !== null && typeof obj === 'object'
	}

	/**
	 * Get the raw type string of a value e.g. [object Object]
	 */
<<<<<<< HEAD
	var _toString = Object.prototype.toString
=======
	var _toString = Object.prototype.toString;
>>>>>>> origin/master

	function toRawType (value) {
		return _toString.call(value).slice(8, -1)
	}

	/**
	 * Strict object type check. Only returns true
	 * for plain JavaScript objects.
	 */
	function isPlainObject (obj) {
		return _toString.call(obj) === '[object Object]'
	}

	function isRegExp (v) {
		return _toString.call(v) === '[object RegExp]'
	}

	/**
	 * Check if val is a valid array index.
	 */
	function isValidArrayIndex (val) {
<<<<<<< HEAD
		var n = parseFloat(String(val))
=======
		var n = parseFloat(String(val));
>>>>>>> origin/master
		return n >= 0 && Math.floor(n) === n && isFinite(val)
	}

	/**
	 * Convert a value to a string that is actually rendered.
	 */
	function toString (val) {
		return val == null
			? ''
			: typeof val === 'object'
				? JSON.stringify(val, null, 2)
				: String(val)
	}

	/**
	 * Convert a input value to a number for persistence.
	 * If the conversion fails, return original string.
	 */
	function toNumber (val) {
<<<<<<< HEAD
		var n = parseFloat(val)
=======
		var n = parseFloat(val);
>>>>>>> origin/master
		return isNaN(n) ? val : n
	}

	/**
	 * Make a map and return a function for checking if a key
	 * is in that map.
	 */
	function makeMap (
		str,
		expectsLowerCase
	) {
<<<<<<< HEAD
		var map = Object.create(null)
		var list = str.split(',')
		for (var i = 0; i < list.length; i++) {
			map[list[i]] = true
		}
		return expectsLowerCase
			? function (val) { return map[val.toLowerCase()] }
			: function (val) { return map[val] }
=======
		var map = Object.create(null);
		var list = str.split(',');
		for (var i = 0; i < list.length; i++) {
			map[list[i]] = true;
		}
		return expectsLowerCase
			? function (val) { return map[val.toLowerCase()]; }
			: function (val) { return map[val]; }
>>>>>>> origin/master
	}

	/**
	 * Check if a tag is a built-in tag.
	 */
<<<<<<< HEAD
	var isBuiltInTag = makeMap('slot,component', true)
=======
	var isBuiltInTag = makeMap('slot,component', true);
>>>>>>> origin/master

	/**
	 * Check if a attribute is a reserved attribute.
	 */
<<<<<<< HEAD
	var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is')
=======
	var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');
>>>>>>> origin/master

	/**
	 * Remove an item from an array
	 */
	function remove (arr, item) {
		if (arr.length) {
<<<<<<< HEAD
			var index = arr.indexOf(item)
=======
			var index = arr.indexOf(item);
>>>>>>> origin/master
			if (index > -1) {
				return arr.splice(index, 1)
			}
		}
	}

	/**
	 * Check whether the object has the property.
	 */
<<<<<<< HEAD
	var hasOwnProperty = Object.prototype.hasOwnProperty
=======
	var hasOwnProperty = Object.prototype.hasOwnProperty;
>>>>>>> origin/master
	function hasOwn (obj, key) {
		return hasOwnProperty.call(obj, key)
	}

	/**
	 * Create a cached version of a pure function.
	 */
	function cached (fn) {
<<<<<<< HEAD
		var cache = Object.create(null)
		return function cachedFn (str) {
			var hit = cache[str]
			return hit || (cache[str] = fn(str))
		}
=======
		var cache = Object.create(null);
		return (function cachedFn (str) {
			var hit = cache[str];
			return hit || (cache[str] = fn(str))
		})
>>>>>>> origin/master
	}

	/**
	 * Camelize a hyphen-delimited string.
	 */
<<<<<<< HEAD
	var camelizeRE = /-(\w)/g
	var camelize = cached(function (str) {
		return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : '' })
	})
=======
	var camelizeRE = /-(\w)/g;
	var camelize = cached(function (str) {
		return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
	});
>>>>>>> origin/master

	/**
	 * Capitalize a string.
	 */
	var capitalize = cached(function (str) {
		return str.charAt(0).toUpperCase() + str.slice(1)
<<<<<<< HEAD
	})
=======
	});
>>>>>>> origin/master

	/**
	 * Hyphenate a camelCase string.
	 */
<<<<<<< HEAD
	var hyphenateRE = /\B([A-Z])/g
	var hyphenate = cached(function (str) {
		return str.replace(hyphenateRE, '-$1').toLowerCase()
	})
=======
	var hyphenateRE = /\B([A-Z])/g;
	var hyphenate = cached(function (str) {
		return str.replace(hyphenateRE, '-$1').toLowerCase()
	});
>>>>>>> origin/master

	/**
	 * Simple bind polyfill for environments that do not support it... e.g.
	 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
	 * now more performant in most browsers, but removing it would be breaking for
	 * code that was able to run in PhantomJS 1.x, so this must be kept for
	 * backwards compatibility.
	 */

	/* istanbul ignore next */
	function polyfillBind (fn, ctx) {
		function boundFn (a) {
<<<<<<< HEAD
			var l = arguments.length
=======
			var l = arguments.length;
>>>>>>> origin/master
			return l
				? l > 1
					? fn.apply(ctx, arguments)
					: fn.call(ctx, a)
				: fn.call(ctx)
		}

<<<<<<< HEAD
		boundFn._length = fn.length
=======
		boundFn._length = fn.length;
>>>>>>> origin/master
		return boundFn
	}

	function nativeBind (fn, ctx) {
		return fn.bind(ctx)
	}

	var bind = Function.prototype.bind
		? nativeBind
<<<<<<< HEAD
		: polyfillBind
=======
		: polyfillBind;
>>>>>>> origin/master

	/**
	 * Convert an Array-like object to a real Array.
	 */
	function toArray (list, start) {
<<<<<<< HEAD
		start = start || 0
		var i = list.length - start
		var ret = new Array(i)
		while (i--) {
			ret[i] = list[i + start]
=======
		start = start || 0;
		var i = list.length - start;
		var ret = new Array(i);
		while (i--) {
			ret[i] = list[i + start];
>>>>>>> origin/master
		}
		return ret
	}

	/**
	 * Mix properties into target object.
	 */
	function extend (to, _from) {
		for (var key in _from) {
<<<<<<< HEAD
			to[key] = _from[key]
=======
			to[key] = _from[key];
>>>>>>> origin/master
		}
		return to
	}

	/**
	 * Merge an Array of Objects into a single Object.
	 */
	function toObject (arr) {
<<<<<<< HEAD
		var res = {}
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]) {
				extend(res, arr[i])
=======
		var res = {};
		for (var i = 0; i < arr.length; i++) {
			if (arr[i]) {
				extend(res, arr[i]);
>>>>>>> origin/master
			}
		}
		return res
	}

	/**
	 * Perform no operation.
	 * Stubbing args to make Flow happy without leaving useless transpiled code
	 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
	 */
	function noop (a, b, c) {}

	/**
	 * Always return false.
	 */
<<<<<<< HEAD
	var no = function (a, b, c) { return false }
=======
	var no = function (a, b, c) { return false; };
>>>>>>> origin/master

	/**
	 * Return same value
	 */
<<<<<<< HEAD
	var identity = function (_) { return _ }
=======
	var identity = function (_) { return _; };
>>>>>>> origin/master

	/**
	 * Generate a static keys string from compiler modules.
	 */
	function genStaticKeys (modules) {
		return modules.reduce(function (keys, m) {
			return keys.concat(m.staticKeys || [])
		}, []).join(',')
	}

	/**
	 * Check if two values are loosely equal - that is,
	 * if they are plain objects, do they have the same shape?
	 */
	function looseEqual (a, b) {
		if (a === b) { return true }
<<<<<<< HEAD
		var isObjectA = isObject(a)
		var isObjectB = isObject(b)
		if (isObjectA && isObjectB) {
			try {
				var isArrayA = Array.isArray(a)
				var isArrayB = Array.isArray(b)
=======
		var isObjectA = isObject(a);
		var isObjectB = isObject(b);
		if (isObjectA && isObjectB) {
			try {
				var isArrayA = Array.isArray(a);
				var isArrayB = Array.isArray(b);
>>>>>>> origin/master
				if (isArrayA && isArrayB) {
					return a.length === b.length && a.every(function (e, i) {
						return looseEqual(e, b[i])
					})
				} else if (!isArrayA && !isArrayB) {
<<<<<<< HEAD
					var keysA = Object.keys(a)
					var keysB = Object.keys(b)
=======
					var keysA = Object.keys(a);
					var keysB = Object.keys(b);
>>>>>>> origin/master
					return keysA.length === keysB.length && keysA.every(function (key) {
						return looseEqual(a[key], b[key])
					})
				} else {
					/* istanbul ignore next */
					return false
				}
			} catch (e) {
				/* istanbul ignore next */
				return false
			}
		} else if (!isObjectA && !isObjectB) {
			return String(a) === String(b)
		} else {
			return false
		}
	}

	function looseIndexOf (arr, val) {
		for (var i = 0; i < arr.length; i++) {
			if (looseEqual(arr[i], val)) { return i }
		}
		return -1
	}

	/**
	 * Ensure a function is called only once.
	 */
	function once (fn) {
<<<<<<< HEAD
		var called = false
		return function () {
			if (!called) {
				called = true
				fn.apply(this, arguments)
=======
		var called = false;
		return function () {
			if (!called) {
				called = true;
				fn.apply(this, arguments);
>>>>>>> origin/master
			}
		}
	}

<<<<<<< HEAD
	var SSR_ATTR = 'data-server-rendered'
=======
	var SSR_ATTR = 'data-server-rendered';
>>>>>>> origin/master

	var ASSET_TYPES = [
		'component',
		'directive',
		'filter'
<<<<<<< HEAD
	]
=======
	];
>>>>>>> origin/master

	var LIFECYCLE_HOOKS = [
		'beforeCreate',
		'created',
		'beforeMount',
		'mounted',
		'beforeUpdate',
		'updated',
		'beforeDestroy',
		'destroyed',
		'activated',
		'deactivated',
		'errorCaptured'
<<<<<<< HEAD
	]
=======
	];
>>>>>>> origin/master

	/*  */

	var config = ({
		/**
		 * Option merge strategies (used in core/util/options)
		 */
		// $flow-disable-line
		optionMergeStrategies: Object.create(null),

		/**
		 * Whether to suppress warnings.
		 */
		silent: false,

		/**
		 * Show production mode tip message on boot?
		 */
<<<<<<< HEAD
		productionTip: 'development' !== 'production',
=======
		productionTip: "development" !== 'production',
>>>>>>> origin/master

		/**
		 * Whether to enable devtools
		 */
<<<<<<< HEAD
		devtools: 'development' !== 'production',
=======
		devtools: "development" !== 'production',
>>>>>>> origin/master

		/**
		 * Whether to record perf
		 */
		performance: false,

		/**
		 * Error handler for watcher errors
		 */
		errorHandler: null,

		/**
		 * Warn handler for watcher warns
		 */
		warnHandler: null,

		/**
		 * Ignore certain custom elements
		 */
		ignoredElements: [],

		/**
		 * Custom user key aliases for v-on
		 */
		// $flow-disable-line
		keyCodes: Object.create(null),

		/**
		 * Check if a tag is reserved so that it cannot be registered as a
		 * component. This is platform-dependent and may be overwritten.
		 */
		isReservedTag: no,

		/**
		 * Check if an attribute is reserved so that it cannot be used as a component
		 * prop. This is platform-dependent and may be overwritten.
		 */
		isReservedAttr: no,

		/**
		 * Check if a tag is an unknown element.
		 * Platform-dependent.
		 */
		isUnknownElement: no,

		/**
		 * Get the namespace of an element
		 */
		getTagNamespace: noop,

		/**
		 * Parse the real tag name for the specific platform.
		 */
		parsePlatformTagName: identity,

		/**
		 * Check if an attribute must be bound using property, e.g. value
		 * Platform-dependent.
		 */
		mustUseProp: no,

		/**
		 * Exposed for legacy reasons
		 */
		_lifecycleHooks: LIFECYCLE_HOOKS
	})

	/*  */

	/**
	 * Check if a string starts with $ or _
	 */
	function isReserved (str) {
<<<<<<< HEAD
		var c = (str + '').charCodeAt(0)
=======
		var c = (str + '').charCodeAt(0);
>>>>>>> origin/master
		return c === 0x24 || c === 0x5F
	}

	/**
	 * Define a property.
	 */
	function def (obj, key, val, enumerable) {
		Object.defineProperty(obj, key, {
			value: val,
			enumerable: !!enumerable,
			writable: true,
			configurable: true
<<<<<<< HEAD
		})
=======
		});
>>>>>>> origin/master
	}

	/**
	 * Parse simple path.
	 */
<<<<<<< HEAD
	var bailRE = /[^\w.$]/
=======
	var bailRE = /[^\w.$]/;
>>>>>>> origin/master
	function parsePath (path) {
		if (bailRE.test(path)) {
			return
		}
<<<<<<< HEAD
		var segments = path.split('.')
		return function (obj) {
			for (var i = 0; i < segments.length; i++) {
				if (!obj) { return }
				obj = obj[segments[i]]
=======
		var segments = path.split('.');
		return function (obj) {
			for (var i = 0; i < segments.length; i++) {
				if (!obj) { return }
				obj = obj[segments[i]];
>>>>>>> origin/master
			}
			return obj
		}
	}

	/*  */

<<<<<<< HEAD
	// can we use __proto__?
	var hasProto = '__proto__' in {}

	// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined'
	var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform
	var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase()
	var UA = inBrowser && window.navigator.userAgent.toLowerCase()
	var isIE = UA && /msie|trident/.test(UA)
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0
	var isEdge = UA && UA.indexOf('edge/') > 0
	var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android')
	var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios')
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge

	// Firefox has a "watch" function on Object.prototype...
	var nativeWatch = ({}).watch

	var supportsPassive = false
	if (inBrowser) {
		try {
			var opts = {}
			Object.defineProperty(opts, 'passive', ({
				get: function get () {
					/* istanbul ignore next */
					supportsPassive = true
				}
			})) // https://github.com/facebook/flow/issues/285
			window.addEventListener('test-passive', null, opts)
		} catch (e) {}
	}

	// this needs to be lazy-evaled because vue may be required before
	// vue-server-renderer can set VUE_ENV
	var _isServer
=======
// can we use __proto__?
	var hasProto = '__proto__' in {};

// Browser environment sniffing
	var inBrowser = typeof window !== 'undefined';
	var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
	var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
	var UA = inBrowser && window.navigator.userAgent.toLowerCase();
	var isIE = UA && /msie|trident/.test(UA);
	var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
	var isEdge = UA && UA.indexOf('edge/') > 0;
	var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
	var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
	var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
	var nativeWatch = ({}).watch;

	var supportsPassive = false;
	if (inBrowser) {
		try {
			var opts = {};
			Object.defineProperty(opts, 'passive', ({
				get: function get () {
					/* istanbul ignore next */
					supportsPassive = true;
				}
			})); // https://github.com/facebook/flow/issues/285
			window.addEventListener('test-passive', null, opts);
		} catch (e) {}
	}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
	var _isServer;
>>>>>>> origin/master
	var isServerRendering = function () {
		if (_isServer === undefined) {
			/* istanbul ignore if */
			if (!inBrowser && !inWeex && typeof global !== 'undefined') {
				// detect presence of vue-server-renderer and avoid
				// Webpack shimming the process
<<<<<<< HEAD
				_isServer = global['process'].env.VUE_ENV === 'server'
			} else {
				_isServer = false
			}
		}
		return _isServer
	}

	// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__
=======
				_isServer = global['process'].env.VUE_ENV === 'server';
			} else {
				_isServer = false;
			}
		}
		return _isServer
	};

// detect devtools
	var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
>>>>>>> origin/master

	/* istanbul ignore next */
	function isNative (Ctor) {
		return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
	}

	var hasSymbol =
		typeof Symbol !== 'undefined' && isNative(Symbol) &&
<<<<<<< HEAD
		typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys)

	var _Set
	/* istanbul ignore if */ // $flow-disable-line
	if (typeof Set !== 'undefined' && isNative(Set)) {
		// use native Set when available.
		_Set = Set
=======
		typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

	var _Set;
	/* istanbul ignore if */ // $flow-disable-line
	if (typeof Set !== 'undefined' && isNative(Set)) {
		// use native Set when available.
		_Set = Set;
>>>>>>> origin/master
	} else {
		// a non-standard Set polyfill that only works with primitive keys.
		_Set = (function () {
			function Set () {
<<<<<<< HEAD
				this.set = Object.create(null)
			}
			Set.prototype.has = function has (key) {
				return this.set[key] === true
			}
			Set.prototype.add = function add (key) {
				this.set[key] = true
			}
			Set.prototype.clear = function clear () {
				this.set = Object.create(null)
			}

			return Set
		}())
=======
				this.set = Object.create(null);
			}
			Set.prototype.has = function has (key) {
				return this.set[key] === true
			};
			Set.prototype.add = function add (key) {
				this.set[key] = true;
			};
			Set.prototype.clear = function clear () {
				this.set = Object.create(null);
			};

			return Set;
		}());
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
	var warn = noop
	var tip = noop
	var generateComponentTrace = (noop) // work around flow check
	var formatComponentName = (noop)

	{
		var hasConsole = typeof console !== 'undefined'
		var classifyRE = /(?:^|[-_])(\w)/g
		var classify = function (str) {
			return str
				.replace(classifyRE, function (c) { return c.toUpperCase() })
				.replace(/[-_]/g, '') 
		}

		warn = function (msg, vm) {
			var trace = vm ? generateComponentTrace(vm) : ''

			if (config.warnHandler) {
				config.warnHandler.call(null, msg, vm, trace)
			} else if (hasConsole && (!config.silent)) {
				console.error(('[Vue warn]: ' + msg + trace))
			}
		}

		tip = function (msg, vm) {
			if (hasConsole && (!config.silent)) {
				console.warn('[Vue tip]: ' + msg + (
					vm ? generateComponentTrace(vm) : ''
				))
			}
		}
=======
	var warn = noop;
	var tip = noop;
	var generateComponentTrace = (noop); // work around flow check
	var formatComponentName = (noop);

	{
		var hasConsole = typeof console !== 'undefined';
		var classifyRE = /(?:^|[-_])(\w)/g;
		var classify = function (str) { return str
			.replace(classifyRE, function (c) { return c.toUpperCase(); })
			.replace(/[-_]/g, ''); };

		warn = function (msg, vm) {
			var trace = vm ? generateComponentTrace(vm) : '';

			if (config.warnHandler) {
				config.warnHandler.call(null, msg, vm, trace);
			} else if (hasConsole && (!config.silent)) {
				console.error(("[Vue warn]: " + msg + trace));
			}
		};

		tip = function (msg, vm) {
			if (hasConsole && (!config.silent)) {
				console.warn("[Vue tip]: " + msg + (
					vm ? generateComponentTrace(vm) : ''
				));
			}
		};
>>>>>>> origin/master

		formatComponentName = function (vm, includeFile) {
			if (vm.$root === vm) {
				return '<Root>'
			}
			var options = typeof vm === 'function' && vm.cid != null
				? vm.options
				: vm._isVue
					? vm.$options || vm.constructor.options
<<<<<<< HEAD
					: vm || {}
			var name = options.name || options._componentTag
			var file = options.__file
			if (!name && file) {
				var match = file.match(/([^/\\]+)\.vue$/)
				name = match && match[1]
			}

			return (
				(name ? ('<' + (classify(name)) + '>') : '<Anonymous>') +
				(file && includeFile !== false ? (' at ' + file) : '')
			)
		}

		var repeat = function (str, n) {
			var res = ''
			while (n) {
				if (n % 2 === 1) { res += str }
				if (n > 1) { str += str }
				n >>= 1
			}
			return res
		}

		generateComponentTrace = function (vm) {
			if (vm._isVue && vm.$parent) {
				var tree = []
				var currentRecursiveSequence = 0
				while (vm) {
					if (tree.length > 0) {
						var last = tree[tree.length - 1]
						if (last.constructor === vm.constructor) {
							currentRecursiveSequence++
							vm = vm.$parent
							continue
						} else if (currentRecursiveSequence > 0) {
							tree[tree.length - 1] = [last, currentRecursiveSequence]
							currentRecursiveSequence = 0
						}
					}
					tree.push(vm)
					vm = vm.$parent
				}
				return '\n\nfound in\n\n' + tree
					.map(function (vm, i) {
						return ('' + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
							? ((formatComponentName(vm[0])) + '... (' + (vm[1]) + ' recursive calls)')
							: formatComponentName(vm))) 
					})
					.join('\n')
			} else {
				return ('\n\n(found in ' + (formatComponentName(vm)) + ')')
			}
		}
=======
					: vm || {};
			var name = options.name || options._componentTag;
			var file = options.__file;
			if (!name && file) {
				var match = file.match(/([^/\\]+)\.vue$/);
				name = match && match[1];
			}

			return (
				(name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
				(file && includeFile !== false ? (" at " + file) : '')
			)
		};

		var repeat = function (str, n) {
			var res = '';
			while (n) {
				if (n % 2 === 1) { res += str; }
				if (n > 1) { str += str; }
				n >>= 1;
			}
			return res
		};

		generateComponentTrace = function (vm) {
			if (vm._isVue && vm.$parent) {
				var tree = [];
				var currentRecursiveSequence = 0;
				while (vm) {
					if (tree.length > 0) {
						var last = tree[tree.length - 1];
						if (last.constructor === vm.constructor) {
							currentRecursiveSequence++;
							vm = vm.$parent;
							continue
						} else if (currentRecursiveSequence > 0) {
							tree[tree.length - 1] = [last, currentRecursiveSequence];
							currentRecursiveSequence = 0;
						}
					}
					tree.push(vm);
					vm = vm.$parent;
				}
				return '\n\nfound in\n\n' + tree
					.map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
						? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
						: formatComponentName(vm))); })
					.join('\n')
			} else {
				return ("\n\n(found in " + (formatComponentName(vm)) + ")")
			}
		};
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
	var uid = 0
=======

	var uid = 0;
>>>>>>> origin/master

	/**
	 * A dep is an observable that can have multiple
	 * directives subscribing to it.
	 */
	var Dep = function Dep () {
<<<<<<< HEAD
		this.id = uid++
		this.subs = []
	}

	Dep.prototype.addSub = function addSub (sub) {
		this.subs.push(sub)
	}

	Dep.prototype.removeSub = function removeSub (sub) {
		remove(this.subs, sub)
	}

	Dep.prototype.depend = function depend () {
		if (Dep.target) {
			Dep.target.addDep(this)
		}
	}

	Dep.prototype.notify = function notify () {
		// stabilize the subscriber list first
		var subs = this.subs.slice()
		for (var i = 0, l = subs.length; i < l; i++) {
			subs[i].update()
		}
	}

	// the current target watcher being evaluated.
	// this is globally unique because there could be only one
	// watcher being evaluated at any time.
	Dep.target = null
	var targetStack = []

	function pushTarget (_target) {
		if (Dep.target) { targetStack.push(Dep.target) }
		Dep.target = _target
	}

	function popTarget () {
		Dep.target = targetStack.pop()
=======
		this.id = uid++;
		this.subs = [];
	};

	Dep.prototype.addSub = function addSub (sub) {
		this.subs.push(sub);
	};

	Dep.prototype.removeSub = function removeSub (sub) {
		remove(this.subs, sub);
	};

	Dep.prototype.depend = function depend () {
		if (Dep.target) {
			Dep.target.addDep(this);
		}
	};

	Dep.prototype.notify = function notify () {
		// stabilize the subscriber list first
		var subs = this.subs.slice();
		for (var i = 0, l = subs.length; i < l; i++) {
			subs[i].update();
		}
	};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
	Dep.target = null;
	var targetStack = [];

	function pushTarget (_target) {
		if (Dep.target) { targetStack.push(Dep.target); }
		Dep.target = _target;
	}

	function popTarget () {
		Dep.target = targetStack.pop();
>>>>>>> origin/master
	}

	/*  */

	var VNode = function VNode (
		tag,
		data,
		children,
		text,
		elm,
		context,
		componentOptions,
		asyncFactory
	) {
<<<<<<< HEAD
		this.tag = tag
		this.data = data
		this.children = children
		this.text = text
		this.elm = elm
		this.ns = undefined
		this.context = context
		this.fnContext = undefined
		this.fnOptions = undefined
		this.fnScopeId = undefined
		this.key = data && data.key
		this.componentOptions = componentOptions
		this.componentInstance = undefined
		this.parent = undefined
		this.raw = false
		this.isStatic = false
		this.isRootInsert = true
		this.isComment = false
		this.isCloned = false
		this.isOnce = false
		this.asyncFactory = asyncFactory
		this.asyncMeta = undefined
		this.isAsyncPlaceholder = false
	}

	var prototypeAccessors = { child: { configurable: true } }

	// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
		return this.componentInstance
	}

	Object.defineProperties(VNode.prototype, prototypeAccessors)

	var createEmptyVNode = function (text) {
		if (text === void 0) text = ''

		var node = new VNode()
		node.text = text
		node.isComment = true
		return node
	}
=======
		this.tag = tag;
		this.data = data;
		this.children = children;
		this.text = text;
		this.elm = elm;
		this.ns = undefined;
		this.context = context;
		this.fnContext = undefined;
		this.fnOptions = undefined;
		this.fnScopeId = undefined;
		this.key = data && data.key;
		this.componentOptions = componentOptions;
		this.componentInstance = undefined;
		this.parent = undefined;
		this.raw = false;
		this.isStatic = false;
		this.isRootInsert = true;
		this.isComment = false;
		this.isCloned = false;
		this.isOnce = false;
		this.asyncFactory = asyncFactory;
		this.asyncMeta = undefined;
		this.isAsyncPlaceholder = false;
	};

	var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
	/* istanbul ignore next */
	prototypeAccessors.child.get = function () {
		return this.componentInstance
	};

	Object.defineProperties( VNode.prototype, prototypeAccessors );

	var createEmptyVNode = function (text) {
		if ( text === void 0 ) text = '';

		var node = new VNode();
		node.text = text;
		node.isComment = true;
		return node
	};
>>>>>>> origin/master

	function createTextVNode (val) {
		return new VNode(undefined, undefined, undefined, String(val))
	}

<<<<<<< HEAD
	// optimized shallow clone
	// used for static nodes and slot nodes because they may be reused across
	// multiple renders, cloning them avoids errors when DOM manipulations rely
	// on their elm reference.
=======
// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
>>>>>>> origin/master
	function cloneVNode (vnode) {
		var cloned = new VNode(
			vnode.tag,
			vnode.data,
			vnode.children,
			vnode.text,
			vnode.elm,
			vnode.context,
			vnode.componentOptions,
			vnode.asyncFactory
<<<<<<< HEAD
		)
		cloned.ns = vnode.ns
		cloned.isStatic = vnode.isStatic
		cloned.key = vnode.key
		cloned.isComment = vnode.isComment
		cloned.fnContext = vnode.fnContext
		cloned.fnOptions = vnode.fnOptions
		cloned.fnScopeId = vnode.fnScopeId
		cloned.isCloned = true
=======
		);
		cloned.ns = vnode.ns;
		cloned.isStatic = vnode.isStatic;
		cloned.key = vnode.key;
		cloned.isComment = vnode.isComment;
		cloned.fnContext = vnode.fnContext;
		cloned.fnOptions = vnode.fnOptions;
		cloned.fnScopeId = vnode.fnScopeId;
		cloned.isCloned = true;
>>>>>>> origin/master
		return cloned
	}

	/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

<<<<<<< HEAD
	var arrayProto = Array.prototype
	var arrayMethods = Object.create(arrayProto)
=======
	var arrayProto = Array.prototype;
	var arrayMethods = Object.create(arrayProto);
>>>>>>> origin/master

	var methodsToPatch = [
		'push',
		'pop',
		'shift',
		'unshift',
		'splice',
		'sort',
		'reverse'
<<<<<<< HEAD
	]
=======
	];
>>>>>>> origin/master

	/**
	 * Intercept mutating methods and emit events
	 */
	methodsToPatch.forEach(function (method) {
		// cache original method
<<<<<<< HEAD
		var original = arrayProto[method]
		def(arrayMethods, method, function mutator () {
			var args = []; var len = arguments.length
			while (len--) args[ len ] = arguments[ len ]

			var result = original.apply(this, args)
			var ob = this.__ob__
			var inserted
			switch (method) {
			case 'push':
			case 'unshift':
				inserted = args
				break
			case 'splice':
				inserted = args.slice(2)
				break
			}
			if (inserted) { ob.observeArray(inserted) }
			// notify change
			ob.dep.notify()
			return result
		})
	})

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods)
=======
		var original = arrayProto[method];
		def(arrayMethods, method, function mutator () {
			var args = [], len = arguments.length;
			while ( len-- ) args[ len ] = arguments[ len ];

			var result = original.apply(this, args);
			var ob = this.__ob__;
			var inserted;
			switch (method) {
				case 'push':
				case 'unshift':
					inserted = args;
					break
				case 'splice':
					inserted = args.slice(2);
					break
			}
			if (inserted) { ob.observeArray(inserted); }
			// notify change
			ob.dep.notify();
			return result
		});
	});

	/*  */

	var arrayKeys = Object.getOwnPropertyNames(arrayMethods);
>>>>>>> origin/master

	/**
	 * In some cases we may want to disable observation inside a component's
	 * update computation.
	 */
<<<<<<< HEAD
	var shouldObserve = true

	function toggleObserving (value) {
		shouldObserve = value
=======
	var shouldObserve = true;

	function toggleObserving (value) {
		shouldObserve = value;
>>>>>>> origin/master
	}

	/**
	 * Observer class that is attached to each observed
	 * object. Once attached, the observer converts the target
	 * object's property keys into getter/setters that
	 * collect dependencies and dispatch updates.
	 */
	var Observer = function Observer (value) {
<<<<<<< HEAD
		this.value = value
		this.dep = new Dep()
		this.vmCount = 0
		def(value, '__ob__', this)
		if (Array.isArray(value)) {
			var augment = hasProto
				? protoAugment
				: copyAugment
			augment(value, arrayMethods, arrayKeys)
			this.observeArray(value)
		} else {
			this.walk(value)
		}
	}
=======
		this.value = value;
		this.dep = new Dep();
		this.vmCount = 0;
		def(value, '__ob__', this);
		if (Array.isArray(value)) {
			var augment = hasProto
				? protoAugment
				: copyAugment;
			augment(value, arrayMethods, arrayKeys);
			this.observeArray(value);
		} else {
			this.walk(value);
		}
	};
>>>>>>> origin/master

	/**
	 * Walk through each property and convert them into
	 * getter/setters. This method should only be called when
	 * value type is Object.
	 */
	Observer.prototype.walk = function walk (obj) {
<<<<<<< HEAD
		var keys = Object.keys(obj)
		for (var i = 0; i < keys.length; i++) {
			defineReactive(obj, keys[i])
		}
	}
=======
		var keys = Object.keys(obj);
		for (var i = 0; i < keys.length; i++) {
			defineReactive(obj, keys[i]);
		}
	};
>>>>>>> origin/master

	/**
	 * Observe a list of Array items.
	 */
	Observer.prototype.observeArray = function observeArray (items) {
		for (var i = 0, l = items.length; i < l; i++) {
<<<<<<< HEAD
			observe(items[i])
		}
	}

	// helpers
=======
			observe(items[i]);
		}
	};

// helpers
>>>>>>> origin/master

	/**
	 * Augment an target Object or Array by intercepting
	 * the prototype chain using __proto__
	 */
	function protoAugment (target, src, keys) {
		/* eslint-disable no-proto */
<<<<<<< HEAD
		target.__proto__ = src
=======
		target.__proto__ = src;
>>>>>>> origin/master
		/* eslint-enable no-proto */
	}

	/**
	 * Augment an target Object or Array by defining
	 * hidden properties.
	 */
	/* istanbul ignore next */
	function copyAugment (target, src, keys) {
		for (var i = 0, l = keys.length; i < l; i++) {
<<<<<<< HEAD
			var key = keys[i]
			def(target, key, src[key])
=======
			var key = keys[i];
			def(target, key, src[key]);
>>>>>>> origin/master
		}
	}

	/**
	 * Attempt to create an observer instance for a value,
	 * returns the new observer if successfully observed,
	 * or the existing observer if the value already has one.
	 */
	function observe (value, asRootData) {
		if (!isObject(value) || value instanceof VNode) {
			return
		}
<<<<<<< HEAD
		var ob
		if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
			ob = value.__ob__
=======
		var ob;
		if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
			ob = value.__ob__;
>>>>>>> origin/master
		} else if (
			shouldObserve &&
			!isServerRendering() &&
			(Array.isArray(value) || isPlainObject(value)) &&
			Object.isExtensible(value) &&
			!value._isVue
		) {
<<<<<<< HEAD
			ob = new Observer(value)
		}
		if (asRootData && ob) {
			ob.vmCount++
=======
			ob = new Observer(value);
		}
		if (asRootData && ob) {
			ob.vmCount++;
>>>>>>> origin/master
		}
		return ob
	}

	/**
	 * Define a reactive property on an Object.
	 */
	function defineReactive (
		obj,
		key,
		val,
		customSetter,
		shallow
	) {
<<<<<<< HEAD
		var dep = new Dep()

		var property = Object.getOwnPropertyDescriptor(obj, key)
=======
		var dep = new Dep();

		var property = Object.getOwnPropertyDescriptor(obj, key);
>>>>>>> origin/master
		if (property && property.configurable === false) {
			return
		}

		// cater for pre-defined getter/setters
<<<<<<< HEAD
		var getter = property && property.get
		if (!getter && arguments.length === 2) {
			val = obj[key]
		}
		var setter = property && property.set

		var childOb = !shallow && observe(val)
=======
		var getter = property && property.get;
		if (!getter && arguments.length === 2) {
			val = obj[key];
		}
		var setter = property && property.set;

		var childOb = !shallow && observe(val);
>>>>>>> origin/master
		Object.defineProperty(obj, key, {
			enumerable: true,
			configurable: true,
			get: function reactiveGetter () {
<<<<<<< HEAD
				var value = getter ? getter.call(obj) : val
				if (Dep.target) {
					dep.depend()
					if (childOb) {
						childOb.dep.depend()
						if (Array.isArray(value)) {
							dependArray(value)
=======
				var value = getter ? getter.call(obj) : val;
				if (Dep.target) {
					dep.depend();
					if (childOb) {
						childOb.dep.depend();
						if (Array.isArray(value)) {
							dependArray(value);
>>>>>>> origin/master
						}
					}
				}
				return value
			},
			set: function reactiveSetter (newVal) {
<<<<<<< HEAD
				var value = getter ? getter.call(obj) : val
=======
				var value = getter ? getter.call(obj) : val;
>>>>>>> origin/master
				/* eslint-disable no-self-compare */
				if (newVal === value || (newVal !== newVal && value !== value)) {
					return
				}
				/* eslint-enable no-self-compare */
<<<<<<< HEAD
				if ('development' !== 'production' && customSetter) {
					customSetter()
				}
				if (setter) {
					setter.call(obj, newVal)
				} else {
					val = newVal
				}
				childOb = !shallow && observe(newVal)
				dep.notify()
			}
		})
=======
				if ("development" !== 'production' && customSetter) {
					customSetter();
				}
				if (setter) {
					setter.call(obj, newVal);
				} else {
					val = newVal;
				}
				childOb = !shallow && observe(newVal);
				dep.notify();
			}
		});
>>>>>>> origin/master
	}

	/**
	 * Set a property on an object. Adds the new property and
	 * triggers change notification if the property doesn't
	 * already exist.
	 */
	function set (target, key, val) {
<<<<<<< HEAD
		if ('development' !== 'production' &&
			(isUndef(target) || isPrimitive(target))
		) {
			warn(('Cannot set reactive property on undefined, null, or primitive value: ' + ((target))))
		}
		if (Array.isArray(target) && isValidArrayIndex(key)) {
			target.length = Math.max(target.length, key)
			target.splice(key, 1, val)
			return val
		}
		if (key in target && !(key in Object.prototype)) {
			target[key] = val
			return val
		}
		var ob = (target).__ob__
		if (target._isVue || (ob && ob.vmCount)) {
			'development' !== 'production' && warn(
				'Avoid adding reactive properties to a Vue instance or its root $data ' +
					'at runtime - declare it upfront in the data option.'
			)
			return val
		}
		if (!ob) {
			target[key] = val
			return val
		}
		defineReactive(ob.value, key, val)
		ob.dep.notify()
=======
		if ("development" !== 'production' &&
			(isUndef(target) || isPrimitive(target))
		) {
			warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
		}
		if (Array.isArray(target) && isValidArrayIndex(key)) {
			target.length = Math.max(target.length, key);
			target.splice(key, 1, val);
			return val
		}
		if (key in target && !(key in Object.prototype)) {
			target[key] = val;
			return val
		}
		var ob = (target).__ob__;
		if (target._isVue || (ob && ob.vmCount)) {
			"development" !== 'production' && warn(
				'Avoid adding reactive properties to a Vue instance or its root $data ' +
				'at runtime - declare it upfront in the data option.'
			);
			return val
		}
		if (!ob) {
			target[key] = val;
			return val
		}
		defineReactive(ob.value, key, val);
		ob.dep.notify();
>>>>>>> origin/master
		return val
	}

	/**
	 * Delete a property and trigger change if necessary.
	 */
	function del (target, key) {
<<<<<<< HEAD
		if ('development' !== 'production' &&
			(isUndef(target) || isPrimitive(target))
		) {
			warn(('Cannot delete reactive property on undefined, null, or primitive value: ' + ((target))))
		}
		if (Array.isArray(target) && isValidArrayIndex(key)) {
			target.splice(key, 1)
			return
		}
		var ob = (target).__ob__
		if (target._isVue || (ob && ob.vmCount)) {
			'development' !== 'production' && warn(
				'Avoid deleting properties on a Vue instance or its root $data ' +
					'- just set it to null.'
			)
=======
		if ("development" !== 'production' &&
			(isUndef(target) || isPrimitive(target))
		) {
			warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
		}
		if (Array.isArray(target) && isValidArrayIndex(key)) {
			target.splice(key, 1);
			return
		}
		var ob = (target).__ob__;
		if (target._isVue || (ob && ob.vmCount)) {
			"development" !== 'production' && warn(
				'Avoid deleting properties on a Vue instance or its root $data ' +
				'- just set it to null.'
			);
>>>>>>> origin/master
			return
		}
		if (!hasOwn(target, key)) {
			return
		}
<<<<<<< HEAD
		delete target[key]
		if (!ob) {
			return
		}
		ob.dep.notify()
=======
		delete target[key];
		if (!ob) {
			return
		}
		ob.dep.notify();
>>>>>>> origin/master
	}

	/**
	 * Collect dependencies on array elements when the array is touched, since
	 * we cannot intercept array element access like property getters.
	 */
	function dependArray (value) {
		for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
<<<<<<< HEAD
			e = value[i]
			e && e.__ob__ && e.__ob__.dep.depend()
			if (Array.isArray(e)) {
				dependArray(e)
=======
			e = value[i];
			e && e.__ob__ && e.__ob__.dep.depend();
			if (Array.isArray(e)) {
				dependArray(e);
>>>>>>> origin/master
			}
		}
	}

	/*  */

	/**
	 * Option overwriting strategies are functions that handle
	 * how to merge a parent option value and a child option
	 * value into the final value.
	 */
<<<<<<< HEAD
	var strats = config.optionMergeStrategies
=======
	var strats = config.optionMergeStrategies;
>>>>>>> origin/master

	/**
	 * Options with restrictions
	 */
	{
		strats.el = strats.propsData = function (parent, child, vm, key) {
			if (!vm) {
				warn(
<<<<<<< HEAD
					'option "' + key + '" can only be used during instance ' +
						'creation with the `new` keyword.'
				)
			}
			return defaultStrat(parent, child)
		}
=======
					"option \"" + key + "\" can only be used during instance " +
					'creation with the `new` keyword.'
				);
			}
			return defaultStrat(parent, child)
		};
>>>>>>> origin/master
	}

	/**
	 * Helper that recursively merges two data objects together.
	 */
	function mergeData (to, from) {
		if (!from) { return to }
<<<<<<< HEAD
		var key, toVal, fromVal
		var keys = Object.keys(from)
		for (var i = 0; i < keys.length; i++) {
			key = keys[i]
			toVal = to[key]
			fromVal = from[key]
			if (!hasOwn(to, key)) {
				set(to, key, fromVal)
			} else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
				mergeData(toVal, fromVal)
=======
		var key, toVal, fromVal;
		var keys = Object.keys(from);
		for (var i = 0; i < keys.length; i++) {
			key = keys[i];
			toVal = to[key];
			fromVal = from[key];
			if (!hasOwn(to, key)) {
				set(to, key, fromVal);
			} else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
				mergeData(toVal, fromVal);
>>>>>>> origin/master
			}
		}
		return to
	}

	/**
	 * Data
	 */
	function mergeDataOrFn (
		parentVal,
		childVal,
		vm
	) {
		if (!vm) {
			// in a Vue.extend merge, both should be functions
			if (!childVal) {
				return parentVal
			}
			if (!parentVal) {
				return childVal
			}
			// when parentVal & childVal are both present,
			// we need to return a function that returns the
			// merged result of both functions... no need to
			// check if parentVal is a function here because
			// it has to be a function to pass previous merges.
			return function mergedDataFn () {
				return mergeData(
					typeof childVal === 'function' ? childVal.call(this, this) : childVal,
					typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
				)
			}
		} else {
			return function mergedInstanceDataFn () {
				// instance merge
				var instanceData = typeof childVal === 'function'
					? childVal.call(vm, vm)
<<<<<<< HEAD
					: childVal
				var defaultData = typeof parentVal === 'function'
					? parentVal.call(vm, vm)
					: parentVal
=======
					: childVal;
				var defaultData = typeof parentVal === 'function'
					? parentVal.call(vm, vm)
					: parentVal;
>>>>>>> origin/master
				if (instanceData) {
					return mergeData(instanceData, defaultData)
				} else {
					return defaultData
				}
			}
		}
	}

	strats.data = function (
		parentVal,
		childVal,
		vm
	) {
		if (!vm) {
			if (childVal && typeof childVal !== 'function') {
<<<<<<< HEAD
				'development' !== 'production' && warn(
					'The "data" option should be a function ' +
						'that returns a per-instance value in component ' +
						'definitions.',
					vm
				)
=======
				"development" !== 'production' && warn(
					'The "data" option should be a function ' +
					'that returns a per-instance value in component ' +
					'definitions.',
					vm
				);
>>>>>>> origin/master

				return parentVal
			}
			return mergeDataOrFn(parentVal, childVal)
		}

		return mergeDataOrFn(parentVal, childVal, vm)
<<<<<<< HEAD
	}
=======
	};
>>>>>>> origin/master

	/**
	 * Hooks and props are merged as arrays.
	 */
	function mergeHook (
		parentVal,
		childVal
	) {
		return childVal
			? parentVal
				? parentVal.concat(childVal)
				: Array.isArray(childVal)
					? childVal
					: [childVal]
			: parentVal
	}

	LIFECYCLE_HOOKS.forEach(function (hook) {
<<<<<<< HEAD
		strats[hook] = mergeHook
	})
=======
		strats[hook] = mergeHook;
	});
>>>>>>> origin/master

	/**
	 * Assets
	 *
	 * When a vm is present (instance creation), we need to do
	 * a three-way merge between constructor options, instance
	 * options and parent options.
	 */
	function mergeAssets (
		parentVal,
		childVal,
		vm,
		key
	) {
<<<<<<< HEAD
		var res = Object.create(parentVal || null)
		if (childVal) {
			'development' !== 'production' && assertObjectType(key, childVal, vm)
=======
		var res = Object.create(parentVal || null);
		if (childVal) {
			"development" !== 'production' && assertObjectType(key, childVal, vm);
>>>>>>> origin/master
			return extend(res, childVal)
		} else {
			return res
		}
	}

	ASSET_TYPES.forEach(function (type) {
<<<<<<< HEAD
		strats[type + 's'] = mergeAssets
	})
=======
		strats[type + 's'] = mergeAssets;
	});
>>>>>>> origin/master

	/**
	 * Watchers.
	 *
	 * Watchers hashes should not overwrite one
	 * another, so we merge them as arrays.
	 */
	strats.watch = function (
		parentVal,
		childVal,
		vm,
		key
	) {
		// work around Firefox's Object.prototype.watch...
<<<<<<< HEAD
		if (parentVal === nativeWatch) { parentVal = undefined }
		if (childVal === nativeWatch) { childVal = undefined }
		/* istanbul ignore if */
		if (!childVal) { return Object.create(parentVal || null) }
		{
			assertObjectType(key, childVal, vm)
		}
		if (!parentVal) { return childVal }
		var ret = {}
		extend(ret, parentVal)
		for (var key$1 in childVal) {
			var parent = ret[key$1]
			var child = childVal[key$1]
			if (parent && !Array.isArray(parent)) {
				parent = [parent]
			}
			ret[key$1] = parent
				? parent.concat(child)
				: Array.isArray(child) ? child : [child]
		}
		return ret
	}
=======
		if (parentVal === nativeWatch) { parentVal = undefined; }
		if (childVal === nativeWatch) { childVal = undefined; }
		/* istanbul ignore if */
		if (!childVal) { return Object.create(parentVal || null) }
		{
			assertObjectType(key, childVal, vm);
		}
		if (!parentVal) { return childVal }
		var ret = {};
		extend(ret, parentVal);
		for (var key$1 in childVal) {
			var parent = ret[key$1];
			var child = childVal[key$1];
			if (parent && !Array.isArray(parent)) {
				parent = [parent];
			}
			ret[key$1] = parent
				? parent.concat(child)
				: Array.isArray(child) ? child : [child];
		}
		return ret
	};
>>>>>>> origin/master

	/**
	 * Other object hashes.
	 */
	strats.props =
		strats.methods =
<<<<<<< HEAD
		strats.inject =
		strats.computed = function (
			parentVal,
			childVal,
			vm,
			key
		) {
			if (childVal && 'development' !== 'production') {
				assertObjectType(key, childVal, vm)
			}
			if (!parentVal) { return childVal }
			var ret = Object.create(null)
			extend(ret, parentVal)
			if (childVal) { extend(ret, childVal) }
			return ret
		}
	strats.provide = mergeDataOrFn
=======
			strats.inject =
				strats.computed = function (
					parentVal,
					childVal,
					vm,
					key
				) {
					if (childVal && "development" !== 'production') {
						assertObjectType(key, childVal, vm);
					}
					if (!parentVal) { return childVal }
					var ret = Object.create(null);
					extend(ret, parentVal);
					if (childVal) { extend(ret, childVal); }
					return ret
				};
	strats.provide = mergeDataOrFn;
>>>>>>> origin/master

	/**
	 * Default strategy.
	 */
	var defaultStrat = function (parentVal, childVal) {
		return childVal === undefined
			? parentVal
			: childVal
<<<<<<< HEAD
	}
=======
	};
>>>>>>> origin/master

	/**
	 * Validate component names
	 */
	function checkComponents (options) {
		for (var key in options.components) {
<<<<<<< HEAD
			validateComponentName(key)
=======
			validateComponentName(key);
>>>>>>> origin/master
		}
	}

	function validateComponentName (name) {
		if (!/^[a-zA-Z][\w-]*$/.test(name)) {
			warn(
				'Invalid component name: "' + name + '". Component names ' +
<<<<<<< HEAD
					'can only contain alphanumeric characters and the hyphen, ' +
					'and must start with a letter.'
			)
=======
				'can only contain alphanumeric characters and the hyphen, ' +
				'and must start with a letter.'
			);
>>>>>>> origin/master
		}
		if (isBuiltInTag(name) || config.isReservedTag(name)) {
			warn(
				'Do not use built-in or reserved HTML elements as component ' +
<<<<<<< HEAD
					'id: ' + name
			)
=======
				'id: ' + name
			);
>>>>>>> origin/master
		}
	}

	/**
	 * Ensure all props option syntax are normalized into the
	 * Object-based format.
	 */
	function normalizeProps (options, vm) {
<<<<<<< HEAD
		var props = options.props
		if (!props) { return }
		var res = {}
		var i, val, name
		if (Array.isArray(props)) {
			i = props.length
			while (i--) {
				val = props[i]
				if (typeof val === 'string') {
					name = camelize(val)
					res[name] = { type: null }
				} else {
					warn('props must be strings when using array syntax.')
=======
		var props = options.props;
		if (!props) { return }
		var res = {};
		var i, val, name;
		if (Array.isArray(props)) {
			i = props.length;
			while (i--) {
				val = props[i];
				if (typeof val === 'string') {
					name = camelize(val);
					res[name] = { type: null };
				} else {
					warn('props must be strings when using array syntax.');
>>>>>>> origin/master
				}
			}
		} else if (isPlainObject(props)) {
			for (var key in props) {
<<<<<<< HEAD
				val = props[key]
				name = camelize(key)
				res[name] = isPlainObject(val)
					? val
					: { type: val }
			}
		} else {
			warn(
				'Invalid value for option "props": expected an Array or an Object, ' +
					'but got ' + (toRawType(props)) + '.',
				vm
			)
		}
		options.props = res
=======
				val = props[key];
				name = camelize(key);
				res[name] = isPlainObject(val)
					? val
					: { type: val };
			}
		} else {
			warn(
				"Invalid value for option \"props\": expected an Array or an Object, " +
				"but got " + (toRawType(props)) + ".",
				vm
			);
		}
		options.props = res;
>>>>>>> origin/master
	}

	/**
	 * Normalize all injections into Object-based format
	 */
	function normalizeInject (options, vm) {
<<<<<<< HEAD
		var inject = options.inject
		if (!inject) { return }
		var normalized = options.inject = {}
		if (Array.isArray(inject)) {
			for (var i = 0; i < inject.length; i++) {
				normalized[inject[i]] = { from: inject[i] }
			}
		} else if (isPlainObject(inject)) {
			for (var key in inject) {
				var val = inject[key]
				normalized[key] = isPlainObject(val)
					? extend({ from: key }, val)
					: { from: val }
			}
		} else {
			warn(
				'Invalid value for option "inject": expected an Array or an Object, ' +
					'but got ' + (toRawType(inject)) + '.',
				vm
			)
=======
		var inject = options.inject;
		if (!inject) { return }
		var normalized = options.inject = {};
		if (Array.isArray(inject)) {
			for (var i = 0; i < inject.length; i++) {
				normalized[inject[i]] = { from: inject[i] };
			}
		} else if (isPlainObject(inject)) {
			for (var key in inject) {
				var val = inject[key];
				normalized[key] = isPlainObject(val)
					? extend({ from: key }, val)
					: { from: val };
			}
		} else {
			warn(
				"Invalid value for option \"inject\": expected an Array or an Object, " +
				"but got " + (toRawType(inject)) + ".",
				vm
			);
>>>>>>> origin/master
		}
	}

	/**
	 * Normalize raw function directives into object format.
	 */
	function normalizeDirectives (options) {
<<<<<<< HEAD
		var dirs = options.directives
		if (dirs) {
			for (var key in dirs) {
				var def = dirs[key]
				if (typeof def === 'function') {
					dirs[key] = { bind: def, update: def }
=======
		var dirs = options.directives;
		if (dirs) {
			for (var key in dirs) {
				var def = dirs[key];
				if (typeof def === 'function') {
					dirs[key] = { bind: def, update: def };
>>>>>>> origin/master
				}
			}
		}
	}

	function assertObjectType (name, value, vm) {
		if (!isPlainObject(value)) {
			warn(
<<<<<<< HEAD
				'Invalid value for option "' + name + '": expected an Object, ' +
					'but got ' + (toRawType(value)) + '.',
				vm
			)
=======
				"Invalid value for option \"" + name + "\": expected an Object, " +
				"but got " + (toRawType(value)) + ".",
				vm
			);
>>>>>>> origin/master
		}
	}

	/**
	 * Merge two option objects into a new one.
	 * Core utility used in both instantiation and inheritance.
	 */
	function mergeOptions (
		parent,
		child,
		vm
	) {
		{
<<<<<<< HEAD
			checkComponents(child)
		}

		if (typeof child === 'function') {
			child = child.options
		}

		normalizeProps(child, vm)
		normalizeInject(child, vm)
		normalizeDirectives(child)
		var extendsFrom = child.extends
		if (extendsFrom) {
			parent = mergeOptions(parent, extendsFrom, vm)
		}
		if (child.mixins) {
			for (var i = 0, l = child.mixins.length; i < l; i++) {
				parent = mergeOptions(parent, child.mixins[i], vm)
			}
		}
		var options = {}
		var key
		for (key in parent) {
			mergeField(key)
		}
		for (key in child) {
			if (!hasOwn(parent, key)) {
				mergeField(key)
			}
		}
		function mergeField (key) {
			var strat = strats[key] || defaultStrat
			options[key] = strat(parent[key], child[key], vm, key)
=======
			checkComponents(child);
		}

		if (typeof child === 'function') {
			child = child.options;
		}

		normalizeProps(child, vm);
		normalizeInject(child, vm);
		normalizeDirectives(child);
		var extendsFrom = child.extends;
		if (extendsFrom) {
			parent = mergeOptions(parent, extendsFrom, vm);
		}
		if (child.mixins) {
			for (var i = 0, l = child.mixins.length; i < l; i++) {
				parent = mergeOptions(parent, child.mixins[i], vm);
			}
		}
		var options = {};
		var key;
		for (key in parent) {
			mergeField(key);
		}
		for (key in child) {
			if (!hasOwn(parent, key)) {
				mergeField(key);
			}
		}
		function mergeField (key) {
			var strat = strats[key] || defaultStrat;
			options[key] = strat(parent[key], child[key], vm, key);
>>>>>>> origin/master
		}
		return options
	}

	/**
	 * Resolve an asset.
	 * This function is used because child instances need access
	 * to assets defined in its ancestor chain.
	 */
	function resolveAsset (
		options,
		type,
		id,
		warnMissing
	) {
		/* istanbul ignore if */
		if (typeof id !== 'string') {
			return
		}
<<<<<<< HEAD
		var assets = options[type]
		// check local registration variations first
		if (hasOwn(assets, id)) { return assets[id] }
		var camelizedId = camelize(id)
		if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
		var PascalCaseId = capitalize(camelizedId)
		if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
		// fallback to prototype chain
		var res = assets[id] || assets[camelizedId] || assets[PascalCaseId]
		if ('development' !== 'production' && warnMissing && !res) {
			warn(
				'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
				options
			)
=======
		var assets = options[type];
		// check local registration variations first
		if (hasOwn(assets, id)) { return assets[id] }
		var camelizedId = camelize(id);
		if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
		var PascalCaseId = capitalize(camelizedId);
		if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
		// fallback to prototype chain
		var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
		if ("development" !== 'production' && warnMissing && !res) {
			warn(
				'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
				options
			);
>>>>>>> origin/master
		}
		return res
	}

	/*  */

	function validateProp (
		key,
		propOptions,
		propsData,
		vm
	) {
<<<<<<< HEAD
		var prop = propOptions[key]
		var absent = !hasOwn(propsData, key)
		var value = propsData[key]
		// boolean casting
		var booleanIndex = getTypeIndex(Boolean, prop.type)
		if (booleanIndex > -1) {
			if (absent && !hasOwn(prop, 'default')) {
				value = false
			} else if (value === '' || value === hyphenate(key)) {
				// only cast empty string / same name to boolean if
				// boolean has higher priority
				var stringIndex = getTypeIndex(String, prop.type)
				if (stringIndex < 0 || booleanIndex < stringIndex) {
					value = true
=======
		var prop = propOptions[key];
		var absent = !hasOwn(propsData, key);
		var value = propsData[key];
		// boolean casting
		var booleanIndex = getTypeIndex(Boolean, prop.type);
		if (booleanIndex > -1) {
			if (absent && !hasOwn(prop, 'default')) {
				value = false;
			} else if (value === '' || value === hyphenate(key)) {
				// only cast empty string / same name to boolean if
				// boolean has higher priority
				var stringIndex = getTypeIndex(String, prop.type);
				if (stringIndex < 0 || booleanIndex < stringIndex) {
					value = true;
>>>>>>> origin/master
				}
			}
		}
		// check default value
		if (value === undefined) {
<<<<<<< HEAD
			value = getPropDefaultValue(vm, prop, key)
			// since the default value is a fresh copy,
			// make sure to observe it.
			var prevShouldObserve = shouldObserve
			toggleObserving(true)
			observe(value)
			toggleObserving(prevShouldObserve)
		}
		{
			assertProp(prop, key, value, vm, absent)
=======
			value = getPropDefaultValue(vm, prop, key);
			// since the default value is a fresh copy,
			// make sure to observe it.
			var prevShouldObserve = shouldObserve;
			toggleObserving(true);
			observe(value);
			toggleObserving(prevShouldObserve);
		}
		{
			assertProp(prop, key, value, vm, absent);
>>>>>>> origin/master
		}
		return value
	}

	/**
	 * Get the default value of a prop.
	 */
	function getPropDefaultValue (vm, prop, key) {
		// no default, return undefined
		if (!hasOwn(prop, 'default')) {
			return undefined
		}
<<<<<<< HEAD
		var def = prop.default
		// warn against non-factory defaults for Object & Array
		if ('development' !== 'production' && isObject(def)) {
			warn(
				'Invalid default value for prop "' + key + '": ' +
					'Props with type Object/Array must use a factory function ' +
					'to return the default value.',
				vm
			)
=======
		var def = prop.default;
		// warn against non-factory defaults for Object & Array
		if ("development" !== 'production' && isObject(def)) {
			warn(
				'Invalid default value for prop "' + key + '": ' +
				'Props with type Object/Array must use a factory function ' +
				'to return the default value.',
				vm
			);
>>>>>>> origin/master
		}
		// the raw prop value was also undefined from previous render,
		// return previous default value to avoid unnecessary watcher trigger
		if (vm && vm.$options.propsData &&
			vm.$options.propsData[key] === undefined &&
			vm._props[key] !== undefined
		) {
			return vm._props[key]
		}
		// call factory function for non-Function types
		// a value is Function if its prototype is function even across different execution context
		return typeof def === 'function' && getType(prop.type) !== 'Function'
			? def.call(vm)
			: def
	}

	/**
	 * Assert whether a prop is valid.
	 */
	function assertProp (
		prop,
		name,
		value,
		vm,
		absent
	) {
		if (prop.required && absent) {
			warn(
				'Missing required prop: "' + name + '"',
				vm
<<<<<<< HEAD
			)
=======
			);
>>>>>>> origin/master
			return
		}
		if (value == null && !prop.required) {
			return
		}
<<<<<<< HEAD
		var type = prop.type
		var valid = !type || type === true
		var expectedTypes = []
		if (type) {
			if (!Array.isArray(type)) {
				type = [type]
			}
			for (var i = 0; i < type.length && !valid; i++) {
				var assertedType = assertType(value, type[i])
				expectedTypes.push(assertedType.expectedType || '')
				valid = assertedType.valid
=======
		var type = prop.type;
		var valid = !type || type === true;
		var expectedTypes = [];
		if (type) {
			if (!Array.isArray(type)) {
				type = [type];
			}
			for (var i = 0; i < type.length && !valid; i++) {
				var assertedType = assertType(value, type[i]);
				expectedTypes.push(assertedType.expectedType || '');
				valid = assertedType.valid;
>>>>>>> origin/master
			}
		}
		if (!valid) {
			warn(
<<<<<<< HEAD
				'Invalid prop: type check failed for prop "' + name + '".' +
					' Expected ' + (expectedTypes.map(capitalize).join(', ')) +
					', got ' + (toRawType(value)) + '.',
				vm
			)
			return
		}
		var validator = prop.validator
=======
				"Invalid prop: type check failed for prop \"" + name + "\"." +
				" Expected " + (expectedTypes.map(capitalize).join(', ')) +
				", got " + (toRawType(value)) + ".",
				vm
			);
			return
		}
		var validator = prop.validator;
>>>>>>> origin/master
		if (validator) {
			if (!validator(value)) {
				warn(
					'Invalid prop: custom validator check failed for prop "' + name + '".',
					vm
<<<<<<< HEAD
				)
=======
				);
>>>>>>> origin/master
			}
		}
	}

<<<<<<< HEAD
	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/

	function assertType (value, type) {
		var valid
		var expectedType = getType(type)
		if (simpleCheckRE.test(expectedType)) {
			var t = typeof value
			valid = t === expectedType.toLowerCase()
			// for primitive wrapper objects
			if (!valid && t === 'object') {
				valid = value instanceof type
			}
		} else if (expectedType === 'Object') {
			valid = isPlainObject(value)
		} else if (expectedType === 'Array') {
			valid = Array.isArray(value)
		} else {
			valid = value instanceof type
=======
	var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

	function assertType (value, type) {
		var valid;
		var expectedType = getType(type);
		if (simpleCheckRE.test(expectedType)) {
			var t = typeof value;
			valid = t === expectedType.toLowerCase();
			// for primitive wrapper objects
			if (!valid && t === 'object') {
				valid = value instanceof type;
			}
		} else if (expectedType === 'Object') {
			valid = isPlainObject(value);
		} else if (expectedType === 'Array') {
			valid = Array.isArray(value);
		} else {
			valid = value instanceof type;
>>>>>>> origin/master
		}
		return {
			valid: valid,
			expectedType: expectedType
		}
	}

	/**
	 * Use function string name to check built-in types,
	 * because a simple equality check will fail when running
	 * across different vms / iframes.
	 */
	function getType (fn) {
<<<<<<< HEAD
		var match = fn && fn.toString().match(/^\s*function (\w+)/)
=======
		var match = fn && fn.toString().match(/^\s*function (\w+)/);
>>>>>>> origin/master
		return match ? match[1] : ''
	}

	function isSameType (a, b) {
		return getType(a) === getType(b)
	}

	function getTypeIndex (type, expectedTypes) {
		if (!Array.isArray(expectedTypes)) {
			return isSameType(expectedTypes, type) ? 0 : -1
		}
		for (var i = 0, len = expectedTypes.length; i < len; i++) {
			if (isSameType(expectedTypes[i], type)) {
				return i
			}
		}
		return -1
	}

	/*  */

	function handleError (err, vm, info) {
		if (vm) {
<<<<<<< HEAD
			var cur = vm
			while ((cur = cur.$parent)) {
				var hooks = cur.$options.errorCaptured
				if (hooks) {
					for (var i = 0; i < hooks.length; i++) {
						try {
							var capture = hooks[i].call(cur, err, vm, info) === false
							if (capture) { return }
						} catch (e) {
							globalHandleError(e, cur, 'errorCaptured hook')
=======
			var cur = vm;
			while ((cur = cur.$parent)) {
				var hooks = cur.$options.errorCaptured;
				if (hooks) {
					for (var i = 0; i < hooks.length; i++) {
						try {
							var capture = hooks[i].call(cur, err, vm, info) === false;
							if (capture) { return }
						} catch (e) {
							globalHandleError(e, cur, 'errorCaptured hook');
>>>>>>> origin/master
						}
					}
				}
			}
		}
<<<<<<< HEAD
		globalHandleError(err, vm, info)
=======
		globalHandleError(err, vm, info);
>>>>>>> origin/master
	}

	function globalHandleError (err, vm, info) {
		if (config.errorHandler) {
			try {
				return config.errorHandler.call(null, err, vm, info)
			} catch (e) {
<<<<<<< HEAD
				logError(e, null, 'config.errorHandler')
			}
		}
		logError(err, vm, info)
=======
				logError(e, null, 'config.errorHandler');
			}
		}
		logError(err, vm, info);
>>>>>>> origin/master
	}

	function logError (err, vm, info) {
		{
<<<<<<< HEAD
			warn(('Error in ' + info + ': "' + (err.toString()) + '"'), vm)
		}
		/* istanbul ignore else */
		if ((inBrowser || inWeex) && typeof console !== 'undefined') {
			console.error(err)
=======
			warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
		}
		/* istanbul ignore else */
		if ((inBrowser || inWeex) && typeof console !== 'undefined') {
			console.error(err);
>>>>>>> origin/master
		} else {
			throw err
		}
	}

	/*  */
	/* globals MessageChannel */

<<<<<<< HEAD
	var callbacks = []
	var pending = false

	function flushCallbacks () {
		pending = false
		var copies = callbacks.slice(0)
		callbacks.length = 0
		for (var i = 0; i < copies.length; i++) {
			copies[i]()
		}
	}

	// Here we have async deferring wrappers using both microtasks and (macro) tasks.
	// In < 2.4 we used microtasks everywhere, but there are some scenarios where
	// microtasks have too high a priority and fire in between supposedly
	// sequential events (e.g. #4521, #6690) or even between bubbling of the same
	// event (#6566). However, using (macro) tasks everywhere also has subtle problems
	// when state is changed right before repaint (e.g. #6813, out-in transitions).
	// Here we use microtask by default, but expose a way to force (macro) task when
	// needed (e.g. in event handlers attached by v-on).
	var microTimerFunc
	var macroTimerFunc
	var useMacroTask = false

	// Determine (macro) task defer implementation.
	// Technically setImmediate should be the ideal choice, but it's only available
	// in IE. The only polyfill that consistently queues the callback after all DOM
	// events triggered in the same loop is by using MessageChannel.
	/* istanbul ignore if */
	if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
		macroTimerFunc = function () {
			setImmediate(flushCallbacks)
		}
=======
	var callbacks = [];
	var pending = false;

	function flushCallbacks () {
		pending = false;
		var copies = callbacks.slice(0);
		callbacks.length = 0;
		for (var i = 0; i < copies.length; i++) {
			copies[i]();
		}
	}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
	var microTimerFunc;
	var macroTimerFunc;
	var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
	/* istanbul ignore if */
	if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
		macroTimerFunc = function () {
			setImmediate(flushCallbacks);
		};
>>>>>>> origin/master
	} else if (typeof MessageChannel !== 'undefined' && (
		isNative(MessageChannel) ||
		// PhantomJS
		MessageChannel.toString() === '[object MessageChannelConstructor]'
	)) {
<<<<<<< HEAD
		var channel = new MessageChannel()
		var port = channel.port2
		channel.port1.onmessage = flushCallbacks
		macroTimerFunc = function () {
			port.postMessage(1)
		}
	} else {
		/* istanbul ignore next */
		macroTimerFunc = function () {
			setTimeout(flushCallbacks, 0)
		}
	}

	// Determine microtask defer implementation.
	/* istanbul ignore next, $flow-disable-line */
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
		var p = Promise.resolve()
		microTimerFunc = function () {
			p.then(flushCallbacks)
=======
		var channel = new MessageChannel();
		var port = channel.port2;
		channel.port1.onmessage = flushCallbacks;
		macroTimerFunc = function () {
			port.postMessage(1);
		};
	} else {
		/* istanbul ignore next */
		macroTimerFunc = function () {
			setTimeout(flushCallbacks, 0);
		};
	}

// Determine microtask defer implementation.
	/* istanbul ignore next, $flow-disable-line */
	if (typeof Promise !== 'undefined' && isNative(Promise)) {
		var p = Promise.resolve();
		microTimerFunc = function () {
			p.then(flushCallbacks);
>>>>>>> origin/master
			// in problematic UIWebViews, Promise.then doesn't completely break, but
			// it can get stuck in a weird state where callbacks are pushed into the
			// microtask queue but the queue isn't being flushed, until the browser
			// needs to do some other work, e.g. handle a timer. Therefore we can
			// "force" the microtask queue to be flushed by adding an empty timer.
<<<<<<< HEAD
			if (isIOS) { setTimeout(noop) }
		}
	} else {
		// fallback to macro
		microTimerFunc = macroTimerFunc
=======
			if (isIOS) { setTimeout(noop); }
		};
	} else {
		// fallback to macro
		microTimerFunc = macroTimerFunc;
>>>>>>> origin/master
	}

	/**
	 * Wrap a function so that if any code inside triggers state change,
	 * the changes are queued using a (macro) task instead of a microtask.
	 */
	function withMacroTask (fn) {
		return fn._withTask || (fn._withTask = function () {
<<<<<<< HEAD
			useMacroTask = true
			var res = fn.apply(null, arguments)
			useMacroTask = false
=======
			useMacroTask = true;
			var res = fn.apply(null, arguments);
			useMacroTask = false;
>>>>>>> origin/master
			return res
		})
	}

	function nextTick (cb, ctx) {
<<<<<<< HEAD
		var _resolve
		callbacks.push(function () {
			if (cb) {
				try {
					cb.call(ctx)
				} catch (e) {
					handleError(e, ctx, 'nextTick')
				}
			} else if (_resolve) {
				_resolve(ctx)
			}
		})
		if (!pending) {
			pending = true
			if (useMacroTask) {
				macroTimerFunc()
			} else {
				microTimerFunc()
=======
		var _resolve;
		callbacks.push(function () {
			if (cb) {
				try {
					cb.call(ctx);
				} catch (e) {
					handleError(e, ctx, 'nextTick');
				}
			} else if (_resolve) {
				_resolve(ctx);
			}
		});
		if (!pending) {
			pending = true;
			if (useMacroTask) {
				macroTimerFunc();
			} else {
				microTimerFunc();
>>>>>>> origin/master
			}
		}
		// $flow-disable-line
		if (!cb && typeof Promise !== 'undefined') {
			return new Promise(function (resolve) {
<<<<<<< HEAD
				_resolve = resolve
=======
				_resolve = resolve;
>>>>>>> origin/master
			})
		}
	}

	/*  */

<<<<<<< HEAD
	var mark
	var measure

	{
		var perf = inBrowser && window.performance
=======
	var mark;
	var measure;

	{
		var perf = inBrowser && window.performance;
>>>>>>> origin/master
		/* istanbul ignore if */
		if (
			perf &&
			perf.mark &&
			perf.measure &&
			perf.clearMarks &&
			perf.clearMeasures
		) {
<<<<<<< HEAD
			mark = function (tag) { return perf.mark(tag) }
			measure = function (name, startTag, endTag) {
				perf.measure(name, startTag, endTag)
				perf.clearMarks(startTag)
				perf.clearMarks(endTag)
				perf.clearMeasures(name)
			}
=======
			mark = function (tag) { return perf.mark(tag); };
			measure = function (name, startTag, endTag) {
				perf.measure(name, startTag, endTag);
				perf.clearMarks(startTag);
				perf.clearMarks(endTag);
				perf.clearMeasures(name);
			};
>>>>>>> origin/master
		}
	}

	/* not type checking this file because flow doesn't play well with Proxy */

<<<<<<< HEAD
	var initProxy
=======
	var initProxy;
>>>>>>> origin/master

	{
		var allowedGlobals = makeMap(
			'Infinity,undefined,NaN,isFinite,isNaN,' +
<<<<<<< HEAD
				'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
				'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
				'require' // for Webpack/Browserify
		)

		var warnNonPresent = function (target, key) {
			warn(
				'Property or method "' + key + '" is not defined on the instance but ' +
					'referenced during render. Make sure that this property is reactive, ' +
					'either in the data option, or for class-based components, by ' +
					'initializing the property. ' +
					'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
				target
			)
		}

		var hasProxy =
			typeof Proxy !== 'undefined' && isNative(Proxy)

		if (hasProxy) {
			var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact')
			config.keyCodes = new Proxy(config.keyCodes, {
				set: function set (target, key, value) {
					if (isBuiltInModifier(key)) {
						warn(('Avoid overwriting built-in modifier in config.keyCodes: .' + key))
						return false
					} else {
						target[key] = value
						return true
					}
				}
			})
=======
			'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
			'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
			'require' // for Webpack/Browserify
		);

		var warnNonPresent = function (target, key) {
			warn(
				"Property or method \"" + key + "\" is not defined on the instance but " +
				'referenced during render. Make sure that this property is reactive, ' +
				'either in the data option, or for class-based components, by ' +
				'initializing the property. ' +
				'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
				target
			);
		};

		var hasProxy =
			typeof Proxy !== 'undefined' && isNative(Proxy);

		if (hasProxy) {
			var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
			config.keyCodes = new Proxy(config.keyCodes, {
				set: function set (target, key, value) {
					if (isBuiltInModifier(key)) {
						warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
						return false
					} else {
						target[key] = value;
						return true
					}
				}
			});
>>>>>>> origin/master
		}

		var hasHandler = {
			has: function has (target, key) {
<<<<<<< HEAD
				var has = key in target
				var isAllowed = allowedGlobals(key) || key.charAt(0) === '_'
				if (!has && !isAllowed) {
					warnNonPresent(target, key)
				}
				return has || !isAllowed
			}
		}
=======
				var has = key in target;
				var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
				if (!has && !isAllowed) {
					warnNonPresent(target, key);
				}
				return has || !isAllowed
			}
		};
>>>>>>> origin/master

		var getHandler = {
			get: function get (target, key) {
				if (typeof key === 'string' && !(key in target)) {
<<<<<<< HEAD
					warnNonPresent(target, key)
				}
				return target[key]
			}
		}
=======
					warnNonPresent(target, key);
				}
				return target[key]
			}
		};
>>>>>>> origin/master

		initProxy = function initProxy (vm) {
			if (hasProxy) {
				// determine which proxy handler to use
<<<<<<< HEAD
				var options = vm.$options
				var handlers = options.render && options.render._withStripped
					? getHandler
					: hasHandler
				vm._renderProxy = new Proxy(vm, handlers)
			} else {
				vm._renderProxy = vm
			}
		}
=======
				var options = vm.$options;
				var handlers = options.render && options.render._withStripped
					? getHandler
					: hasHandler;
				vm._renderProxy = new Proxy(vm, handlers);
			} else {
				vm._renderProxy = vm;
			}
		};
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
	var seenObjects = new _Set()
=======
	var seenObjects = new _Set();
>>>>>>> origin/master

	/**
	 * Recursively traverse an object to evoke all converted
	 * getters, so that every nested property inside the object
	 * is collected as a "deep" dependency.
	 */
	function traverse (val) {
<<<<<<< HEAD
		_traverse(val, seenObjects)
		seenObjects.clear()
	}

	function _traverse (val, seen) {
		var i, keys
		var isA = Array.isArray(val)
=======
		_traverse(val, seenObjects);
		seenObjects.clear();
	}

	function _traverse (val, seen) {
		var i, keys;
		var isA = Array.isArray(val);
>>>>>>> origin/master
		if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
			return
		}
		if (val.__ob__) {
<<<<<<< HEAD
			var depId = val.__ob__.dep.id
			if (seen.has(depId)) {
				return
			}
			seen.add(depId)
		}
		if (isA) {
			i = val.length
			while (i--) { _traverse(val[i], seen) }
		} else {
			keys = Object.keys(val)
			i = keys.length
			while (i--) { _traverse(val[keys[i]], seen) }
=======
			var depId = val.__ob__.dep.id;
			if (seen.has(depId)) {
				return
			}
			seen.add(depId);
		}
		if (isA) {
			i = val.length;
			while (i--) { _traverse(val[i], seen); }
		} else {
			keys = Object.keys(val);
			i = keys.length;
			while (i--) { _traverse(val[keys[i]], seen); }
>>>>>>> origin/master
		}
	}

	/*  */

	var normalizeEvent = cached(function (name) {
<<<<<<< HEAD
		var passive = name.charAt(0) === '&'
		name = passive ? name.slice(1) : name
		var once$$1 = name.charAt(0) === '~' // Prefixed last, checked first
		name = once$$1 ? name.slice(1) : name
		var capture = name.charAt(0) === '!'
		name = capture ? name.slice(1) : name
=======
		var passive = name.charAt(0) === '&';
		name = passive ? name.slice(1) : name;
		var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
		name = once$$1 ? name.slice(1) : name;
		var capture = name.charAt(0) === '!';
		name = capture ? name.slice(1) : name;
>>>>>>> origin/master
		return {
			name: name,
			once: once$$1,
			capture: capture,
			passive: passive
		}
<<<<<<< HEAD
	})

	function createFnInvoker (fns) {
		function invoker () {
			var arguments$1 = arguments

			var fns = invoker.fns
			if (Array.isArray(fns)) {
				var cloned = fns.slice()
				for (var i = 0; i < cloned.length; i++) {
					cloned[i].apply(null, arguments$1)
=======
	});

	function createFnInvoker (fns) {
		function invoker () {
			var arguments$1 = arguments;

			var fns = invoker.fns;
			if (Array.isArray(fns)) {
				var cloned = fns.slice();
				for (var i = 0; i < cloned.length; i++) {
					cloned[i].apply(null, arguments$1);
>>>>>>> origin/master
				}
			} else {
				// return handler return value for single handlers
				return fns.apply(null, arguments)
			}
		}
<<<<<<< HEAD
		invoker.fns = fns
=======
		invoker.fns = fns;
>>>>>>> origin/master
		return invoker
	}

	function updateListeners (
		on,
		oldOn,
		add,
		remove$$1,
		vm
	) {
<<<<<<< HEAD
		var name, def, cur, old, event
		for (name in on) {
			def = cur = on[name]
			old = oldOn[name]
			event = normalizeEvent(name)
			/* istanbul ignore if */
			if (isUndef(cur)) {
				'development' !== 'production' && warn(
					'Invalid handler for event "' + (event.name) + '": got ' + String(cur),
					vm
				)
			} else if (isUndef(old)) {
				if (isUndef(cur.fns)) {
					cur = on[name] = createFnInvoker(cur)
				}
				add(event.name, cur, event.once, event.capture, event.passive, event.params)
			} else if (cur !== old) {
				old.fns = cur
				on[name] = old
=======
		var name, def, cur, old, event;
		for (name in on) {
			def = cur = on[name];
			old = oldOn[name];
			event = normalizeEvent(name);
			/* istanbul ignore if */
			if (isUndef(cur)) {
				"development" !== 'production' && warn(
					"Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
					vm
				);
			} else if (isUndef(old)) {
				if (isUndef(cur.fns)) {
					cur = on[name] = createFnInvoker(cur);
				}
				add(event.name, cur, event.once, event.capture, event.passive, event.params);
			} else if (cur !== old) {
				old.fns = cur;
				on[name] = old;
>>>>>>> origin/master
			}
		}
		for (name in oldOn) {
			if (isUndef(on[name])) {
<<<<<<< HEAD
				event = normalizeEvent(name)
				remove$$1(event.name, oldOn[name], event.capture)
=======
				event = normalizeEvent(name);
				remove$$1(event.name, oldOn[name], event.capture);
>>>>>>> origin/master
			}
		}
	}

	/*  */

	function mergeVNodeHook (def, hookKey, hook) {
		if (def instanceof VNode) {
<<<<<<< HEAD
			def = def.data.hook || (def.data.hook = {})
		}
		var invoker
		var oldHook = def[hookKey]

		function wrappedHook () {
			hook.apply(this, arguments)
			// important: remove merged hook to ensure it's called only once
			// and prevent memory leak
			remove(invoker.fns, wrappedHook)
=======
			def = def.data.hook || (def.data.hook = {});
		}
		var invoker;
		var oldHook = def[hookKey];

		function wrappedHook () {
			hook.apply(this, arguments);
			// important: remove merged hook to ensure it's called only once
			// and prevent memory leak
			remove(invoker.fns, wrappedHook);
>>>>>>> origin/master
		}

		if (isUndef(oldHook)) {
			// no existing hook
<<<<<<< HEAD
			invoker = createFnInvoker([wrappedHook])
=======
			invoker = createFnInvoker([wrappedHook]);
>>>>>>> origin/master
		} else {
			/* istanbul ignore if */
			if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
				// already a merged invoker
<<<<<<< HEAD
				invoker = oldHook
				invoker.fns.push(wrappedHook)
			} else {
				// existing plain hook
				invoker = createFnInvoker([oldHook, wrappedHook])
			}
		}

		invoker.merged = true
		def[hookKey] = invoker
=======
				invoker = oldHook;
				invoker.fns.push(wrappedHook);
			} else {
				// existing plain hook
				invoker = createFnInvoker([oldHook, wrappedHook]);
			}
		}

		invoker.merged = true;
		def[hookKey] = invoker;
>>>>>>> origin/master
	}

	/*  */

	function extractPropsFromVNodeData (
		data,
		Ctor,
		tag
	) {
		// we are only extracting raw values here.
		// validation and default values are handled in the child
		// component itself.
<<<<<<< HEAD
		var propOptions = Ctor.options.props
		if (isUndef(propOptions)) {
			return
		}
		var res = {}
		var attrs = data.attrs
		var props = data.props
		if (isDef(attrs) || isDef(props)) {
			for (var key in propOptions) {
				var altKey = hyphenate(key)
				{
					var keyInLowerCase = key.toLowerCase()
=======
		var propOptions = Ctor.options.props;
		if (isUndef(propOptions)) {
			return
		}
		var res = {};
		var attrs = data.attrs;
		var props = data.props;
		if (isDef(attrs) || isDef(props)) {
			for (var key in propOptions) {
				var altKey = hyphenate(key);
				{
					var keyInLowerCase = key.toLowerCase();
>>>>>>> origin/master
					if (
						key !== keyInLowerCase &&
						attrs && hasOwn(attrs, keyInLowerCase)
					) {
						tip(
<<<<<<< HEAD
							'Prop "' + keyInLowerCase + '" is passed to component ' +
								(formatComponentName(tag || Ctor)) + ', but the declared prop name is' +
								' "' + key + '". ' +
								'Note that HTML attributes are case-insensitive and camelCased ' +
								'props need to use their kebab-case equivalents when using in-DOM ' +
								'templates. You should probably use "' + altKey + '" instead of "' + key + '".'
						)
					}
				}
				checkProp(res, props, key, altKey, true) ||
					checkProp(res, attrs, key, altKey, false)
=======
							"Prop \"" + keyInLowerCase + "\" is passed to component " +
							(formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
							" \"" + key + "\". " +
							"Note that HTML attributes are case-insensitive and camelCased " +
							"props need to use their kebab-case equivalents when using in-DOM " +
							"templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
						);
					}
				}
				checkProp(res, props, key, altKey, true) ||
				checkProp(res, attrs, key, altKey, false);
>>>>>>> origin/master
			}
		}
		return res
	}

	function checkProp (
		res,
		hash,
		key,
		altKey,
		preserve
	) {
		if (isDef(hash)) {
			if (hasOwn(hash, key)) {
<<<<<<< HEAD
				res[key] = hash[key]
				if (!preserve) {
					delete hash[key]
				}
				return true
			} else if (hasOwn(hash, altKey)) {
				res[key] = hash[altKey]
				if (!preserve) {
					delete hash[altKey]
=======
				res[key] = hash[key];
				if (!preserve) {
					delete hash[key];
				}
				return true
			} else if (hasOwn(hash, altKey)) {
				res[key] = hash[altKey];
				if (!preserve) {
					delete hash[altKey];
>>>>>>> origin/master
				}
				return true
			}
		}
		return false
	}

	/*  */

<<<<<<< HEAD
	// The template compiler attempts to minimize the need for normalization by
	// statically analyzing the template at compile time.
	//
	// For plain HTML markup, normalization can be completely skipped because the
	// generated render function is guaranteed to return Array<VNode>. There are
	// two cases where extra normalization is needed:

	// 1. When the children contains components - because a functional component
	// may return an Array instead of a single root. In this case, just a simple
	// normalization is needed - if any child is an Array, we flatten the whole
	// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
	// because functional components already normalize their own children.
=======
// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
>>>>>>> origin/master
	function simpleNormalizeChildren (children) {
		for (var i = 0; i < children.length; i++) {
			if (Array.isArray(children[i])) {
				return Array.prototype.concat.apply([], children)
			}
		}
		return children
	}

<<<<<<< HEAD
	// 2. When the children contains constructs that always generated nested Arrays,
	// e.g. <template>, <slot>, v-for, or when the children is provided by user
	// with hand-written render functions / JSX. In such cases a full normalization
	// is needed to cater to all possible types of children values.
=======
// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
>>>>>>> origin/master
	function normalizeChildren (children) {
		return isPrimitive(children)
			? [createTextVNode(children)]
			: Array.isArray(children)
				? normalizeArrayChildren(children)
				: undefined
	}

	function isTextNode (node) {
		return isDef(node) && isDef(node.text) && isFalse(node.isComment)
	}

	function normalizeArrayChildren (children, nestedIndex) {
<<<<<<< HEAD
		var res = []
		var i, c, lastIndex, last
		for (i = 0; i < children.length; i++) {
			c = children[i]
			if (isUndef(c) || typeof c === 'boolean') { continue }
			lastIndex = res.length - 1
			last = res[lastIndex]
			//  nested
			if (Array.isArray(c)) {
				if (c.length > 0) {
					c = normalizeArrayChildren(c, ((nestedIndex || '') + '_' + i))
					// merge adjacent text nodes
					if (isTextNode(c[0]) && isTextNode(last)) {
						res[lastIndex] = createTextVNode(last.text + (c[0]).text)
						c.shift()
					}
					res.push.apply(res, c)
=======
		var res = [];
		var i, c, lastIndex, last;
		for (i = 0; i < children.length; i++) {
			c = children[i];
			if (isUndef(c) || typeof c === 'boolean') { continue }
			lastIndex = res.length - 1;
			last = res[lastIndex];
			//  nested
			if (Array.isArray(c)) {
				if (c.length > 0) {
					c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
					// merge adjacent text nodes
					if (isTextNode(c[0]) && isTextNode(last)) {
						res[lastIndex] = createTextVNode(last.text + (c[0]).text);
						c.shift();
					}
					res.push.apply(res, c);
>>>>>>> origin/master
				}
			} else if (isPrimitive(c)) {
				if (isTextNode(last)) {
					// merge adjacent text nodes
					// this is necessary for SSR hydration because text nodes are
					// essentially merged when rendered to HTML strings
<<<<<<< HEAD
					res[lastIndex] = createTextVNode(last.text + c)
				} else if (c !== '') {
					// convert primitive to vnode
					res.push(createTextVNode(c))
=======
					res[lastIndex] = createTextVNode(last.text + c);
				} else if (c !== '') {
					// convert primitive to vnode
					res.push(createTextVNode(c));
>>>>>>> origin/master
				}
			} else {
				if (isTextNode(c) && isTextNode(last)) {
					// merge adjacent text nodes
<<<<<<< HEAD
					res[lastIndex] = createTextVNode(last.text + c.text)
=======
					res[lastIndex] = createTextVNode(last.text + c.text);
>>>>>>> origin/master
				} else {
					// default key for nested array children (likely generated by v-for)
					if (isTrue(children._isVList) &&
						isDef(c.tag) &&
						isUndef(c.key) &&
						isDef(nestedIndex)) {
<<<<<<< HEAD
							c.key = '__vlist' + nestedIndex + '_' + i + '__'
						}
					res.push(c)
=======
						c.key = "__vlist" + nestedIndex + "_" + i + "__";
					}
					res.push(c);
>>>>>>> origin/master
				}
			}
		}
		return res
	}

	/*  */

	function ensureCtor (comp, base) {
		if (
			comp.__esModule ||
			(hasSymbol && comp[Symbol.toStringTag] === 'Module')
		) {
<<<<<<< HEAD
			comp = comp.default
=======
			comp = comp.default;
>>>>>>> origin/master
		}
		return isObject(comp)
			? base.extend(comp)
			: comp
	}

	function createAsyncPlaceholder (
		factory,
		data,
		context,
		children,
		tag
	) {
<<<<<<< HEAD
		var node = createEmptyVNode()
		node.asyncFactory = factory
		node.asyncMeta = { data: data, context: context, children: children, tag: tag }
=======
		var node = createEmptyVNode();
		node.asyncFactory = factory;
		node.asyncMeta = { data: data, context: context, children: children, tag: tag };
>>>>>>> origin/master
		return node
	}

	function resolveAsyncComponent (
		factory,
		baseCtor,
		context
	) {
		if (isTrue(factory.error) && isDef(factory.errorComp)) {
			return factory.errorComp
		}

		if (isDef(factory.resolved)) {
			return factory.resolved
		}

		if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
			return factory.loadingComp
		}

		if (isDef(factory.contexts)) {
			// already pending
<<<<<<< HEAD
			factory.contexts.push(context)
		} else {
			var contexts = factory.contexts = [context]
			var sync = true

			var forceRender = function () {
				for (var i = 0, l = contexts.length; i < l; i++) {
					contexts[i].$forceUpdate()
				}
			}

			var resolve = once(function (res) {
				// cache resolved
				factory.resolved = ensureCtor(res, baseCtor)
				// invoke callbacks only if this is not a synchronous resolve
				// (async resolves are shimmed as synchronous during SSR)
				if (!sync) {
					forceRender()
				}
			})

			var reject = once(function (reason) {
				'development' !== 'production' && warn(
					'Failed to resolve async component: ' + (String(factory)) +
						(reason ? ('\nReason: ' + reason) : '')
				)
				if (isDef(factory.errorComp)) {
					factory.error = true
					forceRender()
				}
			})

			var res = factory(resolve, reject)
=======
			factory.contexts.push(context);
		} else {
			var contexts = factory.contexts = [context];
			var sync = true;

			var forceRender = function () {
				for (var i = 0, l = contexts.length; i < l; i++) {
					contexts[i].$forceUpdate();
				}
			};

			var resolve = once(function (res) {
				// cache resolved
				factory.resolved = ensureCtor(res, baseCtor);
				// invoke callbacks only if this is not a synchronous resolve
				// (async resolves are shimmed as synchronous during SSR)
				if (!sync) {
					forceRender();
				}
			});

			var reject = once(function (reason) {
				"development" !== 'production' && warn(
					"Failed to resolve async component: " + (String(factory)) +
					(reason ? ("\nReason: " + reason) : '')
				);
				if (isDef(factory.errorComp)) {
					factory.error = true;
					forceRender();
				}
			});

			var res = factory(resolve, reject);
>>>>>>> origin/master

			if (isObject(res)) {
				if (typeof res.then === 'function') {
					// () => Promise
					if (isUndef(factory.resolved)) {
<<<<<<< HEAD
						res.then(resolve, reject)
					}
				} else if (isDef(res.component) && typeof res.component.then === 'function') {
					res.component.then(resolve, reject)

					if (isDef(res.error)) {
						factory.errorComp = ensureCtor(res.error, baseCtor)
					}

					if (isDef(res.loading)) {
						factory.loadingComp = ensureCtor(res.loading, baseCtor)
						if (res.delay === 0) {
							factory.loading = true
						} else {
							setTimeout(function () {
								if (isUndef(factory.resolved) && isUndef(factory.error)) {
									factory.loading = true
									forceRender()
								}
							}, res.delay || 200)
=======
						res.then(resolve, reject);
					}
				} else if (isDef(res.component) && typeof res.component.then === 'function') {
					res.component.then(resolve, reject);

					if (isDef(res.error)) {
						factory.errorComp = ensureCtor(res.error, baseCtor);
					}

					if (isDef(res.loading)) {
						factory.loadingComp = ensureCtor(res.loading, baseCtor);
						if (res.delay === 0) {
							factory.loading = true;
						} else {
							setTimeout(function () {
								if (isUndef(factory.resolved) && isUndef(factory.error)) {
									factory.loading = true;
									forceRender();
								}
							}, res.delay || 200);
>>>>>>> origin/master
						}
					}

					if (isDef(res.timeout)) {
						setTimeout(function () {
							if (isUndef(factory.resolved)) {
								reject(
<<<<<<< HEAD
									'timeout (' + (res.timeout) + 'ms)'
								)
							}
						}, res.timeout)
=======
									"timeout (" + (res.timeout) + "ms)"
								);
							}
						}, res.timeout);
>>>>>>> origin/master
					}
				}
			}

<<<<<<< HEAD
			sync = false
=======
			sync = false;
>>>>>>> origin/master
			// return in case resolved synchronously
			return factory.loading
				? factory.loadingComp
				: factory.resolved
		}
	}

	/*  */

	function isAsyncPlaceholder (node) {
		return node.isComment && node.asyncFactory
	}

	/*  */

	function getFirstComponentChild (children) {
		if (Array.isArray(children)) {
			for (var i = 0; i < children.length; i++) {
<<<<<<< HEAD
				var c = children[i]
=======
				var c = children[i];
>>>>>>> origin/master
				if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
					return c
				}
			}
		}
	}

	/*  */

	/*  */

	function initEvents (vm) {
<<<<<<< HEAD
		vm._events = Object.create(null)
		vm._hasHookEvent = false
		// init parent attached events
		var listeners = vm.$options._parentListeners
		if (listeners) {
			updateComponentListeners(vm, listeners)
		}
	}

	var target

	function add (event, fn, once) {
		if (once) {
			target.$once(event, fn)
		} else {
			target.$on(event, fn)
=======
		vm._events = Object.create(null);
		vm._hasHookEvent = false;
		// init parent attached events
		var listeners = vm.$options._parentListeners;
		if (listeners) {
			updateComponentListeners(vm, listeners);
		}
	}

	var target;

	function add (event, fn, once) {
		if (once) {
			target.$once(event, fn);
		} else {
			target.$on(event, fn);
>>>>>>> origin/master
		}
	}

	function remove$1 (event, fn) {
<<<<<<< HEAD
		target.$off(event, fn)
=======
		target.$off(event, fn);
>>>>>>> origin/master
	}

	function updateComponentListeners (
		vm,
		listeners,
		oldListeners
	) {
<<<<<<< HEAD
		target = vm
		updateListeners(listeners, oldListeners || {}, add, remove$1, vm)
		target = undefined
	}

	function eventsMixin (Vue) {
		var hookRE = /^hook:/
		Vue.prototype.$on = function (event, fn) {
			var this$1 = this

			var vm = this
			if (Array.isArray(event)) {
				for (var i = 0, l = event.length; i < l; i++) {
					this$1.$on(event[i], fn)
				}
			} else {
				(vm._events[event] || (vm._events[event] = [])).push(fn)
				// optimize hook:event cost by using a boolean flag marked at registration
				// instead of a hash lookup
				if (hookRE.test(event)) {
					vm._hasHookEvent = true
				}
			}
			return vm
		}

		Vue.prototype.$once = function (event, fn) {
			var vm = this
			function on () {
				vm.$off(event, on)
				fn.apply(vm, arguments)
			}
			on.fn = fn
			vm.$on(event, on)
			return vm
		}

		Vue.prototype.$off = function (event, fn) {
			var this$1 = this

			var vm = this
			// all
			if (!arguments.length) {
				vm._events = Object.create(null)
=======
		target = vm;
		updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
		target = undefined;
	}

	function eventsMixin (Vue) {
		var hookRE = /^hook:/;
		Vue.prototype.$on = function (event, fn) {
			var this$1 = this;

			var vm = this;
			if (Array.isArray(event)) {
				for (var i = 0, l = event.length; i < l; i++) {
					this$1.$on(event[i], fn);
				}
			} else {
				(vm._events[event] || (vm._events[event] = [])).push(fn);
				// optimize hook:event cost by using a boolean flag marked at registration
				// instead of a hash lookup
				if (hookRE.test(event)) {
					vm._hasHookEvent = true;
				}
			}
			return vm
		};

		Vue.prototype.$once = function (event, fn) {
			var vm = this;
			function on () {
				vm.$off(event, on);
				fn.apply(vm, arguments);
			}
			on.fn = fn;
			vm.$on(event, on);
			return vm
		};

		Vue.prototype.$off = function (event, fn) {
			var this$1 = this;

			var vm = this;
			// all
			if (!arguments.length) {
				vm._events = Object.create(null);
>>>>>>> origin/master
				return vm
			}
			// array of events
			if (Array.isArray(event)) {
				for (var i = 0, l = event.length; i < l; i++) {
<<<<<<< HEAD
					this$1.$off(event[i], fn)
=======
					this$1.$off(event[i], fn);
>>>>>>> origin/master
				}
				return vm
			}
			// specific event
<<<<<<< HEAD
			var cbs = vm._events[event]
=======
			var cbs = vm._events[event];
>>>>>>> origin/master
			if (!cbs) {
				return vm
			}
			if (!fn) {
<<<<<<< HEAD
				vm._events[event] = null
=======
				vm._events[event] = null;
>>>>>>> origin/master
				return vm
			}
			if (fn) {
				// specific handler
<<<<<<< HEAD
				var cb
				var i$1 = cbs.length
				while (i$1--) {
					cb = cbs[i$1]
					if (cb === fn || cb.fn === fn) {
						cbs.splice(i$1, 1)
=======
				var cb;
				var i$1 = cbs.length;
				while (i$1--) {
					cb = cbs[i$1];
					if (cb === fn || cb.fn === fn) {
						cbs.splice(i$1, 1);
>>>>>>> origin/master
						break
					}
				}
			}
			return vm
<<<<<<< HEAD
		}

		Vue.prototype.$emit = function (event) {
			var vm = this
			{
				var lowerCaseEvent = event.toLowerCase()
				if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
					tip(
						'Event "' + lowerCaseEvent + '" is emitted in component ' +
							(formatComponentName(vm)) + ' but the handler is registered for "' + event + '". ' +
							'Note that HTML attributes are case-insensitive and you cannot use ' +
							'v-on to listen to camelCase events when using in-DOM templates. ' +
							'You should probably use "' + (hyphenate(event)) + '" instead of "' + event + '".'
					)
				}
			}
			var cbs = vm._events[event]
			if (cbs) {
				cbs = cbs.length > 1 ? toArray(cbs) : cbs
				var args = toArray(arguments, 1)
				for (var i = 0, l = cbs.length; i < l; i++) {
					try {
						cbs[i].apply(vm, args)
					} catch (e) {
						handleError(e, vm, ('event handler for "' + event + '"'))
=======
		};

		Vue.prototype.$emit = function (event) {
			var vm = this;
			{
				var lowerCaseEvent = event.toLowerCase();
				if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
					tip(
						"Event \"" + lowerCaseEvent + "\" is emitted in component " +
						(formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
						"Note that HTML attributes are case-insensitive and you cannot use " +
						"v-on to listen to camelCase events when using in-DOM templates. " +
						"You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
					);
				}
			}
			var cbs = vm._events[event];
			if (cbs) {
				cbs = cbs.length > 1 ? toArray(cbs) : cbs;
				var args = toArray(arguments, 1);
				for (var i = 0, l = cbs.length; i < l; i++) {
					try {
						cbs[i].apply(vm, args);
					} catch (e) {
						handleError(e, vm, ("event handler for \"" + event + "\""));
>>>>>>> origin/master
					}
				}
			}
			return vm
<<<<<<< HEAD
		}
=======
		};
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
=======


>>>>>>> origin/master
	/**
	 * Runtime helper for resolving raw children VNodes into a slot object.
	 */
	function resolveSlots (
		children,
		context
	) {
<<<<<<< HEAD
		var slots = {}
=======
		var slots = {};
>>>>>>> origin/master
		if (!children) {
			return slots
		}
		for (var i = 0, l = children.length; i < l; i++) {
<<<<<<< HEAD
			var child = children[i]
			var data = child.data
			// remove slot attribute if the node is resolved as a Vue slot node
			if (data && data.attrs && data.attrs.slot) {
				delete data.attrs.slot
=======
			var child = children[i];
			var data = child.data;
			// remove slot attribute if the node is resolved as a Vue slot node
			if (data && data.attrs && data.attrs.slot) {
				delete data.attrs.slot;
>>>>>>> origin/master
			}
			// named slots should only be respected if the vnode was rendered in the
			// same context.
			if ((child.context === context || child.fnContext === context) &&
				data && data.slot != null
			) {
<<<<<<< HEAD
				var name = data.slot
				var slot = (slots[name] || (slots[name] = []))
				if (child.tag === 'template') {
					slot.push.apply(slot, child.children || [])
				} else {
					slot.push(child)
				}
			} else {
				(slots.default || (slots.default = [])).push(child)
=======
				var name = data.slot;
				var slot = (slots[name] || (slots[name] = []));
				if (child.tag === 'template') {
					slot.push.apply(slot, child.children || []);
				} else {
					slot.push(child);
				}
			} else {
				(slots.default || (slots.default = [])).push(child);
>>>>>>> origin/master
			}
		}
		// ignore slots that contains only whitespace
		for (var name$1 in slots) {
			if (slots[name$1].every(isWhitespace)) {
<<<<<<< HEAD
				delete slots[name$1]
=======
				delete slots[name$1];
>>>>>>> origin/master
			}
		}
		return slots
	}

	function isWhitespace (node) {
		return (node.isComment && !node.asyncFactory) || node.text === ' '
	}

	function resolveScopedSlots (
		fns, // see flow/vnode
		res
	) {
<<<<<<< HEAD
		res = res || {}
		for (var i = 0; i < fns.length; i++) {
			if (Array.isArray(fns[i])) {
				resolveScopedSlots(fns[i], res)
			} else {
				res[fns[i].key] = fns[i].fn
=======
		res = res || {};
		for (var i = 0; i < fns.length; i++) {
			if (Array.isArray(fns[i])) {
				resolveScopedSlots(fns[i], res);
			} else {
				res[fns[i].key] = fns[i].fn;
>>>>>>> origin/master
			}
		}
		return res
	}

	/*  */

<<<<<<< HEAD
	var activeInstance = null
	var isUpdatingChildComponent = false

	function initLifecycle (vm) {
		var options = vm.$options

		// locate first non-abstract parent
		var parent = options.parent
		if (parent && !options.abstract) {
			while (parent.$options.abstract && parent.$parent) {
				parent = parent.$parent
			}
			parent.$children.push(vm)
		}

		vm.$parent = parent
		vm.$root = parent ? parent.$root : vm

		vm.$children = []
		vm.$refs = {}

		vm._watcher = null
		vm._inactive = null
		vm._directInactive = false
		vm._isMounted = false
		vm._isDestroyed = false
		vm._isBeingDestroyed = false
=======
	var activeInstance = null;
	var isUpdatingChildComponent = false;

	function initLifecycle (vm) {
		var options = vm.$options;

		// locate first non-abstract parent
		var parent = options.parent;
		if (parent && !options.abstract) {
			while (parent.$options.abstract && parent.$parent) {
				parent = parent.$parent;
			}
			parent.$children.push(vm);
		}

		vm.$parent = parent;
		vm.$root = parent ? parent.$root : vm;

		vm.$children = [];
		vm.$refs = {};

		vm._watcher = null;
		vm._inactive = null;
		vm._directInactive = false;
		vm._isMounted = false;
		vm._isDestroyed = false;
		vm._isBeingDestroyed = false;
>>>>>>> origin/master
	}

	function lifecycleMixin (Vue) {
		Vue.prototype._update = function (vnode, hydrating) {
<<<<<<< HEAD
			var vm = this
			if (vm._isMounted) {
				callHook(vm, 'beforeUpdate')
			}
			var prevEl = vm.$el
			var prevVnode = vm._vnode
			var prevActiveInstance = activeInstance
			activeInstance = vm
			vm._vnode = vnode
=======
			var vm = this;
			if (vm._isMounted) {
				callHook(vm, 'beforeUpdate');
			}
			var prevEl = vm.$el;
			var prevVnode = vm._vnode;
			var prevActiveInstance = activeInstance;
			activeInstance = vm;
			vm._vnode = vnode;
>>>>>>> origin/master
			// Vue.prototype.__patch__ is injected in entry points
			// based on the rendering backend used.
			if (!prevVnode) {
				// initial render
				vm.$el = vm.__patch__(
					vm.$el, vnode, hydrating, false /* removeOnly */,
					vm.$options._parentElm,
					vm.$options._refElm
<<<<<<< HEAD
				)
				// no need for the ref nodes after initial patch
				// this prevents keeping a detached DOM tree in memory (#5851)
				vm.$options._parentElm = vm.$options._refElm = null
			} else {
				// updates
				vm.$el = vm.__patch__(prevVnode, vnode)
			}
			activeInstance = prevActiveInstance
			// update __vue__ reference
			if (prevEl) {
				prevEl.__vue__ = null
			}
			if (vm.$el) {
				vm.$el.__vue__ = vm
			}
			// if parent is an HOC, update its $el as well
			if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
				vm.$parent.$el = vm.$el
			}
			// updated hook is called by the scheduler to ensure that children are
			// updated in a parent's updated hook.
		}

		Vue.prototype.$forceUpdate = function () {
			var vm = this
			if (vm._watcher) {
				vm._watcher.update()
			}
		}

		Vue.prototype.$destroy = function () {
			var vm = this
			if (vm._isBeingDestroyed) {
				return
			}
			callHook(vm, 'beforeDestroy')
			vm._isBeingDestroyed = true
			// remove self from parent
			var parent = vm.$parent
			if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
				remove(parent.$children, vm)
			}
			// teardown watchers
			if (vm._watcher) {
				vm._watcher.teardown()
			}
			var i = vm._watchers.length
			while (i--) {
				vm._watchers[i].teardown()
=======
				);
				// no need for the ref nodes after initial patch
				// this prevents keeping a detached DOM tree in memory (#5851)
				vm.$options._parentElm = vm.$options._refElm = null;
			} else {
				// updates
				vm.$el = vm.__patch__(prevVnode, vnode);
			}
			activeInstance = prevActiveInstance;
			// update __vue__ reference
			if (prevEl) {
				prevEl.__vue__ = null;
			}
			if (vm.$el) {
				vm.$el.__vue__ = vm;
			}
			// if parent is an HOC, update its $el as well
			if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
				vm.$parent.$el = vm.$el;
			}
			// updated hook is called by the scheduler to ensure that children are
			// updated in a parent's updated hook.
		};

		Vue.prototype.$forceUpdate = function () {
			var vm = this;
			if (vm._watcher) {
				vm._watcher.update();
			}
		};

		Vue.prototype.$destroy = function () {
			var vm = this;
			if (vm._isBeingDestroyed) {
				return
			}
			callHook(vm, 'beforeDestroy');
			vm._isBeingDestroyed = true;
			// remove self from parent
			var parent = vm.$parent;
			if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
				remove(parent.$children, vm);
			}
			// teardown watchers
			if (vm._watcher) {
				vm._watcher.teardown();
			}
			var i = vm._watchers.length;
			while (i--) {
				vm._watchers[i].teardown();
>>>>>>> origin/master
			}
			// remove reference from data ob
			// frozen object may not have observer.
			if (vm._data.__ob__) {
<<<<<<< HEAD
				vm._data.__ob__.vmCount--
			}
			// call the last hook...
			vm._isDestroyed = true
			// invoke destroy hooks on current rendered tree
			vm.__patch__(vm._vnode, null)
			// fire destroyed hook
			callHook(vm, 'destroyed')
			// turn off all instance listeners.
			vm.$off()
			// remove __vue__ reference
			if (vm.$el) {
				vm.$el.__vue__ = null
			}
			// release circular reference (#6759)
			if (vm.$vnode) {
				vm.$vnode.parent = null
			}
		}
=======
				vm._data.__ob__.vmCount--;
			}
			// call the last hook...
			vm._isDestroyed = true;
			// invoke destroy hooks on current rendered tree
			vm.__patch__(vm._vnode, null);
			// fire destroyed hook
			callHook(vm, 'destroyed');
			// turn off all instance listeners.
			vm.$off();
			// remove __vue__ reference
			if (vm.$el) {
				vm.$el.__vue__ = null;
			}
			// release circular reference (#6759)
			if (vm.$vnode) {
				vm.$vnode.parent = null;
			}
		};
>>>>>>> origin/master
	}

	function mountComponent (
		vm,
		el,
		hydrating
	) {
<<<<<<< HEAD
		vm.$el = el
		if (!vm.$options.render) {
			vm.$options.render = createEmptyVNode
=======
		vm.$el = el;
		if (!vm.$options.render) {
			vm.$options.render = createEmptyVNode;
>>>>>>> origin/master
			{
				/* istanbul ignore if */
				if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
					vm.$options.el || el) {
<<<<<<< HEAD
						warn(
							'You are using the runtime-only build of Vue where the template ' +
								'compiler is not available. Either pre-compile the templates into ' +
								'render functions, or use the compiler-included build.',
							vm
						)
=======
					warn(
						'You are using the runtime-only build of Vue where the template ' +
						'compiler is not available. Either pre-compile the templates into ' +
						'render functions, or use the compiler-included build.',
						vm
					);
>>>>>>> origin/master
				} else {
					warn(
						'Failed to mount component: template or render function not defined.',
						vm
<<<<<<< HEAD
					)
				}
			}
		}
		callHook(vm, 'beforeMount')

		var updateComponent
		/* istanbul ignore if */
		if ('development' !== 'production' && config.performance && mark) {
			updateComponent = function () {
				var name = vm._name
				var id = vm._uid
				var startTag = 'vue-perf-start:' + id
				var endTag = 'vue-perf-end:' + id

				mark(startTag)
				var vnode = vm._render()
				mark(endTag)
				measure(('vue ' + name + ' render'), startTag, endTag)

				mark(startTag)
				vm._update(vnode, hydrating)
				mark(endTag)
				measure(('vue ' + name + ' patch'), startTag, endTag)
			}
		} else {
			updateComponent = function () {
				vm._update(vm._render(), hydrating)
			}
=======
					);
				}
			}
		}
		callHook(vm, 'beforeMount');

		var updateComponent;
		/* istanbul ignore if */
		if ("development" !== 'production' && config.performance && mark) {
			updateComponent = function () {
				var name = vm._name;
				var id = vm._uid;
				var startTag = "vue-perf-start:" + id;
				var endTag = "vue-perf-end:" + id;

				mark(startTag);
				var vnode = vm._render();
				mark(endTag);
				measure(("vue " + name + " render"), startTag, endTag);

				mark(startTag);
				vm._update(vnode, hydrating);
				mark(endTag);
				measure(("vue " + name + " patch"), startTag, endTag);
			};
		} else {
			updateComponent = function () {
				vm._update(vm._render(), hydrating);
			};
>>>>>>> origin/master
		}

		// we set this to vm._watcher inside the watcher's constructor
		// since the watcher's initial patch may call $forceUpdate (e.g. inside child
		// component's mounted hook), which relies on vm._watcher being already defined
<<<<<<< HEAD
		new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */)
		hydrating = false
=======
		new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
		hydrating = false;
>>>>>>> origin/master

		// manually mounted instance, call mounted on self
		// mounted is called for render-created child components in its inserted hook
		if (vm.$vnode == null) {
<<<<<<< HEAD
			vm._isMounted = true
			callHook(vm, 'mounted')
=======
			vm._isMounted = true;
			callHook(vm, 'mounted');
>>>>>>> origin/master
		}
		return vm
	}

	function updateChildComponent (
		vm,
		propsData,
		listeners,
		parentVnode,
		renderChildren
	) {
		{
<<<<<<< HEAD
			isUpdatingChildComponent = true
=======
			isUpdatingChildComponent = true;
>>>>>>> origin/master
		}

		// determine whether component has slot children
		// we need to do this before overwriting $options._renderChildren
		var hasChildren = !!(
<<<<<<< HEAD
			renderChildren || // has new static slots
			vm.$options._renderChildren || // has old static slots
			parentVnode.data.scopedSlots || // has new scoped slots
			vm.$scopedSlots !== emptyObject // has old scoped slots
		)

		vm.$options._parentVnode = parentVnode
		vm.$vnode = parentVnode // update vm's placeholder node without re-render

		if (vm._vnode) { // update child tree's parent
			vm._vnode.parent = parentVnode
		}
		vm.$options._renderChildren = renderChildren
=======
			renderChildren ||               // has new static slots
			vm.$options._renderChildren ||  // has old static slots
			parentVnode.data.scopedSlots || // has new scoped slots
			vm.$scopedSlots !== emptyObject // has old scoped slots
		);

		vm.$options._parentVnode = parentVnode;
		vm.$vnode = parentVnode; // update vm's placeholder node without re-render

		if (vm._vnode) { // update child tree's parent
			vm._vnode.parent = parentVnode;
		}
		vm.$options._renderChildren = renderChildren;
>>>>>>> origin/master

		// update $attrs and $listeners hash
		// these are also reactive so they may trigger child update if the child
		// used them during render
<<<<<<< HEAD
		vm.$attrs = parentVnode.data.attrs || emptyObject
		vm.$listeners = listeners || emptyObject

		// update props
		if (propsData && vm.$options.props) {
			toggleObserving(false)
			var props = vm._props
			var propKeys = vm.$options._propKeys || []
			for (var i = 0; i < propKeys.length; i++) {
				var key = propKeys[i]
				var propOptions = vm.$options.props // wtf flow?
				props[key] = validateProp(key, propOptions, propsData, vm)
			}
			toggleObserving(true)
			// keep a copy of raw propsData
			vm.$options.propsData = propsData
		}

		// update listeners
		listeners = listeners || emptyObject
		var oldListeners = vm.$options._parentListeners
		vm.$options._parentListeners = listeners
		updateComponentListeners(vm, listeners, oldListeners)

		// resolve slots + force update if has children
		if (hasChildren) {
			vm.$slots = resolveSlots(renderChildren, parentVnode.context)
			vm.$forceUpdate()
		}

		{
			isUpdatingChildComponent = false
=======
		vm.$attrs = parentVnode.data.attrs || emptyObject;
		vm.$listeners = listeners || emptyObject;

		// update props
		if (propsData && vm.$options.props) {
			toggleObserving(false);
			var props = vm._props;
			var propKeys = vm.$options._propKeys || [];
			for (var i = 0; i < propKeys.length; i++) {
				var key = propKeys[i];
				var propOptions = vm.$options.props; // wtf flow?
				props[key] = validateProp(key, propOptions, propsData, vm);
			}
			toggleObserving(true);
			// keep a copy of raw propsData
			vm.$options.propsData = propsData;
		}

		// update listeners
		listeners = listeners || emptyObject;
		var oldListeners = vm.$options._parentListeners;
		vm.$options._parentListeners = listeners;
		updateComponentListeners(vm, listeners, oldListeners);

		// resolve slots + force update if has children
		if (hasChildren) {
			vm.$slots = resolveSlots(renderChildren, parentVnode.context);
			vm.$forceUpdate();
		}

		{
			isUpdatingChildComponent = false;
>>>>>>> origin/master
		}
	}

	function isInInactiveTree (vm) {
		while (vm && (vm = vm.$parent)) {
			if (vm._inactive) { return true }
		}
		return false
	}

	function activateChildComponent (vm, direct) {
		if (direct) {
<<<<<<< HEAD
			vm._directInactive = false
=======
			vm._directInactive = false;
>>>>>>> origin/master
			if (isInInactiveTree(vm)) {
				return
			}
		} else if (vm._directInactive) {
			return
		}
		if (vm._inactive || vm._inactive === null) {
<<<<<<< HEAD
			vm._inactive = false
			for (var i = 0; i < vm.$children.length; i++) {
				activateChildComponent(vm.$children[i])
			}
			callHook(vm, 'activated')
=======
			vm._inactive = false;
			for (var i = 0; i < vm.$children.length; i++) {
				activateChildComponent(vm.$children[i]);
			}
			callHook(vm, 'activated');
>>>>>>> origin/master
		}
	}

	function deactivateChildComponent (vm, direct) {
		if (direct) {
<<<<<<< HEAD
			vm._directInactive = true
=======
			vm._directInactive = true;
>>>>>>> origin/master
			if (isInInactiveTree(vm)) {
				return
			}
		}
		if (!vm._inactive) {
<<<<<<< HEAD
			vm._inactive = true
			for (var i = 0; i < vm.$children.length; i++) {
				deactivateChildComponent(vm.$children[i])
			}
			callHook(vm, 'deactivated')
=======
			vm._inactive = true;
			for (var i = 0; i < vm.$children.length; i++) {
				deactivateChildComponent(vm.$children[i]);
			}
			callHook(vm, 'deactivated');
>>>>>>> origin/master
		}
	}

	function callHook (vm, hook) {
		// #7573 disable dep collection when invoking lifecycle hooks
<<<<<<< HEAD
		pushTarget()
		var handlers = vm.$options[hook]
		if (handlers) {
			for (var i = 0, j = handlers.length; i < j; i++) {
				try {
					handlers[i].call(vm)
				} catch (e) {
					handleError(e, vm, (hook + ' hook'))
=======
		pushTarget();
		var handlers = vm.$options[hook];
		if (handlers) {
			for (var i = 0, j = handlers.length; i < j; i++) {
				try {
					handlers[i].call(vm);
				} catch (e) {
					handleError(e, vm, (hook + " hook"));
>>>>>>> origin/master
				}
			}
		}
		if (vm._hasHookEvent) {
<<<<<<< HEAD
			vm.$emit('hook:' + hook)
		}
		popTarget()
=======
			vm.$emit('hook:' + hook);
		}
		popTarget();
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
	var MAX_UPDATE_COUNT = 100

	var queue = []
	var activatedChildren = []
	var has = {}
	var circular = {}
	var waiting = false
	var flushing = false
	var index = 0
=======

	var MAX_UPDATE_COUNT = 100;

	var queue = [];
	var activatedChildren = [];
	var has = {};
	var circular = {};
	var waiting = false;
	var flushing = false;
	var index = 0;
>>>>>>> origin/master

	/**
	 * Reset the scheduler's state.
	 */
	function resetSchedulerState () {
<<<<<<< HEAD
		index = queue.length = activatedChildren.length = 0
		has = {}
		{
			circular = {}
		}
		waiting = flushing = false
=======
		index = queue.length = activatedChildren.length = 0;
		has = {};
		{
			circular = {};
		}
		waiting = flushing = false;
>>>>>>> origin/master
	}

	/**
	 * Flush both queues and run the watchers.
	 */
	function flushSchedulerQueue () {
<<<<<<< HEAD
		flushing = true
		var watcher, id
=======
		flushing = true;
		var watcher, id;
>>>>>>> origin/master

		// Sort queue before flush.
		// This ensures that:
		// 1. Components are updated from parent to child. (because parent is always
		//    created before the child)
		// 2. A component's user watchers are run before its render watcher (because
		//    user watchers are created before the render watcher)
		// 3. If a component is destroyed during a parent component's watcher run,
		//    its watchers can be skipped.
<<<<<<< HEAD
		queue.sort(function (a, b) { return a.id - b.id })
=======
		queue.sort(function (a, b) { return a.id - b.id; });
>>>>>>> origin/master

		// do not cache length because more watchers might be pushed
		// as we run existing watchers
		for (index = 0; index < queue.length; index++) {
<<<<<<< HEAD
			watcher = queue[index]
			id = watcher.id
			has[id] = null
			watcher.run()
			// in dev build, check and stop circular updates.
			if ('development' !== 'production' && has[id] != null) {
				circular[id] = (circular[id] || 0) + 1
=======
			watcher = queue[index];
			id = watcher.id;
			has[id] = null;
			watcher.run();
			// in dev build, check and stop circular updates.
			if ("development" !== 'production' && has[id] != null) {
				circular[id] = (circular[id] || 0) + 1;
>>>>>>> origin/master
				if (circular[id] > MAX_UPDATE_COUNT) {
					warn(
						'You may have an infinite update loop ' + (
							watcher.user
<<<<<<< HEAD
								? ('in watcher with expression "' + (watcher.expression) + '"')
								: 'in a component render function.'
						),
						watcher.vm
					)
=======
								? ("in watcher with expression \"" + (watcher.expression) + "\"")
								: "in a component render function."
						),
						watcher.vm
					);
>>>>>>> origin/master
					break
				}
			}
		}

		// keep copies of post queues before resetting state
<<<<<<< HEAD
		var activatedQueue = activatedChildren.slice()
		var updatedQueue = queue.slice()

		resetSchedulerState()

		// call component updated and activated hooks
		callActivatedHooks(activatedQueue)
		callUpdatedHooks(updatedQueue)
=======
		var activatedQueue = activatedChildren.slice();
		var updatedQueue = queue.slice();

		resetSchedulerState();

		// call component updated and activated hooks
		callActivatedHooks(activatedQueue);
		callUpdatedHooks(updatedQueue);
>>>>>>> origin/master

		// devtool hook
		/* istanbul ignore if */
		if (devtools && config.devtools) {
<<<<<<< HEAD
			devtools.emit('flush')
=======
			devtools.emit('flush');
>>>>>>> origin/master
		}
	}

	function callUpdatedHooks (queue) {
<<<<<<< HEAD
		var i = queue.length
		while (i--) {
			var watcher = queue[i]
			var vm = watcher.vm
			if (vm._watcher === watcher && vm._isMounted) {
				callHook(vm, 'updated')
=======
		var i = queue.length;
		while (i--) {
			var watcher = queue[i];
			var vm = watcher.vm;
			if (vm._watcher === watcher && vm._isMounted) {
				callHook(vm, 'updated');
>>>>>>> origin/master
			}
		}
	}

	/**
	 * Queue a kept-alive component that was activated during patch.
	 * The queue will be processed after the entire tree has been patched.
	 */
	function queueActivatedComponent (vm) {
		// setting _inactive to false here so that a render function can
		// rely on checking whether it's in an inactive tree (e.g. router-view)
<<<<<<< HEAD
		vm._inactive = false
		activatedChildren.push(vm)
=======
		vm._inactive = false;
		activatedChildren.push(vm);
>>>>>>> origin/master
	}

	function callActivatedHooks (queue) {
		for (var i = 0; i < queue.length; i++) {
<<<<<<< HEAD
			queue[i]._inactive = true
			activateChildComponent(queue[i], true /* true */)
=======
			queue[i]._inactive = true;
			activateChildComponent(queue[i], true /* true */);
>>>>>>> origin/master
		}
	}

	/**
	 * Push a watcher into the watcher queue.
	 * Jobs with duplicate IDs will be skipped unless it's
	 * pushed when the queue is being flushed.
	 */
	function queueWatcher (watcher) {
<<<<<<< HEAD
		var id = watcher.id
		if (has[id] == null) {
			has[id] = true
			if (!flushing) {
				queue.push(watcher)
			} else {
				// if already flushing, splice the watcher based on its id
				// if already past its id, it will be run next immediately.
				var i = queue.length - 1
				while (i > index && queue[i].id > watcher.id) {
					i--
				}
				queue.splice(i + 1, 0, watcher)
			}
			// queue the flush
			if (!waiting) {
				waiting = true
				nextTick(flushSchedulerQueue)
=======
		var id = watcher.id;
		if (has[id] == null) {
			has[id] = true;
			if (!flushing) {
				queue.push(watcher);
			} else {
				// if already flushing, splice the watcher based on its id
				// if already past its id, it will be run next immediately.
				var i = queue.length - 1;
				while (i > index && queue[i].id > watcher.id) {
					i--;
				}
				queue.splice(i + 1, 0, watcher);
			}
			// queue the flush
			if (!waiting) {
				waiting = true;
				nextTick(flushSchedulerQueue);
>>>>>>> origin/master
			}
		}
	}

	/*  */

<<<<<<< HEAD
	var uid$1 = 0
=======
	var uid$1 = 0;
>>>>>>> origin/master

	/**
	 * A watcher parses an expression, collects dependencies,
	 * and fires callback when the expression value changes.
	 * This is used for both the $watch() api and directives.
	 */
	var Watcher = function Watcher (
		vm,
		expOrFn,
		cb,
		options,
		isRenderWatcher
	) {
<<<<<<< HEAD
		this.vm = vm
		if (isRenderWatcher) {
			vm._watcher = this
		}
		vm._watchers.push(this)
		// options
		if (options) {
			this.deep = !!options.deep
			this.user = !!options.user
			this.lazy = !!options.lazy
			this.sync = !!options.sync
		} else {
			this.deep = this.user = this.lazy = this.sync = false
		}
		this.cb = cb
		this.id = ++uid$1 // uid for batching
		this.active = true
		this.dirty = this.lazy // for lazy watchers
		this.deps = []
		this.newDeps = []
		this.depIds = new _Set()
		this.newDepIds = new _Set()
		this.expression = expOrFn.toString()
		// parse expression for getter
		if (typeof expOrFn === 'function') {
			this.getter = expOrFn
		} else {
			this.getter = parsePath(expOrFn)
			if (!this.getter) {
				this.getter = function () {}
				'development' !== 'production' && warn(
					'Failed watching path: "' + expOrFn + '" ' +
						'Watcher only accepts simple dot-delimited paths. ' +
						'For full control, use a function instead.',
					vm
				)
=======
		this.vm = vm;
		if (isRenderWatcher) {
			vm._watcher = this;
		}
		vm._watchers.push(this);
		// options
		if (options) {
			this.deep = !!options.deep;
			this.user = !!options.user;
			this.lazy = !!options.lazy;
			this.sync = !!options.sync;
		} else {
			this.deep = this.user = this.lazy = this.sync = false;
		}
		this.cb = cb;
		this.id = ++uid$1; // uid for batching
		this.active = true;
		this.dirty = this.lazy; // for lazy watchers
		this.deps = [];
		this.newDeps = [];
		this.depIds = new _Set();
		this.newDepIds = new _Set();
		this.expression = expOrFn.toString();
		// parse expression for getter
		if (typeof expOrFn === 'function') {
			this.getter = expOrFn;
		} else {
			this.getter = parsePath(expOrFn);
			if (!this.getter) {
				this.getter = function () {};
				"development" !== 'production' && warn(
					"Failed watching path: \"" + expOrFn + "\" " +
					'Watcher only accepts simple dot-delimited paths. ' +
					'For full control, use a function instead.',
					vm
				);
>>>>>>> origin/master
			}
		}
		this.value = this.lazy
			? undefined
<<<<<<< HEAD
			: this.get()
	}
=======
			: this.get();
	};
>>>>>>> origin/master

	/**
	 * Evaluate the getter, and re-collect dependencies.
	 */
	Watcher.prototype.get = function get () {
<<<<<<< HEAD
		pushTarget(this)
		var value
		var vm = this.vm
		try {
			value = this.getter.call(vm, vm)
		} catch (e) {
			if (this.user) {
				handleError(e, vm, ('getter for watcher "' + (this.expression) + '"'))
=======
		pushTarget(this);
		var value;
		var vm = this.vm;
		try {
			value = this.getter.call(vm, vm);
		} catch (e) {
			if (this.user) {
				handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
>>>>>>> origin/master
			} else {
				throw e
			}
		} finally {
			// "touch" every property so they are all tracked as
			// dependencies for deep watching
			if (this.deep) {
<<<<<<< HEAD
				traverse(value)
			}
			popTarget()
			this.cleanupDeps()
		}
		return value
	}
=======
				traverse(value);
			}
			popTarget();
			this.cleanupDeps();
		}
		return value
	};
>>>>>>> origin/master

	/**
	 * Add a dependency to this directive.
	 */
	Watcher.prototype.addDep = function addDep (dep) {
<<<<<<< HEAD
		var id = dep.id
		if (!this.newDepIds.has(id)) {
			this.newDepIds.add(id)
			this.newDeps.push(dep)
			if (!this.depIds.has(id)) {
				dep.addSub(this)
			}
		}
	}
=======
		var id = dep.id;
		if (!this.newDepIds.has(id)) {
			this.newDepIds.add(id);
			this.newDeps.push(dep);
			if (!this.depIds.has(id)) {
				dep.addSub(this);
			}
		}
	};
>>>>>>> origin/master

	/**
	 * Clean up for dependency collection.
	 */
	Watcher.prototype.cleanupDeps = function cleanupDeps () {
<<<<<<< HEAD
		var this$1 = this

		var i = this.deps.length
		while (i--) {
			var dep = this$1.deps[i]
			if (!this$1.newDepIds.has(dep.id)) {
				dep.removeSub(this$1)
			}
		}
		var tmp = this.depIds
		this.depIds = this.newDepIds
		this.newDepIds = tmp
		this.newDepIds.clear()
		tmp = this.deps
		this.deps = this.newDeps
		this.newDeps = tmp
		this.newDeps.length = 0
	}
=======
		var this$1 = this;

		var i = this.deps.length;
		while (i--) {
			var dep = this$1.deps[i];
			if (!this$1.newDepIds.has(dep.id)) {
				dep.removeSub(this$1);
			}
		}
		var tmp = this.depIds;
		this.depIds = this.newDepIds;
		this.newDepIds = tmp;
		this.newDepIds.clear();
		tmp = this.deps;
		this.deps = this.newDeps;
		this.newDeps = tmp;
		this.newDeps.length = 0;
	};
>>>>>>> origin/master

	/**
	 * Subscriber interface.
	 * Will be called when a dependency changes.
	 */
	Watcher.prototype.update = function update () {
		/* istanbul ignore else */
		if (this.lazy) {
<<<<<<< HEAD
			this.dirty = true
		} else if (this.sync) {
			this.run()
		} else {
			queueWatcher(this)
		}
	}
=======
			this.dirty = true;
		} else if (this.sync) {
			this.run();
		} else {
			queueWatcher(this);
		}
	};
>>>>>>> origin/master

	/**
	 * Scheduler job interface.
	 * Will be called by the scheduler.
	 */
	Watcher.prototype.run = function run () {
		if (this.active) {
<<<<<<< HEAD
			var value = this.get()
=======
			var value = this.get();
>>>>>>> origin/master
			if (
				value !== this.value ||
				// Deep watchers and watchers on Object/Arrays should fire even
				// when the value is the same, because the value may
				// have mutated.
				isObject(value) ||
				this.deep
			) {
				// set new value
<<<<<<< HEAD
				var oldValue = this.value
				this.value = value
				if (this.user) {
					try {
						this.cb.call(this.vm, value, oldValue)
					} catch (e) {
						handleError(e, this.vm, ('callback for watcher "' + (this.expression) + '"'))
					}
				} else {
					this.cb.call(this.vm, value, oldValue)
				}
			}
		}
	}
=======
				var oldValue = this.value;
				this.value = value;
				if (this.user) {
					try {
						this.cb.call(this.vm, value, oldValue);
					} catch (e) {
						handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
					}
				} else {
					this.cb.call(this.vm, value, oldValue);
				}
			}
		}
	};
>>>>>>> origin/master

	/**
	 * Evaluate the value of the watcher.
	 * This only gets called for lazy watchers.
	 */
	Watcher.prototype.evaluate = function evaluate () {
<<<<<<< HEAD
		this.value = this.get()
		this.dirty = false
	}
=======
		this.value = this.get();
		this.dirty = false;
	};
>>>>>>> origin/master

	/**
	 * Depend on all deps collected by this watcher.
	 */
	Watcher.prototype.depend = function depend () {
<<<<<<< HEAD
		var this$1 = this

		var i = this.deps.length
		while (i--) {
			this$1.deps[i].depend()
		}
	}
=======
		var this$1 = this;

		var i = this.deps.length;
		while (i--) {
			this$1.deps[i].depend();
		}
	};
>>>>>>> origin/master

	/**
	 * Remove self from all dependencies' subscriber list.
	 */
	Watcher.prototype.teardown = function teardown () {
<<<<<<< HEAD
		var this$1 = this
=======
		var this$1 = this;
>>>>>>> origin/master

		if (this.active) {
			// remove self from vm's watcher list
			// this is a somewhat expensive operation so we skip it
			// if the vm is being destroyed.
			if (!this.vm._isBeingDestroyed) {
<<<<<<< HEAD
				remove(this.vm._watchers, this)
			}
			var i = this.deps.length
			while (i--) {
				this$1.deps[i].removeSub(this$1)
			}
			this.active = false
		}
	}
=======
				remove(this.vm._watchers, this);
			}
			var i = this.deps.length;
			while (i--) {
				this$1.deps[i].removeSub(this$1);
			}
			this.active = false;
		}
	};
>>>>>>> origin/master

	/*  */

	var sharedPropertyDefinition = {
		enumerable: true,
		configurable: true,
		get: noop,
		set: noop
<<<<<<< HEAD
	}
=======
	};
>>>>>>> origin/master

	function proxy (target, sourceKey, key) {
		sharedPropertyDefinition.get = function proxyGetter () {
			return this[sourceKey][key]
<<<<<<< HEAD
		}
		sharedPropertyDefinition.set = function proxySetter (val) {
			this[sourceKey][key] = val
		}
		Object.defineProperty(target, key, sharedPropertyDefinition)
	}

	function initState (vm) {
		vm._watchers = []
		var opts = vm.$options
		if (opts.props) { initProps(vm, opts.props) }
		if (opts.methods) { initMethods(vm, opts.methods) }
		if (opts.data) {
			initData(vm)
		} else {
			observe(vm._data = {}, true /* asRootData */)
		}
		if (opts.computed) { initComputed(vm, opts.computed) }
		if (opts.watch && opts.watch !== nativeWatch) {
			initWatch(vm, opts.watch)
=======
		};
		sharedPropertyDefinition.set = function proxySetter (val) {
			this[sourceKey][key] = val;
		};
		Object.defineProperty(target, key, sharedPropertyDefinition);
	}

	function initState (vm) {
		vm._watchers = [];
		var opts = vm.$options;
		if (opts.props) { initProps(vm, opts.props); }
		if (opts.methods) { initMethods(vm, opts.methods); }
		if (opts.data) {
			initData(vm);
		} else {
			observe(vm._data = {}, true /* asRootData */);
		}
		if (opts.computed) { initComputed(vm, opts.computed); }
		if (opts.watch && opts.watch !== nativeWatch) {
			initWatch(vm, opts.watch);
>>>>>>> origin/master
		}
	}

	function initProps (vm, propsOptions) {
<<<<<<< HEAD
		var propsData = vm.$options.propsData || {}
		var props = vm._props = {}
		// cache prop keys so that future props updates can iterate using Array
		// instead of dynamic object key enumeration.
		var keys = vm.$options._propKeys = []
		var isRoot = !vm.$parent
		// root instance props should be converted
		if (!isRoot) {
			toggleObserving(false)
		}
		var loop = function (key) {
			keys.push(key)
			var value = validateProp(key, propsOptions, propsData, vm)
			/* istanbul ignore else */
			{
				var hyphenatedKey = hyphenate(key)
				if (isReservedAttribute(hyphenatedKey) ||
					config.isReservedAttr(hyphenatedKey)) {
						warn(
							('"' + hyphenatedKey + '" is a reserved attribute and cannot be used as component prop.'),
							vm
						)
					}
				defineReactive(props, key, value, function () {
					if (vm.$parent && !isUpdatingChildComponent) {
						warn(
							'Avoid mutating a prop directly since the value will be ' +
								'overwritten whenever the parent component re-renders. ' +
								"Instead, use a data or computed property based on the prop's " +
								'value. Prop being mutated: "' + key + '"',
							vm
						)
					}
				})
=======
		var propsData = vm.$options.propsData || {};
		var props = vm._props = {};
		// cache prop keys so that future props updates can iterate using Array
		// instead of dynamic object key enumeration.
		var keys = vm.$options._propKeys = [];
		var isRoot = !vm.$parent;
		// root instance props should be converted
		if (!isRoot) {
			toggleObserving(false);
		}
		var loop = function ( key ) {
			keys.push(key);
			var value = validateProp(key, propsOptions, propsData, vm);
			/* istanbul ignore else */
			{
				var hyphenatedKey = hyphenate(key);
				if (isReservedAttribute(hyphenatedKey) ||
					config.isReservedAttr(hyphenatedKey)) {
					warn(
						("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
						vm
					);
				}
				defineReactive(props, key, value, function () {
					if (vm.$parent && !isUpdatingChildComponent) {
						warn(
							"Avoid mutating a prop directly since the value will be " +
							"overwritten whenever the parent component re-renders. " +
							"Instead, use a data or computed property based on the prop's " +
							"value. Prop being mutated: \"" + key + "\"",
							vm
						);
					}
				});
>>>>>>> origin/master
			}
			// static props are already proxied on the component's prototype
			// during Vue.extend(). We only need to proxy props defined at
			// instantiation here.
			if (!(key in vm)) {
<<<<<<< HEAD
				proxy(vm, '_props', key)
			}
		}

		for (var key in propsOptions) loop(key)
		toggleObserving(true)
	}

	function initData (vm) {
		var data = vm.$options.data
		data = vm._data = typeof data === 'function'
			? getData(data, vm)
			: data || {}
		if (!isPlainObject(data)) {
			data = {}
			'development' !== 'production' && warn(
				'data functions should return an object:\n' +
					'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
				vm
			)
		}
		// proxy data on instance
		var keys = Object.keys(data)
		var props = vm.$options.props
		var methods = vm.$options.methods
		var i = keys.length
		while (i--) {
			var key = keys[i]
			{
				if (methods && hasOwn(methods, key)) {
					warn(
						('Method "' + key + '" has already been defined as a data property.'),
						vm
					)
				}
			}
			if (props && hasOwn(props, key)) {
				'development' !== 'production' && warn(
					'The data property "' + key + '" is already declared as a prop. ' +
						'Use prop default value instead.',
					vm
				)
			} else if (!isReserved(key)) {
				proxy(vm, '_data', key)
			}
		}
		// observe data
		observe(data, true /* asRootData */)
=======
				proxy(vm, "_props", key);
			}
		};

		for (var key in propsOptions) loop( key );
		toggleObserving(true);
	}

	function initData (vm) {
		var data = vm.$options.data;
		data = vm._data = typeof data === 'function'
			? getData(data, vm)
			: data || {};
		if (!isPlainObject(data)) {
			data = {};
			"development" !== 'production' && warn(
				'data functions should return an object:\n' +
				'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
				vm
			);
		}
		// proxy data on instance
		var keys = Object.keys(data);
		var props = vm.$options.props;
		var methods = vm.$options.methods;
		var i = keys.length;
		while (i--) {
			var key = keys[i];
			{
				if (methods && hasOwn(methods, key)) {
					warn(
						("Method \"" + key + "\" has already been defined as a data property."),
						vm
					);
				}
			}
			if (props && hasOwn(props, key)) {
				"development" !== 'production' && warn(
					"The data property \"" + key + "\" is already declared as a prop. " +
					"Use prop default value instead.",
					vm
				);
			} else if (!isReserved(key)) {
				proxy(vm, "_data", key);
			}
		}
		// observe data
		observe(data, true /* asRootData */);
>>>>>>> origin/master
	}

	function getData (data, vm) {
		// #7573 disable dep collection when invoking data getters
<<<<<<< HEAD
		pushTarget()
		try {
			return data.call(vm, vm)
		} catch (e) {
			handleError(e, vm, 'data()')
			return {}
		} finally {
			popTarget()
		}
	}

	var computedWatcherOptions = { lazy: true }

	function initComputed (vm, computed) {
		// $flow-disable-line
		var watchers = vm._computedWatchers = Object.create(null)
		// computed properties are just getters during SSR
		var isSSR = isServerRendering()

		for (var key in computed) {
			var userDef = computed[key]
			var getter = typeof userDef === 'function' ? userDef : userDef.get
			if ('development' !== 'production' && getter == null) {
				warn(
					('Getter is missing for computed property "' + key + '".'),
					vm
				)
=======
		pushTarget();
		try {
			return data.call(vm, vm)
		} catch (e) {
			handleError(e, vm, "data()");
			return {}
		} finally {
			popTarget();
		}
	}

	var computedWatcherOptions = { lazy: true };

	function initComputed (vm, computed) {
		// $flow-disable-line
		var watchers = vm._computedWatchers = Object.create(null);
		// computed properties are just getters during SSR
		var isSSR = isServerRendering();

		for (var key in computed) {
			var userDef = computed[key];
			var getter = typeof userDef === 'function' ? userDef : userDef.get;
			if ("development" !== 'production' && getter == null) {
				warn(
					("Getter is missing for computed property \"" + key + "\"."),
					vm
				);
>>>>>>> origin/master
			}

			if (!isSSR) {
				// create internal watcher for the computed property.
				watchers[key] = new Watcher(
					vm,
					getter || noop,
					noop,
					computedWatcherOptions
<<<<<<< HEAD
				)
=======
				);
>>>>>>> origin/master
			}

			// component-defined computed properties are already defined on the
			// component prototype. We only need to define computed properties defined
			// at instantiation here.
			if (!(key in vm)) {
<<<<<<< HEAD
				defineComputed(vm, key, userDef)
			} else {
				if (key in vm.$data) {
					warn(('The computed property "' + key + '" is already defined in data.'), vm)
				} else if (vm.$options.props && key in vm.$options.props) {
					warn(('The computed property "' + key + '" is already defined as a prop.'), vm)
=======
				defineComputed(vm, key, userDef);
			} else {
				if (key in vm.$data) {
					warn(("The computed property \"" + key + "\" is already defined in data."), vm);
				} else if (vm.$options.props && key in vm.$options.props) {
					warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
>>>>>>> origin/master
				}
			}
		}
	}

	function defineComputed (
		target,
		key,
		userDef
	) {
<<<<<<< HEAD
		var shouldCache = !isServerRendering()
		if (typeof userDef === 'function') {
			sharedPropertyDefinition.get = shouldCache
				? createComputedGetter(key)
				: userDef
			sharedPropertyDefinition.set = noop
=======
		var shouldCache = !isServerRendering();
		if (typeof userDef === 'function') {
			sharedPropertyDefinition.get = shouldCache
				? createComputedGetter(key)
				: userDef;
			sharedPropertyDefinition.set = noop;
>>>>>>> origin/master
		} else {
			sharedPropertyDefinition.get = userDef.get
				? shouldCache && userDef.cache !== false
					? createComputedGetter(key)
					: userDef.get
<<<<<<< HEAD
				: noop
			sharedPropertyDefinition.set = userDef.set
				? userDef.set
				: noop
		}
		if ('development' !== 'production' &&
			sharedPropertyDefinition.set === noop) {
				sharedPropertyDefinition.set = function () {
					warn(
						('Computed property "' + key + '" was assigned to but it has no setter.'),
						this
					)
				}
			}
		Object.defineProperty(target, key, sharedPropertyDefinition)
=======
				: noop;
			sharedPropertyDefinition.set = userDef.set
				? userDef.set
				: noop;
		}
		if ("development" !== 'production' &&
			sharedPropertyDefinition.set === noop) {
			sharedPropertyDefinition.set = function () {
				warn(
					("Computed property \"" + key + "\" was assigned to but it has no setter."),
					this
				);
			};
		}
		Object.defineProperty(target, key, sharedPropertyDefinition);
>>>>>>> origin/master
	}

	function createComputedGetter (key) {
		return function computedGetter () {
<<<<<<< HEAD
			var watcher = this._computedWatchers && this._computedWatchers[key]
			if (watcher) {
				if (watcher.dirty) {
					watcher.evaluate()
				}
				if (Dep.target) {
					watcher.depend()
=======
			var watcher = this._computedWatchers && this._computedWatchers[key];
			if (watcher) {
				if (watcher.dirty) {
					watcher.evaluate();
				}
				if (Dep.target) {
					watcher.depend();
>>>>>>> origin/master
				}
				return watcher.value
			}
		}
	}

	function initMethods (vm, methods) {
<<<<<<< HEAD
		var props = vm.$options.props
=======
		var props = vm.$options.props;
>>>>>>> origin/master
		for (var key in methods) {
			{
				if (methods[key] == null) {
					warn(
<<<<<<< HEAD
						'Method "' + key + '" has an undefined value in the component definition. ' +
							'Did you reference the function correctly?',
						vm
					)
				}
				if (props && hasOwn(props, key)) {
					warn(
						('Method "' + key + '" has already been defined as a prop.'),
						vm
					)
				}
				if ((key in vm) && isReserved(key)) {
					warn(
						'Method "' + key + '" conflicts with an existing Vue instance method. ' +
							'Avoid defining component methods that start with _ or $.'
					)
				}
			}
			vm[key] = methods[key] == null ? noop : bind(methods[key], vm)
=======
						"Method \"" + key + "\" has an undefined value in the component definition. " +
						"Did you reference the function correctly?",
						vm
					);
				}
				if (props && hasOwn(props, key)) {
					warn(
						("Method \"" + key + "\" has already been defined as a prop."),
						vm
					);
				}
				if ((key in vm) && isReserved(key)) {
					warn(
						"Method \"" + key + "\" conflicts with an existing Vue instance method. " +
						"Avoid defining component methods that start with _ or $."
					);
				}
			}
			vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
>>>>>>> origin/master
		}
	}

	function initWatch (vm, watch) {
		for (var key in watch) {
<<<<<<< HEAD
			var handler = watch[key]
			if (Array.isArray(handler)) {
				for (var i = 0; i < handler.length; i++) {
					createWatcher(vm, key, handler[i])
				}
			} else {
				createWatcher(vm, key, handler)
=======
			var handler = watch[key];
			if (Array.isArray(handler)) {
				for (var i = 0; i < handler.length; i++) {
					createWatcher(vm, key, handler[i]);
				}
			} else {
				createWatcher(vm, key, handler);
>>>>>>> origin/master
			}
		}
	}

	function createWatcher (
		vm,
		expOrFn,
		handler,
		options
	) {
		if (isPlainObject(handler)) {
<<<<<<< HEAD
			options = handler
			handler = handler.handler
		}
		if (typeof handler === 'string') {
			handler = vm[handler]
=======
			options = handler;
			handler = handler.handler;
		}
		if (typeof handler === 'string') {
			handler = vm[handler];
>>>>>>> origin/master
		}
		return vm.$watch(expOrFn, handler, options)
	}

	function stateMixin (Vue) {
		// flow somehow has problems with directly declared definition object
		// when using Object.defineProperty, so we have to procedurally build up
		// the object here.
<<<<<<< HEAD
		var dataDef = {}
		dataDef.get = function () { return this._data }
		var propsDef = {}
		propsDef.get = function () { return this._props }
=======
		var dataDef = {};
		dataDef.get = function () { return this._data };
		var propsDef = {};
		propsDef.get = function () { return this._props };
>>>>>>> origin/master
		{
			dataDef.set = function (newData) {
				warn(
					'Avoid replacing instance root $data. ' +
<<<<<<< HEAD
						'Use nested data properties instead.',
					this
				)
			}
			propsDef.set = function () {
				warn('$props is readonly.', this)
			}
		}
		Object.defineProperty(Vue.prototype, '$data', dataDef)
		Object.defineProperty(Vue.prototype, '$props', propsDef)

		Vue.prototype.$set = set
		Vue.prototype.$delete = del
=======
					'Use nested data properties instead.',
					this
				);
			};
			propsDef.set = function () {
				warn("$props is readonly.", this);
			};
		}
		Object.defineProperty(Vue.prototype, '$data', dataDef);
		Object.defineProperty(Vue.prototype, '$props', propsDef);

		Vue.prototype.$set = set;
		Vue.prototype.$delete = del;
>>>>>>> origin/master

		Vue.prototype.$watch = function (
			expOrFn,
			cb,
			options
		) {
<<<<<<< HEAD
			var vm = this
			if (isPlainObject(cb)) {
				return createWatcher(vm, expOrFn, cb, options)
			}
			options = options || {}
			options.user = true
			var watcher = new Watcher(vm, expOrFn, cb, options)
			if (options.immediate) {
				cb.call(vm, watcher.value)
			}
			return function unwatchFn () {
				watcher.teardown()
			}
		}
=======
			var vm = this;
			if (isPlainObject(cb)) {
				return createWatcher(vm, expOrFn, cb, options)
			}
			options = options || {};
			options.user = true;
			var watcher = new Watcher(vm, expOrFn, cb, options);
			if (options.immediate) {
				cb.call(vm, watcher.value);
			}
			return function unwatchFn () {
				watcher.teardown();
			}
		};
>>>>>>> origin/master
	}

	/*  */

	function initProvide (vm) {
<<<<<<< HEAD
		var provide = vm.$options.provide
		if (provide) {
			vm._provided = typeof provide === 'function'
				? provide.call(vm)
				: provide
=======
		var provide = vm.$options.provide;
		if (provide) {
			vm._provided = typeof provide === 'function'
				? provide.call(vm)
				: provide;
>>>>>>> origin/master
		}
	}

	function initInjections (vm) {
<<<<<<< HEAD
		var result = resolveInject(vm.$options.inject, vm)
		if (result) {
			toggleObserving(false)
=======
		var result = resolveInject(vm.$options.inject, vm);
		if (result) {
			toggleObserving(false);
>>>>>>> origin/master
			Object.keys(result).forEach(function (key) {
				/* istanbul ignore else */
				{
					defineReactive(vm, key, result[key], function () {
						warn(
<<<<<<< HEAD
							'Avoid mutating an injected value directly since the changes will be ' +
								'overwritten whenever the provided component re-renders. ' +
								'injection being mutated: "' + key + '"',
							vm
						)
					})
				}
			})
			toggleObserving(true)
=======
							"Avoid mutating an injected value directly since the changes will be " +
							"overwritten whenever the provided component re-renders. " +
							"injection being mutated: \"" + key + "\"",
							vm
						);
					});
				}
			});
			toggleObserving(true);
>>>>>>> origin/master
		}
	}

	function resolveInject (inject, vm) {
		if (inject) {
			// inject is :any because flow is not smart enough to figure out cached
<<<<<<< HEAD
			var result = Object.create(null)
=======
			var result = Object.create(null);
>>>>>>> origin/master
			var keys = hasSymbol
				? Reflect.ownKeys(inject).filter(function (key) {
					/* istanbul ignore next */
					return Object.getOwnPropertyDescriptor(inject, key).enumerable
				})
<<<<<<< HEAD
				: Object.keys(inject)

			for (var i = 0; i < keys.length; i++) {
				var key = keys[i]
				var provideKey = inject[key].from
				var source = vm
				while (source) {
					if (source._provided && hasOwn(source._provided, provideKey)) {
						result[key] = source._provided[provideKey]
						break
					}
					source = source.$parent
				}
				if (!source) {
					if ('default' in inject[key]) {
						var provideDefault = inject[key].default
						result[key] = typeof provideDefault === 'function'
							? provideDefault.call(vm)
							: provideDefault
					} else {
						warn(('Injection "' + key + '" not found'), vm)
=======
				: Object.keys(inject);

			for (var i = 0; i < keys.length; i++) {
				var key = keys[i];
				var provideKey = inject[key].from;
				var source = vm;
				while (source) {
					if (source._provided && hasOwn(source._provided, provideKey)) {
						result[key] = source._provided[provideKey];
						break
					}
					source = source.$parent;
				}
				if (!source) {
					if ('default' in inject[key]) {
						var provideDefault = inject[key].default;
						result[key] = typeof provideDefault === 'function'
							? provideDefault.call(vm)
							: provideDefault;
					} else {
						warn(("Injection \"" + key + "\" not found"), vm);
>>>>>>> origin/master
					}
				}
			}
			return result
		}
	}

	/*  */

	/**
	 * Runtime helper for rendering v-for lists.
	 */
	function renderList (
		val,
		render
	) {
<<<<<<< HEAD
		var ret, i, l, keys, key
		if (Array.isArray(val) || typeof val === 'string') {
			ret = new Array(val.length)
			for (i = 0, l = val.length; i < l; i++) {
				ret[i] = render(val[i], i)
			}
		} else if (typeof val === 'number') {
			ret = new Array(val)
			for (i = 0; i < val; i++) {
				ret[i] = render(i + 1, i)
			}
		} else if (isObject(val)) {
			keys = Object.keys(val)
			ret = new Array(keys.length)
			for (i = 0, l = keys.length; i < l; i++) {
				key = keys[i]
				ret[i] = render(val[key], key, i)
			}
		}
		if (isDef(ret)) {
			(ret)._isVList = true
=======
		var ret, i, l, keys, key;
		if (Array.isArray(val) || typeof val === 'string') {
			ret = new Array(val.length);
			for (i = 0, l = val.length; i < l; i++) {
				ret[i] = render(val[i], i);
			}
		} else if (typeof val === 'number') {
			ret = new Array(val);
			for (i = 0; i < val; i++) {
				ret[i] = render(i + 1, i);
			}
		} else if (isObject(val)) {
			keys = Object.keys(val);
			ret = new Array(keys.length);
			for (i = 0, l = keys.length; i < l; i++) {
				key = keys[i];
				ret[i] = render(val[key], key, i);
			}
		}
		if (isDef(ret)) {
			(ret)._isVList = true;
>>>>>>> origin/master
		}
		return ret
	}

	/*  */

	/**
	 * Runtime helper for rendering <slot>
	 */
	function renderSlot (
		name,
		fallback,
		props,
		bindObject
	) {
<<<<<<< HEAD
		var scopedSlotFn = this.$scopedSlots[name]
		var nodes
		if (scopedSlotFn) { // scoped slot
			props = props || {}
			if (bindObject) {
				if ('development' !== 'production' && !isObject(bindObject)) {
					warn(
						'slot v-bind without argument expects an Object',
						this
					)
				}
				props = extend(extend({}, bindObject), props)
			}
			nodes = scopedSlotFn(props) || fallback
		} else {
			var slotNodes = this.$slots[name]
			// warn duplicate slot usage
			if (slotNodes) {
				if ('development' !== 'production' && slotNodes._rendered) {
					warn(
						'Duplicate presence of slot "' + name + '" found in the same render tree ' +
							'- this will likely cause render errors.',
						this
					)
				}
				slotNodes._rendered = true
			}
			nodes = slotNodes || fallback
		}

		var target = props && props.slot
=======
		var scopedSlotFn = this.$scopedSlots[name];
		var nodes;
		if (scopedSlotFn) { // scoped slot
			props = props || {};
			if (bindObject) {
				if ("development" !== 'production' && !isObject(bindObject)) {
					warn(
						'slot v-bind without argument expects an Object',
						this
					);
				}
				props = extend(extend({}, bindObject), props);
			}
			nodes = scopedSlotFn(props) || fallback;
		} else {
			var slotNodes = this.$slots[name];
			// warn duplicate slot usage
			if (slotNodes) {
				if ("development" !== 'production' && slotNodes._rendered) {
					warn(
						"Duplicate presence of slot \"" + name + "\" found in the same render tree " +
						"- this will likely cause render errors.",
						this
					);
				}
				slotNodes._rendered = true;
			}
			nodes = slotNodes || fallback;
		}

		var target = props && props.slot;
>>>>>>> origin/master
		if (target) {
			return this.$createElement('template', { slot: target }, nodes)
		} else {
			return nodes
		}
	}

	/*  */

	/**
	 * Runtime helper for resolving filters
	 */
	function resolveFilter (id) {
		return resolveAsset(this.$options, 'filters', id, true) || identity
	}

	/*  */

	function isKeyNotMatch (expect, actual) {
		if (Array.isArray(expect)) {
			return expect.indexOf(actual) === -1
		} else {
			return expect !== actual
		}
	}

	/**
	 * Runtime helper for checking keyCodes from config.
	 * exposed as Vue.prototype._k
	 * passing in eventKeyName as last argument separately for backwards compat
	 */
	function checkKeyCodes (
		eventKeyCode,
		key,
		builtInKeyCode,
		eventKeyName,
		builtInKeyName
	) {
<<<<<<< HEAD
		var mappedKeyCode = config.keyCodes[key] || builtInKeyCode
=======
		var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
>>>>>>> origin/master
		if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
			return isKeyNotMatch(builtInKeyName, eventKeyName)
		} else if (mappedKeyCode) {
			return isKeyNotMatch(mappedKeyCode, eventKeyCode)
		} else if (eventKeyName) {
			return hyphenate(eventKeyName) !== key
		}
	}

	/*  */

	/**
	 * Runtime helper for merging v-bind="object" into a VNode's data.
	 */
	function bindObjectProps (
		data,
		tag,
		value,
		asProp,
		isSync
	) {
		if (value) {
			if (!isObject(value)) {
<<<<<<< HEAD
				'development' !== 'production' && warn(
					'v-bind without argument expects an Object or Array value',
					this
				)
			} else {
				if (Array.isArray(value)) {
					value = toObject(value)
				}
				var hash
				var loop = function (key) {
=======
				"development" !== 'production' && warn(
					'v-bind without argument expects an Object or Array value',
					this
				);
			} else {
				if (Array.isArray(value)) {
					value = toObject(value);
				}
				var hash;
				var loop = function ( key ) {
>>>>>>> origin/master
					if (
						key === 'class' ||
						key === 'style' ||
						isReservedAttribute(key)
					) {
<<<<<<< HEAD
						hash = data
					} else {
						var type = data.attrs && data.attrs.type
						hash = asProp || config.mustUseProp(tag, type, key)
							? data.domProps || (data.domProps = {})
							: data.attrs || (data.attrs = {})
					}
					if (!(key in hash)) {
						hash[key] = value[key]

						if (isSync) {
							var on = data.on || (data.on = {})
							on[('update:' + key)] = function ($event) {
								value[key] = $event
							}
						}
					}
				}

				for (var key in value) loop(key)
=======
						hash = data;
					} else {
						var type = data.attrs && data.attrs.type;
						hash = asProp || config.mustUseProp(tag, type, key)
							? data.domProps || (data.domProps = {})
							: data.attrs || (data.attrs = {});
					}
					if (!(key in hash)) {
						hash[key] = value[key];

						if (isSync) {
							var on = data.on || (data.on = {});
							on[("update:" + key)] = function ($event) {
								value[key] = $event;
							};
						}
					}
				};

				for (var key in value) loop( key );
>>>>>>> origin/master
			}
		}
		return data
	}

	/*  */

	/**
	 * Runtime helper for rendering static trees.
	 */
	function renderStatic (
		index,
		isInFor
	) {
<<<<<<< HEAD
		var cached = this._staticTrees || (this._staticTrees = [])
		var tree = cached[index]
=======
		var cached = this._staticTrees || (this._staticTrees = []);
		var tree = cached[index];
>>>>>>> origin/master
		// if has already-rendered static tree and not inside v-for,
		// we can reuse the same tree.
		if (tree && !isInFor) {
			return tree
		}
		// otherwise, render a fresh tree.
		tree = cached[index] = this.$options.staticRenderFns[index].call(
			this._renderProxy,
			null,
			this // for render fns generated for functional component templates
<<<<<<< HEAD
		)
		markStatic(tree, ('__static__' + index), false)
=======
		);
		markStatic(tree, ("__static__" + index), false);
>>>>>>> origin/master
		return tree
	}

	/**
	 * Runtime helper for v-once.
	 * Effectively it means marking the node as static with a unique key.
	 */
	function markOnce (
		tree,
		index,
		key
	) {
<<<<<<< HEAD
		markStatic(tree, ('__once__' + index + (key ? ('_' + key) : '')), true)
=======
		markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
>>>>>>> origin/master
		return tree
	}

	function markStatic (
		tree,
		key,
		isOnce
	) {
		if (Array.isArray(tree)) {
			for (var i = 0; i < tree.length; i++) {
				if (tree[i] && typeof tree[i] !== 'string') {
<<<<<<< HEAD
					markStaticNode(tree[i], (key + '_' + i), isOnce)
				}
			}
		} else {
			markStaticNode(tree, key, isOnce)
=======
					markStaticNode(tree[i], (key + "_" + i), isOnce);
				}
			}
		} else {
			markStaticNode(tree, key, isOnce);
>>>>>>> origin/master
		}
	}

	function markStaticNode (node, key, isOnce) {
<<<<<<< HEAD
		node.isStatic = true
		node.key = key
		node.isOnce = isOnce
=======
		node.isStatic = true;
		node.key = key;
		node.isOnce = isOnce;
>>>>>>> origin/master
	}

	/*  */

	function bindObjectListeners (data, value) {
		if (value) {
			if (!isPlainObject(value)) {
<<<<<<< HEAD
				'development' !== 'production' && warn(
					'v-on without argument expects an Object value',
					this
				)
			} else {
				var on = data.on = data.on ? extend({}, data.on) : {}
				for (var key in value) {
					var existing = on[key]
					var ours = value[key]
					on[key] = existing ? [].concat(existing, ours) : ours
=======
				"development" !== 'production' && warn(
					'v-on without argument expects an Object value',
					this
				);
			} else {
				var on = data.on = data.on ? extend({}, data.on) : {};
				for (var key in value) {
					var existing = on[key];
					var ours = value[key];
					on[key] = existing ? [].concat(existing, ours) : ours;
>>>>>>> origin/master
				}
			}
		}
		return data
	}

	/*  */

	function installRenderHelpers (target) {
<<<<<<< HEAD
		target._o = markOnce
		target._n = toNumber
		target._s = toString
		target._l = renderList
		target._t = renderSlot
		target._q = looseEqual
		target._i = looseIndexOf
		target._m = renderStatic
		target._f = resolveFilter
		target._k = checkKeyCodes
		target._b = bindObjectProps
		target._v = createTextVNode
		target._e = createEmptyVNode
		target._u = resolveScopedSlots
		target._g = bindObjectListeners
=======
		target._o = markOnce;
		target._n = toNumber;
		target._s = toString;
		target._l = renderList;
		target._t = renderSlot;
		target._q = looseEqual;
		target._i = looseIndexOf;
		target._m = renderStatic;
		target._f = resolveFilter;
		target._k = checkKeyCodes;
		target._b = bindObjectProps;
		target._v = createTextVNode;
		target._e = createEmptyVNode;
		target._u = resolveScopedSlots;
		target._g = bindObjectListeners;
>>>>>>> origin/master
	}

	/*  */

	function FunctionalRenderContext (
		data,
		props,
		children,
		parent,
		Ctor
	) {
<<<<<<< HEAD
		var options = Ctor.options
		// ensure the createElement function in functional components
		// gets a unique context - this is necessary for correct named slot check
		var contextVm
		if (hasOwn(parent, '_uid')) {
			contextVm = Object.create(parent)
			// $flow-disable-line
			contextVm._original = parent
=======
		var options = Ctor.options;
		// ensure the createElement function in functional components
		// gets a unique context - this is necessary for correct named slot check
		var contextVm;
		if (hasOwn(parent, '_uid')) {
			contextVm = Object.create(parent);
			// $flow-disable-line
			contextVm._original = parent;
>>>>>>> origin/master
		} else {
			// the context vm passed in is a functional context as well.
			// in this case we want to make sure we are able to get a hold to the
			// real context instance.
<<<<<<< HEAD
			contextVm = parent
			// $flow-disable-line
			parent = parent._original
		}
		var isCompiled = isTrue(options._compiled)
		var needNormalization = !isCompiled

		this.data = data
		this.props = props
		this.children = children
		this.parent = parent
		this.listeners = data.on || emptyObject
		this.injections = resolveInject(options.inject, parent)
		this.slots = function () { return resolveSlots(children, parent) }
=======
			contextVm = parent;
			// $flow-disable-line
			parent = parent._original;
		}
		var isCompiled = isTrue(options._compiled);
		var needNormalization = !isCompiled;

		this.data = data;
		this.props = props;
		this.children = children;
		this.parent = parent;
		this.listeners = data.on || emptyObject;
		this.injections = resolveInject(options.inject, parent);
		this.slots = function () { return resolveSlots(children, parent); };
>>>>>>> origin/master

		// support for compiled functional template
		if (isCompiled) {
			// exposing $options for renderStatic()
<<<<<<< HEAD
			this.$options = options
			// pre-resolve slots for renderSlot()
			this.$slots = this.slots()
			this.$scopedSlots = data.scopedSlots || emptyObject
=======
			this.$options = options;
			// pre-resolve slots for renderSlot()
			this.$slots = this.slots();
			this.$scopedSlots = data.scopedSlots || emptyObject;
>>>>>>> origin/master
		}

		if (options._scopeId) {
			this._c = function (a, b, c, d) {
<<<<<<< HEAD
				var vnode = createElement(contextVm, a, b, c, d, needNormalization)
				if (vnode && !Array.isArray(vnode)) {
					vnode.fnScopeId = options._scopeId
					vnode.fnContext = parent
				}
				return vnode
			}
		} else {
			this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization) }
		}
	}

	installRenderHelpers(FunctionalRenderContext.prototype)
=======
				var vnode = createElement(contextVm, a, b, c, d, needNormalization);
				if (vnode && !Array.isArray(vnode)) {
					vnode.fnScopeId = options._scopeId;
					vnode.fnContext = parent;
				}
				return vnode
			};
		} else {
			this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
		}
	}

	installRenderHelpers(FunctionalRenderContext.prototype);
>>>>>>> origin/master

	function createFunctionalComponent (
		Ctor,
		propsData,
		data,
		contextVm,
		children
	) {
<<<<<<< HEAD
		var options = Ctor.options
		var props = {}
		var propOptions = options.props
		if (isDef(propOptions)) {
			for (var key in propOptions) {
				props[key] = validateProp(key, propOptions, propsData || emptyObject)
			}
		} else {
			if (isDef(data.attrs)) { mergeProps(props, data.attrs) }
			if (isDef(data.props)) { mergeProps(props, data.props) }
=======
		var options = Ctor.options;
		var props = {};
		var propOptions = options.props;
		if (isDef(propOptions)) {
			for (var key in propOptions) {
				props[key] = validateProp(key, propOptions, propsData || emptyObject);
			}
		} else {
			if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
			if (isDef(data.props)) { mergeProps(props, data.props); }
>>>>>>> origin/master
		}

		var renderContext = new FunctionalRenderContext(
			data,
			props,
			children,
			contextVm,
			Ctor
<<<<<<< HEAD
		)

		var vnode = options.render.call(null, renderContext._c, renderContext)
=======
		);

		var vnode = options.render.call(null, renderContext._c, renderContext);
>>>>>>> origin/master

		if (vnode instanceof VNode) {
			return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
		} else if (Array.isArray(vnode)) {
<<<<<<< HEAD
			var vnodes = normalizeChildren(vnode) || []
			var res = new Array(vnodes.length)
			for (var i = 0; i < vnodes.length; i++) {
				res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options)
=======
			var vnodes = normalizeChildren(vnode) || [];
			var res = new Array(vnodes.length);
			for (var i = 0; i < vnodes.length; i++) {
				res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
>>>>>>> origin/master
			}
			return res
		}
	}

	function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
		// #7817 clone node before setting fnContext, otherwise if the node is reused
		// (e.g. it was from a cached normal slot) the fnContext causes named slots
		// that should not be matched to match.
<<<<<<< HEAD
		var clone = cloneVNode(vnode)
		clone.fnContext = contextVm
		clone.fnOptions = options
		if (data.slot) {
			(clone.data || (clone.data = {})).slot = data.slot
=======
		var clone = cloneVNode(vnode);
		clone.fnContext = contextVm;
		clone.fnOptions = options;
		if (data.slot) {
			(clone.data || (clone.data = {})).slot = data.slot;
>>>>>>> origin/master
		}
		return clone
	}

	function mergeProps (to, from) {
		for (var key in from) {
<<<<<<< HEAD
			to[camelize(key)] = from[key]
=======
			to[camelize(key)] = from[key];
>>>>>>> origin/master
		}
	}

	/*  */

<<<<<<< HEAD
	// Register the component hook to weex native render engine.
	// The hook will be triggered by native, not javascript.

	// Updates the state of the component to weex native render engine.

	/*  */

	// https://github.com/Hanks10100/weex-native-directive/tree/master/component

	// listening on native callback
=======



// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

	/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback
>>>>>>> origin/master

	/*  */

	/*  */

<<<<<<< HEAD
	// inline hooks to be invoked on component VNodes during patch
=======
// inline hooks to be invoked on component VNodes during patch
>>>>>>> origin/master
	var componentVNodeHooks = {
		init: function init (
			vnode,
			hydrating,
			parentElm,
			refElm
		) {
			if (
				vnode.componentInstance &&
				!vnode.componentInstance._isDestroyed &&
				vnode.data.keepAlive
			) {
				// kept-alive components, treat as a patch
<<<<<<< HEAD
				var mountedNode = vnode // work around flow
				componentVNodeHooks.prepatch(mountedNode, mountedNode)
=======
				var mountedNode = vnode; // work around flow
				componentVNodeHooks.prepatch(mountedNode, mountedNode);
>>>>>>> origin/master
			} else {
				var child = vnode.componentInstance = createComponentInstanceForVnode(
					vnode,
					activeInstance,
					parentElm,
					refElm
<<<<<<< HEAD
				)
				child.$mount(hydrating ? vnode.elm : undefined, hydrating)
=======
				);
				child.$mount(hydrating ? vnode.elm : undefined, hydrating);
>>>>>>> origin/master
			}
		},

		prepatch: function prepatch (oldVnode, vnode) {
<<<<<<< HEAD
			var options = vnode.componentOptions
			var child = vnode.componentInstance = oldVnode.componentInstance
=======
			var options = vnode.componentOptions;
			var child = vnode.componentInstance = oldVnode.componentInstance;
>>>>>>> origin/master
			updateChildComponent(
				child,
				options.propsData, // updated props
				options.listeners, // updated listeners
				vnode, // new parent vnode
				options.children // new children
<<<<<<< HEAD
			)
		},

		insert: function insert (vnode) {
			var context = vnode.context
			var componentInstance = vnode.componentInstance
			if (!componentInstance._isMounted) {
				componentInstance._isMounted = true
				callHook(componentInstance, 'mounted')
=======
			);
		},

		insert: function insert (vnode) {
			var context = vnode.context;
			var componentInstance = vnode.componentInstance;
			if (!componentInstance._isMounted) {
				componentInstance._isMounted = true;
				callHook(componentInstance, 'mounted');
>>>>>>> origin/master
			}
			if (vnode.data.keepAlive) {
				if (context._isMounted) {
					// vue-router#1212
					// During updates, a kept-alive component's child components may
					// change, so directly walking the tree here may call activated hooks
					// on incorrect children. Instead we push them into a queue which will
					// be processed after the whole patch process ended.
<<<<<<< HEAD
					queueActivatedComponent(componentInstance)
				} else {
					activateChildComponent(componentInstance, true /* direct */)
=======
					queueActivatedComponent(componentInstance);
				} else {
					activateChildComponent(componentInstance, true /* direct */);
>>>>>>> origin/master
				}
			}
		},

		destroy: function destroy (vnode) {
<<<<<<< HEAD
			var componentInstance = vnode.componentInstance
			if (!componentInstance._isDestroyed) {
				if (!vnode.data.keepAlive) {
					componentInstance.$destroy()
				} else {
					deactivateChildComponent(componentInstance, true /* direct */)
				}
			}
		}
	}

	var hooksToMerge = Object.keys(componentVNodeHooks)
=======
			var componentInstance = vnode.componentInstance;
			if (!componentInstance._isDestroyed) {
				if (!vnode.data.keepAlive) {
					componentInstance.$destroy();
				} else {
					deactivateChildComponent(componentInstance, true /* direct */);
				}
			}
		}
	};

	var hooksToMerge = Object.keys(componentVNodeHooks);
>>>>>>> origin/master

	function createComponent (
		Ctor,
		data,
		context,
		children,
		tag
	) {
		if (isUndef(Ctor)) {
			return
		}

<<<<<<< HEAD
		var baseCtor = context.$options._base

		// plain options object: turn it into a constructor
		if (isObject(Ctor)) {
			Ctor = baseCtor.extend(Ctor)
=======
		var baseCtor = context.$options._base;

		// plain options object: turn it into a constructor
		if (isObject(Ctor)) {
			Ctor = baseCtor.extend(Ctor);
>>>>>>> origin/master
		}

		// if at this stage it's not a constructor or an async component factory,
		// reject.
		if (typeof Ctor !== 'function') {
			{
<<<<<<< HEAD
				warn(('Invalid Component definition: ' + (String(Ctor))), context)
=======
				warn(("Invalid Component definition: " + (String(Ctor))), context);
>>>>>>> origin/master
			}
			return
		}

		// async component
<<<<<<< HEAD
		var asyncFactory
		if (isUndef(Ctor.cid)) {
			asyncFactory = Ctor
			Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context)
=======
		var asyncFactory;
		if (isUndef(Ctor.cid)) {
			asyncFactory = Ctor;
			Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
>>>>>>> origin/master
			if (Ctor === undefined) {
				// return a placeholder node for async component, which is rendered
				// as a comment node but preserves all the raw information for the node.
				// the information will be used for async server-rendering and hydration.
				return createAsyncPlaceholder(
					asyncFactory,
					data,
					context,
					children,
					tag
				)
			}
		}

<<<<<<< HEAD
		data = data || {}

		// resolve constructor options in case global mixins are applied after
		// component constructor creation
		resolveConstructorOptions(Ctor)

		// transform component v-model data into props & events
		if (isDef(data.model)) {
			transformModel(Ctor.options, data)
		}

		// extract props
		var propsData = extractPropsFromVNodeData(data, Ctor, tag)
=======
		data = data || {};

		// resolve constructor options in case global mixins are applied after
		// component constructor creation
		resolveConstructorOptions(Ctor);

		// transform component v-model data into props & events
		if (isDef(data.model)) {
			transformModel(Ctor.options, data);
		}

		// extract props
		var propsData = extractPropsFromVNodeData(data, Ctor, tag);
>>>>>>> origin/master

		// functional component
		if (isTrue(Ctor.options.functional)) {
			return createFunctionalComponent(Ctor, propsData, data, context, children)
		}

		// extract listeners, since these needs to be treated as
		// child component listeners instead of DOM listeners
<<<<<<< HEAD
		var listeners = data.on
		// replace with listeners with .native modifier
		// so it gets processed during parent component patch.
		data.on = data.nativeOn
=======
		var listeners = data.on;
		// replace with listeners with .native modifier
		// so it gets processed during parent component patch.
		data.on = data.nativeOn;
>>>>>>> origin/master

		if (isTrue(Ctor.options.abstract)) {
			// abstract components do not keep anything
			// other than props & listeners & slot

			// work around flow
<<<<<<< HEAD
			var slot = data.slot
			data = {}
			if (slot) {
				data.slot = slot
=======
			var slot = data.slot;
			data = {};
			if (slot) {
				data.slot = slot;
>>>>>>> origin/master
			}
		}

		// install component management hooks onto the placeholder node
<<<<<<< HEAD
		installComponentHooks(data)

		// return a placeholder vnode
		var name = Ctor.options.name || tag
		var vnode = new VNode(
			('vue-component-' + (Ctor.cid) + (name ? ('-' + name) : '')),
			data, undefined, undefined, undefined, context,
			{ Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
			asyncFactory
		)
=======
		installComponentHooks(data);

		// return a placeholder vnode
		var name = Ctor.options.name || tag;
		var vnode = new VNode(
			("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
			data, undefined, undefined, undefined, context,
			{ Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
			asyncFactory
		);
>>>>>>> origin/master

		// Weex specific: invoke recycle-list optimized @render function for
		// extracting cell-slot template.
		// https://github.com/Hanks10100/weex-native-directive/tree/master/component
		/* istanbul ignore if */
		return vnode
	}

	function createComponentInstanceForVnode (
		vnode, // we know it's MountedComponentVNode but flow doesn't
		parent, // activeInstance in lifecycle state
		parentElm,
		refElm
	) {
		var options = {
			_isComponent: true,
			parent: parent,
			_parentVnode: vnode,
			_parentElm: parentElm || null,
			_refElm: refElm || null
<<<<<<< HEAD
		}
		// check inline-template render functions
		var inlineTemplate = vnode.data.inlineTemplate
		if (isDef(inlineTemplate)) {
			options.render = inlineTemplate.render
			options.staticRenderFns = inlineTemplate.staticRenderFns
=======
		};
		// check inline-template render functions
		var inlineTemplate = vnode.data.inlineTemplate;
		if (isDef(inlineTemplate)) {
			options.render = inlineTemplate.render;
			options.staticRenderFns = inlineTemplate.staticRenderFns;
>>>>>>> origin/master
		}
		return new vnode.componentOptions.Ctor(options)
	}

	function installComponentHooks (data) {
<<<<<<< HEAD
		var hooks = data.hook || (data.hook = {})
		for (var i = 0; i < hooksToMerge.length; i++) {
			var key = hooksToMerge[i]
			hooks[key] = componentVNodeHooks[key]
		}
	}

	// transform component v-model info (value and callback) into
	// prop and event handler respectively.
	function transformModel (options, data) {
		var prop = (options.model && options.model.prop) || 'value'
		var event = (options.model && options.model.event) || 'input'; (data.props || (data.props = {}))[prop] = data.model.value
		var on = data.on || (data.on = {})
		if (isDef(on[event])) {
			on[event] = [data.model.callback].concat(on[event])
		} else {
			on[event] = data.model.callback
=======
		var hooks = data.hook || (data.hook = {});
		for (var i = 0; i < hooksToMerge.length; i++) {
			var key = hooksToMerge[i];
			hooks[key] = componentVNodeHooks[key];
		}
	}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
	function transformModel (options, data) {
		var prop = (options.model && options.model.prop) || 'value';
		var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
		var on = data.on || (data.on = {});
		if (isDef(on[event])) {
			on[event] = [data.model.callback].concat(on[event]);
		} else {
			on[event] = data.model.callback;
>>>>>>> origin/master
		}
	}

	/*  */

<<<<<<< HEAD
	var SIMPLE_NORMALIZE = 1
	var ALWAYS_NORMALIZE = 2

	// wrapper function for providing a more flexible interface
	// without getting yelled at by flow
=======
	var SIMPLE_NORMALIZE = 1;
	var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
>>>>>>> origin/master
	function createElement (
		context,
		tag,
		data,
		children,
		normalizationType,
		alwaysNormalize
	) {
		if (Array.isArray(data) || isPrimitive(data)) {
<<<<<<< HEAD
			normalizationType = children
			children = data
			data = undefined
		}
		if (isTrue(alwaysNormalize)) {
			normalizationType = ALWAYS_NORMALIZE
=======
			normalizationType = children;
			children = data;
			data = undefined;
		}
		if (isTrue(alwaysNormalize)) {
			normalizationType = ALWAYS_NORMALIZE;
>>>>>>> origin/master
		}
		return _createElement(context, tag, data, children, normalizationType)
	}

	function _createElement (
		context,
		tag,
		data,
		children,
		normalizationType
	) {
		if (isDef(data) && isDef((data).__ob__)) {
<<<<<<< HEAD
			'development' !== 'production' && warn(
				'Avoid using observed data object as vnode data: ' + (JSON.stringify(data)) + '\n' +
					'Always create fresh vnode data objects in each render!',
				context
			)
=======
			"development" !== 'production' && warn(
				"Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
				'Always create fresh vnode data objects in each render!',
				context
			);
>>>>>>> origin/master
			return createEmptyVNode()
		}
		// object syntax in v-bind
		if (isDef(data) && isDef(data.is)) {
<<<<<<< HEAD
			tag = data.is
=======
			tag = data.is;
>>>>>>> origin/master
		}
		if (!tag) {
			// in case of component :is set to falsy value
			return createEmptyVNode()
		}
		// warn against non-primitive key
<<<<<<< HEAD
		if ('development' !== 'production' &&
=======
		if ("development" !== 'production' &&
>>>>>>> origin/master
			isDef(data) && isDef(data.key) && !isPrimitive(data.key)
		) {
			{
				warn(
					'Avoid using non-primitive value as key, ' +
<<<<<<< HEAD
						'use string/number value instead.',
					context
				)
=======
					'use string/number value instead.',
					context
				);
>>>>>>> origin/master
			}
		}
		// support single function children as default scoped slot
		if (Array.isArray(children) &&
			typeof children[0] === 'function'
		) {
<<<<<<< HEAD
			data = data || {}
			data.scopedSlots = { default: children[0] }
			children.length = 0
		}
		if (normalizationType === ALWAYS_NORMALIZE) {
			children = normalizeChildren(children)
		} else if (normalizationType === SIMPLE_NORMALIZE) {
			children = simpleNormalizeChildren(children)
		}
		var vnode, ns
		if (typeof tag === 'string') {
			var Ctor
			ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag)
=======
			data = data || {};
			data.scopedSlots = { default: children[0] };
			children.length = 0;
		}
		if (normalizationType === ALWAYS_NORMALIZE) {
			children = normalizeChildren(children);
		} else if (normalizationType === SIMPLE_NORMALIZE) {
			children = simpleNormalizeChildren(children);
		}
		var vnode, ns;
		if (typeof tag === 'string') {
			var Ctor;
			ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
>>>>>>> origin/master
			if (config.isReservedTag(tag)) {
				// platform built-in elements
				vnode = new VNode(
					config.parsePlatformTagName(tag), data, children,
					undefined, undefined, context
<<<<<<< HEAD
				)
			} else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
				// component
				vnode = createComponent(Ctor, data, context, children, tag)
=======
				);
			} else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
				// component
				vnode = createComponent(Ctor, data, context, children, tag);
>>>>>>> origin/master
			} else {
				// unknown or unlisted namespaced elements
				// check at runtime because it may get assigned a namespace when its
				// parent normalizes children
				vnode = new VNode(
					tag, data, children,
					undefined, undefined, context
<<<<<<< HEAD
				)
			}
		} else {
			// direct component options / constructor
			vnode = createComponent(tag, data, context, children)
=======
				);
			}
		} else {
			// direct component options / constructor
			vnode = createComponent(tag, data, context, children);
>>>>>>> origin/master
		}
		if (Array.isArray(vnode)) {
			return vnode
		} else if (isDef(vnode)) {
<<<<<<< HEAD
			if (isDef(ns)) { applyNS(vnode, ns) }
			if (isDef(data)) { registerDeepBindings(data) }
=======
			if (isDef(ns)) { applyNS(vnode, ns); }
			if (isDef(data)) { registerDeepBindings(data); }
>>>>>>> origin/master
			return vnode
		} else {
			return createEmptyVNode()
		}
	}

	function applyNS (vnode, ns, force) {
<<<<<<< HEAD
		vnode.ns = ns
		if (vnode.tag === 'foreignObject') {
			// use default namespace inside foreignObject
			ns = undefined
			force = true
		}
		if (isDef(vnode.children)) {
			for (var i = 0, l = vnode.children.length; i < l; i++) {
				var child = vnode.children[i]
				if (isDef(child.tag) && (
					isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
						applyNS(child, ns, force)
					}
=======
		vnode.ns = ns;
		if (vnode.tag === 'foreignObject') {
			// use default namespace inside foreignObject
			ns = undefined;
			force = true;
		}
		if (isDef(vnode.children)) {
			for (var i = 0, l = vnode.children.length; i < l; i++) {
				var child = vnode.children[i];
				if (isDef(child.tag) && (
					isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
					applyNS(child, ns, force);
				}
>>>>>>> origin/master
			}
		}
	}

<<<<<<< HEAD
	// ref #5318
	// necessary to ensure parent re-render when deep bindings like :style and
	// :class are used on slot nodes
	function registerDeepBindings (data) {
		if (isObject(data.style)) {
			traverse(data.style)
		}
		if (isObject(data.class)) {
			traverse(data.class)
=======
// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
	function registerDeepBindings (data) {
		if (isObject(data.style)) {
			traverse(data.style);
		}
		if (isObject(data.class)) {
			traverse(data.class);
>>>>>>> origin/master
		}
	}

	/*  */

	function initRender (vm) {
<<<<<<< HEAD
		vm._vnode = null // the root of the child tree
		vm._staticTrees = null // v-once cached trees
		var options = vm.$options
		var parentVnode = vm.$vnode = options._parentVnode // the placeholder node in parent tree
		var renderContext = parentVnode && parentVnode.context
		vm.$slots = resolveSlots(options._renderChildren, renderContext)
		vm.$scopedSlots = emptyObject
=======
		vm._vnode = null; // the root of the child tree
		vm._staticTrees = null; // v-once cached trees
		var options = vm.$options;
		var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
		var renderContext = parentVnode && parentVnode.context;
		vm.$slots = resolveSlots(options._renderChildren, renderContext);
		vm.$scopedSlots = emptyObject;
>>>>>>> origin/master
		// bind the createElement fn to this instance
		// so that we get proper render context inside it.
		// args order: tag, data, children, normalizationType, alwaysNormalize
		// internal version is used by render functions compiled from templates
<<<<<<< HEAD
		vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false) }
		// normalization is always applied for the public version, used in
		// user-written render functions.
		vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true) }

		// $attrs & $listeners are exposed for easier HOC creation.
		// they need to be reactive so that HOCs using them are always updated
		var parentData = parentVnode && parentVnode.data
=======
		vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
		// normalization is always applied for the public version, used in
		// user-written render functions.
		vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

		// $attrs & $listeners are exposed for easier HOC creation.
		// they need to be reactive so that HOCs using them are always updated
		var parentData = parentVnode && parentVnode.data;
>>>>>>> origin/master

		/* istanbul ignore else */
		{
			defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
<<<<<<< HEAD
				!isUpdatingChildComponent && warn('$attrs is readonly.', vm)
			}, true)
			defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
				!isUpdatingChildComponent && warn('$listeners is readonly.', vm)
			}, true)
=======
				!isUpdatingChildComponent && warn("$attrs is readonly.", vm);
			}, true);
			defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
				!isUpdatingChildComponent && warn("$listeners is readonly.", vm);
			}, true);
>>>>>>> origin/master
		}
	}

	function renderMixin (Vue) {
		// install runtime convenience helpers
<<<<<<< HEAD
		installRenderHelpers(Vue.prototype)

		Vue.prototype.$nextTick = function (fn) {
			return nextTick(fn, this)
		}

		Vue.prototype._render = function () {
			var vm = this
			var ref = vm.$options
			var render = ref.render
			var _parentVnode = ref._parentVnode
=======
		installRenderHelpers(Vue.prototype);

		Vue.prototype.$nextTick = function (fn) {
			return nextTick(fn, this)
		};

		Vue.prototype._render = function () {
			var vm = this;
			var ref = vm.$options;
			var render = ref.render;
			var _parentVnode = ref._parentVnode;
>>>>>>> origin/master

			// reset _rendered flag on slots for duplicate slot check
			{
				for (var key in vm.$slots) {
					// $flow-disable-line
<<<<<<< HEAD
					vm.$slots[key]._rendered = false
=======
					vm.$slots[key]._rendered = false;
>>>>>>> origin/master
				}
			}

			if (_parentVnode) {
<<<<<<< HEAD
				vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject
=======
				vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
>>>>>>> origin/master
			}

			// set parent vnode. this allows render functions to have access
			// to the data on the placeholder node.
<<<<<<< HEAD
			vm.$vnode = _parentVnode
			// render self
			var vnode
			try {
				vnode = render.call(vm._renderProxy, vm.$createElement)
			} catch (e) {
				handleError(e, vm, 'render')
=======
			vm.$vnode = _parentVnode;
			// render self
			var vnode;
			try {
				vnode = render.call(vm._renderProxy, vm.$createElement);
			} catch (e) {
				handleError(e, vm, "render");
>>>>>>> origin/master
				// return error render result,
				// or previous vnode to prevent render error causing blank component
				/* istanbul ignore else */
				{
					if (vm.$options.renderError) {
						try {
<<<<<<< HEAD
							vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e)
						} catch (e) {
							handleError(e, vm, 'renderError')
							vnode = vm._vnode
						}
					} else {
						vnode = vm._vnode
=======
							vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
						} catch (e) {
							handleError(e, vm, "renderError");
							vnode = vm._vnode;
						}
					} else {
						vnode = vm._vnode;
>>>>>>> origin/master
					}
				}
			}
			// return empty vnode in case the render function errored out
			if (!(vnode instanceof VNode)) {
<<<<<<< HEAD
				if ('development' !== 'production' && Array.isArray(vnode)) {
					warn(
						'Multiple root nodes returned from render function. Render function ' +
							'should return a single root node.',
						vm
					)
				}
				vnode = createEmptyVNode()
			}
			// set parent
			vnode.parent = _parentVnode
			return vnode
		}
=======
				if ("development" !== 'production' && Array.isArray(vnode)) {
					warn(
						'Multiple root nodes returned from render function. Render function ' +
						'should return a single root node.',
						vm
					);
				}
				vnode = createEmptyVNode();
			}
			// set parent
			vnode.parent = _parentVnode;
			return vnode
		};
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
	var uid$3 = 0

	function initMixin (Vue) {
		Vue.prototype._init = function (options) {
			var vm = this
			// a uid
			vm._uid = uid$3++

			var startTag, endTag
			/* istanbul ignore if */
			if ('development' !== 'production' && config.performance && mark) {
				startTag = 'vue-perf-start:' + (vm._uid)
				endTag = 'vue-perf-end:' + (vm._uid)
				mark(startTag)
			}

			// a flag to avoid this being observed
			vm._isVue = true
=======
	var uid$3 = 0;

	function initMixin (Vue) {
		Vue.prototype._init = function (options) {
			var vm = this;
			// a uid
			vm._uid = uid$3++;

			var startTag, endTag;
			/* istanbul ignore if */
			if ("development" !== 'production' && config.performance && mark) {
				startTag = "vue-perf-start:" + (vm._uid);
				endTag = "vue-perf-end:" + (vm._uid);
				mark(startTag);
			}

			// a flag to avoid this being observed
			vm._isVue = true;
>>>>>>> origin/master
			// merge options
			if (options && options._isComponent) {
				// optimize internal component instantiation
				// since dynamic options merging is pretty slow, and none of the
				// internal component options needs special treatment.
<<<<<<< HEAD
				initInternalComponent(vm, options)
=======
				initInternalComponent(vm, options);
>>>>>>> origin/master
			} else {
				vm.$options = mergeOptions(
					resolveConstructorOptions(vm.constructor),
					options || {},
					vm
<<<<<<< HEAD
				)
			}
			/* istanbul ignore else */
			{
				initProxy(vm)
			}
			// expose real self
			vm._self = vm
			initLifecycle(vm)
			initEvents(vm)
			initRender(vm)
			callHook(vm, 'beforeCreate')
			initInjections(vm) // resolve injections before data/props
			initState(vm)
			initProvide(vm) // resolve provide after data/props
			callHook(vm, 'created')

			/* istanbul ignore if */
			if ('development' !== 'production' && config.performance && mark) {
				vm._name = formatComponentName(vm, false)
				mark(endTag)
				measure(('vue ' + (vm._name) + ' init'), startTag, endTag)
			}

			if (vm.$options.el) {
				vm.$mount(vm.$options.el)
			}
		}
	}

	function initInternalComponent (vm, options) {
		var opts = vm.$options = Object.create(vm.constructor.options)
		// doing this because it's faster than dynamic enumeration.
		var parentVnode = options._parentVnode
		opts.parent = options.parent
		opts._parentVnode = parentVnode
		opts._parentElm = options._parentElm
		opts._refElm = options._refElm

		var vnodeComponentOptions = parentVnode.componentOptions
		opts.propsData = vnodeComponentOptions.propsData
		opts._parentListeners = vnodeComponentOptions.listeners
		opts._renderChildren = vnodeComponentOptions.children
		opts._componentTag = vnodeComponentOptions.tag

		if (options.render) {
			opts.render = options.render
			opts.staticRenderFns = options.staticRenderFns
=======
				);
			}
			/* istanbul ignore else */
			{
				initProxy(vm);
			}
			// expose real self
			vm._self = vm;
			initLifecycle(vm);
			initEvents(vm);
			initRender(vm);
			callHook(vm, 'beforeCreate');
			initInjections(vm); // resolve injections before data/props
			initState(vm);
			initProvide(vm); // resolve provide after data/props
			callHook(vm, 'created');

			/* istanbul ignore if */
			if ("development" !== 'production' && config.performance && mark) {
				vm._name = formatComponentName(vm, false);
				mark(endTag);
				measure(("vue " + (vm._name) + " init"), startTag, endTag);
			}

			if (vm.$options.el) {
				vm.$mount(vm.$options.el);
			}
		};
	}

	function initInternalComponent (vm, options) {
		var opts = vm.$options = Object.create(vm.constructor.options);
		// doing this because it's faster than dynamic enumeration.
		var parentVnode = options._parentVnode;
		opts.parent = options.parent;
		opts._parentVnode = parentVnode;
		opts._parentElm = options._parentElm;
		opts._refElm = options._refElm;

		var vnodeComponentOptions = parentVnode.componentOptions;
		opts.propsData = vnodeComponentOptions.propsData;
		opts._parentListeners = vnodeComponentOptions.listeners;
		opts._renderChildren = vnodeComponentOptions.children;
		opts._componentTag = vnodeComponentOptions.tag;

		if (options.render) {
			opts.render = options.render;
			opts.staticRenderFns = options.staticRenderFns;
>>>>>>> origin/master
		}
	}

	function resolveConstructorOptions (Ctor) {
<<<<<<< HEAD
		var options = Ctor.options
		if (Ctor.super) {
			var superOptions = resolveConstructorOptions(Ctor.super)
			var cachedSuperOptions = Ctor.superOptions
			if (superOptions !== cachedSuperOptions) {
				// super option changed,
				// need to resolve new options.
				Ctor.superOptions = superOptions
				// check if there are any late-modified/attached options (#4976)
				var modifiedOptions = resolveModifiedOptions(Ctor)
				// update base extend options
				if (modifiedOptions) {
					extend(Ctor.extendOptions, modifiedOptions)
				}
				options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions)
				if (options.name) {
					options.components[options.name] = Ctor
=======
		var options = Ctor.options;
		if (Ctor.super) {
			var superOptions = resolveConstructorOptions(Ctor.super);
			var cachedSuperOptions = Ctor.superOptions;
			if (superOptions !== cachedSuperOptions) {
				// super option changed,
				// need to resolve new options.
				Ctor.superOptions = superOptions;
				// check if there are any late-modified/attached options (#4976)
				var modifiedOptions = resolveModifiedOptions(Ctor);
				// update base extend options
				if (modifiedOptions) {
					extend(Ctor.extendOptions, modifiedOptions);
				}
				options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
				if (options.name) {
					options.components[options.name] = Ctor;
>>>>>>> origin/master
				}
			}
		}
		return options
	}

	function resolveModifiedOptions (Ctor) {
<<<<<<< HEAD
		var modified
		var latest = Ctor.options
		var extended = Ctor.extendOptions
		var sealed = Ctor.sealedOptions
		for (var key in latest) {
			if (latest[key] !== sealed[key]) {
				if (!modified) { modified = {} }
				modified[key] = dedupe(latest[key], extended[key], sealed[key])
=======
		var modified;
		var latest = Ctor.options;
		var extended = Ctor.extendOptions;
		var sealed = Ctor.sealedOptions;
		for (var key in latest) {
			if (latest[key] !== sealed[key]) {
				if (!modified) { modified = {}; }
				modified[key] = dedupe(latest[key], extended[key], sealed[key]);
>>>>>>> origin/master
			}
		}
		return modified
	}

	function dedupe (latest, extended, sealed) {
		// compare latest and sealed to ensure lifecycle hooks won't be duplicated
		// between merges
		if (Array.isArray(latest)) {
<<<<<<< HEAD
			var res = []
			sealed = Array.isArray(sealed) ? sealed : [sealed]
			extended = Array.isArray(extended) ? extended : [extended]
			for (var i = 0; i < latest.length; i++) {
				// push original options and not sealed options to exclude duplicated options
				if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
					res.push(latest[i])
=======
			var res = [];
			sealed = Array.isArray(sealed) ? sealed : [sealed];
			extended = Array.isArray(extended) ? extended : [extended];
			for (var i = 0; i < latest.length; i++) {
				// push original options and not sealed options to exclude duplicated options
				if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
					res.push(latest[i]);
>>>>>>> origin/master
				}
			}
			return res
		} else {
			return latest
		}
	}

	function Vue (options) {
<<<<<<< HEAD
		if ('development' !== 'production' &&
			!(this instanceof Vue)
		) {
			warn('Vue is a constructor and should be called with the `new` keyword')
		}
		this._init(options)
	}

	initMixin(Vue)
	stateMixin(Vue)
	eventsMixin(Vue)
	lifecycleMixin(Vue)
	renderMixin(Vue)
=======
		if ("development" !== 'production' &&
			!(this instanceof Vue)
		) {
			warn('Vue is a constructor and should be called with the `new` keyword');
		}
		this._init(options);
	}

	initMixin(Vue);
	stateMixin(Vue);
	eventsMixin(Vue);
	lifecycleMixin(Vue);
	renderMixin(Vue);
>>>>>>> origin/master

	/*  */

	function initUse (Vue) {
		Vue.use = function (plugin) {
<<<<<<< HEAD
			var installedPlugins = (this._installedPlugins || (this._installedPlugins = []))
=======
			var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
>>>>>>> origin/master
			if (installedPlugins.indexOf(plugin) > -1) {
				return this
			}

			// additional parameters
<<<<<<< HEAD
			var args = toArray(arguments, 1)
			args.unshift(this)
			if (typeof plugin.install === 'function') {
				plugin.install.apply(plugin, args)
			} else if (typeof plugin === 'function') {
				plugin.apply(null, args)
			}
			installedPlugins.push(plugin)
			return this
		}
=======
			var args = toArray(arguments, 1);
			args.unshift(this);
			if (typeof plugin.install === 'function') {
				plugin.install.apply(plugin, args);
			} else if (typeof plugin === 'function') {
				plugin.apply(null, args);
			}
			installedPlugins.push(plugin);
			return this
		};
>>>>>>> origin/master
	}

	/*  */

	function initMixin$1 (Vue) {
		Vue.mixin = function (mixin) {
<<<<<<< HEAD
			this.options = mergeOptions(this.options, mixin)
			return this
		}
=======
			this.options = mergeOptions(this.options, mixin);
			return this
		};
>>>>>>> origin/master
	}

	/*  */

	function initExtend (Vue) {
		/**
		 * Each instance constructor, including Vue, has a unique
		 * cid. This enables us to create wrapped "child
		 * constructors" for prototypal inheritance and cache them.
		 */
<<<<<<< HEAD
		Vue.cid = 0
		var cid = 1
=======
		Vue.cid = 0;
		var cid = 1;
>>>>>>> origin/master

		/**
		 * Class inheritance
		 */
		Vue.extend = function (extendOptions) {
<<<<<<< HEAD
			extendOptions = extendOptions || {}
			var Super = this
			var SuperId = Super.cid
			var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {})
=======
			extendOptions = extendOptions || {};
			var Super = this;
			var SuperId = Super.cid;
			var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
>>>>>>> origin/master
			if (cachedCtors[SuperId]) {
				return cachedCtors[SuperId]
			}

<<<<<<< HEAD
			var name = extendOptions.name || Super.options.name
			if ('development' !== 'production' && name) {
				validateComponentName(name)
			}

			var Sub = function VueComponent (options) {
				this._init(options)
			}
			Sub.prototype = Object.create(Super.prototype)
			Sub.prototype.constructor = Sub
			Sub.cid = cid++
			Sub.options = mergeOptions(
				Super.options,
				extendOptions
			)
			Sub['super'] = Super
=======
			var name = extendOptions.name || Super.options.name;
			if ("development" !== 'production' && name) {
				validateComponentName(name);
			}

			var Sub = function VueComponent (options) {
				this._init(options);
			};
			Sub.prototype = Object.create(Super.prototype);
			Sub.prototype.constructor = Sub;
			Sub.cid = cid++;
			Sub.options = mergeOptions(
				Super.options,
				extendOptions
			);
			Sub['super'] = Super;
>>>>>>> origin/master

			// For props and computed properties, we define the proxy getters on
			// the Vue instances at extension time, on the extended prototype. This
			// avoids Object.defineProperty calls for each instance created.
			if (Sub.options.props) {
<<<<<<< HEAD
				initProps$1(Sub)
			}
			if (Sub.options.computed) {
				initComputed$1(Sub)
			}

			// allow further extension/mixin/plugin usage
			Sub.extend = Super.extend
			Sub.mixin = Super.mixin
			Sub.use = Super.use
=======
				initProps$1(Sub);
			}
			if (Sub.options.computed) {
				initComputed$1(Sub);
			}

			// allow further extension/mixin/plugin usage
			Sub.extend = Super.extend;
			Sub.mixin = Super.mixin;
			Sub.use = Super.use;
>>>>>>> origin/master

			// create asset registers, so extended classes
			// can have their private assets too.
			ASSET_TYPES.forEach(function (type) {
<<<<<<< HEAD
				Sub[type] = Super[type]
			})
			// enable recursive self-lookup
			if (name) {
				Sub.options.components[name] = Sub
=======
				Sub[type] = Super[type];
			});
			// enable recursive self-lookup
			if (name) {
				Sub.options.components[name] = Sub;
>>>>>>> origin/master
			}

			// keep a reference to the super options at extension time.
			// later at instantiation we can check if Super's options have
			// been updated.
<<<<<<< HEAD
			Sub.superOptions = Super.options
			Sub.extendOptions = extendOptions
			Sub.sealedOptions = extend({}, Sub.options)

			// cache constructor
			cachedCtors[SuperId] = Sub
			return Sub
		}
	}

	function initProps$1 (Comp) {
		var props = Comp.options.props
		for (var key in props) {
			proxy(Comp.prototype, '_props', key)
=======
			Sub.superOptions = Super.options;
			Sub.extendOptions = extendOptions;
			Sub.sealedOptions = extend({}, Sub.options);

			// cache constructor
			cachedCtors[SuperId] = Sub;
			return Sub
		};
	}

	function initProps$1 (Comp) {
		var props = Comp.options.props;
		for (var key in props) {
			proxy(Comp.prototype, "_props", key);
>>>>>>> origin/master
		}
	}

	function initComputed$1 (Comp) {
<<<<<<< HEAD
		var computed = Comp.options.computed
		for (var key in computed) {
			defineComputed(Comp.prototype, key, computed[key])
=======
		var computed = Comp.options.computed;
		for (var key in computed) {
			defineComputed(Comp.prototype, key, computed[key]);
>>>>>>> origin/master
		}
	}

	/*  */

	function initAssetRegisters (Vue) {
		/**
		 * Create asset registration methods.
		 */
		ASSET_TYPES.forEach(function (type) {
			Vue[type] = function (
				id,
				definition
			) {
				if (!definition) {
					return this.options[type + 's'][id]
				} else {
					/* istanbul ignore if */
<<<<<<< HEAD
					if ('development' !== 'production' && type === 'component') {
						validateComponentName(id)
					}
					if (type === 'component' && isPlainObject(definition)) {
						definition.name = definition.name || id
						definition = this.options._base.extend(definition)
					}
					if (type === 'directive' && typeof definition === 'function') {
						definition = { bind: definition, update: definition }
					}
					this.options[type + 's'][id] = definition
					return definition
				}
			}
		})
=======
					if ("development" !== 'production' && type === 'component') {
						validateComponentName(id);
					}
					if (type === 'component' && isPlainObject(definition)) {
						definition.name = definition.name || id;
						definition = this.options._base.extend(definition);
					}
					if (type === 'directive' && typeof definition === 'function') {
						definition = { bind: definition, update: definition };
					}
					this.options[type + 's'][id] = definition;
					return definition
				}
			};
		});
>>>>>>> origin/master
	}

	/*  */

	function getComponentName (opts) {
		return opts && (opts.Ctor.options.name || opts.tag)
	}

	function matches (pattern, name) {
		if (Array.isArray(pattern)) {
			return pattern.indexOf(name) > -1
		} else if (typeof pattern === 'string') {
			return pattern.split(',').indexOf(name) > -1
		} else if (isRegExp(pattern)) {
			return pattern.test(name)
		}
		/* istanbul ignore next */
		return false
	}

	function pruneCache (keepAliveInstance, filter) {
<<<<<<< HEAD
		var cache = keepAliveInstance.cache
		var keys = keepAliveInstance.keys
		var _vnode = keepAliveInstance._vnode
		for (var key in cache) {
			var cachedNode = cache[key]
			if (cachedNode) {
				var name = getComponentName(cachedNode.componentOptions)
				if (name && !filter(name)) {
					pruneCacheEntry(cache, key, keys, _vnode)
=======
		var cache = keepAliveInstance.cache;
		var keys = keepAliveInstance.keys;
		var _vnode = keepAliveInstance._vnode;
		for (var key in cache) {
			var cachedNode = cache[key];
			if (cachedNode) {
				var name = getComponentName(cachedNode.componentOptions);
				if (name && !filter(name)) {
					pruneCacheEntry(cache, key, keys, _vnode);
>>>>>>> origin/master
				}
			}
		}
	}

	function pruneCacheEntry (
		cache,
		key,
		keys,
		current
	) {
<<<<<<< HEAD
		var cached$$1 = cache[key]
		if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
			cached$$1.componentInstance.$destroy()
		}
		cache[key] = null
		remove(keys, key)
	}

	var patternTypes = [String, RegExp, Array]
=======
		var cached$$1 = cache[key];
		if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
			cached$$1.componentInstance.$destroy();
		}
		cache[key] = null;
		remove(keys, key);
	}

	var patternTypes = [String, RegExp, Array];
>>>>>>> origin/master

	var KeepAlive = {
		name: 'keep-alive',
		abstract: true,

		props: {
			include: patternTypes,
			exclude: patternTypes,
			max: [String, Number]
		},

		created: function created () {
<<<<<<< HEAD
			this.cache = Object.create(null)
			this.keys = []
		},

		destroyed: function destroyed () {
			var this$1 = this

			for (var key in this$1.cache) {
				pruneCacheEntry(this$1.cache, key, this$1.keys)
=======
			this.cache = Object.create(null);
			this.keys = [];
		},

		destroyed: function destroyed () {
			var this$1 = this;

			for (var key in this$1.cache) {
				pruneCacheEntry(this$1.cache, key, this$1.keys);
>>>>>>> origin/master
			}
		},

		mounted: function mounted () {
<<<<<<< HEAD
			var this$1 = this

			this.$watch('include', function (val) {
				pruneCache(this$1, function (name) { return matches(val, name) })
			})
			this.$watch('exclude', function (val) {
				pruneCache(this$1, function (name) { return !matches(val, name) })
			})
		},

		render: function render () {
			var slot = this.$slots.default
			var vnode = getFirstComponentChild(slot)
			var componentOptions = vnode && vnode.componentOptions
			if (componentOptions) {
				// check pattern
				var name = getComponentName(componentOptions)
				var ref = this
				var include = ref.include
				var exclude = ref.exclude
=======
			var this$1 = this;

			this.$watch('include', function (val) {
				pruneCache(this$1, function (name) { return matches(val, name); });
			});
			this.$watch('exclude', function (val) {
				pruneCache(this$1, function (name) { return !matches(val, name); });
			});
		},

		render: function render () {
			var slot = this.$slots.default;
			var vnode = getFirstComponentChild(slot);
			var componentOptions = vnode && vnode.componentOptions;
			if (componentOptions) {
				// check pattern
				var name = getComponentName(componentOptions);
				var ref = this;
				var include = ref.include;
				var exclude = ref.exclude;
>>>>>>> origin/master
				if (
					// not included
					(include && (!name || !matches(include, name))) ||
					// excluded
					(exclude && name && matches(exclude, name))
				) {
					return vnode
				}

<<<<<<< HEAD
				var ref$1 = this
				var cache = ref$1.cache
				var keys = ref$1.keys
				var key = vnode.key == null
					// same constructor may get registered as different local components
					// so cid alone is not enough (#3269)
					? componentOptions.Ctor.cid + (componentOptions.tag ? ('::' + (componentOptions.tag)) : '')
					: vnode.key
				if (cache[key]) {
					vnode.componentInstance = cache[key].componentInstance
					// make current key freshest
					remove(keys, key)
					keys.push(key)
				} else {
					cache[key] = vnode
					keys.push(key)
					// prune oldest entry
					if (this.max && keys.length > parseInt(this.max)) {
						pruneCacheEntry(cache, keys[0], keys, this._vnode)
					}
				}

				vnode.data.keepAlive = true
=======
				var ref$1 = this;
				var cache = ref$1.cache;
				var keys = ref$1.keys;
				var key = vnode.key == null
					// same constructor may get registered as different local components
					// so cid alone is not enough (#3269)
					? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
					: vnode.key;
				if (cache[key]) {
					vnode.componentInstance = cache[key].componentInstance;
					// make current key freshest
					remove(keys, key);
					keys.push(key);
				} else {
					cache[key] = vnode;
					keys.push(key);
					// prune oldest entry
					if (this.max && keys.length > parseInt(this.max)) {
						pruneCacheEntry(cache, keys[0], keys, this._vnode);
					}
				}

				vnode.data.keepAlive = true;
>>>>>>> origin/master
			}
			return vnode || (slot && slot[0])
		}
	}

	var builtInComponents = {
		KeepAlive: KeepAlive
	}

	/*  */

	function initGlobalAPI (Vue) {
		// config
<<<<<<< HEAD
		var configDef = {}
		configDef.get = function () { return config }
=======
		var configDef = {};
		configDef.get = function () { return config; };
>>>>>>> origin/master
		{
			configDef.set = function () {
				warn(
					'Do not replace the Vue.config object, set individual fields instead.'
<<<<<<< HEAD
				)
			}
		}
		Object.defineProperty(Vue, 'config', configDef)
=======
				);
			};
		}
		Object.defineProperty(Vue, 'config', configDef);
>>>>>>> origin/master

		// exposed util methods.
		// NOTE: these are not considered part of the public API - avoid relying on
		// them unless you are aware of the risk.
		Vue.util = {
			warn: warn,
			extend: extend,
			mergeOptions: mergeOptions,
			defineReactive: defineReactive
<<<<<<< HEAD
		}

		Vue.set = set
		Vue.delete = del
		Vue.nextTick = nextTick

		Vue.options = Object.create(null)
		ASSET_TYPES.forEach(function (type) {
			Vue.options[type + 's'] = Object.create(null)
		})

		// this is used to identify the "base" constructor to extend all plain-object
		// components with in Weex's multi-instance scenarios.
		Vue.options._base = Vue

		extend(Vue.options.components, builtInComponents)

		initUse(Vue)
		initMixin$1(Vue)
		initExtend(Vue)
		initAssetRegisters(Vue)
	}

	initGlobalAPI(Vue)

	Object.defineProperty(Vue.prototype, '$isServer', {
		get: isServerRendering
	})
=======
		};

		Vue.set = set;
		Vue.delete = del;
		Vue.nextTick = nextTick;

		Vue.options = Object.create(null);
		ASSET_TYPES.forEach(function (type) {
			Vue.options[type + 's'] = Object.create(null);
		});

		// this is used to identify the "base" constructor to extend all plain-object
		// components with in Weex's multi-instance scenarios.
		Vue.options._base = Vue;

		extend(Vue.options.components, builtInComponents);

		initUse(Vue);
		initMixin$1(Vue);
		initExtend(Vue);
		initAssetRegisters(Vue);
	}

	initGlobalAPI(Vue);

	Object.defineProperty(Vue.prototype, '$isServer', {
		get: isServerRendering
	});
>>>>>>> origin/master

	Object.defineProperty(Vue.prototype, '$ssrContext', {
		get: function get () {
			/* istanbul ignore next */
			return this.$vnode && this.$vnode.ssrContext
		}
<<<<<<< HEAD
	})

	// expose FunctionalRenderContext for ssr runtime helper installation
	Object.defineProperty(Vue, 'FunctionalRenderContext', {
		value: FunctionalRenderContext
	})

	Vue.version = '2.5.16'

	/*  */

	// these are reserved for web because they are directly compiled away
	// during template compilation
	var isReservedAttr = makeMap('style,class')

	// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select,progress')
=======
	});

// expose FunctionalRenderContext for ssr runtime helper installation
	Object.defineProperty(Vue, 'FunctionalRenderContext', {
		value: FunctionalRenderContext
	});

	Vue.version = '2.5.16';

	/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
	var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
	var acceptValue = makeMap('input,textarea,option,select,progress');
>>>>>>> origin/master
	var mustUseProp = function (tag, type, attr) {
		return (
			(attr === 'value' && acceptValue(tag)) && type !== 'button' ||
			(attr === 'selected' && tag === 'option') ||
			(attr === 'checked' && tag === 'input') ||
			(attr === 'muted' && tag === 'video')
		)
<<<<<<< HEAD
	}

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck')

	var isBooleanAttr = makeMap(
		'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
			'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
			'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
			'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
			'required,reversed,scoped,seamless,selected,sortable,translate,' +
			'truespeed,typemustmatch,visible'
	)

	var xlinkNS = 'http://www.w3.org/1999/xlink'

	var isXlink = function (name) {
		return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	}

	var getXlinkProp = function (name) {
		return isXlink(name) ? name.slice(6, name.length) : ''
	}

	var isFalsyAttrValue = function (val) {
		return val == null || val === false
	}
=======
	};

	var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

	var isBooleanAttr = makeMap(
		'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
		'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
		'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
		'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
		'required,reversed,scoped,seamless,selected,sortable,translate,' +
		'truespeed,typemustmatch,visible'
	);

	var xlinkNS = 'http://www.w3.org/1999/xlink';

	var isXlink = function (name) {
		return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
	};

	var getXlinkProp = function (name) {
		return isXlink(name) ? name.slice(6, name.length) : ''
	};

	var isFalsyAttrValue = function (val) {
		return val == null || val === false
	};
>>>>>>> origin/master

	/*  */

	function genClassForVnode (vnode) {
<<<<<<< HEAD
		var data = vnode.data
		var parentNode = vnode
		var childNode = vnode
		while (isDef(childNode.componentInstance)) {
			childNode = childNode.componentInstance._vnode
			if (childNode && childNode.data) {
				data = mergeClassData(childNode.data, data)
=======
		var data = vnode.data;
		var parentNode = vnode;
		var childNode = vnode;
		while (isDef(childNode.componentInstance)) {
			childNode = childNode.componentInstance._vnode;
			if (childNode && childNode.data) {
				data = mergeClassData(childNode.data, data);
>>>>>>> origin/master
			}
		}
		while (isDef(parentNode = parentNode.parent)) {
			if (parentNode && parentNode.data) {
<<<<<<< HEAD
				data = mergeClassData(data, parentNode.data)
=======
				data = mergeClassData(data, parentNode.data);
>>>>>>> origin/master
			}
		}
		return renderClass(data.staticClass, data.class)
	}

	function mergeClassData (child, parent) {
		return {
			staticClass: concat(child.staticClass, parent.staticClass),
			class: isDef(child.class)
				? [child.class, parent.class]
				: parent.class
		}
	}

	function renderClass (
		staticClass,
		dynamicClass
	) {
		if (isDef(staticClass) || isDef(dynamicClass)) {
			return concat(staticClass, stringifyClass(dynamicClass))
		}
		/* istanbul ignore next */
		return ''
	}

	function concat (a, b) {
		return a ? b ? (a + ' ' + b) : a : (b || '')
	}

	function stringifyClass (value) {
		if (Array.isArray(value)) {
			return stringifyArray(value)
		}
		if (isObject(value)) {
			return stringifyObject(value)
		}
		if (typeof value === 'string') {
			return value
		}
		/* istanbul ignore next */
		return ''
	}

	function stringifyArray (value) {
<<<<<<< HEAD
		var res = ''
		var stringified
		for (var i = 0, l = value.length; i < l; i++) {
			if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
				if (res) { res += ' ' }
				res += stringified
=======
		var res = '';
		var stringified;
		for (var i = 0, l = value.length; i < l; i++) {
			if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
				if (res) { res += ' '; }
				res += stringified;
>>>>>>> origin/master
			}
		}
		return res
	}

	function stringifyObject (value) {
<<<<<<< HEAD
		var res = ''
		for (var key in value) {
			if (value[key]) {
				if (res) { res += ' ' }
				res += key
=======
		var res = '';
		for (var key in value) {
			if (value[key]) {
				if (res) { res += ' '; }
				res += key;
>>>>>>> origin/master
			}
		}
		return res
	}

	/*  */

	var namespaceMap = {
		svg: 'http://www.w3.org/2000/svg',
		math: 'http://www.w3.org/1998/Math/MathML'
<<<<<<< HEAD
	}

	var isHTMLTag = makeMap(
		'html,body,base,head,link,meta,style,title,' +
			'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
			'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
			'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
			's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
			'embed,object,param,source,canvas,script,noscript,del,ins,' +
			'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
			'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
			'output,progress,select,textarea,' +
			'details,dialog,menu,menuitem,summary,' +
			'content,element,shadow,template,blockquote,iframe,tfoot'
	)

	// this map is intentionally selective, only covering SVG elements that may
	// contain child elements.
	var isSVG = makeMap(
		'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
			'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
			'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
		true
	)

	var isPreTag = function (tag) { return tag === 'pre' }

	var isReservedTag = function (tag) {
		return isHTMLTag(tag) || isSVG(tag)
	}
=======
	};

	var isHTMLTag = makeMap(
		'html,body,base,head,link,meta,style,title,' +
		'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
		'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
		'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
		's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
		'embed,object,param,source,canvas,script,noscript,del,ins,' +
		'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
		'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
		'output,progress,select,textarea,' +
		'details,dialog,menu,menuitem,summary,' +
		'content,element,shadow,template,blockquote,iframe,tfoot'
	);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
	var isSVG = makeMap(
		'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
		'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
		'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
		true
	);

	var isPreTag = function (tag) { return tag === 'pre'; };

	var isReservedTag = function (tag) {
		return isHTMLTag(tag) || isSVG(tag)
	};
>>>>>>> origin/master

	function getTagNamespace (tag) {
		if (isSVG(tag)) {
			return 'svg'
		}
		// basic support for MathML
		// note it doesn't support other MathML elements being component roots
		if (tag === 'math') {
			return 'math'
		}
	}

<<<<<<< HEAD
	var unknownElementCache = Object.create(null)
=======
	var unknownElementCache = Object.create(null);
>>>>>>> origin/master
	function isUnknownElement (tag) {
		/* istanbul ignore if */
		if (!inBrowser) {
			return true
		}
		if (isReservedTag(tag)) {
			return false
		}
<<<<<<< HEAD
		tag = tag.toLowerCase()
=======
		tag = tag.toLowerCase();
>>>>>>> origin/master
		/* istanbul ignore if */
		if (unknownElementCache[tag] != null) {
			return unknownElementCache[tag]
		}
<<<<<<< HEAD
		var el = document.createElement(tag)
=======
		var el = document.createElement(tag);
>>>>>>> origin/master
		if (tag.indexOf('-') > -1) {
			// http://stackoverflow.com/a/28210364/1070244
			return (unknownElementCache[tag] = (
				el.constructor === window.HTMLUnknownElement ||
				el.constructor === window.HTMLElement
			))
		} else {
			return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
		}
	}

<<<<<<< HEAD
	var isTextInputType = makeMap('text,number,password,search,email,tel,url')
=======
	var isTextInputType = makeMap('text,number,password,search,email,tel,url');
>>>>>>> origin/master

	/*  */

	/**
	 * Query an element selector if it's not an element already.
	 */
	function query (el) {
		if (typeof el === 'string') {
<<<<<<< HEAD
			var selected = document.querySelector(el)
			if (!selected) {
				'development' !== 'production' && warn(
					'Cannot find element: ' + el
				)
=======
			var selected = document.querySelector(el);
			if (!selected) {
				"development" !== 'production' && warn(
					'Cannot find element: ' + el
				);
>>>>>>> origin/master
				return document.createElement('div')
			}
			return selected
		} else {
			return el
		}
	}

	/*  */

	function createElement$1 (tagName, vnode) {
<<<<<<< HEAD
		var elm = document.createElement(tagName)
=======
		var elm = document.createElement(tagName);
>>>>>>> origin/master
		if (tagName !== 'select') {
			return elm
		}
		// false or null will remove the attribute but undefined will not
		if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
<<<<<<< HEAD
			elm.setAttribute('multiple', 'multiple')
=======
			elm.setAttribute('multiple', 'multiple');
>>>>>>> origin/master
		}
		return elm
	}

	function createElementNS (namespace, tagName) {
		return document.createElementNS(namespaceMap[namespace], tagName)
	}

	function createTextNode (text) {
		return document.createTextNode(text)
	}

	function createComment (text) {
		return document.createComment(text)
	}

	function insertBefore (parentNode, newNode, referenceNode) {
<<<<<<< HEAD
		parentNode.insertBefore(newNode, referenceNode)
	}

	function removeChild (node, child) {
		node.removeChild(child)
	}

	function appendChild (node, child) {
		node.appendChild(child)
=======
		parentNode.insertBefore(newNode, referenceNode);
	}

	function removeChild (node, child) {
		node.removeChild(child);
	}

	function appendChild (node, child) {
		node.appendChild(child);
>>>>>>> origin/master
	}

	function parentNode (node) {
		return node.parentNode
	}

	function nextSibling (node) {
		return node.nextSibling
	}

	function tagName (node) {
		return node.tagName
	}

	function setTextContent (node, text) {
<<<<<<< HEAD
		node.textContent = text
	}

	function setStyleScope (node, scopeId) {
		node.setAttribute(scopeId, '')
	}

=======
		node.textContent = text;
	}

	function setStyleScope (node, scopeId) {
		node.setAttribute(scopeId, '');
	}


>>>>>>> origin/master
	var nodeOps = Object.freeze({
		createElement: createElement$1,
		createElementNS: createElementNS,
		createTextNode: createTextNode,
		createComment: createComment,
		insertBefore: insertBefore,
		removeChild: removeChild,
		appendChild: appendChild,
		parentNode: parentNode,
		nextSibling: nextSibling,
		tagName: tagName,
		setTextContent: setTextContent,
		setStyleScope: setStyleScope
<<<<<<< HEAD
	})
=======
	});
>>>>>>> origin/master

	/*  */

	var ref = {
		create: function create (_, vnode) {
<<<<<<< HEAD
			registerRef(vnode)
		},
		update: function update (oldVnode, vnode) {
			if (oldVnode.data.ref !== vnode.data.ref) {
				registerRef(oldVnode, true)
				registerRef(vnode)
			}
		},
		destroy: function destroy (vnode) {
			registerRef(vnode, true)
=======
			registerRef(vnode);
		},
		update: function update (oldVnode, vnode) {
			if (oldVnode.data.ref !== vnode.data.ref) {
				registerRef(oldVnode, true);
				registerRef(vnode);
			}
		},
		destroy: function destroy (vnode) {
			registerRef(vnode, true);
>>>>>>> origin/master
		}
	}

	function registerRef (vnode, isRemoval) {
<<<<<<< HEAD
		var key = vnode.data.ref
		if (!isDef(key)) { return }

		var vm = vnode.context
		var ref = vnode.componentInstance || vnode.elm
		var refs = vm.$refs
		if (isRemoval) {
			if (Array.isArray(refs[key])) {
				remove(refs[key], ref)
			} else if (refs[key] === ref) {
				refs[key] = undefined
=======
		var key = vnode.data.ref;
		if (!isDef(key)) { return }

		var vm = vnode.context;
		var ref = vnode.componentInstance || vnode.elm;
		var refs = vm.$refs;
		if (isRemoval) {
			if (Array.isArray(refs[key])) {
				remove(refs[key], ref);
			} else if (refs[key] === ref) {
				refs[key] = undefined;
>>>>>>> origin/master
			}
		} else {
			if (vnode.data.refInFor) {
				if (!Array.isArray(refs[key])) {
<<<<<<< HEAD
					refs[key] = [ref]
				} else if (refs[key].indexOf(ref) < 0) {
					// $flow-disable-line
					refs[key].push(ref)
				}
			} else {
				refs[key] = ref
=======
					refs[key] = [ref];
				} else if (refs[key].indexOf(ref) < 0) {
					// $flow-disable-line
					refs[key].push(ref);
				}
			} else {
				refs[key] = ref;
>>>>>>> origin/master
			}
		}
	}

	/**
	 * Virtual DOM patching algorithm based on Snabbdom by
	 * Simon Friis Vindum (@paldepind)
	 * Licensed under the MIT License
	 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
	 *
	 * modified by Evan You (@yyx990803)
	 *
	 * Not type-checking this because this file is perf-critical and the cost
	 * of making flow understand it is not worth it.
	 */

<<<<<<< HEAD
	var emptyNode = new VNode('', {}, [])

	var hooks = ['create', 'activate', 'update', 'remove', 'destroy']
=======
	var emptyNode = new VNode('', {}, []);

	var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];
>>>>>>> origin/master

	function sameVnode (a, b) {
		return (
			a.key === b.key && (
				(
<<<<<<< HEAD
			a.tag === b.tag &&
			a.isComment === b.isComment &&
			isDef(a.data) === isDef(b.data) &&
			sameInputType(a, b)
			) || (
			isTrue(a.isAsyncPlaceholder) &&
			a.asyncFactory === b.asyncFactory &&
			isUndef(b.asyncFactory.error)
			)
=======
					a.tag === b.tag &&
					a.isComment === b.isComment &&
					isDef(a.data) === isDef(b.data) &&
					sameInputType(a, b)
				) || (
					isTrue(a.isAsyncPlaceholder) &&
					a.asyncFactory === b.asyncFactory &&
					isUndef(b.asyncFactory.error)
				)
>>>>>>> origin/master
			)
		)
	}

	function sameInputType (a, b) {
		if (a.tag !== 'input') { return true }
<<<<<<< HEAD
		var i
		var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type
		var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type
=======
		var i;
		var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
		var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
>>>>>>> origin/master
		return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
	}

	function createKeyToOldIdx (children, beginIdx, endIdx) {
<<<<<<< HEAD
		var i, key
		var map = {}
		for (i = beginIdx; i <= endIdx; ++i) {
			key = children[i].key
			if (isDef(key)) { map[key] = i }
=======
		var i, key;
		var map = {};
		for (i = beginIdx; i <= endIdx; ++i) {
			key = children[i].key;
			if (isDef(key)) { map[key] = i; }
>>>>>>> origin/master
		}
		return map
	}

	function createPatchFunction (backend) {
<<<<<<< HEAD
		var i, j
		var cbs = {}

		var modules = backend.modules
		var nodeOps = backend.nodeOps

		for (i = 0; i < hooks.length; ++i) {
			cbs[hooks[i]] = []
			for (j = 0; j < modules.length; ++j) {
				if (isDef(modules[j][hooks[i]])) {
					cbs[hooks[i]].push(modules[j][hooks[i]])
=======
		var i, j;
		var cbs = {};

		var modules = backend.modules;
		var nodeOps = backend.nodeOps;

		for (i = 0; i < hooks.length; ++i) {
			cbs[hooks[i]] = [];
			for (j = 0; j < modules.length; ++j) {
				if (isDef(modules[j][hooks[i]])) {
					cbs[hooks[i]].push(modules[j][hooks[i]]);
>>>>>>> origin/master
				}
			}
		}

		function emptyNodeAt (elm) {
			return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
		}

		function createRmCb (childElm, listeners) {
			function remove () {
				if (--remove.listeners === 0) {
<<<<<<< HEAD
					removeNode(childElm)
				}
			}
			remove.listeners = listeners
=======
					removeNode(childElm);
				}
			}
			remove.listeners = listeners;
>>>>>>> origin/master
			return remove
		}

		function removeNode (el) {
<<<<<<< HEAD
			var parent = nodeOps.parentNode(el)
			// element may have already been removed due to v-html / v-text
			if (isDef(parent)) {
				nodeOps.removeChild(parent, el)
=======
			var parent = nodeOps.parentNode(el);
			// element may have already been removed due to v-html / v-text
			if (isDef(parent)) {
				nodeOps.removeChild(parent, el);
>>>>>>> origin/master
			}
		}

		function isUnknownElement$$1 (vnode, inVPre) {
			return (
				!inVPre &&
				!vnode.ns &&
				!(
					config.ignoredElements.length &&
					config.ignoredElements.some(function (ignore) {
						return isRegExp(ignore)
							? ignore.test(vnode.tag)
							: ignore === vnode.tag
					})
				) &&
				config.isUnknownElement(vnode.tag)
			)
		}

<<<<<<< HEAD
		var creatingElmInVPre = 0
=======
		var creatingElmInVPre = 0;
>>>>>>> origin/master

		function createElm (
			vnode,
			insertedVnodeQueue,
			parentElm,
			refElm,
			nested,
			ownerArray,
			index
		) {
			if (isDef(vnode.elm) && isDef(ownerArray)) {
				// This vnode was used in a previous render!
				// now it's used as a new node, overwriting its elm would cause
				// potential patch errors down the road when it's used as an insertion
				// reference node. Instead, we clone the node on-demand before creating
				// associated DOM element for it.
<<<<<<< HEAD
				vnode = ownerArray[index] = cloneVNode(vnode)
			}

			vnode.isRootInsert = !nested // for transition enter check
=======
				vnode = ownerArray[index] = cloneVNode(vnode);
			}

			vnode.isRootInsert = !nested; // for transition enter check
>>>>>>> origin/master
			if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
				return
			}

<<<<<<< HEAD
			var data = vnode.data
			var children = vnode.children
			var tag = vnode.tag
			if (isDef(tag)) {
				{
					if (data && data.pre) {
						creatingElmInVPre++
=======
			var data = vnode.data;
			var children = vnode.children;
			var tag = vnode.tag;
			if (isDef(tag)) {
				{
					if (data && data.pre) {
						creatingElmInVPre++;
>>>>>>> origin/master
					}
					if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
						warn(
							'Unknown custom element: <' + tag + '> - did you ' +
<<<<<<< HEAD
								'register the component correctly? For recursive components, ' +
								'make sure to provide the "name" option.',
							vnode.context
						)
=======
							'register the component correctly? For recursive components, ' +
							'make sure to provide the "name" option.',
							vnode.context
						);
>>>>>>> origin/master
					}
				}

				vnode.elm = vnode.ns
					? nodeOps.createElementNS(vnode.ns, tag)
<<<<<<< HEAD
					: nodeOps.createElement(tag, vnode)
				setScope(vnode)

				/* istanbul ignore if */
				{
					createChildren(vnode, children, insertedVnodeQueue)
					if (isDef(data)) {
						invokeCreateHooks(vnode, insertedVnodeQueue)
					}
					insert(parentElm, vnode.elm, refElm)
				}

				if ('development' !== 'production' && data && data.pre) {
					creatingElmInVPre--
				}
			} else if (isTrue(vnode.isComment)) {
				vnode.elm = nodeOps.createComment(vnode.text)
				insert(parentElm, vnode.elm, refElm)
			} else {
				vnode.elm = nodeOps.createTextNode(vnode.text)
				insert(parentElm, vnode.elm, refElm)
=======
					: nodeOps.createElement(tag, vnode);
				setScope(vnode);

				/* istanbul ignore if */
				{
					createChildren(vnode, children, insertedVnodeQueue);
					if (isDef(data)) {
						invokeCreateHooks(vnode, insertedVnodeQueue);
					}
					insert(parentElm, vnode.elm, refElm);
				}

				if ("development" !== 'production' && data && data.pre) {
					creatingElmInVPre--;
				}
			} else if (isTrue(vnode.isComment)) {
				vnode.elm = nodeOps.createComment(vnode.text);
				insert(parentElm, vnode.elm, refElm);
			} else {
				vnode.elm = nodeOps.createTextNode(vnode.text);
				insert(parentElm, vnode.elm, refElm);
>>>>>>> origin/master
			}
		}

		function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
<<<<<<< HEAD
			var i = vnode.data
			if (isDef(i)) {
				var isReactivated = isDef(vnode.componentInstance) && i.keepAlive
				if (isDef(i = i.hook) && isDef(i = i.init)) {
					i(vnode, false /* hydrating */, parentElm, refElm)
=======
			var i = vnode.data;
			if (isDef(i)) {
				var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
				if (isDef(i = i.hook) && isDef(i = i.init)) {
					i(vnode, false /* hydrating */, parentElm, refElm);
>>>>>>> origin/master
				}
				// after calling the init hook, if the vnode is a child component
				// it should've created a child instance and mounted it. the child
				// component also has set the placeholder vnode's elm.
				// in that case we can just return the element and be done.
				if (isDef(vnode.componentInstance)) {
<<<<<<< HEAD
					initComponent(vnode, insertedVnodeQueue)
					if (isTrue(isReactivated)) {
						reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm)
=======
					initComponent(vnode, insertedVnodeQueue);
					if (isTrue(isReactivated)) {
						reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
>>>>>>> origin/master
					}
					return true
				}
			}
		}

		function initComponent (vnode, insertedVnodeQueue) {
			if (isDef(vnode.data.pendingInsert)) {
<<<<<<< HEAD
				insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert)
				vnode.data.pendingInsert = null
			}
			vnode.elm = vnode.componentInstance.$el
			if (isPatchable(vnode)) {
				invokeCreateHooks(vnode, insertedVnodeQueue)
				setScope(vnode)
			} else {
				// empty component root.
				// skip all element-related modules except for ref (#3455)
				registerRef(vnode)
				// make sure to invoke the insert hook
				insertedVnodeQueue.push(vnode)
=======
				insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
				vnode.data.pendingInsert = null;
			}
			vnode.elm = vnode.componentInstance.$el;
			if (isPatchable(vnode)) {
				invokeCreateHooks(vnode, insertedVnodeQueue);
				setScope(vnode);
			} else {
				// empty component root.
				// skip all element-related modules except for ref (#3455)
				registerRef(vnode);
				// make sure to invoke the insert hook
				insertedVnodeQueue.push(vnode);
>>>>>>> origin/master
			}
		}

		function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
<<<<<<< HEAD
			var i
=======
			var i;
>>>>>>> origin/master
			// hack for #4339: a reactivated component with inner transition
			// does not trigger because the inner node's created hooks are not called
			// again. It's not ideal to involve module-specific logic in here but
			// there doesn't seem to be a better way to do it.
<<<<<<< HEAD
			var innerNode = vnode
			while (innerNode.componentInstance) {
				innerNode = innerNode.componentInstance._vnode
				if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
					for (i = 0; i < cbs.activate.length; ++i) {
						cbs.activate[i](emptyNode, innerNode)
					}
					insertedVnodeQueue.push(innerNode)
=======
			var innerNode = vnode;
			while (innerNode.componentInstance) {
				innerNode = innerNode.componentInstance._vnode;
				if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
					for (i = 0; i < cbs.activate.length; ++i) {
						cbs.activate[i](emptyNode, innerNode);
					}
					insertedVnodeQueue.push(innerNode);
>>>>>>> origin/master
					break
				}
			}
			// unlike a newly created component,
			// a reactivated keep-alive component doesn't insert itself
<<<<<<< HEAD
			insert(parentElm, vnode.elm, refElm)
=======
			insert(parentElm, vnode.elm, refElm);
>>>>>>> origin/master
		}

		function insert (parent, elm, ref$$1) {
			if (isDef(parent)) {
				if (isDef(ref$$1)) {
					if (ref$$1.parentNode === parent) {
<<<<<<< HEAD
						nodeOps.insertBefore(parent, elm, ref$$1)
					}
				} else {
					nodeOps.appendChild(parent, elm)
=======
						nodeOps.insertBefore(parent, elm, ref$$1);
					}
				} else {
					nodeOps.appendChild(parent, elm);
>>>>>>> origin/master
				}
			}
		}

		function createChildren (vnode, children, insertedVnodeQueue) {
			if (Array.isArray(children)) {
				{
<<<<<<< HEAD
					checkDuplicateKeys(children)
				}
				for (var i = 0; i < children.length; ++i) {
					createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i)
				}
			} else if (isPrimitive(vnode.text)) {
				nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)))
=======
					checkDuplicateKeys(children);
				}
				for (var i = 0; i < children.length; ++i) {
					createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
				}
			} else if (isPrimitive(vnode.text)) {
				nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
>>>>>>> origin/master
			}
		}

		function isPatchable (vnode) {
			while (vnode.componentInstance) {
<<<<<<< HEAD
				vnode = vnode.componentInstance._vnode
=======
				vnode = vnode.componentInstance._vnode;
>>>>>>> origin/master
			}
			return isDef(vnode.tag)
		}

		function invokeCreateHooks (vnode, insertedVnodeQueue) {
			for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
<<<<<<< HEAD
				cbs.create[i$1](emptyNode, vnode)
			}
			i = vnode.data.hook // Reuse variable
			if (isDef(i)) {
				if (isDef(i.create)) { i.create(emptyNode, vnode) }
				if (isDef(i.insert)) { insertedVnodeQueue.push(vnode) }
=======
				cbs.create[i$1](emptyNode, vnode);
			}
			i = vnode.data.hook; // Reuse variable
			if (isDef(i)) {
				if (isDef(i.create)) { i.create(emptyNode, vnode); }
				if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
>>>>>>> origin/master
			}
		}

		// set scope id attribute for scoped CSS.
		// this is implemented as a special case to avoid the overhead
		// of going through the normal attribute patching process.
		function setScope (vnode) {
<<<<<<< HEAD
			var i
			if (isDef(i = vnode.fnScopeId)) {
				nodeOps.setStyleScope(vnode.elm, i)
			} else {
				var ancestor = vnode
				while (ancestor) {
					if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
						nodeOps.setStyleScope(vnode.elm, i)
					}
					ancestor = ancestor.parent
=======
			var i;
			if (isDef(i = vnode.fnScopeId)) {
				nodeOps.setStyleScope(vnode.elm, i);
			} else {
				var ancestor = vnode;
				while (ancestor) {
					if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
						nodeOps.setStyleScope(vnode.elm, i);
					}
					ancestor = ancestor.parent;
>>>>>>> origin/master
				}
			}
			// for slot content they should also get the scopeId from the host instance.
			if (isDef(i = activeInstance) &&
				i !== vnode.context &&
				i !== vnode.fnContext &&
				isDef(i = i.$options._scopeId)
			) {
<<<<<<< HEAD
				nodeOps.setStyleScope(vnode.elm, i)
=======
				nodeOps.setStyleScope(vnode.elm, i);
>>>>>>> origin/master
			}
		}

		function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
			for (; startIdx <= endIdx; ++startIdx) {
<<<<<<< HEAD
				createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx)
=======
				createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
>>>>>>> origin/master
			}
		}

		function invokeDestroyHook (vnode) {
<<<<<<< HEAD
			var i, j
			var data = vnode.data
			if (isDef(data)) {
				if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode) }
				for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode) }
			}
			if (isDef(i = vnode.children)) {
				for (j = 0; j < vnode.children.length; ++j) {
					invokeDestroyHook(vnode.children[j])
=======
			var i, j;
			var data = vnode.data;
			if (isDef(data)) {
				if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
				for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
			}
			if (isDef(i = vnode.children)) {
				for (j = 0; j < vnode.children.length; ++j) {
					invokeDestroyHook(vnode.children[j]);
>>>>>>> origin/master
				}
			}
		}

		function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
			for (; startIdx <= endIdx; ++startIdx) {
<<<<<<< HEAD
				var ch = vnodes[startIdx]
				if (isDef(ch)) {
					if (isDef(ch.tag)) {
						removeAndInvokeRemoveHook(ch)
						invokeDestroyHook(ch)
					} else { // Text node
						removeNode(ch.elm)
=======
				var ch = vnodes[startIdx];
				if (isDef(ch)) {
					if (isDef(ch.tag)) {
						removeAndInvokeRemoveHook(ch);
						invokeDestroyHook(ch);
					} else { // Text node
						removeNode(ch.elm);
>>>>>>> origin/master
					}
				}
			}
		}

		function removeAndInvokeRemoveHook (vnode, rm) {
			if (isDef(rm) || isDef(vnode.data)) {
<<<<<<< HEAD
				var i
				var listeners = cbs.remove.length + 1
				if (isDef(rm)) {
					// we have a recursively passed down rm callback
					// increase the listeners count
					rm.listeners += listeners
				} else {
					// directly removing
					rm = createRmCb(vnode.elm, listeners)
				}
				// recursively invoke hooks on child component root node
				if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
					removeAndInvokeRemoveHook(i, rm)
				}
				for (i = 0; i < cbs.remove.length; ++i) {
					cbs.remove[i](vnode, rm)
				}
				if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
					i(vnode, rm)
				} else {
					rm()
				}
			} else {
				removeNode(vnode.elm)
=======
				var i;
				var listeners = cbs.remove.length + 1;
				if (isDef(rm)) {
					// we have a recursively passed down rm callback
					// increase the listeners count
					rm.listeners += listeners;
				} else {
					// directly removing
					rm = createRmCb(vnode.elm, listeners);
				}
				// recursively invoke hooks on child component root node
				if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
					removeAndInvokeRemoveHook(i, rm);
				}
				for (i = 0; i < cbs.remove.length; ++i) {
					cbs.remove[i](vnode, rm);
				}
				if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
					i(vnode, rm);
				} else {
					rm();
				}
			} else {
				removeNode(vnode.elm);
>>>>>>> origin/master
			}
		}

		function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
<<<<<<< HEAD
			var oldStartIdx = 0
			var newStartIdx = 0
			var oldEndIdx = oldCh.length - 1
			var oldStartVnode = oldCh[0]
			var oldEndVnode = oldCh[oldEndIdx]
			var newEndIdx = newCh.length - 1
			var newStartVnode = newCh[0]
			var newEndVnode = newCh[newEndIdx]
			var oldKeyToIdx, idxInOld, vnodeToMove, refElm
=======
			var oldStartIdx = 0;
			var newStartIdx = 0;
			var oldEndIdx = oldCh.length - 1;
			var oldStartVnode = oldCh[0];
			var oldEndVnode = oldCh[oldEndIdx];
			var newEndIdx = newCh.length - 1;
			var newStartVnode = newCh[0];
			var newEndVnode = newCh[newEndIdx];
			var oldKeyToIdx, idxInOld, vnodeToMove, refElm;
>>>>>>> origin/master

			// removeOnly is a special flag used only by <transition-group>
			// to ensure removed elements stay in correct relative positions
			// during leaving transitions
<<<<<<< HEAD
			var canMove = !removeOnly

			{
				checkDuplicateKeys(newCh)
=======
			var canMove = !removeOnly;

			{
				checkDuplicateKeys(newCh);
>>>>>>> origin/master
			}

			while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
				if (isUndef(oldStartVnode)) {
<<<<<<< HEAD
					oldStartVnode = oldCh[++oldStartIdx] // Vnode has been moved left
				} else if (isUndef(oldEndVnode)) {
					oldEndVnode = oldCh[--oldEndIdx]
				} else if (sameVnode(oldStartVnode, newStartVnode)) {
					patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue)
					oldStartVnode = oldCh[++oldStartIdx]
					newStartVnode = newCh[++newStartIdx]
				} else if (sameVnode(oldEndVnode, newEndVnode)) {
					patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue)
					oldEndVnode = oldCh[--oldEndIdx]
					newEndVnode = newCh[--newEndIdx]
				} else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
					patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue)
					canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm))
					oldStartVnode = oldCh[++oldStartIdx]
					newEndVnode = newCh[--newEndIdx]
				} else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
					patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue)
					canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm)
					oldEndVnode = oldCh[--oldEndIdx]
					newStartVnode = newCh[++newStartIdx]
				} else {
					if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx) }
					idxInOld = isDef(newStartVnode.key)
						? oldKeyToIdx[newStartVnode.key]
						: findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx)
					if (isUndef(idxInOld)) { // New element
						createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
					} else {
						vnodeToMove = oldCh[idxInOld]
						if (sameVnode(vnodeToMove, newStartVnode)) {
							patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue)
							oldCh[idxInOld] = undefined
							canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm)
						} else {
							// same key but different element. treat as new element
							createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx)
						}
					}
					newStartVnode = newCh[++newStartIdx]
				}
			}
			if (oldStartIdx > oldEndIdx) {
				refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm
				addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue)
			} else if (newStartIdx > newEndIdx) {
				removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx)
=======
					oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
				} else if (isUndef(oldEndVnode)) {
					oldEndVnode = oldCh[--oldEndIdx];
				} else if (sameVnode(oldStartVnode, newStartVnode)) {
					patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
					oldStartVnode = oldCh[++oldStartIdx];
					newStartVnode = newCh[++newStartIdx];
				} else if (sameVnode(oldEndVnode, newEndVnode)) {
					patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
					oldEndVnode = oldCh[--oldEndIdx];
					newEndVnode = newCh[--newEndIdx];
				} else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
					patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
					canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
					oldStartVnode = oldCh[++oldStartIdx];
					newEndVnode = newCh[--newEndIdx];
				} else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
					patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
					canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
					oldEndVnode = oldCh[--oldEndIdx];
					newStartVnode = newCh[++newStartIdx];
				} else {
					if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
					idxInOld = isDef(newStartVnode.key)
						? oldKeyToIdx[newStartVnode.key]
						: findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
					if (isUndef(idxInOld)) { // New element
						createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
					} else {
						vnodeToMove = oldCh[idxInOld];
						if (sameVnode(vnodeToMove, newStartVnode)) {
							patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
							oldCh[idxInOld] = undefined;
							canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
						} else {
							// same key but different element. treat as new element
							createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
						}
					}
					newStartVnode = newCh[++newStartIdx];
				}
			}
			if (oldStartIdx > oldEndIdx) {
				refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
				addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
			} else if (newStartIdx > newEndIdx) {
				removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
>>>>>>> origin/master
			}
		}

		function checkDuplicateKeys (children) {
<<<<<<< HEAD
			var seenKeys = {}
			for (var i = 0; i < children.length; i++) {
				var vnode = children[i]
				var key = vnode.key
=======
			var seenKeys = {};
			for (var i = 0; i < children.length; i++) {
				var vnode = children[i];
				var key = vnode.key;
>>>>>>> origin/master
				if (isDef(key)) {
					if (seenKeys[key]) {
						warn(
							("Duplicate keys detected: '" + key + "'. This may cause an update error."),
							vnode.context
<<<<<<< HEAD
						)
					} else {
						seenKeys[key] = true
=======
						);
					} else {
						seenKeys[key] = true;
>>>>>>> origin/master
					}
				}
			}
		}

		function findIdxInOld (node, oldCh, start, end) {
			for (var i = start; i < end; i++) {
<<<<<<< HEAD
				var c = oldCh[i]
=======
				var c = oldCh[i];
>>>>>>> origin/master
				if (isDef(c) && sameVnode(node, c)) { return i }
			}
		}

		function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
			if (oldVnode === vnode) {
				return
			}

<<<<<<< HEAD
			var elm = vnode.elm = oldVnode.elm

			if (isTrue(oldVnode.isAsyncPlaceholder)) {
				if (isDef(vnode.asyncFactory.resolved)) {
					hydrate(oldVnode.elm, vnode, insertedVnodeQueue)
				} else {
					vnode.isAsyncPlaceholder = true
=======
			var elm = vnode.elm = oldVnode.elm;

			if (isTrue(oldVnode.isAsyncPlaceholder)) {
				if (isDef(vnode.asyncFactory.resolved)) {
					hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
				} else {
					vnode.isAsyncPlaceholder = true;
>>>>>>> origin/master
				}
				return
			}

			// reuse element for static trees.
			// note we only do this if the vnode is cloned -
			// if the new node is not cloned it means the render functions have been
			// reset by the hot-reload-api and we need to do a proper re-render.
			if (isTrue(vnode.isStatic) &&
				isTrue(oldVnode.isStatic) &&
				vnode.key === oldVnode.key &&
				(isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
			) {
<<<<<<< HEAD
				vnode.componentInstance = oldVnode.componentInstance
				return
			}

			var i
			var data = vnode.data
			if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
				i(oldVnode, vnode)
			}

			var oldCh = oldVnode.children
			var ch = vnode.children
			if (isDef(data) && isPatchable(vnode)) {
				for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode) }
				if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode) }
			}
			if (isUndef(vnode.text)) {
				if (isDef(oldCh) && isDef(ch)) {
					if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly) }
				} else if (isDef(ch)) {
					if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, '') }
					addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue)
				} else if (isDef(oldCh)) {
					removeVnodes(elm, oldCh, 0, oldCh.length - 1)
				} else if (isDef(oldVnode.text)) {
					nodeOps.setTextContent(elm, '')
				}
			} else if (oldVnode.text !== vnode.text) {
				nodeOps.setTextContent(elm, vnode.text)
			}
			if (isDef(data)) {
				if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode) }
=======
				vnode.componentInstance = oldVnode.componentInstance;
				return
			}

			var i;
			var data = vnode.data;
			if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
				i(oldVnode, vnode);
			}

			var oldCh = oldVnode.children;
			var ch = vnode.children;
			if (isDef(data) && isPatchable(vnode)) {
				for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
				if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
			}
			if (isUndef(vnode.text)) {
				if (isDef(oldCh) && isDef(ch)) {
					if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
				} else if (isDef(ch)) {
					if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
					addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
				} else if (isDef(oldCh)) {
					removeVnodes(elm, oldCh, 0, oldCh.length - 1);
				} else if (isDef(oldVnode.text)) {
					nodeOps.setTextContent(elm, '');
				}
			} else if (oldVnode.text !== vnode.text) {
				nodeOps.setTextContent(elm, vnode.text);
			}
			if (isDef(data)) {
				if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
>>>>>>> origin/master
			}
		}

		function invokeInsertHook (vnode, queue, initial) {
			// delay insert hooks for component root nodes, invoke them after the
			// element is really inserted
			if (isTrue(initial) && isDef(vnode.parent)) {
<<<<<<< HEAD
				vnode.parent.data.pendingInsert = queue
			} else {
				for (var i = 0; i < queue.length; ++i) {
					queue[i].data.hook.insert(queue[i])
=======
				vnode.parent.data.pendingInsert = queue;
			} else {
				for (var i = 0; i < queue.length; ++i) {
					queue[i].data.hook.insert(queue[i]);
>>>>>>> origin/master
				}
			}
		}

<<<<<<< HEAD
		var hydrationBailed = false
=======
		var hydrationBailed = false;
>>>>>>> origin/master
		// list of modules that can skip create hook during hydration because they
		// are already rendered on the client or has no need for initialization
		// Note: style is excluded because it relies on initial clone for future
		// deep updates (#7063).
<<<<<<< HEAD
		var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key')

		// Note: this is a browser-only function so we can assume elms are DOM nodes.
		function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
			var i
			var tag = vnode.tag
			var data = vnode.data
			var children = vnode.children
			inVPre = inVPre || (data && data.pre)
			vnode.elm = elm

			if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
				vnode.isAsyncPlaceholder = true
=======
		var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

		// Note: this is a browser-only function so we can assume elms are DOM nodes.
		function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
			var i;
			var tag = vnode.tag;
			var data = vnode.data;
			var children = vnode.children;
			inVPre = inVPre || (data && data.pre);
			vnode.elm = elm;

			if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
				vnode.isAsyncPlaceholder = true;
>>>>>>> origin/master
				return true
			}
			// assert node match
			{
				if (!assertNodeMatch(elm, vnode, inVPre)) {
					return false
				}
			}
			if (isDef(data)) {
<<<<<<< HEAD
				if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */) }
				if (isDef(i = vnode.componentInstance)) {
					// child component. it should have hydrated its own tree.
					initComponent(vnode, insertedVnodeQueue)
=======
				if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
				if (isDef(i = vnode.componentInstance)) {
					// child component. it should have hydrated its own tree.
					initComponent(vnode, insertedVnodeQueue);
>>>>>>> origin/master
					return true
				}
			}
			if (isDef(tag)) {
				if (isDef(children)) {
					// empty element, allow client to pick up and populate children
					if (!elm.hasChildNodes()) {
<<<<<<< HEAD
						createChildren(vnode, children, insertedVnodeQueue)
=======
						createChildren(vnode, children, insertedVnodeQueue);
>>>>>>> origin/master
					} else {
						// v-html and domProps: innerHTML
						if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
							if (i !== elm.innerHTML) {
								/* istanbul ignore if */
<<<<<<< HEAD
								if ('development' !== 'production' &&
									typeof console !== 'undefined' &&
									!hydrationBailed
								) {
									hydrationBailed = true
									console.warn('Parent: ', elm)
									console.warn('server innerHTML: ', i)
									console.warn('client innerHTML: ', elm.innerHTML)
=======
								if ("development" !== 'production' &&
									typeof console !== 'undefined' &&
									!hydrationBailed
								) {
									hydrationBailed = true;
									console.warn('Parent: ', elm);
									console.warn('server innerHTML: ', i);
									console.warn('client innerHTML: ', elm.innerHTML);
>>>>>>> origin/master
								}
								return false
							}
						} else {
							// iterate and compare children lists
<<<<<<< HEAD
							var childrenMatch = true
							var childNode = elm.firstChild
							for (var i$1 = 0; i$1 < children.length; i$1++) {
								if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
									childrenMatch = false
									break
								}
								childNode = childNode.nextSibling
=======
							var childrenMatch = true;
							var childNode = elm.firstChild;
							for (var i$1 = 0; i$1 < children.length; i$1++) {
								if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
									childrenMatch = false;
									break
								}
								childNode = childNode.nextSibling;
>>>>>>> origin/master
							}
							// if childNode is not null, it means the actual childNodes list is
							// longer than the virtual children list.
							if (!childrenMatch || childNode) {
								/* istanbul ignore if */
<<<<<<< HEAD
								if ('development' !== 'production' &&
									typeof console !== 'undefined' &&
									!hydrationBailed
								) {
									hydrationBailed = true
									console.warn('Parent: ', elm)
									console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children)
=======
								if ("development" !== 'production' &&
									typeof console !== 'undefined' &&
									!hydrationBailed
								) {
									hydrationBailed = true;
									console.warn('Parent: ', elm);
									console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
>>>>>>> origin/master
								}
								return false
							}
						}
					}
				}
				if (isDef(data)) {
<<<<<<< HEAD
					var fullInvoke = false
					for (var key in data) {
						if (!isRenderedModule(key)) {
							fullInvoke = true
							invokeCreateHooks(vnode, insertedVnodeQueue)
=======
					var fullInvoke = false;
					for (var key in data) {
						if (!isRenderedModule(key)) {
							fullInvoke = true;
							invokeCreateHooks(vnode, insertedVnodeQueue);
>>>>>>> origin/master
							break
						}
					}
					if (!fullInvoke && data['class']) {
						// ensure collecting deps for deep class bindings for future updates
<<<<<<< HEAD
						traverse(data['class'])
					}
				}
			} else if (elm.data !== vnode.text) {
				elm.data = vnode.text
=======
						traverse(data['class']);
					}
				}
			} else if (elm.data !== vnode.text) {
				elm.data = vnode.text;
>>>>>>> origin/master
			}
			return true
		}

		function assertNodeMatch (node, vnode, inVPre) {
			if (isDef(vnode.tag)) {
				return vnode.tag.indexOf('vue-component') === 0 || (
					!isUnknownElement$$1(vnode, inVPre) &&
					vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
				)
			} else {
				return node.nodeType === (vnode.isComment ? 8 : 3)
			}
		}

		return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
			if (isUndef(vnode)) {
<<<<<<< HEAD
				if (isDef(oldVnode)) { invokeDestroyHook(oldVnode) }
				return
			}

			var isInitialPatch = false
			var insertedVnodeQueue = []

			if (isUndef(oldVnode)) {
				// empty mount (likely as component), create new root element
				isInitialPatch = true
				createElm(vnode, insertedVnodeQueue, parentElm, refElm)
			} else {
				var isRealElement = isDef(oldVnode.nodeType)
				if (!isRealElement && sameVnode(oldVnode, vnode)) {
					// patch existing root node
					patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly)
=======
				if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
				return
			}

			var isInitialPatch = false;
			var insertedVnodeQueue = [];

			if (isUndef(oldVnode)) {
				// empty mount (likely as component), create new root element
				isInitialPatch = true;
				createElm(vnode, insertedVnodeQueue, parentElm, refElm);
			} else {
				var isRealElement = isDef(oldVnode.nodeType);
				if (!isRealElement && sameVnode(oldVnode, vnode)) {
					// patch existing root node
					patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
>>>>>>> origin/master
				} else {
					if (isRealElement) {
						// mounting to a real element
						// check if this is server-rendered content and if we can perform
						// a successful hydration.
						if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
<<<<<<< HEAD
							oldVnode.removeAttribute(SSR_ATTR)
							hydrating = true
						}
						if (isTrue(hydrating)) {
							if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
								invokeInsertHook(vnode, insertedVnodeQueue, true)
=======
							oldVnode.removeAttribute(SSR_ATTR);
							hydrating = true;
						}
						if (isTrue(hydrating)) {
							if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
								invokeInsertHook(vnode, insertedVnodeQueue, true);
>>>>>>> origin/master
								return oldVnode
							} else {
								warn(
									'The client-side rendered virtual DOM tree is not matching ' +
<<<<<<< HEAD
										'server-rendered content. This is likely caused by incorrect ' +
										'HTML markup, for example nesting block-level elements inside ' +
										'<p>, or missing <tbody>. Bailing hydration and performing ' +
										'full client-side render.'
								)
=======
									'server-rendered content. This is likely caused by incorrect ' +
									'HTML markup, for example nesting block-level elements inside ' +
									'<p>, or missing <tbody>. Bailing hydration and performing ' +
									'full client-side render.'
								);
>>>>>>> origin/master
							}
						}
						// either not server-rendered, or hydration failed.
						// create an empty node and replace it
<<<<<<< HEAD
						oldVnode = emptyNodeAt(oldVnode)
					}

					// replacing existing element
					var oldElm = oldVnode.elm
					var parentElm$1 = nodeOps.parentNode(oldElm)
=======
						oldVnode = emptyNodeAt(oldVnode);
					}

					// replacing existing element
					var oldElm = oldVnode.elm;
					var parentElm$1 = nodeOps.parentNode(oldElm);
>>>>>>> origin/master

					// create new node
					createElm(
						vnode,
						insertedVnodeQueue,
						// extremely rare edge case: do not insert if old element is in a
						// leaving transition. Only happens when combining transition +
						// keep-alive + HOCs. (#4590)
						oldElm._leaveCb ? null : parentElm$1,
						nodeOps.nextSibling(oldElm)
<<<<<<< HEAD
					)

					// update parent placeholder node element, recursively
					if (isDef(vnode.parent)) {
						var ancestor = vnode.parent
						var patchable = isPatchable(vnode)
						while (ancestor) {
							for (var i = 0; i < cbs.destroy.length; ++i) {
								cbs.destroy[i](ancestor)
							}
							ancestor.elm = vnode.elm
							if (patchable) {
								for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
									cbs.create[i$1](emptyNode, ancestor)
=======
					);

					// update parent placeholder node element, recursively
					if (isDef(vnode.parent)) {
						var ancestor = vnode.parent;
						var patchable = isPatchable(vnode);
						while (ancestor) {
							for (var i = 0; i < cbs.destroy.length; ++i) {
								cbs.destroy[i](ancestor);
							}
							ancestor.elm = vnode.elm;
							if (patchable) {
								for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
									cbs.create[i$1](emptyNode, ancestor);
>>>>>>> origin/master
								}
								// #6513
								// invoke insert hooks that may have been merged by create hooks.
								// e.g. for directives that uses the "inserted" hook.
<<<<<<< HEAD
								var insert = ancestor.data.hook.insert
								if (insert.merged) {
									// start at index 1 to avoid re-invoking component mounted hook
									for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
										insert.fns[i$2]()
									}
								}
							} else {
								registerRef(ancestor)
							}
							ancestor = ancestor.parent
=======
								var insert = ancestor.data.hook.insert;
								if (insert.merged) {
									// start at index 1 to avoid re-invoking component mounted hook
									for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
										insert.fns[i$2]();
									}
								}
							} else {
								registerRef(ancestor);
							}
							ancestor = ancestor.parent;
>>>>>>> origin/master
						}
					}

					// destroy old node
					if (isDef(parentElm$1)) {
<<<<<<< HEAD
						removeVnodes(parentElm$1, [oldVnode], 0, 0)
					} else if (isDef(oldVnode.tag)) {
						invokeDestroyHook(oldVnode)
=======
						removeVnodes(parentElm$1, [oldVnode], 0, 0);
					} else if (isDef(oldVnode.tag)) {
						invokeDestroyHook(oldVnode);
>>>>>>> origin/master
					}
				}
			}

<<<<<<< HEAD
			invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch)
=======
			invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
>>>>>>> origin/master
			return vnode.elm
		}
	}

	/*  */

	var directives = {
		create: updateDirectives,
		update: updateDirectives,
		destroy: function unbindDirectives (vnode) {
<<<<<<< HEAD
			updateDirectives(vnode, emptyNode)
=======
			updateDirectives(vnode, emptyNode);
>>>>>>> origin/master
		}
	}

	function updateDirectives (oldVnode, vnode) {
		if (oldVnode.data.directives || vnode.data.directives) {
<<<<<<< HEAD
			_update(oldVnode, vnode)
=======
			_update(oldVnode, vnode);
>>>>>>> origin/master
		}
	}

	function _update (oldVnode, vnode) {
<<<<<<< HEAD
		var isCreate = oldVnode === emptyNode
		var isDestroy = vnode === emptyNode
		var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context)
		var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context)

		var dirsWithInsert = []
		var dirsWithPostpatch = []

		var key, oldDir, dir
		for (key in newDirs) {
			oldDir = oldDirs[key]
			dir = newDirs[key]
			if (!oldDir) {
				// new directive, bind
				callHook$1(dir, 'bind', vnode, oldVnode)
				if (dir.def && dir.def.inserted) {
					dirsWithInsert.push(dir)
				}
			} else {
				// existing directive, update
				dir.oldValue = oldDir.value
				callHook$1(dir, 'update', vnode, oldVnode)
				if (dir.def && dir.def.componentUpdated) {
					dirsWithPostpatch.push(dir)
=======
		var isCreate = oldVnode === emptyNode;
		var isDestroy = vnode === emptyNode;
		var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
		var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

		var dirsWithInsert = [];
		var dirsWithPostpatch = [];

		var key, oldDir, dir;
		for (key in newDirs) {
			oldDir = oldDirs[key];
			dir = newDirs[key];
			if (!oldDir) {
				// new directive, bind
				callHook$1(dir, 'bind', vnode, oldVnode);
				if (dir.def && dir.def.inserted) {
					dirsWithInsert.push(dir);
				}
			} else {
				// existing directive, update
				dir.oldValue = oldDir.value;
				callHook$1(dir, 'update', vnode, oldVnode);
				if (dir.def && dir.def.componentUpdated) {
					dirsWithPostpatch.push(dir);
>>>>>>> origin/master
				}
			}
		}

		if (dirsWithInsert.length) {
			var callInsert = function () {
				for (var i = 0; i < dirsWithInsert.length; i++) {
<<<<<<< HEAD
					callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode)
				}
			}
			if (isCreate) {
				mergeVNodeHook(vnode, 'insert', callInsert)
			} else {
				callInsert()
=======
					callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
				}
			};
			if (isCreate) {
				mergeVNodeHook(vnode, 'insert', callInsert);
			} else {
				callInsert();
>>>>>>> origin/master
			}
		}

		if (dirsWithPostpatch.length) {
			mergeVNodeHook(vnode, 'postpatch', function () {
				for (var i = 0; i < dirsWithPostpatch.length; i++) {
<<<<<<< HEAD
					callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode)
				}
			})
=======
					callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
				}
			});
>>>>>>> origin/master
		}

		if (!isCreate) {
			for (key in oldDirs) {
				if (!newDirs[key]) {
					// no longer present, unbind
<<<<<<< HEAD
					callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy)
=======
					callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
>>>>>>> origin/master
				}
			}
		}
	}

<<<<<<< HEAD
	var emptyModifiers = Object.create(null)
=======
	var emptyModifiers = Object.create(null);
>>>>>>> origin/master

	function normalizeDirectives$1 (
		dirs,
		vm
	) {
<<<<<<< HEAD
		var res = Object.create(null)
=======
		var res = Object.create(null);
>>>>>>> origin/master
		if (!dirs) {
			// $flow-disable-line
			return res
		}
<<<<<<< HEAD
		var i, dir
		for (i = 0; i < dirs.length; i++) {
			dir = dirs[i]
			if (!dir.modifiers) {
				// $flow-disable-line
				dir.modifiers = emptyModifiers
			}
			res[getRawDirName(dir)] = dir
			dir.def = resolveAsset(vm.$options, 'directives', dir.name, true)
=======
		var i, dir;
		for (i = 0; i < dirs.length; i++) {
			dir = dirs[i];
			if (!dir.modifiers) {
				// $flow-disable-line
				dir.modifiers = emptyModifiers;
			}
			res[getRawDirName(dir)] = dir;
			dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
>>>>>>> origin/master
		}
		// $flow-disable-line
		return res
	}

	function getRawDirName (dir) {
<<<<<<< HEAD
		return dir.rawName || ((dir.name) + '.' + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
		var fn = dir.def && dir.def[hook]
		if (fn) {
			try {
				fn(vnode.elm, dir, vnode, oldVnode, isDestroy)
			} catch (e) {
				handleError(e, vnode.context, ('directive ' + (dir.name) + ' ' + hook + ' hook'))
=======
		return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
	}

	function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
		var fn = dir.def && dir.def[hook];
		if (fn) {
			try {
				fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
			} catch (e) {
				handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
>>>>>>> origin/master
			}
		}
	}

	var baseModules = [
		ref,
		directives
	]

	/*  */

	function updateAttrs (oldVnode, vnode) {
<<<<<<< HEAD
		var opts = vnode.componentOptions
=======
		var opts = vnode.componentOptions;
>>>>>>> origin/master
		if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
			return
		}
		if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
			return
		}
<<<<<<< HEAD
		var key, cur, old
		var elm = vnode.elm
		var oldAttrs = oldVnode.data.attrs || {}
		var attrs = vnode.data.attrs || {}
		// clone observed objects, as the user probably wants to mutate it
		if (isDef(attrs.__ob__)) {
			attrs = vnode.data.attrs = extend({}, attrs)
		}

		for (key in attrs) {
			cur = attrs[key]
			old = oldAttrs[key]
			if (old !== cur) {
				setAttr(elm, key, cur)
=======
		var key, cur, old;
		var elm = vnode.elm;
		var oldAttrs = oldVnode.data.attrs || {};
		var attrs = vnode.data.attrs || {};
		// clone observed objects, as the user probably wants to mutate it
		if (isDef(attrs.__ob__)) {
			attrs = vnode.data.attrs = extend({}, attrs);
		}

		for (key in attrs) {
			cur = attrs[key];
			old = oldAttrs[key];
			if (old !== cur) {
				setAttr(elm, key, cur);
>>>>>>> origin/master
			}
		}
		// #4391: in IE9, setting type can reset value for input[type=radio]
		// #6666: IE/Edge forces progress value down to 1 before setting a max
		/* istanbul ignore if */
		if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
<<<<<<< HEAD
			setAttr(elm, 'value', attrs.value)
=======
			setAttr(elm, 'value', attrs.value);
>>>>>>> origin/master
		}
		for (key in oldAttrs) {
			if (isUndef(attrs[key])) {
				if (isXlink(key)) {
<<<<<<< HEAD
					elm.removeAttributeNS(xlinkNS, getXlinkProp(key))
				} else if (!isEnumeratedAttr(key)) {
					elm.removeAttribute(key)
=======
					elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
				} else if (!isEnumeratedAttr(key)) {
					elm.removeAttribute(key);
>>>>>>> origin/master
				}
			}
		}
	}

	function setAttr (el, key, value) {
		if (el.tagName.indexOf('-') > -1) {
<<<<<<< HEAD
			baseSetAttr(el, key, value)
=======
			baseSetAttr(el, key, value);
>>>>>>> origin/master
		} else if (isBooleanAttr(key)) {
			// set attribute for blank value
			// e.g. <option disabled>Select one</option>
			if (isFalsyAttrValue(value)) {
<<<<<<< HEAD
				el.removeAttribute(key)
=======
				el.removeAttribute(key);
>>>>>>> origin/master
			} else {
				// technically allowfullscreen is a boolean attribute for <iframe>,
				// but Flash expects a value of "true" when used on <embed> tag
				value = key === 'allowfullscreen' && el.tagName === 'EMBED'
					? 'true'
<<<<<<< HEAD
					: key
				el.setAttribute(key, value)
			}
		} else if (isEnumeratedAttr(key)) {
			el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true')
		} else if (isXlink(key)) {
			if (isFalsyAttrValue(value)) {
				el.removeAttributeNS(xlinkNS, getXlinkProp(key))
			} else {
				el.setAttributeNS(xlinkNS, key, value)
			}
		} else {
			baseSetAttr(el, key, value)
=======
					: key;
				el.setAttribute(key, value);
			}
		} else if (isEnumeratedAttr(key)) {
			el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
		} else if (isXlink(key)) {
			if (isFalsyAttrValue(value)) {
				el.removeAttributeNS(xlinkNS, getXlinkProp(key));
			} else {
				el.setAttributeNS(xlinkNS, key, value);
			}
		} else {
			baseSetAttr(el, key, value);
>>>>>>> origin/master
		}
	}

	function baseSetAttr (el, key, value) {
		if (isFalsyAttrValue(value)) {
<<<<<<< HEAD
			el.removeAttribute(key)
=======
			el.removeAttribute(key);
>>>>>>> origin/master
		} else {
			// #7138: IE10 & 11 fires input event when setting placeholder on
			// <textarea>... block the first input event and remove the blocker
			// immediately.
			/* istanbul ignore if */
			if (
				isIE && !isIE9 &&
				el.tagName === 'TEXTAREA' &&
				key === 'placeholder' && !el.__ieph
			) {
				var blocker = function (e) {
<<<<<<< HEAD
					e.stopImmediatePropagation()
					el.removeEventListener('input', blocker)
				}
				el.addEventListener('input', blocker)
				// $flow-disable-line
				el.__ieph = true /* IE placeholder patched */
			}
			el.setAttribute(key, value)
=======
					e.stopImmediatePropagation();
					el.removeEventListener('input', blocker);
				};
				el.addEventListener('input', blocker);
				// $flow-disable-line
				el.__ieph = true; /* IE placeholder patched */
			}
			el.setAttribute(key, value);
>>>>>>> origin/master
		}
	}

	var attrs = {
		create: updateAttrs,
		update: updateAttrs
	}

	/*  */

	function updateClass (oldVnode, vnode) {
<<<<<<< HEAD
		var el = vnode.elm
		var data = vnode.data
		var oldData = oldVnode.data
		if (
			isUndef(data.staticClass) &&
			isUndef(data.class) && (
			isUndef(oldData) || (
			isUndef(oldData.staticClass) &&
			isUndef(oldData.class)
			)
=======
		var el = vnode.elm;
		var data = vnode.data;
		var oldData = oldVnode.data;
		if (
			isUndef(data.staticClass) &&
			isUndef(data.class) && (
				isUndef(oldData) || (
					isUndef(oldData.staticClass) &&
					isUndef(oldData.class)
				)
>>>>>>> origin/master
			)
		) {
			return
		}

<<<<<<< HEAD
		var cls = genClassForVnode(vnode)

		// handle transition classes
		var transitionClass = el._transitionClasses
		if (isDef(transitionClass)) {
			cls = concat(cls, stringifyClass(transitionClass))
=======
		var cls = genClassForVnode(vnode);

		// handle transition classes
		var transitionClass = el._transitionClasses;
		if (isDef(transitionClass)) {
			cls = concat(cls, stringifyClass(transitionClass));
>>>>>>> origin/master
		}

		// set the class
		if (cls !== el._prevClass) {
<<<<<<< HEAD
			el.setAttribute('class', cls)
			el._prevClass = cls
=======
			el.setAttribute('class', cls);
			el._prevClass = cls;
>>>>>>> origin/master
		}
	}

	var klass = {
		create: updateClass,
		update: updateClass
	}

	/*  */

<<<<<<< HEAD
	var validDivisionCharRE = /[\w).+\-_$\]]/

	function parseFilters (exp) {
		var inSingle = false
		var inDouble = false
		var inTemplateString = false
		var inRegex = false
		var curly = 0
		var square = 0
		var paren = 0
		var lastFilterIndex = 0
		var c, prev, i, expression, filters

		for (i = 0; i < exp.length; i++) {
			prev = c
			c = exp.charCodeAt(i)
			if (inSingle) {
				if (c === 0x27 && prev !== 0x5C) { inSingle = false }
			} else if (inDouble) {
				if (c === 0x22 && prev !== 0x5C) { inDouble = false }
			} else if (inTemplateString) {
				if (c === 0x60 && prev !== 0x5C) { inTemplateString = false }
			} else if (inRegex) {
				if (c === 0x2f && prev !== 0x5C) { inRegex = false }
=======
	var validDivisionCharRE = /[\w).+\-_$\]]/;

	function parseFilters (exp) {
		var inSingle = false;
		var inDouble = false;
		var inTemplateString = false;
		var inRegex = false;
		var curly = 0;
		var square = 0;
		var paren = 0;
		var lastFilterIndex = 0;
		var c, prev, i, expression, filters;

		for (i = 0; i < exp.length; i++) {
			prev = c;
			c = exp.charCodeAt(i);
			if (inSingle) {
				if (c === 0x27 && prev !== 0x5C) { inSingle = false; }
			} else if (inDouble) {
				if (c === 0x22 && prev !== 0x5C) { inDouble = false; }
			} else if (inTemplateString) {
				if (c === 0x60 && prev !== 0x5C) { inTemplateString = false; }
			} else if (inRegex) {
				if (c === 0x2f && prev !== 0x5C) { inRegex = false; }
>>>>>>> origin/master
			} else if (
				c === 0x7C && // pipe
				exp.charCodeAt(i + 1) !== 0x7C &&
				exp.charCodeAt(i - 1) !== 0x7C &&
				!curly && !square && !paren
			) {
				if (expression === undefined) {
					// first filter, end of expression
<<<<<<< HEAD
					lastFilterIndex = i + 1
					expression = exp.slice(0, i).trim()
				} else {
					pushFilter()
				}
			} else {
				switch (c) {
				case 0x22: inDouble = true; break // "
				case 0x27: inSingle = true; break // '
				case 0x60: inTemplateString = true; break // `
				case 0x28: paren++; break // (
				case 0x29: paren--; break // )
				case 0x5B: square++; break // [
				case 0x5D: square--; break // ]
				case 0x7B: curly++; break // {
				case 0x7D: curly--; break // }
				}
				if (c === 0x2f) { // /
					var j = i - 1
					var p = (void 0)
					// find first non-whitespace prev char
					for (; j >= 0; j--) {
						p = exp.charAt(j)
						if (p !== ' ') { break }
					}
					if (!p || !validDivisionCharRE.test(p)) {
						inRegex = true
=======
					lastFilterIndex = i + 1;
					expression = exp.slice(0, i).trim();
				} else {
					pushFilter();
				}
			} else {
				switch (c) {
					case 0x22: inDouble = true; break         // "
					case 0x27: inSingle = true; break         // '
					case 0x60: inTemplateString = true; break // `
					case 0x28: paren++; break                 // (
					case 0x29: paren--; break                 // )
					case 0x5B: square++; break                // [
					case 0x5D: square--; break                // ]
					case 0x7B: curly++; break                 // {
					case 0x7D: curly--; break                 // }
				}
				if (c === 0x2f) { // /
					var j = i - 1;
					var p = (void 0);
					// find first non-whitespace prev char
					for (; j >= 0; j--) {
						p = exp.charAt(j);
						if (p !== ' ') { break }
					}
					if (!p || !validDivisionCharRE.test(p)) {
						inRegex = true;
>>>>>>> origin/master
					}
				}
			}
		}

		if (expression === undefined) {
<<<<<<< HEAD
			expression = exp.slice(0, i).trim()
		} else if (lastFilterIndex !== 0) {
			pushFilter()
		}

		function pushFilter () {
			(filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim())
			lastFilterIndex = i + 1
=======
			expression = exp.slice(0, i).trim();
		} else if (lastFilterIndex !== 0) {
			pushFilter();
		}

		function pushFilter () {
			(filters || (filters = [])).push(exp.slice(lastFilterIndex, i).trim());
			lastFilterIndex = i + 1;
>>>>>>> origin/master
		}

		if (filters) {
			for (i = 0; i < filters.length; i++) {
<<<<<<< HEAD
				expression = wrapFilter(expression, filters[i])
=======
				expression = wrapFilter(expression, filters[i]);
>>>>>>> origin/master
			}
		}

		return expression
	}

	function wrapFilter (exp, filter) {
<<<<<<< HEAD
		var i = filter.indexOf('(')
		if (i < 0) {
			// _f: resolveFilter
			return ('_f("' + filter + '")(' + exp + ')')
		} else {
			var name = filter.slice(0, i)
			var args = filter.slice(i + 1)
			return ('_f("' + name + '")(' + exp + (args !== ')' ? ',' + args : args))
=======
		var i = filter.indexOf('(');
		if (i < 0) {
			// _f: resolveFilter
			return ("_f(\"" + filter + "\")(" + exp + ")")
		} else {
			var name = filter.slice(0, i);
			var args = filter.slice(i + 1);
			return ("_f(\"" + name + "\")(" + exp + (args !== ')' ? ',' + args : args))
>>>>>>> origin/master
		}
	}

	/*  */

	function baseWarn (msg) {
<<<<<<< HEAD
		console.error(('[Vue compiler]: ' + msg))
=======
		console.error(("[Vue compiler]: " + msg));
>>>>>>> origin/master
	}

	function pluckModuleFunction (
		modules,
		key
	) {
		return modules
<<<<<<< HEAD
			? modules.map(function (m) { return m[key] }).filter(function (_) { return _ })
=======
			? modules.map(function (m) { return m[key]; }).filter(function (_) { return _; })
>>>>>>> origin/master
			: []
	}

	function addProp (el, name, value) {
<<<<<<< HEAD
		(el.props || (el.props = [])).push({ name: name, value: value })
		el.plain = false
	}

	function addAttr (el, name, value) {
		(el.attrs || (el.attrs = [])).push({ name: name, value: value })
		el.plain = false
	}

	// add a raw attr (use this in preTransforms)
	function addRawAttr (el, name, value) {
		el.attrsMap[name] = value
		el.attrsList.push({ name: name, value: value })
=======
		(el.props || (el.props = [])).push({ name: name, value: value });
		el.plain = false;
	}

	function addAttr (el, name, value) {
		(el.attrs || (el.attrs = [])).push({ name: name, value: value });
		el.plain = false;
	}

// add a raw attr (use this in preTransforms)
	function addRawAttr (el, name, value) {
		el.attrsMap[name] = value;
		el.attrsList.push({ name: name, value: value });
>>>>>>> origin/master
	}

	function addDirective (
		el,
		name,
		rawName,
		value,
		arg,
		modifiers
	) {
<<<<<<< HEAD
		(el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers })
		el.plain = false
=======
		(el.directives || (el.directives = [])).push({ name: name, rawName: rawName, value: value, arg: arg, modifiers: modifiers });
		el.plain = false;
>>>>>>> origin/master
	}

	function addHandler (
		el,
		name,
		value,
		modifiers,
		important,
		warn
	) {
<<<<<<< HEAD
		modifiers = modifiers || emptyObject
		// warn prevent and passive modifier
		/* istanbul ignore if */
		if (
			'development' !== 'production' && warn &&
=======
		modifiers = modifiers || emptyObject;
		// warn prevent and passive modifier
		/* istanbul ignore if */
		if (
			"development" !== 'production' && warn &&
>>>>>>> origin/master
			modifiers.prevent && modifiers.passive
		) {
			warn(
				'passive and prevent can\'t be used together. ' +
<<<<<<< HEAD
					'Passive handler can\'t prevent default event.'
			)
=======
				'Passive handler can\'t prevent default event.'
			);
>>>>>>> origin/master
		}

		// check capture modifier
		if (modifiers.capture) {
<<<<<<< HEAD
			delete modifiers.capture
			name = '!' + name // mark the event as captured
		}
		if (modifiers.once) {
			delete modifiers.once
			name = '~' + name // mark the event as once
		}
		/* istanbul ignore if */
		if (modifiers.passive) {
			delete modifiers.passive
			name = '&' + name // mark the event as passive
=======
			delete modifiers.capture;
			name = '!' + name; // mark the event as captured
		}
		if (modifiers.once) {
			delete modifiers.once;
			name = '~' + name; // mark the event as once
		}
		/* istanbul ignore if */
		if (modifiers.passive) {
			delete modifiers.passive;
			name = '&' + name; // mark the event as passive
>>>>>>> origin/master
		}

		// normalize click.right and click.middle since they don't actually fire
		// this is technically browser-specific, but at least for now browsers are
		// the only target envs that have right/middle clicks.
		if (name === 'click') {
			if (modifiers.right) {
<<<<<<< HEAD
				name = 'contextmenu'
				delete modifiers.right
			} else if (modifiers.middle) {
				name = 'mouseup'
			}
		}

		var events
		if (modifiers.native) {
			delete modifiers.native
			events = el.nativeEvents || (el.nativeEvents = {})
		} else {
			events = el.events || (el.events = {})
=======
				name = 'contextmenu';
				delete modifiers.right;
			} else if (modifiers.middle) {
				name = 'mouseup';
			}
		}

		var events;
		if (modifiers.native) {
			delete modifiers.native;
			events = el.nativeEvents || (el.nativeEvents = {});
		} else {
			events = el.events || (el.events = {});
>>>>>>> origin/master
		}

		var newHandler = {
			value: value.trim()
<<<<<<< HEAD
		}
		if (modifiers !== emptyObject) {
			newHandler.modifiers = modifiers
		}

		var handlers = events[name]
		/* istanbul ignore if */
		if (Array.isArray(handlers)) {
			important ? handlers.unshift(newHandler) : handlers.push(newHandler)
		} else if (handlers) {
			events[name] = important ? [newHandler, handlers] : [handlers, newHandler]
		} else {
			events[name] = newHandler
		}

		el.plain = false
=======
		};
		if (modifiers !== emptyObject) {
			newHandler.modifiers = modifiers;
		}

		var handlers = events[name];
		/* istanbul ignore if */
		if (Array.isArray(handlers)) {
			important ? handlers.unshift(newHandler) : handlers.push(newHandler);
		} else if (handlers) {
			events[name] = important ? [newHandler, handlers] : [handlers, newHandler];
		} else {
			events[name] = newHandler;
		}

		el.plain = false;
>>>>>>> origin/master
	}

	function getBindingAttr (
		el,
		name,
		getStatic
	) {
		var dynamicValue =
			getAndRemoveAttr(el, ':' + name) ||
<<<<<<< HEAD
			getAndRemoveAttr(el, 'v-bind:' + name)
		if (dynamicValue != null) {
			return parseFilters(dynamicValue)
		} else if (getStatic !== false) {
			var staticValue = getAndRemoveAttr(el, name)
=======
			getAndRemoveAttr(el, 'v-bind:' + name);
		if (dynamicValue != null) {
			return parseFilters(dynamicValue)
		} else if (getStatic !== false) {
			var staticValue = getAndRemoveAttr(el, name);
>>>>>>> origin/master
			if (staticValue != null) {
				return JSON.stringify(staticValue)
			}
		}
	}

<<<<<<< HEAD
	// note: this only removes the attr from the Array (attrsList) so that it
	// doesn't get processed by processAttrs.
	// By default it does NOT remove it from the map (attrsMap) because the map is
	// needed during codegen.
=======
// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.
>>>>>>> origin/master
	function getAndRemoveAttr (
		el,
		name,
		removeFromMap
	) {
<<<<<<< HEAD
		var val
		if ((val = el.attrsMap[name]) != null) {
			var list = el.attrsList
			for (var i = 0, l = list.length; i < l; i++) {
				if (list[i].name === name) {
					list.splice(i, 1)
=======
		var val;
		if ((val = el.attrsMap[name]) != null) {
			var list = el.attrsList;
			for (var i = 0, l = list.length; i < l; i++) {
				if (list[i].name === name) {
					list.splice(i, 1);
>>>>>>> origin/master
					break
				}
			}
		}
		if (removeFromMap) {
<<<<<<< HEAD
			delete el.attrsMap[name]
=======
			delete el.attrsMap[name];
>>>>>>> origin/master
		}
		return val
	}

	/*  */

	/**
	 * Cross-platform code generation for component v-model
	 */
	function genComponentModel (
		el,
		value,
		modifiers
	) {
<<<<<<< HEAD
		var ref = modifiers || {}
		var number = ref.number
		var trim = ref.trim

		var baseValueExpression = '$$v'
		var valueExpression = baseValueExpression
		if (trim) {
			valueExpression =
				'(typeof ' + baseValueExpression + " === 'string'" +
				'? ' + baseValueExpression + '.trim()' +
				': ' + baseValueExpression + ')'
		}
		if (number) {
			valueExpression = '_n(' + valueExpression + ')'
		}
		var assignment = genAssignmentCode(value, valueExpression)

		el.model = {
			value: ('(' + value + ')'),
			expression: ('"' + value + '"'),
			callback: ('function (' + baseValueExpression + ') {' + assignment + '}')
		}
=======
		var ref = modifiers || {};
		var number = ref.number;
		var trim = ref.trim;

		var baseValueExpression = '$$v';
		var valueExpression = baseValueExpression;
		if (trim) {
			valueExpression =
				"(typeof " + baseValueExpression + " === 'string'" +
				"? " + baseValueExpression + ".trim()" +
				": " + baseValueExpression + ")";
		}
		if (number) {
			valueExpression = "_n(" + valueExpression + ")";
		}
		var assignment = genAssignmentCode(value, valueExpression);

		el.model = {
			value: ("(" + value + ")"),
			expression: ("\"" + value + "\""),
			callback: ("function (" + baseValueExpression + ") {" + assignment + "}")
		};
>>>>>>> origin/master
	}

	/**
	 * Cross-platform codegen helper for generating v-model value assignment code.
	 */
	function genAssignmentCode (
		value,
		assignment
	) {
<<<<<<< HEAD
		var res = parseModel(value)
		if (res.key === null) {
			return (value + '=' + assignment)
		} else {
			return ('$set(' + (res.exp) + ', ' + (res.key) + ', ' + assignment + ')')
=======
		var res = parseModel(value);
		if (res.key === null) {
			return (value + "=" + assignment)
		} else {
			return ("$set(" + (res.exp) + ", " + (res.key) + ", " + assignment + ")")
>>>>>>> origin/master
		}
	}

	/**
	 * Parse a v-model expression into a base path and a final key segment.
	 * Handles both dot-path and possible square brackets.
	 *
	 * Possible cases:
	 *
	 * - test
	 * - test[key]
	 * - test[test1[key]]
	 * - test["a"][key]
	 * - xxx.test[a[a].test1[key]]
	 * - test.xxx.a["asa"][test1[key]]
	 *
	 */

<<<<<<< HEAD
	var len
	var str
	var chr
	var index$1
	var expressionPos
	var expressionEndPos
=======
	var len;
	var str;
	var chr;
	var index$1;
	var expressionPos;
	var expressionEndPos;


>>>>>>> origin/master

	function parseModel (val) {
		// Fix https://github.com/vuejs/vue/pull/7730
		// allow v-model="obj.val " (trailing whitespace)
<<<<<<< HEAD
		val = val.trim()
		len = val.length

		if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
			index$1 = val.lastIndexOf('.')
=======
		val = val.trim();
		len = val.length;

		if (val.indexOf('[') < 0 || val.lastIndexOf(']') < len - 1) {
			index$1 = val.lastIndexOf('.');
>>>>>>> origin/master
			if (index$1 > -1) {
				return {
					exp: val.slice(0, index$1),
					key: '"' + val.slice(index$1 + 1) + '"'
				}
			} else {
				return {
					exp: val,
					key: null
				}
			}
		}

<<<<<<< HEAD
		str = val
		index$1 = expressionPos = expressionEndPos = 0

		while (!eof()) {
			chr = next()
			/* istanbul ignore if */
			if (isStringStart(chr)) {
				parseString(chr)
			} else if (chr === 0x5B) {
				parseBracket(chr)
=======
		str = val;
		index$1 = expressionPos = expressionEndPos = 0;

		while (!eof()) {
			chr = next();
			/* istanbul ignore if */
			if (isStringStart(chr)) {
				parseString(chr);
			} else if (chr === 0x5B) {
				parseBracket(chr);
>>>>>>> origin/master
			}
		}

		return {
			exp: val.slice(0, expressionPos),
			key: val.slice(expressionPos + 1, expressionEndPos)
		}
	}

	function next () {
		return str.charCodeAt(++index$1)
	}

	function eof () {
		return index$1 >= len
	}

	function isStringStart (chr) {
		return chr === 0x22 || chr === 0x27
	}

	function parseBracket (chr) {
<<<<<<< HEAD
		var inBracket = 1
		expressionPos = index$1
		while (!eof()) {
			chr = next()
			if (isStringStart(chr)) {
				parseString(chr)
				continue
			}
			if (chr === 0x5B) { inBracket++ }
			if (chr === 0x5D) { inBracket-- }
			if (inBracket === 0) {
				expressionEndPos = index$1
=======
		var inBracket = 1;
		expressionPos = index$1;
		while (!eof()) {
			chr = next();
			if (isStringStart(chr)) {
				parseString(chr);
				continue
			}
			if (chr === 0x5B) { inBracket++; }
			if (chr === 0x5D) { inBracket--; }
			if (inBracket === 0) {
				expressionEndPos = index$1;
>>>>>>> origin/master
				break
			}
		}
	}

	function parseString (chr) {
<<<<<<< HEAD
		var stringQuote = chr
		while (!eof()) {
			chr = next()
=======
		var stringQuote = chr;
		while (!eof()) {
			chr = next();
>>>>>>> origin/master
			if (chr === stringQuote) {
				break
			}
		}
	}

	/*  */

<<<<<<< HEAD
	var warn$1

	// in some cases, the event used has to be determined at runtime
	// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r'
	var CHECKBOX_RADIO_TOKEN = '__c'
=======
	var warn$1;

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
	var RANGE_TOKEN = '__r';
	var CHECKBOX_RADIO_TOKEN = '__c';
>>>>>>> origin/master

	function model (
		el,
		dir,
		_warn
	) {
<<<<<<< HEAD
		warn$1 = _warn
		var value = dir.value
		var modifiers = dir.modifiers
		var tag = el.tag
		var type = el.attrsMap.type
=======
		warn$1 = _warn;
		var value = dir.value;
		var modifiers = dir.modifiers;
		var tag = el.tag;
		var type = el.attrsMap.type;
>>>>>>> origin/master

		{
			// inputs with type="file" are read only and setting the input's
			// value will throw an error.
			if (tag === 'input' && type === 'file') {
				warn$1(
<<<<<<< HEAD
					'<' + (el.tag) + ' v-model="' + value + '" type="file">:\n' +
						'File inputs are read only. Use a v-on:change listener instead.'
				)
=======
					"<" + (el.tag) + " v-model=\"" + value + "\" type=\"file\">:\n" +
					"File inputs are read only. Use a v-on:change listener instead."
				);
>>>>>>> origin/master
			}
		}

		if (el.component) {
<<<<<<< HEAD
			genComponentModel(el, value, modifiers)
			// component v-model doesn't need extra runtime
			return false
		} else if (tag === 'select') {
			genSelect(el, value, modifiers)
		} else if (tag === 'input' && type === 'checkbox') {
			genCheckboxModel(el, value, modifiers)
		} else if (tag === 'input' && type === 'radio') {
			genRadioModel(el, value, modifiers)
		} else if (tag === 'input' || tag === 'textarea') {
			genDefaultModel(el, value, modifiers)
		} else if (!config.isReservedTag(tag)) {
			genComponentModel(el, value, modifiers)
=======
			genComponentModel(el, value, modifiers);
			// component v-model doesn't need extra runtime
			return false
		} else if (tag === 'select') {
			genSelect(el, value, modifiers);
		} else if (tag === 'input' && type === 'checkbox') {
			genCheckboxModel(el, value, modifiers);
		} else if (tag === 'input' && type === 'radio') {
			genRadioModel(el, value, modifiers);
		} else if (tag === 'input' || tag === 'textarea') {
			genDefaultModel(el, value, modifiers);
		} else if (!config.isReservedTag(tag)) {
			genComponentModel(el, value, modifiers);
>>>>>>> origin/master
			// component v-model doesn't need extra runtime
			return false
		} else {
			warn$1(
<<<<<<< HEAD
				'<' + (el.tag) + ' v-model="' + value + '">: ' +
					'v-model is not supported on this element type. ' +
					'If you are working with contenteditable, it\'s recommended to ' +
					'wrap a library dedicated for that purpose inside a custom component.'
			)
=======
				"<" + (el.tag) + " v-model=\"" + value + "\">: " +
				"v-model is not supported on this element type. " +
				'If you are working with contenteditable, it\'s recommended to ' +
				'wrap a library dedicated for that purpose inside a custom component.'
			);
>>>>>>> origin/master
		}

		// ensure runtime directive metadata
		return true
	}

	function genCheckboxModel (
		el,
		value,
		modifiers
	) {
<<<<<<< HEAD
		var number = modifiers && modifiers.number
		var valueBinding = getBindingAttr(el, 'value') || 'null'
		var trueValueBinding = getBindingAttr(el, 'true-value') || 'true'
		var falseValueBinding = getBindingAttr(el, 'false-value') || 'false'
		addProp(el, 'checked',
			'Array.isArray(' + value + ')' +
				'?_i(' + value + ',' + valueBinding + ')>-1' + (
					trueValueBinding === 'true'
						? (':(' + value + ')')
						: (':_q(' + value + ',' + trueValueBinding + ')')
				)
		)
		addHandler(el, 'change',
			'var $$a=' + value + ',' +
				'$$el=$event.target,' +
				'$$c=$$el.checked?(' + trueValueBinding + '):(' + falseValueBinding + ');' +
				'if(Array.isArray($$a)){' +
				'var $$v=' + (number ? '_n(' + valueBinding + ')' : valueBinding) + ',' +
				'$$i=_i($$a,$$v);' +
				'if($$el.checked){$$i<0&&(' + (genAssignmentCode(value, '$$a.concat([$$v])')) + ')}' +
				'else{$$i>-1&&(' + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ')}' +
				'}else{' + (genAssignmentCode(value, '$$c')) + '}',
			null, true
		)
=======
		var number = modifiers && modifiers.number;
		var valueBinding = getBindingAttr(el, 'value') || 'null';
		var trueValueBinding = getBindingAttr(el, 'true-value') || 'true';
		var falseValueBinding = getBindingAttr(el, 'false-value') || 'false';
		addProp(el, 'checked',
			"Array.isArray(" + value + ")" +
			"?_i(" + value + "," + valueBinding + ")>-1" + (
				trueValueBinding === 'true'
					? (":(" + value + ")")
					: (":_q(" + value + "," + trueValueBinding + ")")
			)
		);
		addHandler(el, 'change',
			"var $$a=" + value + "," +
			'$$el=$event.target,' +
			"$$c=$$el.checked?(" + trueValueBinding + "):(" + falseValueBinding + ");" +
			'if(Array.isArray($$a)){' +
			"var $$v=" + (number ? '_n(' + valueBinding + ')' : valueBinding) + "," +
			'$$i=_i($$a,$$v);' +
			"if($$el.checked){$$i<0&&(" + (genAssignmentCode(value, '$$a.concat([$$v])')) + ")}" +
			"else{$$i>-1&&(" + (genAssignmentCode(value, '$$a.slice(0,$$i).concat($$a.slice($$i+1))')) + ")}" +
			"}else{" + (genAssignmentCode(value, '$$c')) + "}",
			null, true
		);
>>>>>>> origin/master
	}

	function genRadioModel (
		el,
		value,
		modifiers
	) {
<<<<<<< HEAD
		var number = modifiers && modifiers.number
		var valueBinding = getBindingAttr(el, 'value') || 'null'
		valueBinding = number ? ('_n(' + valueBinding + ')') : valueBinding
		addProp(el, 'checked', ('_q(' + value + ',' + valueBinding + ')'))
		addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true)
=======
		var number = modifiers && modifiers.number;
		var valueBinding = getBindingAttr(el, 'value') || 'null';
		valueBinding = number ? ("_n(" + valueBinding + ")") : valueBinding;
		addProp(el, 'checked', ("_q(" + value + "," + valueBinding + ")"));
		addHandler(el, 'change', genAssignmentCode(value, valueBinding), null, true);
>>>>>>> origin/master
	}

	function genSelect (
		el,
		value,
		modifiers
	) {
<<<<<<< HEAD
		var number = modifiers && modifiers.number
		var selectedVal = 'Array.prototype.filter' +
			'.call($event.target.options,function(o){return o.selected})' +
			'.map(function(o){var val = "_value" in o ? o._value : o.value;' +
			'return ' + (number ? '_n(val)' : 'val') + '})'

		var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]'
		var code = 'var $$selectedVal = ' + selectedVal + ';'
		code = code + ' ' + (genAssignmentCode(value, assignment))
		addHandler(el, 'change', code, null, true)
=======
		var number = modifiers && modifiers.number;
		var selectedVal = "Array.prototype.filter" +
			".call($event.target.options,function(o){return o.selected})" +
			".map(function(o){var val = \"_value\" in o ? o._value : o.value;" +
			"return " + (number ? '_n(val)' : 'val') + "})";

		var assignment = '$event.target.multiple ? $$selectedVal : $$selectedVal[0]';
		var code = "var $$selectedVal = " + selectedVal + ";";
		code = code + " " + (genAssignmentCode(value, assignment));
		addHandler(el, 'change', code, null, true);
>>>>>>> origin/master
	}

	function genDefaultModel (
		el,
		value,
		modifiers
	) {
<<<<<<< HEAD
		var type = el.attrsMap.type
=======
		var type = el.attrsMap.type;
>>>>>>> origin/master

		// warn if v-bind:value conflicts with v-model
		// except for inputs with v-bind:type
		{
<<<<<<< HEAD
			var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value']
			var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type']
			if (value$1 && !typeBinding) {
				var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value'
				warn$1(
					binding + '="' + value$1 + '" conflicts with v-model on the same element ' +
						'because the latter already expands to a value binding internally'
				)
			}
		}

		var ref = modifiers || {}
		var lazy = ref.lazy
		var number = ref.number
		var trim = ref.trim
		var needCompositionGuard = !lazy && type !== 'range'
=======
			var value$1 = el.attrsMap['v-bind:value'] || el.attrsMap[':value'];
			var typeBinding = el.attrsMap['v-bind:type'] || el.attrsMap[':type'];
			if (value$1 && !typeBinding) {
				var binding = el.attrsMap['v-bind:value'] ? 'v-bind:value' : ':value';
				warn$1(
					binding + "=\"" + value$1 + "\" conflicts with v-model on the same element " +
					'because the latter already expands to a value binding internally'
				);
			}
		}

		var ref = modifiers || {};
		var lazy = ref.lazy;
		var number = ref.number;
		var trim = ref.trim;
		var needCompositionGuard = !lazy && type !== 'range';
>>>>>>> origin/master
		var event = lazy
			? 'change'
			: type === 'range'
				? RANGE_TOKEN
<<<<<<< HEAD
				: 'input'

		var valueExpression = '$event.target.value'
		if (trim) {
			valueExpression = '$event.target.value.trim()'
		}
		if (number) {
			valueExpression = '_n(' + valueExpression + ')'
		}

		var code = genAssignmentCode(value, valueExpression)
		if (needCompositionGuard) {
			code = 'if($event.target.composing)return;' + code
		}

		addProp(el, 'value', ('(' + value + ')'))
		addHandler(el, event, code, null, true)
		if (trim || number) {
			addHandler(el, 'blur', '$forceUpdate()')
=======
				: 'input';

		var valueExpression = '$event.target.value';
		if (trim) {
			valueExpression = "$event.target.value.trim()";
		}
		if (number) {
			valueExpression = "_n(" + valueExpression + ")";
		}

		var code = genAssignmentCode(value, valueExpression);
		if (needCompositionGuard) {
			code = "if($event.target.composing)return;" + code;
		}

		addProp(el, 'value', ("(" + value + ")"));
		addHandler(el, event, code, null, true);
		if (trim || number) {
			addHandler(el, 'blur', '$forceUpdate()');
>>>>>>> origin/master
		}
	}

	/*  */

<<<<<<< HEAD
	// normalize v-model event tokens that can only be determined at runtime.
	// it's important to place the event as the first in the array because
	// the whole point is ensuring the v-model callback gets called before
	// user-attached handlers.
=======
// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
>>>>>>> origin/master
	function normalizeEvents (on) {
		/* istanbul ignore if */
		if (isDef(on[RANGE_TOKEN])) {
			// IE input[type=range] only supports `change` event
<<<<<<< HEAD
			var event = isIE ? 'change' : 'input'
			on[event] = [].concat(on[RANGE_TOKEN], on[event] || [])
			delete on[RANGE_TOKEN]
=======
			var event = isIE ? 'change' : 'input';
			on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
			delete on[RANGE_TOKEN];
>>>>>>> origin/master
		}
		// This was originally intended to fix #4521 but no longer necessary
		// after 2.5. Keeping it for backwards compat with generated code from < 2.4
		/* istanbul ignore if */
		if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
<<<<<<< HEAD
			on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || [])
			delete on[CHECKBOX_RADIO_TOKEN]
		}
	}

	var target$1

	function createOnceHandler (handler, event, capture) {
		var _target = target$1 // save current target element in closure
		return function onceHandler () {
			var res = handler.apply(null, arguments)
			if (res !== null) {
				remove$2(event, onceHandler, capture, _target)
=======
			on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
			delete on[CHECKBOX_RADIO_TOKEN];
		}
	}

	var target$1;

	function createOnceHandler (handler, event, capture) {
		var _target = target$1; // save current target element in closure
		return function onceHandler () {
			var res = handler.apply(null, arguments);
			if (res !== null) {
				remove$2(event, onceHandler, capture, _target);
>>>>>>> origin/master
			}
		}
	}

	function add$1 (
		event,
		handler,
		once$$1,
		capture,
		passive
	) {
<<<<<<< HEAD
		handler = withMacroTask(handler)
		if (once$$1) { handler = createOnceHandler(handler, event, capture) }
=======
		handler = withMacroTask(handler);
		if (once$$1) { handler = createOnceHandler(handler, event, capture); }
>>>>>>> origin/master
		target$1.addEventListener(
			event,
			handler,
			supportsPassive
				? { capture: capture, passive: passive }
				: capture
<<<<<<< HEAD
		)
=======
		);
>>>>>>> origin/master
	}

	function remove$2 (
		event,
		handler,
		capture,
		_target
	) {
		(_target || target$1).removeEventListener(
			event,
			handler._withTask || handler,
			capture
<<<<<<< HEAD
		)
=======
		);
>>>>>>> origin/master
	}

	function updateDOMListeners (oldVnode, vnode) {
		if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
			return
		}
<<<<<<< HEAD
		var on = vnode.data.on || {}
		var oldOn = oldVnode.data.on || {}
		target$1 = vnode.elm
		normalizeEvents(on)
		updateListeners(on, oldOn, add$1, remove$2, vnode.context)
		target$1 = undefined
=======
		var on = vnode.data.on || {};
		var oldOn = oldVnode.data.on || {};
		target$1 = vnode.elm;
		normalizeEvents(on);
		updateListeners(on, oldOn, add$1, remove$2, vnode.context);
		target$1 = undefined;
>>>>>>> origin/master
	}

	var events = {
		create: updateDOMListeners,
		update: updateDOMListeners
	}

	/*  */

	function updateDOMProps (oldVnode, vnode) {
		if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
			return
		}
<<<<<<< HEAD
		var key, cur
		var elm = vnode.elm
		var oldProps = oldVnode.data.domProps || {}
		var props = vnode.data.domProps || {}
		// clone observed objects, as the user probably wants to mutate it
		if (isDef(props.__ob__)) {
			props = vnode.data.domProps = extend({}, props)
=======
		var key, cur;
		var elm = vnode.elm;
		var oldProps = oldVnode.data.domProps || {};
		var props = vnode.data.domProps || {};
		// clone observed objects, as the user probably wants to mutate it
		if (isDef(props.__ob__)) {
			props = vnode.data.domProps = extend({}, props);
>>>>>>> origin/master
		}

		for (key in oldProps) {
			if (isUndef(props[key])) {
<<<<<<< HEAD
				elm[key] = ''
			}
		}
		for (key in props) {
			cur = props[key]
=======
				elm[key] = '';
			}
		}
		for (key in props) {
			cur = props[key];
>>>>>>> origin/master
			// ignore children if the node has textContent or innerHTML,
			// as these will throw away existing DOM nodes and cause removal errors
			// on subsequent patches (#3360)
			if (key === 'textContent' || key === 'innerHTML') {
<<<<<<< HEAD
				if (vnode.children) { vnode.children.length = 0 }
=======
				if (vnode.children) { vnode.children.length = 0; }
>>>>>>> origin/master
				if (cur === oldProps[key]) { continue }
				// #6601 work around Chrome version <= 55 bug where single textNode
				// replaced by innerHTML/textContent retains its parentNode property
				if (elm.childNodes.length === 1) {
<<<<<<< HEAD
					elm.removeChild(elm.childNodes[0])
=======
					elm.removeChild(elm.childNodes[0]);
>>>>>>> origin/master
				}
			}

			if (key === 'value') {
				// store value as _value as well since
				// non-string values will be stringified
<<<<<<< HEAD
				elm._value = cur
				// avoid resetting cursor position when value is the same
				var strCur = isUndef(cur) ? '' : String(cur)
				if (shouldUpdateValue(elm, strCur)) {
					elm.value = strCur
				}
			} else {
				elm[key] = cur
=======
				elm._value = cur;
				// avoid resetting cursor position when value is the same
				var strCur = isUndef(cur) ? '' : String(cur);
				if (shouldUpdateValue(elm, strCur)) {
					elm.value = strCur;
				}
			} else {
				elm[key] = cur;
>>>>>>> origin/master
			}
		}
	}

<<<<<<< HEAD
	// check platforms/web/util/attrs.js acceptValue
=======
// check platforms/web/util/attrs.js acceptValue

>>>>>>> origin/master

	function shouldUpdateValue (elm, checkVal) {
		return (!elm.composing && (
			elm.tagName === 'OPTION' ||
			isNotInFocusAndDirty(elm, checkVal) ||
			isDirtyWithModifiers(elm, checkVal)
		))
	}

	function isNotInFocusAndDirty (elm, checkVal) {
		// return true when textbox (.number and .trim) loses focus and its value is
		// not equal to the updated value
<<<<<<< HEAD
		var notInFocus = true
		// #6157
		// work around IE bug when accessing document.activeElement in an iframe
		try { notInFocus = document.activeElement !== elm } catch (e) {}
=======
		var notInFocus = true;
		// #6157
		// work around IE bug when accessing document.activeElement in an iframe
		try { notInFocus = document.activeElement !== elm; } catch (e) {}
>>>>>>> origin/master
		return notInFocus && elm.value !== checkVal
	}

	function isDirtyWithModifiers (elm, newVal) {
<<<<<<< HEAD
		var value = elm.value
		var modifiers = elm._vModifiers // injected by v-model runtime
=======
		var value = elm.value;
		var modifiers = elm._vModifiers; // injected by v-model runtime
>>>>>>> origin/master
		if (isDef(modifiers)) {
			if (modifiers.lazy) {
				// inputs with lazy should only be updated when not in focus
				return false
			}
			if (modifiers.number) {
				return toNumber(value) !== toNumber(newVal)
			}
			if (modifiers.trim) {
				return value.trim() !== newVal.trim()
			}
		}
		return value !== newVal
	}

	var domProps = {
		create: updateDOMProps,
		update: updateDOMProps
	}

	/*  */

	var parseStyleText = cached(function (cssText) {
<<<<<<< HEAD
		var res = {}
		var listDelimiter = /;(?![^(]*\))/g
		var propertyDelimiter = /:(.+)/
		cssText.split(listDelimiter).forEach(function (item) {
			if (item) {
				var tmp = item.split(propertyDelimiter)
				tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim())
			}
		})
		return res
	})

	// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
		var style = normalizeStyleBinding(data.style)
=======
		var res = {};
		var listDelimiter = /;(?![^(]*\))/g;
		var propertyDelimiter = /:(.+)/;
		cssText.split(listDelimiter).forEach(function (item) {
			if (item) {
				var tmp = item.split(propertyDelimiter);
				tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
			}
		});
		return res
	});

// merge static and dynamic style data on the same vnode
	function normalizeStyleData (data) {
		var style = normalizeStyleBinding(data.style);
>>>>>>> origin/master
		// static style is pre-processed into an object during compilation
		// and is always a fresh object, so it's safe to merge into it
		return data.staticStyle
			? extend(data.staticStyle, style)
			: style
	}

<<<<<<< HEAD
	// normalize possible array / string values into Object
=======
// normalize possible array / string values into Object
>>>>>>> origin/master
	function normalizeStyleBinding (bindingStyle) {
		if (Array.isArray(bindingStyle)) {
			return toObject(bindingStyle)
		}
		if (typeof bindingStyle === 'string') {
			return parseStyleText(bindingStyle)
		}
		return bindingStyle
	}

	/**
	 * parent component style should be after child's
	 * so that parent component's style could override it
	 */
	function getStyle (vnode, checkChild) {
<<<<<<< HEAD
		var res = {}
		var styleData

		if (checkChild) {
			var childNode = vnode
			while (childNode.componentInstance) {
				childNode = childNode.componentInstance._vnode
=======
		var res = {};
		var styleData;

		if (checkChild) {
			var childNode = vnode;
			while (childNode.componentInstance) {
				childNode = childNode.componentInstance._vnode;
>>>>>>> origin/master
				if (
					childNode && childNode.data &&
					(styleData = normalizeStyleData(childNode.data))
				) {
<<<<<<< HEAD
					extend(res, styleData)
=======
					extend(res, styleData);
>>>>>>> origin/master
				}
			}
		}

		if ((styleData = normalizeStyleData(vnode.data))) {
<<<<<<< HEAD
			extend(res, styleData)
		}

		var parentNode = vnode
		while ((parentNode = parentNode.parent)) {
			if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
				extend(res, styleData)
=======
			extend(res, styleData);
		}

		var parentNode = vnode;
		while ((parentNode = parentNode.parent)) {
			if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
				extend(res, styleData);
>>>>>>> origin/master
			}
		}
		return res
	}

	/*  */

<<<<<<< HEAD
	var cssVarRE = /^--/
	var importantRE = /\s*!important$/
	var setProp = function (el, name, val) {
		/* istanbul ignore if */
		if (cssVarRE.test(name)) {
			el.style.setProperty(name, val)
		} else if (importantRE.test(val)) {
			el.style.setProperty(name, val.replace(importantRE, ''), 'important')
		} else {
			var normalizedName = normalize(name)
=======
	var cssVarRE = /^--/;
	var importantRE = /\s*!important$/;
	var setProp = function (el, name, val) {
		/* istanbul ignore if */
		if (cssVarRE.test(name)) {
			el.style.setProperty(name, val);
		} else if (importantRE.test(val)) {
			el.style.setProperty(name, val.replace(importantRE, ''), 'important');
		} else {
			var normalizedName = normalize(name);
>>>>>>> origin/master
			if (Array.isArray(val)) {
				// Support values array created by autoprefixer, e.g.
				// {display: ["-webkit-box", "-ms-flexbox", "flex"]}
				// Set them one by one, and the browser will only set those it can recognize
				for (var i = 0, len = val.length; i < len; i++) {
<<<<<<< HEAD
					el.style[normalizedName] = val[i]
				}
			} else {
				el.style[normalizedName] = val
			}
		}
	}

	var vendorNames = ['Webkit', 'Moz', 'ms']

	var emptyStyle
	var normalize = cached(function (prop) {
		emptyStyle = emptyStyle || document.createElement('div').style
		prop = camelize(prop)
		if (prop !== 'filter' && (prop in emptyStyle)) {
			return prop
		}
		var capName = prop.charAt(0).toUpperCase() + prop.slice(1)
		for (var i = 0; i < vendorNames.length; i++) {
			var name = vendorNames[i] + capName
=======
					el.style[normalizedName] = val[i];
				}
			} else {
				el.style[normalizedName] = val;
			}
		}
	};

	var vendorNames = ['Webkit', 'Moz', 'ms'];

	var emptyStyle;
	var normalize = cached(function (prop) {
		emptyStyle = emptyStyle || document.createElement('div').style;
		prop = camelize(prop);
		if (prop !== 'filter' && (prop in emptyStyle)) {
			return prop
		}
		var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
		for (var i = 0; i < vendorNames.length; i++) {
			var name = vendorNames[i] + capName;
>>>>>>> origin/master
			if (name in emptyStyle) {
				return name
			}
		}
<<<<<<< HEAD
	})

	function updateStyle (oldVnode, vnode) {
		var data = vnode.data
		var oldData = oldVnode.data
=======
	});

	function updateStyle (oldVnode, vnode) {
		var data = vnode.data;
		var oldData = oldVnode.data;
>>>>>>> origin/master

		if (isUndef(data.staticStyle) && isUndef(data.style) &&
			isUndef(oldData.staticStyle) && isUndef(oldData.style)
		) {
			return
		}

<<<<<<< HEAD
		var cur, name
		var el = vnode.elm
		var oldStaticStyle = oldData.staticStyle
		var oldStyleBinding = oldData.normalizedStyle || oldData.style || {}

		// if static style exists, stylebinding already merged into it when doing normalizeStyleData
		var oldStyle = oldStaticStyle || oldStyleBinding

		var style = normalizeStyleBinding(vnode.data.style) || {}
=======
		var cur, name;
		var el = vnode.elm;
		var oldStaticStyle = oldData.staticStyle;
		var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

		// if static style exists, stylebinding already merged into it when doing normalizeStyleData
		var oldStyle = oldStaticStyle || oldStyleBinding;

		var style = normalizeStyleBinding(vnode.data.style) || {};
>>>>>>> origin/master

		// store normalized style under a different key for next diff
		// make sure to clone it if it's reactive, since the user likely wants
		// to mutate it.
		vnode.data.normalizedStyle = isDef(style.__ob__)
			? extend({}, style)
<<<<<<< HEAD
			: style

		var newStyle = getStyle(vnode, true)

		for (name in oldStyle) {
			if (isUndef(newStyle[name])) {
				setProp(el, name, '')
			}
		}
		for (name in newStyle) {
			cur = newStyle[name]
			if (cur !== oldStyle[name]) {
				// ie9 setting to null has no effect, must use empty string
				setProp(el, name, cur == null ? '' : cur)
=======
			: style;

		var newStyle = getStyle(vnode, true);

		for (name in oldStyle) {
			if (isUndef(newStyle[name])) {
				setProp(el, name, '');
			}
		}
		for (name in newStyle) {
			cur = newStyle[name];
			if (cur !== oldStyle[name]) {
				// ie9 setting to null has no effect, must use empty string
				setProp(el, name, cur == null ? '' : cur);
>>>>>>> origin/master
			}
		}
	}

	var style = {
		create: updateStyle,
		update: updateStyle
	}

	/*  */

	/**
	 * Add class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function addClass (el, cls) {
		/* istanbul ignore if */
		if (!cls || !(cls = cls.trim())) {
			return
		}

		/* istanbul ignore else */
		if (el.classList) {
			if (cls.indexOf(' ') > -1) {
<<<<<<< HEAD
				cls.split(/\s+/).forEach(function (c) { return el.classList.add(c) })
			} else {
				el.classList.add(cls)
			}
		} else {
			var cur = ' ' + (el.getAttribute('class') || '') + ' '
			if (cur.indexOf(' ' + cls + ' ') < 0) {
				el.setAttribute('class', (cur + cls).trim())
=======
				cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
			} else {
				el.classList.add(cls);
			}
		} else {
			var cur = " " + (el.getAttribute('class') || '') + " ";
			if (cur.indexOf(' ' + cls + ' ') < 0) {
				el.setAttribute('class', (cur + cls).trim());
>>>>>>> origin/master
			}
		}
	}

	/**
	 * Remove class with compatibility for SVG since classList is not supported on
	 * SVG elements in IE
	 */
	function removeClass (el, cls) {
		/* istanbul ignore if */
		if (!cls || !(cls = cls.trim())) {
			return
		}

		/* istanbul ignore else */
		if (el.classList) {
			if (cls.indexOf(' ') > -1) {
<<<<<<< HEAD
				cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c) })
			} else {
				el.classList.remove(cls)
			}
			if (!el.classList.length) {
				el.removeAttribute('class')
			}
		} else {
			var cur = ' ' + (el.getAttribute('class') || '') + ' '
			var tar = ' ' + cls + ' '
			while (cur.indexOf(tar) >= 0) {
				cur = cur.replace(tar, ' ')
			}
			cur = cur.trim()
			if (cur) {
				el.setAttribute('class', cur)
			} else {
				el.removeAttribute('class')
=======
				cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
			} else {
				el.classList.remove(cls);
			}
			if (!el.classList.length) {
				el.removeAttribute('class');
			}
		} else {
			var cur = " " + (el.getAttribute('class') || '') + " ";
			var tar = ' ' + cls + ' ';
			while (cur.indexOf(tar) >= 0) {
				cur = cur.replace(tar, ' ');
			}
			cur = cur.trim();
			if (cur) {
				el.setAttribute('class', cur);
			} else {
				el.removeAttribute('class');
>>>>>>> origin/master
			}
		}
	}

	/*  */

	function resolveTransition (def) {
		if (!def) {
			return
		}
		/* istanbul ignore else */
		if (typeof def === 'object') {
<<<<<<< HEAD
			var res = {}
			if (def.css !== false) {
				extend(res, autoCssTransition(def.name || 'v'))
			}
			extend(res, def)
=======
			var res = {};
			if (def.css !== false) {
				extend(res, autoCssTransition(def.name || 'v'));
			}
			extend(res, def);
>>>>>>> origin/master
			return res
		} else if (typeof def === 'string') {
			return autoCssTransition(def)
		}
	}

	var autoCssTransition = cached(function (name) {
		return {
<<<<<<< HEAD
			enterClass: (name + '-enter'),
			enterToClass: (name + '-enter-to'),
			enterActiveClass: (name + '-enter-active'),
			leaveClass: (name + '-leave'),
			leaveToClass: (name + '-leave-to'),
			leaveActiveClass: (name + '-leave-active')
		}
	})

	var hasTransition = inBrowser && !isIE9
	var TRANSITION = 'transition'
	var ANIMATION = 'animation'

	// Transition property/event sniffing
	var transitionProp = 'transition'
	var transitionEndEvent = 'transitionend'
	var animationProp = 'animation'
	var animationEndEvent = 'animationend'
=======
			enterClass: (name + "-enter"),
			enterToClass: (name + "-enter-to"),
			enterActiveClass: (name + "-enter-active"),
			leaveClass: (name + "-leave"),
			leaveToClass: (name + "-leave-to"),
			leaveActiveClass: (name + "-leave-active")
		}
	});

	var hasTransition = inBrowser && !isIE9;
	var TRANSITION = 'transition';
	var ANIMATION = 'animation';

// Transition property/event sniffing
	var transitionProp = 'transition';
	var transitionEndEvent = 'transitionend';
	var animationProp = 'animation';
	var animationEndEvent = 'animationend';
>>>>>>> origin/master
	if (hasTransition) {
		/* istanbul ignore if */
		if (window.ontransitionend === undefined &&
			window.onwebkittransitionend !== undefined
		) {
<<<<<<< HEAD
			transitionProp = 'WebkitTransition'
			transitionEndEvent = 'webkitTransitionEnd'
=======
			transitionProp = 'WebkitTransition';
			transitionEndEvent = 'webkitTransitionEnd';
>>>>>>> origin/master
		}
		if (window.onanimationend === undefined &&
			window.onwebkitanimationend !== undefined
		) {
<<<<<<< HEAD
			animationProp = 'WebkitAnimation'
			animationEndEvent = 'webkitAnimationEnd'
		}
	}

	// binding to window is necessary to make hot reload work in IE in strict mode
=======
			animationProp = 'WebkitAnimation';
			animationEndEvent = 'webkitAnimationEnd';
		}
	}

// binding to window is necessary to make hot reload work in IE in strict mode
>>>>>>> origin/master
	var raf = inBrowser
		? window.requestAnimationFrame
			? window.requestAnimationFrame.bind(window)
			: setTimeout
<<<<<<< HEAD
		: /* istanbul ignore next */ function (fn) { return fn() }

	function nextFrame (fn) {
		raf(function () {
			raf(fn)
		})
	}

	function addTransitionClass (el, cls) {
		var transitionClasses = el._transitionClasses || (el._transitionClasses = [])
		if (transitionClasses.indexOf(cls) < 0) {
			transitionClasses.push(cls)
			addClass(el, cls)
=======
		: /* istanbul ignore next */ function (fn) { return fn(); };

	function nextFrame (fn) {
		raf(function () {
			raf(fn);
		});
	}

	function addTransitionClass (el, cls) {
		var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
		if (transitionClasses.indexOf(cls) < 0) {
			transitionClasses.push(cls);
			addClass(el, cls);
>>>>>>> origin/master
		}
	}

	function removeTransitionClass (el, cls) {
		if (el._transitionClasses) {
<<<<<<< HEAD
			remove(el._transitionClasses, cls)
		}
		removeClass(el, cls)
=======
			remove(el._transitionClasses, cls);
		}
		removeClass(el, cls);
>>>>>>> origin/master
	}

	function whenTransitionEnds (
		el,
		expectedType,
		cb
	) {
<<<<<<< HEAD
		var ref = getTransitionInfo(el, expectedType)
		var type = ref.type
		var timeout = ref.timeout
		var propCount = ref.propCount
		if (!type) { return cb() }
		var event = type === TRANSITION ? transitionEndEvent : animationEndEvent
		var ended = 0
		var end = function () {
			el.removeEventListener(event, onEnd)
			cb()
		}
		var onEnd = function (e) {
			if (e.target === el) {
				if (++ended >= propCount) {
					end()
				}
			}
		}
		setTimeout(function () {
			if (ended < propCount) {
				end()
			}
		}, timeout + 1)
		el.addEventListener(event, onEnd)
	}

	var transformRE = /\b(transform|all)(,|$)/

	function getTransitionInfo (el, expectedType) {
		var styles = window.getComputedStyle(el)
		var transitionDelays = styles[transitionProp + 'Delay'].split(', ')
		var transitionDurations = styles[transitionProp + 'Duration'].split(', ')
		var transitionTimeout = getTimeout(transitionDelays, transitionDurations)
		var animationDelays = styles[animationProp + 'Delay'].split(', ')
		var animationDurations = styles[animationProp + 'Duration'].split(', ')
		var animationTimeout = getTimeout(animationDelays, animationDurations)

		var type
		var timeout = 0
		var propCount = 0
		/* istanbul ignore if */
		if (expectedType === TRANSITION) {
			if (transitionTimeout > 0) {
				type = TRANSITION
				timeout = transitionTimeout
				propCount = transitionDurations.length
			}
		} else if (expectedType === ANIMATION) {
			if (animationTimeout > 0) {
				type = ANIMATION
				timeout = animationTimeout
				propCount = animationDurations.length
			}
		} else {
			timeout = Math.max(transitionTimeout, animationTimeout)
=======
		var ref = getTransitionInfo(el, expectedType);
		var type = ref.type;
		var timeout = ref.timeout;
		var propCount = ref.propCount;
		if (!type) { return cb() }
		var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
		var ended = 0;
		var end = function () {
			el.removeEventListener(event, onEnd);
			cb();
		};
		var onEnd = function (e) {
			if (e.target === el) {
				if (++ended >= propCount) {
					end();
				}
			}
		};
		setTimeout(function () {
			if (ended < propCount) {
				end();
			}
		}, timeout + 1);
		el.addEventListener(event, onEnd);
	}

	var transformRE = /\b(transform|all)(,|$)/;

	function getTransitionInfo (el, expectedType) {
		var styles = window.getComputedStyle(el);
		var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
		var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
		var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
		var animationDelays = styles[animationProp + 'Delay'].split(', ');
		var animationDurations = styles[animationProp + 'Duration'].split(', ');
		var animationTimeout = getTimeout(animationDelays, animationDurations);

		var type;
		var timeout = 0;
		var propCount = 0;
		/* istanbul ignore if */
		if (expectedType === TRANSITION) {
			if (transitionTimeout > 0) {
				type = TRANSITION;
				timeout = transitionTimeout;
				propCount = transitionDurations.length;
			}
		} else if (expectedType === ANIMATION) {
			if (animationTimeout > 0) {
				type = ANIMATION;
				timeout = animationTimeout;
				propCount = animationDurations.length;
			}
		} else {
			timeout = Math.max(transitionTimeout, animationTimeout);
>>>>>>> origin/master
			type = timeout > 0
				? transitionTimeout > animationTimeout
					? TRANSITION
					: ANIMATION
<<<<<<< HEAD
				: null
=======
				: null;
>>>>>>> origin/master
			propCount = type
				? type === TRANSITION
					? transitionDurations.length
					: animationDurations.length
<<<<<<< HEAD
				: 0
		}
		var hasTransform =
			type === TRANSITION &&
			transformRE.test(styles[transitionProp + 'Property'])
=======
				: 0;
		}
		var hasTransform =
			type === TRANSITION &&
			transformRE.test(styles[transitionProp + 'Property']);
>>>>>>> origin/master
		return {
			type: type,
			timeout: timeout,
			propCount: propCount,
			hasTransform: hasTransform
		}
	}

	function getTimeout (delays, durations) {
		/* istanbul ignore next */
		while (delays.length < durations.length) {
<<<<<<< HEAD
			delays = delays.concat(delays)
=======
			delays = delays.concat(delays);
>>>>>>> origin/master
		}

		return Math.max.apply(null, durations.map(function (d, i) {
			return toMs(d) + toMs(delays[i])
		}))
	}

	function toMs (s) {
		return Number(s.slice(0, -1)) * 1000
	}

	/*  */

	function enter (vnode, toggleDisplay) {
<<<<<<< HEAD
		var el = vnode.elm

		// call leave callback now
		if (isDef(el._leaveCb)) {
			el._leaveCb.cancelled = true
			el._leaveCb()
		}

		var data = resolveTransition(vnode.data.transition)
=======
		var el = vnode.elm;

		// call leave callback now
		if (isDef(el._leaveCb)) {
			el._leaveCb.cancelled = true;
			el._leaveCb();
		}

		var data = resolveTransition(vnode.data.transition);
>>>>>>> origin/master
		if (isUndef(data)) {
			return
		}

		/* istanbul ignore if */
		if (isDef(el._enterCb) || el.nodeType !== 1) {
			return
		}

<<<<<<< HEAD
		var css = data.css
		var type = data.type
		var enterClass = data.enterClass
		var enterToClass = data.enterToClass
		var enterActiveClass = data.enterActiveClass
		var appearClass = data.appearClass
		var appearToClass = data.appearToClass
		var appearActiveClass = data.appearActiveClass
		var beforeEnter = data.beforeEnter
		var enter = data.enter
		var afterEnter = data.afterEnter
		var enterCancelled = data.enterCancelled
		var beforeAppear = data.beforeAppear
		var appear = data.appear
		var afterAppear = data.afterAppear
		var appearCancelled = data.appearCancelled
		var duration = data.duration
=======
		var css = data.css;
		var type = data.type;
		var enterClass = data.enterClass;
		var enterToClass = data.enterToClass;
		var enterActiveClass = data.enterActiveClass;
		var appearClass = data.appearClass;
		var appearToClass = data.appearToClass;
		var appearActiveClass = data.appearActiveClass;
		var beforeEnter = data.beforeEnter;
		var enter = data.enter;
		var afterEnter = data.afterEnter;
		var enterCancelled = data.enterCancelled;
		var beforeAppear = data.beforeAppear;
		var appear = data.appear;
		var afterAppear = data.afterAppear;
		var appearCancelled = data.appearCancelled;
		var duration = data.duration;
>>>>>>> origin/master

		// activeInstance will always be the <transition> component managing this
		// transition. One edge case to check is when the <transition> is placed
		// as the root node of a child component. In that case we need to check
		// <transition>'s parent for appear check.
<<<<<<< HEAD
		var context = activeInstance
		var transitionNode = activeInstance.$vnode
		while (transitionNode && transitionNode.parent) {
			transitionNode = transitionNode.parent
			context = transitionNode.context
		}

		var isAppear = !context._isMounted || !vnode.isRootInsert
=======
		var context = activeInstance;
		var transitionNode = activeInstance.$vnode;
		while (transitionNode && transitionNode.parent) {
			transitionNode = transitionNode.parent;
			context = transitionNode.context;
		}

		var isAppear = !context._isMounted || !vnode.isRootInsert;
>>>>>>> origin/master

		if (isAppear && !appear && appear !== '') {
			return
		}

		var startClass = isAppear && appearClass
			? appearClass
<<<<<<< HEAD
			: enterClass
		var activeClass = isAppear && appearActiveClass
			? appearActiveClass
			: enterActiveClass
		var toClass = isAppear && appearToClass
			? appearToClass
			: enterToClass

		var beforeEnterHook = isAppear
			? (beforeAppear || beforeEnter)
			: beforeEnter
		var enterHook = isAppear
			? (typeof appear === 'function' ? appear : enter)
			: enter
		var afterEnterHook = isAppear
			? (afterAppear || afterEnter)
			: afterEnter
		var enterCancelledHook = isAppear
			? (appearCancelled || enterCancelled)
			: enterCancelled
=======
			: enterClass;
		var activeClass = isAppear && appearActiveClass
			? appearActiveClass
			: enterActiveClass;
		var toClass = isAppear && appearToClass
			? appearToClass
			: enterToClass;

		var beforeEnterHook = isAppear
			? (beforeAppear || beforeEnter)
			: beforeEnter;
		var enterHook = isAppear
			? (typeof appear === 'function' ? appear : enter)
			: enter;
		var afterEnterHook = isAppear
			? (afterAppear || afterEnter)
			: afterEnter;
		var enterCancelledHook = isAppear
			? (appearCancelled || enterCancelled)
			: enterCancelled;
>>>>>>> origin/master

		var explicitEnterDuration = toNumber(
			isObject(duration)
				? duration.enter
				: duration
<<<<<<< HEAD
		)

		if ('development' !== 'production' && explicitEnterDuration != null) {
			checkDuration(explicitEnterDuration, 'enter', vnode)
		}

		var expectsCSS = css !== false && !isIE9
		var userWantsControl = getHookArgumentsLength(enterHook)

		var cb = el._enterCb = once(function () {
			if (expectsCSS) {
				removeTransitionClass(el, toClass)
				removeTransitionClass(el, activeClass)
			}
			if (cb.cancelled) {
				if (expectsCSS) {
					removeTransitionClass(el, startClass)
				}
				enterCancelledHook && enterCancelledHook(el)
			} else {
				afterEnterHook && afterEnterHook(el)
			}
			el._enterCb = null
		})
=======
		);

		if ("development" !== 'production' && explicitEnterDuration != null) {
			checkDuration(explicitEnterDuration, 'enter', vnode);
		}

		var expectsCSS = css !== false && !isIE9;
		var userWantsControl = getHookArgumentsLength(enterHook);

		var cb = el._enterCb = once(function () {
			if (expectsCSS) {
				removeTransitionClass(el, toClass);
				removeTransitionClass(el, activeClass);
			}
			if (cb.cancelled) {
				if (expectsCSS) {
					removeTransitionClass(el, startClass);
				}
				enterCancelledHook && enterCancelledHook(el);
			} else {
				afterEnterHook && afterEnterHook(el);
			}
			el._enterCb = null;
		});
>>>>>>> origin/master

		if (!vnode.data.show) {
			// remove pending leave element on enter by injecting an insert hook
			mergeVNodeHook(vnode, 'insert', function () {
<<<<<<< HEAD
				var parent = el.parentNode
				var pendingNode = parent && parent._pending && parent._pending[vnode.key]
=======
				var parent = el.parentNode;
				var pendingNode = parent && parent._pending && parent._pending[vnode.key];
>>>>>>> origin/master
				if (pendingNode &&
					pendingNode.tag === vnode.tag &&
					pendingNode.elm._leaveCb
				) {
<<<<<<< HEAD
					pendingNode.elm._leaveCb()
				}
				enterHook && enterHook(el, cb)
			})
		}

		// start enter transition
		beforeEnterHook && beforeEnterHook(el)
		if (expectsCSS) {
			addTransitionClass(el, startClass)
			addTransitionClass(el, activeClass)
			nextFrame(function () {
				removeTransitionClass(el, startClass)
				if (!cb.cancelled) {
					addTransitionClass(el, toClass)
					if (!userWantsControl) {
						if (isValidDuration(explicitEnterDuration)) {
							setTimeout(cb, explicitEnterDuration)
						} else {
							whenTransitionEnds(el, type, cb)
						}
					}
				}
			})
		}

		if (vnode.data.show) {
			toggleDisplay && toggleDisplay()
			enterHook && enterHook(el, cb)
		}

		if (!expectsCSS && !userWantsControl) {
			cb()
=======
					pendingNode.elm._leaveCb();
				}
				enterHook && enterHook(el, cb);
			});
		}

		// start enter transition
		beforeEnterHook && beforeEnterHook(el);
		if (expectsCSS) {
			addTransitionClass(el, startClass);
			addTransitionClass(el, activeClass);
			nextFrame(function () {
				removeTransitionClass(el, startClass);
				if (!cb.cancelled) {
					addTransitionClass(el, toClass);
					if (!userWantsControl) {
						if (isValidDuration(explicitEnterDuration)) {
							setTimeout(cb, explicitEnterDuration);
						} else {
							whenTransitionEnds(el, type, cb);
						}
					}
				}
			});
		}

		if (vnode.data.show) {
			toggleDisplay && toggleDisplay();
			enterHook && enterHook(el, cb);
		}

		if (!expectsCSS && !userWantsControl) {
			cb();
>>>>>>> origin/master
		}
	}

	function leave (vnode, rm) {
<<<<<<< HEAD
		var el = vnode.elm

		// call enter callback now
		if (isDef(el._enterCb)) {
			el._enterCb.cancelled = true
			el._enterCb()
		}

		var data = resolveTransition(vnode.data.transition)
=======
		var el = vnode.elm;

		// call enter callback now
		if (isDef(el._enterCb)) {
			el._enterCb.cancelled = true;
			el._enterCb();
		}

		var data = resolveTransition(vnode.data.transition);
>>>>>>> origin/master
		if (isUndef(data) || el.nodeType !== 1) {
			return rm()
		}

		/* istanbul ignore if */
		if (isDef(el._leaveCb)) {
			return
		}

<<<<<<< HEAD
		var css = data.css
		var type = data.type
		var leaveClass = data.leaveClass
		var leaveToClass = data.leaveToClass
		var leaveActiveClass = data.leaveActiveClass
		var beforeLeave = data.beforeLeave
		var leave = data.leave
		var afterLeave = data.afterLeave
		var leaveCancelled = data.leaveCancelled
		var delayLeave = data.delayLeave
		var duration = data.duration

		var expectsCSS = css !== false && !isIE9
		var userWantsControl = getHookArgumentsLength(leave)
=======
		var css = data.css;
		var type = data.type;
		var leaveClass = data.leaveClass;
		var leaveToClass = data.leaveToClass;
		var leaveActiveClass = data.leaveActiveClass;
		var beforeLeave = data.beforeLeave;
		var leave = data.leave;
		var afterLeave = data.afterLeave;
		var leaveCancelled = data.leaveCancelled;
		var delayLeave = data.delayLeave;
		var duration = data.duration;

		var expectsCSS = css !== false && !isIE9;
		var userWantsControl = getHookArgumentsLength(leave);
>>>>>>> origin/master

		var explicitLeaveDuration = toNumber(
			isObject(duration)
				? duration.leave
				: duration
<<<<<<< HEAD
		)

		if ('development' !== 'production' && isDef(explicitLeaveDuration)) {
			checkDuration(explicitLeaveDuration, 'leave', vnode)
=======
		);

		if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
			checkDuration(explicitLeaveDuration, 'leave', vnode);
>>>>>>> origin/master
		}

		var cb = el._leaveCb = once(function () {
			if (el.parentNode && el.parentNode._pending) {
<<<<<<< HEAD
				el.parentNode._pending[vnode.key] = null
			}
			if (expectsCSS) {
				removeTransitionClass(el, leaveToClass)
				removeTransitionClass(el, leaveActiveClass)
			}
			if (cb.cancelled) {
				if (expectsCSS) {
					removeTransitionClass(el, leaveClass)
				}
				leaveCancelled && leaveCancelled(el)
			} else {
				rm()
				afterLeave && afterLeave(el)
			}
			el._leaveCb = null
		})

		if (delayLeave) {
			delayLeave(performLeave)
		} else {
			performLeave()
=======
				el.parentNode._pending[vnode.key] = null;
			}
			if (expectsCSS) {
				removeTransitionClass(el, leaveToClass);
				removeTransitionClass(el, leaveActiveClass);
			}
			if (cb.cancelled) {
				if (expectsCSS) {
					removeTransitionClass(el, leaveClass);
				}
				leaveCancelled && leaveCancelled(el);
			} else {
				rm();
				afterLeave && afterLeave(el);
			}
			el._leaveCb = null;
		});

		if (delayLeave) {
			delayLeave(performLeave);
		} else {
			performLeave();
>>>>>>> origin/master
		}

		function performLeave () {
			// the delayed leave may have already been cancelled
			if (cb.cancelled) {
				return
			}
			// record leaving element
			if (!vnode.data.show) {
<<<<<<< HEAD
				(el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode
			}
			beforeLeave && beforeLeave(el)
			if (expectsCSS) {
				addTransitionClass(el, leaveClass)
				addTransitionClass(el, leaveActiveClass)
				nextFrame(function () {
					removeTransitionClass(el, leaveClass)
					if (!cb.cancelled) {
						addTransitionClass(el, leaveToClass)
						if (!userWantsControl) {
							if (isValidDuration(explicitLeaveDuration)) {
								setTimeout(cb, explicitLeaveDuration)
							} else {
								whenTransitionEnds(el, type, cb)
							}
						}
					}
				})
			}
			leave && leave(el, cb)
			if (!expectsCSS && !userWantsControl) {
				cb()
=======
				(el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
			}
			beforeLeave && beforeLeave(el);
			if (expectsCSS) {
				addTransitionClass(el, leaveClass);
				addTransitionClass(el, leaveActiveClass);
				nextFrame(function () {
					removeTransitionClass(el, leaveClass);
					if (!cb.cancelled) {
						addTransitionClass(el, leaveToClass);
						if (!userWantsControl) {
							if (isValidDuration(explicitLeaveDuration)) {
								setTimeout(cb, explicitLeaveDuration);
							} else {
								whenTransitionEnds(el, type, cb);
							}
						}
					}
				});
			}
			leave && leave(el, cb);
			if (!expectsCSS && !userWantsControl) {
				cb();
>>>>>>> origin/master
			}
		}
	}

<<<<<<< HEAD
	// only used in dev mode
	function checkDuration (val, name, vnode) {
		if (typeof val !== 'number') {
			warn(
				'<transition> explicit ' + name + ' duration is not a valid number - ' +
					'got ' + (JSON.stringify(val)) + '.',
				vnode.context
			)
		} else if (isNaN(val)) {
			warn(
				'<transition> explicit ' + name + ' duration is NaN - ' +
					'the duration expression might be incorrect.',
				vnode.context
			)
=======
// only used in dev mode
	function checkDuration (val, name, vnode) {
		if (typeof val !== 'number') {
			warn(
				"<transition> explicit " + name + " duration is not a valid number - " +
				"got " + (JSON.stringify(val)) + ".",
				vnode.context
			);
		} else if (isNaN(val)) {
			warn(
				"<transition> explicit " + name + " duration is NaN - " +
				'the duration expression might be incorrect.',
				vnode.context
			);
>>>>>>> origin/master
		}
	}

	function isValidDuration (val) {
		return typeof val === 'number' && !isNaN(val)
	}

	/**
	 * Normalize a transition hook's argument length. The hook may be:
	 * - a merged hook (invoker) with the original in .fns
	 * - a wrapped component method (check ._length)
	 * - a plain function (.length)
	 */
	function getHookArgumentsLength (fn) {
		if (isUndef(fn)) {
			return false
		}
<<<<<<< HEAD
		var invokerFns = fn.fns
=======
		var invokerFns = fn.fns;
>>>>>>> origin/master
		if (isDef(invokerFns)) {
			// invoker
			return getHookArgumentsLength(
				Array.isArray(invokerFns)
					? invokerFns[0]
					: invokerFns
			)
		} else {
			return (fn._length || fn.length) > 1
		}
	}

	function _enter (_, vnode) {
		if (vnode.data.show !== true) {
<<<<<<< HEAD
			enter(vnode)
=======
			enter(vnode);
>>>>>>> origin/master
		}
	}

	var transition = inBrowser ? {
		create: _enter,
		activate: _enter,
		remove: function remove$$1 (vnode, rm) {
			/* istanbul ignore else */
			if (vnode.data.show !== true) {
<<<<<<< HEAD
				leave(vnode, rm)
			} else {
				rm()
=======
				leave(vnode, rm);
			} else {
				rm();
>>>>>>> origin/master
			}
		}
	} : {}

	var platformModules = [
		attrs,
		klass,
		events,
		domProps,
		style,
		transition
	]

	/*  */

<<<<<<< HEAD
	// the directive module should be applied last, after all
	// built-in modules have been applied.
	var modules = platformModules.concat(baseModules)

	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules })
=======
// the directive module should be applied last, after all
// built-in modules have been applied.
	var modules = platformModules.concat(baseModules);

	var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });
>>>>>>> origin/master

	/**
	 * Not type checking this file because flow doesn't like attaching
	 * properties to Elements.
	 */

	/* istanbul ignore if */
	if (isIE9) {
		// http://www.matts411.com/post/internet-explorer-9-oninput/
		document.addEventListener('selectionchange', function () {
<<<<<<< HEAD
			var el = document.activeElement
			if (el && el.vmodel) {
				trigger(el, 'input')
			}
		})
=======
			var el = document.activeElement;
			if (el && el.vmodel) {
				trigger(el, 'input');
			}
		});
>>>>>>> origin/master
	}

	var directive = {
		inserted: function inserted (el, binding, vnode, oldVnode) {
			if (vnode.tag === 'select') {
				// #6903
				if (oldVnode.elm && !oldVnode.elm._vOptions) {
					mergeVNodeHook(vnode, 'postpatch', function () {
<<<<<<< HEAD
						directive.componentUpdated(el, binding, vnode)
					})
				} else {
					setSelected(el, binding, vnode.context)
				}
				el._vOptions = [].map.call(el.options, getValue)
			} else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
				el._vModifiers = binding.modifiers
				if (!binding.modifiers.lazy) {
					el.addEventListener('compositionstart', onCompositionStart)
					el.addEventListener('compositionend', onCompositionEnd)
=======
						directive.componentUpdated(el, binding, vnode);
					});
				} else {
					setSelected(el, binding, vnode.context);
				}
				el._vOptions = [].map.call(el.options, getValue);
			} else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
				el._vModifiers = binding.modifiers;
				if (!binding.modifiers.lazy) {
					el.addEventListener('compositionstart', onCompositionStart);
					el.addEventListener('compositionend', onCompositionEnd);
>>>>>>> origin/master
					// Safari < 10.2 & UIWebView doesn't fire compositionend when
					// switching focus before confirming composition choice
					// this also fixes the issue where some browsers e.g. iOS Chrome
					// fires "change" instead of "input" on autocomplete.
<<<<<<< HEAD
					el.addEventListener('change', onCompositionEnd)
					/* istanbul ignore if */
					if (isIE9) {
						el.vmodel = true
=======
					el.addEventListener('change', onCompositionEnd);
					/* istanbul ignore if */
					if (isIE9) {
						el.vmodel = true;
>>>>>>> origin/master
					}
				}
			}
		},

		componentUpdated: function componentUpdated (el, binding, vnode) {
			if (vnode.tag === 'select') {
<<<<<<< HEAD
				setSelected(el, binding, vnode.context)
=======
				setSelected(el, binding, vnode.context);
>>>>>>> origin/master
				// in case the options rendered by v-for have changed,
				// it's possible that the value is out-of-sync with the rendered options.
				// detect such cases and filter out values that no longer has a matching
				// option in the DOM.
<<<<<<< HEAD
				var prevOptions = el._vOptions
				var curOptions = el._vOptions = [].map.call(el.options, getValue)
				if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]) })) {
					// trigger change event if
					// no matching option found for at least one value
					var needReset = el.multiple
						? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions) })
						: binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions)
					if (needReset) {
						trigger(el, 'change')
=======
				var prevOptions = el._vOptions;
				var curOptions = el._vOptions = [].map.call(el.options, getValue);
				if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
					// trigger change event if
					// no matching option found for at least one value
					var needReset = el.multiple
						? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
						: binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
					if (needReset) {
						trigger(el, 'change');
>>>>>>> origin/master
					}
				}
			}
		}
<<<<<<< HEAD
	}

	function setSelected (el, binding, vm) {
		actuallySetSelected(el, binding, vm)
		/* istanbul ignore if */
		if (isIE || isEdge) {
			setTimeout(function () {
				actuallySetSelected(el, binding, vm)
			}, 0)
=======
	};

	function setSelected (el, binding, vm) {
		actuallySetSelected(el, binding, vm);
		/* istanbul ignore if */
		if (isIE || isEdge) {
			setTimeout(function () {
				actuallySetSelected(el, binding, vm);
			}, 0);
>>>>>>> origin/master
		}
	}

	function actuallySetSelected (el, binding, vm) {
<<<<<<< HEAD
		var value = binding.value
		var isMultiple = el.multiple
		if (isMultiple && !Array.isArray(value)) {
			'development' !== 'production' && warn(
				'<select multiple v-model="' + (binding.expression) + '"> ' +
					'expects an Array value for its binding, but got ' + (Object.prototype.toString.call(value).slice(8, -1)),
				vm
			)
			return
		}
		var selected, option
		for (var i = 0, l = el.options.length; i < l; i++) {
			option = el.options[i]
			if (isMultiple) {
				selected = looseIndexOf(value, getValue(option)) > -1
				if (option.selected !== selected) {
					option.selected = selected
=======
		var value = binding.value;
		var isMultiple = el.multiple;
		if (isMultiple && !Array.isArray(value)) {
			"development" !== 'production' && warn(
				"<select multiple v-model=\"" + (binding.expression) + "\"> " +
				"expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
				vm
			);
			return
		}
		var selected, option;
		for (var i = 0, l = el.options.length; i < l; i++) {
			option = el.options[i];
			if (isMultiple) {
				selected = looseIndexOf(value, getValue(option)) > -1;
				if (option.selected !== selected) {
					option.selected = selected;
>>>>>>> origin/master
				}
			} else {
				if (looseEqual(getValue(option), value)) {
					if (el.selectedIndex !== i) {
<<<<<<< HEAD
						el.selectedIndex = i
=======
						el.selectedIndex = i;
>>>>>>> origin/master
					}
					return
				}
			}
		}
		if (!isMultiple) {
<<<<<<< HEAD
			el.selectedIndex = -1
=======
			el.selectedIndex = -1;
>>>>>>> origin/master
		}
	}

	function hasNoMatchingOption (value, options) {
<<<<<<< HEAD
		return options.every(function (o) { return !looseEqual(o, value) })
=======
		return options.every(function (o) { return !looseEqual(o, value); })
>>>>>>> origin/master
	}

	function getValue (option) {
		return '_value' in option
			? option._value
			: option.value
	}

	function onCompositionStart (e) {
<<<<<<< HEAD
		e.target.composing = true
=======
		e.target.composing = true;
>>>>>>> origin/master
	}

	function onCompositionEnd (e) {
		// prevent triggering an input event for no reason
		if (!e.target.composing) { return }
<<<<<<< HEAD
		e.target.composing = false
		trigger(e.target, 'input')
	}

	function trigger (el, type) {
		var e = document.createEvent('HTMLEvents')
		e.initEvent(type, true, true)
		el.dispatchEvent(e)
=======
		e.target.composing = false;
		trigger(e.target, 'input');
	}

	function trigger (el, type) {
		var e = document.createEvent('HTMLEvents');
		e.initEvent(type, true, true);
		el.dispatchEvent(e);
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
	// recursively search for possible transition defined inside the component root
=======
// recursively search for possible transition defined inside the component root
>>>>>>> origin/master
	function locateNode (vnode) {
		return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
			? locateNode(vnode.componentInstance._vnode)
			: vnode
	}

	var show = {
		bind: function bind (el, ref, vnode) {
<<<<<<< HEAD
			var value = ref.value

			vnode = locateNode(vnode)
			var transition$$1 = vnode.data && vnode.data.transition
			var originalDisplay = el.__vOriginalDisplay =
				el.style.display === 'none' ? '' : el.style.display
			if (value && transition$$1) {
				vnode.data.show = true
				enter(vnode, function () {
					el.style.display = originalDisplay
				})
			} else {
				el.style.display = value ? originalDisplay : 'none'
=======
			var value = ref.value;

			vnode = locateNode(vnode);
			var transition$$1 = vnode.data && vnode.data.transition;
			var originalDisplay = el.__vOriginalDisplay =
				el.style.display === 'none' ? '' : el.style.display;
			if (value && transition$$1) {
				vnode.data.show = true;
				enter(vnode, function () {
					el.style.display = originalDisplay;
				});
			} else {
				el.style.display = value ? originalDisplay : 'none';
>>>>>>> origin/master
			}
		},

		update: function update (el, ref, vnode) {
<<<<<<< HEAD
			var value = ref.value
			var oldValue = ref.oldValue

			/* istanbul ignore if */
			if (!value === !oldValue) { return }
			vnode = locateNode(vnode)
			var transition$$1 = vnode.data && vnode.data.transition
			if (transition$$1) {
				vnode.data.show = true
				if (value) {
					enter(vnode, function () {
						el.style.display = el.__vOriginalDisplay
					})
				} else {
					leave(vnode, function () {
						el.style.display = 'none'
					})
				}
			} else {
				el.style.display = value ? el.__vOriginalDisplay : 'none'
=======
			var value = ref.value;
			var oldValue = ref.oldValue;

			/* istanbul ignore if */
			if (!value === !oldValue) { return }
			vnode = locateNode(vnode);
			var transition$$1 = vnode.data && vnode.data.transition;
			if (transition$$1) {
				vnode.data.show = true;
				if (value) {
					enter(vnode, function () {
						el.style.display = el.__vOriginalDisplay;
					});
				} else {
					leave(vnode, function () {
						el.style.display = 'none';
					});
				}
			} else {
				el.style.display = value ? el.__vOriginalDisplay : 'none';
>>>>>>> origin/master
			}
		},

		unbind: function unbind (
			el,
			binding,
			vnode,
			oldVnode,
			isDestroy
		) {
			if (!isDestroy) {
<<<<<<< HEAD
				el.style.display = el.__vOriginalDisplay
=======
				el.style.display = el.__vOriginalDisplay;
>>>>>>> origin/master
			}
		}
	}

	var platformDirectives = {
		model: directive,
		show: show
	}

	/*  */

<<<<<<< HEAD
	// Provides transition support for a single element/component.
	// supports transition mode (out-in / in-out)
=======
// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)
>>>>>>> origin/master

	var transitionProps = {
		name: String,
		appear: Boolean,
		css: Boolean,
		mode: String,
		type: String,
		enterClass: String,
		leaveClass: String,
		enterToClass: String,
		leaveToClass: String,
		enterActiveClass: String,
		leaveActiveClass: String,
		appearClass: String,
		appearActiveClass: String,
		appearToClass: String,
		duration: [Number, String, Object]
<<<<<<< HEAD
	}

	// in case the child is also an abstract component, e.g. <keep-alive>
	// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
		var compOptions = vnode && vnode.componentOptions
=======
	};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
	function getRealChild (vnode) {
		var compOptions = vnode && vnode.componentOptions;
>>>>>>> origin/master
		if (compOptions && compOptions.Ctor.options.abstract) {
			return getRealChild(getFirstComponentChild(compOptions.children))
		} else {
			return vnode
		}
	}

	function extractTransitionData (comp) {
<<<<<<< HEAD
		var data = {}
		var options = comp.$options
		// props
		for (var key in options.propsData) {
			data[key] = comp[key]
		}
		// events.
		// extract listeners and pass them directly to the transition methods
		var listeners = options._parentListeners
		for (var key$1 in listeners) {
			data[camelize(key$1)] = listeners[key$1]
=======
		var data = {};
		var options = comp.$options;
		// props
		for (var key in options.propsData) {
			data[key] = comp[key];
		}
		// events.
		// extract listeners and pass them directly to the transition methods
		var listeners = options._parentListeners;
		for (var key$1 in listeners) {
			data[camelize(key$1)] = listeners[key$1];
>>>>>>> origin/master
		}
		return data
	}

	function placeholder (h, rawChild) {
		if (/\d-keep-alive$/.test(rawChild.tag)) {
			return h('keep-alive', {
				props: rawChild.componentOptions.propsData
			})
		}
	}

	function hasParentTransition (vnode) {
		while ((vnode = vnode.parent)) {
			if (vnode.data.transition) {
				return true
			}
		}
	}

	function isSameChild (child, oldChild) {
		return oldChild.key === child.key && oldChild.tag === child.tag
	}

	var Transition = {
		name: 'transition',
		props: transitionProps,
		abstract: true,

		render: function render (h) {
<<<<<<< HEAD
			var this$1 = this

			var children = this.$slots.default
=======
			var this$1 = this;

			var children = this.$slots.default;
>>>>>>> origin/master
			if (!children) {
				return
			}

			// filter out text nodes (possible whitespaces)
<<<<<<< HEAD
			children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c) })
=======
			children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
>>>>>>> origin/master
			/* istanbul ignore if */
			if (!children.length) {
				return
			}

			// warn multiple elements
<<<<<<< HEAD
			if ('development' !== 'production' && children.length > 1) {
				warn(
					'<transition> can only be used on a single element. Use ' +
						'<transition-group> for lists.',
					this.$parent
				)
			}

			var mode = this.mode

			// warn invalid mode
			if ('development' !== 'production' &&
=======
			if ("development" !== 'production' && children.length > 1) {
				warn(
					'<transition> can only be used on a single element. Use ' +
					'<transition-group> for lists.',
					this.$parent
				);
			}

			var mode = this.mode;

			// warn invalid mode
			if ("development" !== 'production' &&
>>>>>>> origin/master
				mode && mode !== 'in-out' && mode !== 'out-in'
			) {
				warn(
					'invalid <transition> mode: ' + mode,
					this.$parent
<<<<<<< HEAD
				)
			}

			var rawChild = children[0]
=======
				);
			}

			var rawChild = children[0];
>>>>>>> origin/master

			// if this is a component root node and the component's
			// parent container node also has transition, skip.
			if (hasParentTransition(this.$vnode)) {
				return rawChild
			}

			// apply transition data to child
			// use getRealChild() to ignore abstract components e.g. keep-alive
<<<<<<< HEAD
			var child = getRealChild(rawChild)
=======
			var child = getRealChild(rawChild);
>>>>>>> origin/master
			/* istanbul ignore if */
			if (!child) {
				return rawChild
			}

			if (this._leaving) {
				return placeholder(h, rawChild)
			}

			// ensure a key that is unique to the vnode type and to this transition
			// component instance. This key will be used to remove pending leaving nodes
			// during entering.
<<<<<<< HEAD
			var id = '__transition-' + (this._uid) + '-'
=======
			var id = "__transition-" + (this._uid) + "-";
>>>>>>> origin/master
			child.key = child.key == null
				? child.isComment
					? id + 'comment'
					: id + child.tag
				: isPrimitive(child.key)
					? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
<<<<<<< HEAD
					: child.key

			var data = (child.data || (child.data = {})).transition = extractTransitionData(this)
			var oldRawChild = this._vnode
			var oldChild = getRealChild(oldRawChild)

			// mark v-show
			// so that the transition module can hand over the control to the directive
			if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show' })) {
				child.data.show = true
=======
					: child.key;

			var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
			var oldRawChild = this._vnode;
			var oldChild = getRealChild(oldRawChild);

			// mark v-show
			// so that the transition module can hand over the control to the directive
			if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
				child.data.show = true;
>>>>>>> origin/master
			}

			if (
				oldChild &&
				oldChild.data &&
				!isSameChild(child, oldChild) &&
				!isAsyncPlaceholder(oldChild) &&
				// #6687 component root is a comment node
				!(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
			) {
				// replace old child transition data with fresh one
				// important for dynamic transitions!
<<<<<<< HEAD
				var oldData = oldChild.data.transition = extend({}, data)
				// handle transition mode
				if (mode === 'out-in') {
					// return placeholder node and queue update when leave finishes
					this._leaving = true
					mergeVNodeHook(oldData, 'afterLeave', function () {
						this$1._leaving = false
						this$1.$forceUpdate()
					})
=======
				var oldData = oldChild.data.transition = extend({}, data);
				// handle transition mode
				if (mode === 'out-in') {
					// return placeholder node and queue update when leave finishes
					this._leaving = true;
					mergeVNodeHook(oldData, 'afterLeave', function () {
						this$1._leaving = false;
						this$1.$forceUpdate();
					});
>>>>>>> origin/master
					return placeholder(h, rawChild)
				} else if (mode === 'in-out') {
					if (isAsyncPlaceholder(child)) {
						return oldRawChild
					}
<<<<<<< HEAD
					var delayedLeave
					var performLeave = function () { delayedLeave() }
					mergeVNodeHook(data, 'afterEnter', performLeave)
					mergeVNodeHook(data, 'enterCancelled', performLeave)
					mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave })
=======
					var delayedLeave;
					var performLeave = function () { delayedLeave(); };
					mergeVNodeHook(data, 'afterEnter', performLeave);
					mergeVNodeHook(data, 'enterCancelled', performLeave);
					mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
>>>>>>> origin/master
				}
			}

			return rawChild
		}
	}

	/*  */

<<<<<<< HEAD
	// Provides transition support for list items.
	// supports move transitions using the FLIP technique.

	// Because the vdom's children update algorithm is "unstable" - i.e.
	// it doesn't guarantee the relative positioning of removed elements,
	// we force transition-group to update its children into two passes:
	// in the first pass, we remove all nodes that need to be removed,
	// triggering their leaving transition; in the second pass, we insert/move
	// into the final desired state. This way in the second pass removed
	// nodes will remain where they should be.
=======
// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.
>>>>>>> origin/master

	var props = extend({
		tag: String,
		moveClass: String
<<<<<<< HEAD
	}, transitionProps)

	delete props.mode
=======
	}, transitionProps);

	delete props.mode;
>>>>>>> origin/master

	var TransitionGroup = {
		props: props,

		render: function render (h) {
<<<<<<< HEAD
			var tag = this.tag || this.$vnode.data.tag || 'span'
			var map = Object.create(null)
			var prevChildren = this.prevChildren = this.children
			var rawChildren = this.$slots.default || []
			var children = this.children = []
			var transitionData = extractTransitionData(this)

			for (var i = 0; i < rawChildren.length; i++) {
				var c = rawChildren[i]
				if (c.tag) {
					if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
						children.push(c)
						map[c.key] = c
						;(c.data || (c.data = {})).transition = transitionData
					} else {
						var opts = c.componentOptions
						var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag
						warn(('<transition-group> children must be keyed: <' + name + '>'))
=======
			var tag = this.tag || this.$vnode.data.tag || 'span';
			var map = Object.create(null);
			var prevChildren = this.prevChildren = this.children;
			var rawChildren = this.$slots.default || [];
			var children = this.children = [];
			var transitionData = extractTransitionData(this);

			for (var i = 0; i < rawChildren.length; i++) {
				var c = rawChildren[i];
				if (c.tag) {
					if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
						children.push(c);
						map[c.key] = c
						;(c.data || (c.data = {})).transition = transitionData;
					} else {
						var opts = c.componentOptions;
						var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
						warn(("<transition-group> children must be keyed: <" + name + ">"));
>>>>>>> origin/master
					}
				}
			}

			if (prevChildren) {
<<<<<<< HEAD
				var kept = []
				var removed = []
				for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
					var c$1 = prevChildren[i$1]
					c$1.data.transition = transitionData
					c$1.data.pos = c$1.elm.getBoundingClientRect()
					if (map[c$1.key]) {
						kept.push(c$1)
					} else {
						removed.push(c$1)
					}
				}
				this.kept = h(tag, null, kept)
				this.removed = removed
=======
				var kept = [];
				var removed = [];
				for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
					var c$1 = prevChildren[i$1];
					c$1.data.transition = transitionData;
					c$1.data.pos = c$1.elm.getBoundingClientRect();
					if (map[c$1.key]) {
						kept.push(c$1);
					} else {
						removed.push(c$1);
					}
				}
				this.kept = h(tag, null, kept);
				this.removed = removed;
>>>>>>> origin/master
			}

			return h(tag, null, children)
		},

		beforeUpdate: function beforeUpdate () {
			// force removing pass
			this.__patch__(
				this._vnode,
				this.kept,
				false, // hydrating
				true // removeOnly (!important, avoids unnecessary moves)
<<<<<<< HEAD
			)
			this._vnode = this.kept
		},

		updated: function updated () {
			var children = this.prevChildren
			var moveClass = this.moveClass || ((this.name || 'v') + '-move')
=======
			);
			this._vnode = this.kept;
		},

		updated: function updated () {
			var children = this.prevChildren;
			var moveClass = this.moveClass || ((this.name || 'v') + '-move');
>>>>>>> origin/master
			if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
				return
			}

			// we divide the work into three loops to avoid mixing DOM reads and writes
			// in each iteration - which helps prevent layout thrashing.
<<<<<<< HEAD
			children.forEach(callPendingCbs)
			children.forEach(recordPosition)
			children.forEach(applyTranslation)
=======
			children.forEach(callPendingCbs);
			children.forEach(recordPosition);
			children.forEach(applyTranslation);
>>>>>>> origin/master

			// force reflow to put everything in position
			// assign to this to avoid being removed in tree-shaking
			// $flow-disable-line
<<<<<<< HEAD
			this._reflow = document.body.offsetHeight

			children.forEach(function (c) {
				if (c.data.moved) {
					var el = c.elm
					var s = el.style
					addTransitionClass(el, moveClass)
					s.transform = s.WebkitTransform = s.transitionDuration = ''
					el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
						if (!e || /transform$/.test(e.propertyName)) {
							el.removeEventListener(transitionEndEvent, cb)
							el._moveCb = null
							removeTransitionClass(el, moveClass)
						}
					})
				}
			})
=======
			this._reflow = document.body.offsetHeight;

			children.forEach(function (c) {
				if (c.data.moved) {
					var el = c.elm;
					var s = el.style;
					addTransitionClass(el, moveClass);
					s.transform = s.WebkitTransform = s.transitionDuration = '';
					el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
						if (!e || /transform$/.test(e.propertyName)) {
							el.removeEventListener(transitionEndEvent, cb);
							el._moveCb = null;
							removeTransitionClass(el, moveClass);
						}
					});
				}
			});
>>>>>>> origin/master
		},

		methods: {
			hasMove: function hasMove (el, moveClass) {
				/* istanbul ignore if */
				if (!hasTransition) {
					return false
				}
				/* istanbul ignore if */
				if (this._hasMove) {
					return this._hasMove
				}
				// Detect whether an element with the move class applied has
				// CSS transitions. Since the element may be inside an entering
				// transition at this very moment, we make a clone of it and remove
				// all other transition classes applied to ensure only the move class
				// is applied.
<<<<<<< HEAD
				var clone = el.cloneNode()
				if (el._transitionClasses) {
					el._transitionClasses.forEach(function (cls) { removeClass(clone, cls) })
				}
				addClass(clone, moveClass)
				clone.style.display = 'none'
				this.$el.appendChild(clone)
				var info = getTransitionInfo(clone)
				this.$el.removeChild(clone)
=======
				var clone = el.cloneNode();
				if (el._transitionClasses) {
					el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
				}
				addClass(clone, moveClass);
				clone.style.display = 'none';
				this.$el.appendChild(clone);
				var info = getTransitionInfo(clone);
				this.$el.removeChild(clone);
>>>>>>> origin/master
				return (this._hasMove = info.hasTransform)
			}
		}
	}

	function callPendingCbs (c) {
		/* istanbul ignore if */
		if (c.elm._moveCb) {
<<<<<<< HEAD
			c.elm._moveCb()
		}
		/* istanbul ignore if */
		if (c.elm._enterCb) {
			c.elm._enterCb()
=======
			c.elm._moveCb();
		}
		/* istanbul ignore if */
		if (c.elm._enterCb) {
			c.elm._enterCb();
>>>>>>> origin/master
		}
	}

	function recordPosition (c) {
<<<<<<< HEAD
		c.data.newPos = c.elm.getBoundingClientRect()
	}

	function applyTranslation (c) {
		var oldPos = c.data.pos
		var newPos = c.data.newPos
		var dx = oldPos.left - newPos.left
		var dy = oldPos.top - newPos.top
		if (dx || dy) {
			c.data.moved = true
			var s = c.elm.style
			s.transform = s.WebkitTransform = 'translate(' + dx + 'px,' + dy + 'px)'
			s.transitionDuration = '0s'
=======
		c.data.newPos = c.elm.getBoundingClientRect();
	}

	function applyTranslation (c) {
		var oldPos = c.data.pos;
		var newPos = c.data.newPos;
		var dx = oldPos.left - newPos.left;
		var dy = oldPos.top - newPos.top;
		if (dx || dy) {
			c.data.moved = true;
			var s = c.elm.style;
			s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
			s.transitionDuration = '0s';
>>>>>>> origin/master
		}
	}

	var platformComponents = {
		Transition: Transition,
		TransitionGroup: TransitionGroup
	}

	/*  */

<<<<<<< HEAD
	// install platform specific utils
	Vue.config.mustUseProp = mustUseProp
	Vue.config.isReservedTag = isReservedTag
	Vue.config.isReservedAttr = isReservedAttr
	Vue.config.getTagNamespace = getTagNamespace
	Vue.config.isUnknownElement = isUnknownElement

	// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives)
	extend(Vue.options.components, platformComponents)

	// install platform patch function
	Vue.prototype.__patch__ = inBrowser ? patch : noop

	// public mount method
=======
// install platform specific utils
	Vue.config.mustUseProp = mustUseProp;
	Vue.config.isReservedTag = isReservedTag;
	Vue.config.isReservedAttr = isReservedAttr;
	Vue.config.getTagNamespace = getTagNamespace;
	Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
	extend(Vue.options.directives, platformDirectives);
	extend(Vue.options.components, platformComponents);

// install platform patch function
	Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
>>>>>>> origin/master
	Vue.prototype.$mount = function (
		el,
		hydrating
	) {
<<<<<<< HEAD
		el = el && inBrowser ? query(el) : undefined
		return mountComponent(this, el, hydrating)
	}

	// devtools global hook
=======
		el = el && inBrowser ? query(el) : undefined;
		return mountComponent(this, el, hydrating)
	};

// devtools global hook
>>>>>>> origin/master
	/* istanbul ignore next */
	if (inBrowser) {
		setTimeout(function () {
			if (config.devtools) {
				if (devtools) {
<<<<<<< HEAD
					devtools.emit('init', Vue)
				} else if (
					'development' !== 'production' &&
					'development' !== 'test' &&
=======
					devtools.emit('init', Vue);
				} else if (
					"development" !== 'production' &&
					"development" !== 'test' &&
>>>>>>> origin/master
					isChrome
				) {
					console[console.info ? 'info' : 'log'](
						'Download the Vue Devtools extension for a better development experience:\n' +
<<<<<<< HEAD
							'https://github.com/vuejs/vue-devtools'
					)
				}
			}
			if ('development' !== 'production' &&
				'development' !== 'test' &&
=======
						'https://github.com/vuejs/vue-devtools'
					);
				}
			}
			if ("development" !== 'production' &&
				"development" !== 'test' &&
>>>>>>> origin/master
				config.productionTip !== false &&
				typeof console !== 'undefined'
			) {
				console[console.info ? 'info' : 'log'](
<<<<<<< HEAD
					'You are running Vue in development mode.\n' +
						'Make sure to turn on production mode when deploying for production.\n' +
						'See more tips at https://vuejs.org/guide/deployment.html'
				)
			}
		}, 0)
=======
					"You are running Vue in development mode.\n" +
					"Make sure to turn on production mode when deploying for production.\n" +
					"See more tips at https://vuejs.org/guide/deployment.html"
				);
			}
		}, 0);
>>>>>>> origin/master
	}

	/*  */

<<<<<<< HEAD
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g

	var buildRegex = cached(function (delimiters) {
		var open = delimiters[0].replace(regexEscapeRE, '\\$&')
		var close = delimiters[1].replace(regexEscapeRE, '\\$&')
		return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	})
=======
	var defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g;
	var regexEscapeRE = /[-.*+?^${}()|[\]\/\\]/g;

	var buildRegex = cached(function (delimiters) {
		var open = delimiters[0].replace(regexEscapeRE, '\\$&');
		var close = delimiters[1].replace(regexEscapeRE, '\\$&');
		return new RegExp(open + '((?:.|\\n)+?)' + close, 'g')
	});


>>>>>>> origin/master

	function parseText (
		text,
		delimiters
	) {
<<<<<<< HEAD
		var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE
		if (!tagRE.test(text)) {
			return
		}
		var tokens = []
		var rawTokens = []
		var lastIndex = tagRE.lastIndex = 0
		var match, index, tokenValue
		while ((match = tagRE.exec(text))) {
			index = match.index
			// push text token
			if (index > lastIndex) {
				rawTokens.push(tokenValue = text.slice(lastIndex, index))
				tokens.push(JSON.stringify(tokenValue))
			}
			// tag token
			var exp = parseFilters(match[1].trim())
			tokens.push(('_s(' + exp + ')'))
			rawTokens.push({ '@binding': exp })
			lastIndex = index + match[0].length
		}
		if (lastIndex < text.length) {
			rawTokens.push(tokenValue = text.slice(lastIndex))
			tokens.push(JSON.stringify(tokenValue))
=======
		var tagRE = delimiters ? buildRegex(delimiters) : defaultTagRE;
		if (!tagRE.test(text)) {
			return
		}
		var tokens = [];
		var rawTokens = [];
		var lastIndex = tagRE.lastIndex = 0;
		var match, index, tokenValue;
		while ((match = tagRE.exec(text))) {
			index = match.index;
			// push text token
			if (index > lastIndex) {
				rawTokens.push(tokenValue = text.slice(lastIndex, index));
				tokens.push(JSON.stringify(tokenValue));
			}
			// tag token
			var exp = parseFilters(match[1].trim());
			tokens.push(("_s(" + exp + ")"));
			rawTokens.push({ '@binding': exp });
			lastIndex = index + match[0].length;
		}
		if (lastIndex < text.length) {
			rawTokens.push(tokenValue = text.slice(lastIndex));
			tokens.push(JSON.stringify(tokenValue));
>>>>>>> origin/master
		}
		return {
			expression: tokens.join('+'),
			tokens: rawTokens
		}
	}

	/*  */

	function transformNode (el, options) {
<<<<<<< HEAD
		var warn = options.warn || baseWarn
		var staticClass = getAndRemoveAttr(el, 'class')
		if ('development' !== 'production' && staticClass) {
			var res = parseText(staticClass, options.delimiters)
			if (res) {
				warn(
					'class="' + staticClass + '": ' +
						'Interpolation inside attributes has been removed. ' +
						'Use v-bind or the colon shorthand instead. For example, ' +
						'instead of <div class="{{ val }}">, use <div :class="val">.'
				)
			}
		}
		if (staticClass) {
			el.staticClass = JSON.stringify(staticClass)
		}
		var classBinding = getBindingAttr(el, 'class', false /* getStatic */)
		if (classBinding) {
			el.classBinding = classBinding
=======
		var warn = options.warn || baseWarn;
		var staticClass = getAndRemoveAttr(el, 'class');
		if ("development" !== 'production' && staticClass) {
			var res = parseText(staticClass, options.delimiters);
			if (res) {
				warn(
					"class=\"" + staticClass + "\": " +
					'Interpolation inside attributes has been removed. ' +
					'Use v-bind or the colon shorthand instead. For example, ' +
					'instead of <div class="{{ val }}">, use <div :class="val">.'
				);
			}
		}
		if (staticClass) {
			el.staticClass = JSON.stringify(staticClass);
		}
		var classBinding = getBindingAttr(el, 'class', false /* getStatic */);
		if (classBinding) {
			el.classBinding = classBinding;
>>>>>>> origin/master
		}
	}

	function genData (el) {
<<<<<<< HEAD
		var data = ''
		if (el.staticClass) {
			data += 'staticClass:' + (el.staticClass) + ','
		}
		if (el.classBinding) {
			data += 'class:' + (el.classBinding) + ','
=======
		var data = '';
		if (el.staticClass) {
			data += "staticClass:" + (el.staticClass) + ",";
		}
		if (el.classBinding) {
			data += "class:" + (el.classBinding) + ",";
>>>>>>> origin/master
		}
		return data
	}

	var klass$1 = {
		staticKeys: ['staticClass'],
		transformNode: transformNode,
		genData: genData
	}

	/*  */

	function transformNode$1 (el, options) {
<<<<<<< HEAD
		var warn = options.warn || baseWarn
		var staticStyle = getAndRemoveAttr(el, 'style')
		if (staticStyle) {
			/* istanbul ignore if */
			{
				var res = parseText(staticStyle, options.delimiters)
				if (res) {
					warn(
						'style="' + staticStyle + '": ' +
							'Interpolation inside attributes has been removed. ' +
							'Use v-bind or the colon shorthand instead. For example, ' +
							'instead of <div style="{{ val }}">, use <div :style="val">.'
					)
				}
			}
			el.staticStyle = JSON.stringify(parseStyleText(staticStyle))
		}

		var styleBinding = getBindingAttr(el, 'style', false /* getStatic */)
		if (styleBinding) {
			el.styleBinding = styleBinding
=======
		var warn = options.warn || baseWarn;
		var staticStyle = getAndRemoveAttr(el, 'style');
		if (staticStyle) {
			/* istanbul ignore if */
			{
				var res = parseText(staticStyle, options.delimiters);
				if (res) {
					warn(
						"style=\"" + staticStyle + "\": " +
						'Interpolation inside attributes has been removed. ' +
						'Use v-bind or the colon shorthand instead. For example, ' +
						'instead of <div style="{{ val }}">, use <div :style="val">.'
					);
				}
			}
			el.staticStyle = JSON.stringify(parseStyleText(staticStyle));
		}

		var styleBinding = getBindingAttr(el, 'style', false /* getStatic */);
		if (styleBinding) {
			el.styleBinding = styleBinding;
>>>>>>> origin/master
		}
	}

	function genData$1 (el) {
<<<<<<< HEAD
		var data = ''
		if (el.staticStyle) {
			data += 'staticStyle:' + (el.staticStyle) + ','
		}
		if (el.styleBinding) {
			data += 'style:(' + (el.styleBinding) + '),'
=======
		var data = '';
		if (el.staticStyle) {
			data += "staticStyle:" + (el.staticStyle) + ",";
		}
		if (el.styleBinding) {
			data += "style:(" + (el.styleBinding) + "),";
>>>>>>> origin/master
		}
		return data
	}

	var style$1 = {
		staticKeys: ['staticStyle'],
		transformNode: transformNode$1,
		genData: genData$1
	}

	/*  */

<<<<<<< HEAD
	var decoder

	var he = {
		decode: function decode (html) {
			decoder = decoder || document.createElement('div')
			decoder.innerHTML = html
=======
	var decoder;

	var he = {
		decode: function decode (html) {
			decoder = decoder || document.createElement('div');
			decoder.innerHTML = html;
>>>>>>> origin/master
			return decoder.textContent
		}
	}

	/*  */

	var isUnaryTag = makeMap(
		'area,base,br,col,embed,frame,hr,img,input,isindex,keygen,' +
<<<<<<< HEAD
			'link,meta,param,source,track,wbr'
	)

	// Elements that you can, intentionally, leave open
	// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
		'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
	)

	// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
	// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
		'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
			'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
			'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
			'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
			'title,tr,track'
	)
=======
		'link,meta,param,source,track,wbr'
	);

// Elements that you can, intentionally, leave open
// (and which close themselves)
	var canBeLeftOpenTag = makeMap(
		'colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source'
	);

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
	var isNonPhrasingTag = makeMap(
		'address,article,aside,base,blockquote,body,caption,col,colgroup,dd,' +
		'details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,' +
		'h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,' +
		'optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,' +
		'title,tr,track'
	);
>>>>>>> origin/master

	/**
	 * Not type-checking this file because it's mostly vendor code.
	 */

	/*!
 * HTML Parser By John Resig (ejohn.org)
 * Modified by Juriy "kangax" Zaytsev
 * Original code by Erik Arvidsson, Mozilla Public License
 * http://erik.eae.net/simplehtmlparser/simplehtmlparser.js
 */

<<<<<<< HEAD
	// Regular Expressions for parsing tags and attributes
	var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/
	// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
	// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*'
	var qnameCapture = '((?:' + ncname + '\\:)?' + ncname + ')'
	var startTagOpen = new RegExp(('^<' + qnameCapture))
	var startTagClose = /^\s*(\/?)>/
	var endTag = new RegExp(('^<\\/' + qnameCapture + '[^>]*>'))
	var doctype = /^<!DOCTYPE [^>]+>/i
	// #7298: escape - to avoid being pased as HTML comment when inlined in page
	var comment = /^<!\--/
	var conditionalComment = /^<!\[/

	var IS_REGEX_CAPTURING_BROKEN = false
	'x'.replace(/x(.)?/g, function (m, g) {
		IS_REGEX_CAPTURING_BROKEN = g === ''
	})

	// Special Elements (can contain anything)
	var isPlainTextElement = makeMap('script,style,textarea', true)
	var reCache = {}
=======
// Regular Expressions for parsing tags and attributes
	var attribute = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/;
// could use https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
// but for Vue templates we can enforce a simple charset
	var ncname = '[a-zA-Z_][\\w\\-\\.]*';
	var qnameCapture = "((?:" + ncname + "\\:)?" + ncname + ")";
	var startTagOpen = new RegExp(("^<" + qnameCapture));
	var startTagClose = /^\s*(\/?)>/;
	var endTag = new RegExp(("^<\\/" + qnameCapture + "[^>]*>"));
	var doctype = /^<!DOCTYPE [^>]+>/i;
// #7298: escape - to avoid being pased as HTML comment when inlined in page
	var comment = /^<!\--/;
	var conditionalComment = /^<!\[/;

	var IS_REGEX_CAPTURING_BROKEN = false;
	'x'.replace(/x(.)?/g, function (m, g) {
		IS_REGEX_CAPTURING_BROKEN = g === '';
	});

// Special Elements (can contain anything)
	var isPlainTextElement = makeMap('script,style,textarea', true);
	var reCache = {};
>>>>>>> origin/master

	var decodingMap = {
		'&lt;': '<',
		'&gt;': '>',
		'&quot;': '"',
		'&amp;': '&',
		'&#10;': '\n',
		'&#9;': '\t'
<<<<<<< HEAD
	}
	var encodedAttr = /&(?:lt|gt|quot|amp);/g
	var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g

	// #5992
	var isIgnoreNewlineTag = makeMap('pre,textarea', true)
	var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n' }

	function decodeAttr (value, shouldDecodeNewlines) {
		var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr
		return value.replace(re, function (match) { return decodingMap[match] })
	}

	function parseHTML (html, options) {
		var stack = []
		var expectHTML = options.expectHTML
		var isUnaryTag$$1 = options.isUnaryTag || no
		var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no
		var index = 0
		var last, lastTag
		while (html) {
			last = html
			// Make sure we're not in a plaintext content element like script/style
			if (!lastTag || !isPlainTextElement(lastTag)) {
				var textEnd = html.indexOf('<')
				if (textEnd === 0) {
					// Comment:
					if (comment.test(html)) {
						var commentEnd = html.indexOf('-->')

						if (commentEnd >= 0) {
							if (options.shouldKeepComment) {
								options.comment(html.substring(4, commentEnd))
							}
							advance(commentEnd + 3)
=======
	};
	var encodedAttr = /&(?:lt|gt|quot|amp);/g;
	var encodedAttrWithNewLines = /&(?:lt|gt|quot|amp|#10|#9);/g;

// #5992
	var isIgnoreNewlineTag = makeMap('pre,textarea', true);
	var shouldIgnoreFirstNewline = function (tag, html) { return tag && isIgnoreNewlineTag(tag) && html[0] === '\n'; };

	function decodeAttr (value, shouldDecodeNewlines) {
		var re = shouldDecodeNewlines ? encodedAttrWithNewLines : encodedAttr;
		return value.replace(re, function (match) { return decodingMap[match]; })
	}

	function parseHTML (html, options) {
		var stack = [];
		var expectHTML = options.expectHTML;
		var isUnaryTag$$1 = options.isUnaryTag || no;
		var canBeLeftOpenTag$$1 = options.canBeLeftOpenTag || no;
		var index = 0;
		var last, lastTag;
		while (html) {
			last = html;
			// Make sure we're not in a plaintext content element like script/style
			if (!lastTag || !isPlainTextElement(lastTag)) {
				var textEnd = html.indexOf('<');
				if (textEnd === 0) {
					// Comment:
					if (comment.test(html)) {
						var commentEnd = html.indexOf('-->');

						if (commentEnd >= 0) {
							if (options.shouldKeepComment) {
								options.comment(html.substring(4, commentEnd));
							}
							advance(commentEnd + 3);
>>>>>>> origin/master
							continue
						}
					}

					// http://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
					if (conditionalComment.test(html)) {
<<<<<<< HEAD
						var conditionalEnd = html.indexOf(']>')

						if (conditionalEnd >= 0) {
							advance(conditionalEnd + 2)
=======
						var conditionalEnd = html.indexOf(']>');

						if (conditionalEnd >= 0) {
							advance(conditionalEnd + 2);
>>>>>>> origin/master
							continue
						}
					}

					// Doctype:
<<<<<<< HEAD
					var doctypeMatch = html.match(doctype)
					if (doctypeMatch) {
						advance(doctypeMatch[0].length)
=======
					var doctypeMatch = html.match(doctype);
					if (doctypeMatch) {
						advance(doctypeMatch[0].length);
>>>>>>> origin/master
						continue
					}

					// End tag:
<<<<<<< HEAD
					var endTagMatch = html.match(endTag)
					if (endTagMatch) {
						var curIndex = index
						advance(endTagMatch[0].length)
						parseEndTag(endTagMatch[1], curIndex, index)
=======
					var endTagMatch = html.match(endTag);
					if (endTagMatch) {
						var curIndex = index;
						advance(endTagMatch[0].length);
						parseEndTag(endTagMatch[1], curIndex, index);
>>>>>>> origin/master
						continue
					}

					// Start tag:
<<<<<<< HEAD
					var startTagMatch = parseStartTag()
					if (startTagMatch) {
						handleStartTag(startTagMatch)
						if (shouldIgnoreFirstNewline(lastTag, html)) {
							advance(1)
=======
					var startTagMatch = parseStartTag();
					if (startTagMatch) {
						handleStartTag(startTagMatch);
						if (shouldIgnoreFirstNewline(lastTag, html)) {
							advance(1);
>>>>>>> origin/master
						}
						continue
					}
				}

<<<<<<< HEAD
				var text = (void 0); var rest = (void 0); var next = (void 0)
				if (textEnd >= 0) {
					rest = html.slice(textEnd)
=======
				var text = (void 0), rest = (void 0), next = (void 0);
				if (textEnd >= 0) {
					rest = html.slice(textEnd);
>>>>>>> origin/master
					while (
						!endTag.test(rest) &&
						!startTagOpen.test(rest) &&
						!comment.test(rest) &&
						!conditionalComment.test(rest)
<<<<<<< HEAD
					) {
						// < in plain text, be forgiving and treat it as text
						next = rest.indexOf('<', 1)
						if (next < 0) { break }
						textEnd += next
						rest = html.slice(textEnd)
					}
					text = html.substring(0, textEnd)
					advance(textEnd)
				}

				if (textEnd < 0) {
					text = html
					html = ''
				}

				if (options.chars && text) {
					options.chars(text)
				}
			} else {
				var endTagLength = 0
				var stackedTag = lastTag.toLowerCase()
				var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'))
				var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
					endTagLength = endTag.length
					if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
						text = text
							.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
							.replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1')
					}
					if (shouldIgnoreFirstNewline(stackedTag, text)) {
						text = text.slice(1)
					}
					if (options.chars) {
						options.chars(text)
					}
					return ''
				})
				index += html.length - rest$1.length
				html = rest$1
				parseEndTag(stackedTag, index - endTagLength, index)
			}

			if (html === last) {
				options.chars && options.chars(html)
				if ('development' !== 'production' && !stack.length && options.warn) {
					options.warn(('Mal-formatted tag at end of template: "' + html + '"'))
=======
						) {
						// < in plain text, be forgiving and treat it as text
						next = rest.indexOf('<', 1);
						if (next < 0) { break }
						textEnd += next;
						rest = html.slice(textEnd);
					}
					text = html.substring(0, textEnd);
					advance(textEnd);
				}

				if (textEnd < 0) {
					text = html;
					html = '';
				}

				if (options.chars && text) {
					options.chars(text);
				}
			} else {
				var endTagLength = 0;
				var stackedTag = lastTag.toLowerCase();
				var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)(</' + stackedTag + '[^>]*>)', 'i'));
				var rest$1 = html.replace(reStackedTag, function (all, text, endTag) {
					endTagLength = endTag.length;
					if (!isPlainTextElement(stackedTag) && stackedTag !== 'noscript') {
						text = text
							.replace(/<!\--([\s\S]*?)-->/g, '$1') // #7298
							.replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
					}
					if (shouldIgnoreFirstNewline(stackedTag, text)) {
						text = text.slice(1);
					}
					if (options.chars) {
						options.chars(text);
					}
					return ''
				});
				index += html.length - rest$1.length;
				html = rest$1;
				parseEndTag(stackedTag, index - endTagLength, index);
			}

			if (html === last) {
				options.chars && options.chars(html);
				if ("development" !== 'production' && !stack.length && options.warn) {
					options.warn(("Mal-formatted tag at end of template: \"" + html + "\""));
>>>>>>> origin/master
				}
				break
			}
		}

		// Clean up any remaining tags
<<<<<<< HEAD
		parseEndTag()

		function advance (n) {
			index += n
			html = html.substring(n)
		}

		function parseStartTag () {
			var start = html.match(startTagOpen)
=======
		parseEndTag();

		function advance (n) {
			index += n;
			html = html.substring(n);
		}

		function parseStartTag () {
			var start = html.match(startTagOpen);
>>>>>>> origin/master
			if (start) {
				var match = {
					tagName: start[1],
					attrs: [],
					start: index
<<<<<<< HEAD
				}
				advance(start[0].length)
				var end, attr
				while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
					advance(attr[0].length)
					match.attrs.push(attr)
				}
				if (end) {
					match.unarySlash = end[1]
					advance(end[0].length)
					match.end = index
=======
				};
				advance(start[0].length);
				var end, attr;
				while (!(end = html.match(startTagClose)) && (attr = html.match(attribute))) {
					advance(attr[0].length);
					match.attrs.push(attr);
				}
				if (end) {
					match.unarySlash = end[1];
					advance(end[0].length);
					match.end = index;
>>>>>>> origin/master
					return match
				}
			}
		}

		function handleStartTag (match) {
<<<<<<< HEAD
			var tagName = match.tagName
			var unarySlash = match.unarySlash

			if (expectHTML) {
				if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
					parseEndTag(lastTag)
				}
				if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
					parseEndTag(tagName)
				}
			}

			var unary = isUnaryTag$$1(tagName) || !!unarySlash

			var l = match.attrs.length
			var attrs = new Array(l)
			for (var i = 0; i < l; i++) {
				var args = match.attrs[i]
				// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
				if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
					if (args[3] === '') { delete args[3] }
					if (args[4] === '') { delete args[4] }
					if (args[5] === '') { delete args[5] }
				}
				var value = args[3] || args[4] || args[5] || ''
				var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
					? options.shouldDecodeNewlinesForHref
					: options.shouldDecodeNewlines
				attrs[i] = {
					name: args[1],
					value: decodeAttr(value, shouldDecodeNewlines)
				}
			}

			if (!unary) {
				stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs })
				lastTag = tagName
			}

			if (options.start) {
				options.start(tagName, attrs, unary, match.start, match.end)
=======
			var tagName = match.tagName;
			var unarySlash = match.unarySlash;

			if (expectHTML) {
				if (lastTag === 'p' && isNonPhrasingTag(tagName)) {
					parseEndTag(lastTag);
				}
				if (canBeLeftOpenTag$$1(tagName) && lastTag === tagName) {
					parseEndTag(tagName);
				}
			}

			var unary = isUnaryTag$$1(tagName) || !!unarySlash;

			var l = match.attrs.length;
			var attrs = new Array(l);
			for (var i = 0; i < l; i++) {
				var args = match.attrs[i];
				// hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
				if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
					if (args[3] === '') { delete args[3]; }
					if (args[4] === '') { delete args[4]; }
					if (args[5] === '') { delete args[5]; }
				}
				var value = args[3] || args[4] || args[5] || '';
				var shouldDecodeNewlines = tagName === 'a' && args[1] === 'href'
					? options.shouldDecodeNewlinesForHref
					: options.shouldDecodeNewlines;
				attrs[i] = {
					name: args[1],
					value: decodeAttr(value, shouldDecodeNewlines)
				};
			}

			if (!unary) {
				stack.push({ tag: tagName, lowerCasedTag: tagName.toLowerCase(), attrs: attrs });
				lastTag = tagName;
			}

			if (options.start) {
				options.start(tagName, attrs, unary, match.start, match.end);
>>>>>>> origin/master
			}
		}

		function parseEndTag (tagName, start, end) {
<<<<<<< HEAD
			var pos, lowerCasedTagName
			if (start == null) { start = index }
			if (end == null) { end = index }

			if (tagName) {
				lowerCasedTagName = tagName.toLowerCase()
=======
			var pos, lowerCasedTagName;
			if (start == null) { start = index; }
			if (end == null) { end = index; }

			if (tagName) {
				lowerCasedTagName = tagName.toLowerCase();
>>>>>>> origin/master
			}

			// Find the closest opened tag of the same type
			if (tagName) {
				for (pos = stack.length - 1; pos >= 0; pos--) {
					if (stack[pos].lowerCasedTag === lowerCasedTagName) {
						break
					}
				}
			} else {
				// If no tag name is provided, clean shop
<<<<<<< HEAD
				pos = 0
=======
				pos = 0;
>>>>>>> origin/master
			}

			if (pos >= 0) {
				// Close all the open elements, up the stack
				for (var i = stack.length - 1; i >= pos; i--) {
<<<<<<< HEAD
					if ('development' !== 'production' &&
=======
					if ("development" !== 'production' &&
>>>>>>> origin/master
						(i > pos || !tagName) &&
						options.warn
					) {
						options.warn(
<<<<<<< HEAD
							('tag <' + (stack[i].tag) + '> has no matching end tag.')
						)
					}
					if (options.end) {
						options.end(stack[i].tag, start, end)
=======
							("tag <" + (stack[i].tag) + "> has no matching end tag.")
						);
					}
					if (options.end) {
						options.end(stack[i].tag, start, end);
>>>>>>> origin/master
					}
				}

				// Remove the open elements from the stack
<<<<<<< HEAD
				stack.length = pos
				lastTag = pos && stack[pos - 1].tag
			} else if (lowerCasedTagName === 'br') {
				if (options.start) {
					options.start(tagName, [], true, start, end)
				}
			} else if (lowerCasedTagName === 'p') {
				if (options.start) {
					options.start(tagName, [], false, start, end)
				}
				if (options.end) {
					options.end(tagName, start, end)
=======
				stack.length = pos;
				lastTag = pos && stack[pos - 1].tag;
			} else if (lowerCasedTagName === 'br') {
				if (options.start) {
					options.start(tagName, [], true, start, end);
				}
			} else if (lowerCasedTagName === 'p') {
				if (options.start) {
					options.start(tagName, [], false, start, end);
				}
				if (options.end) {
					options.end(tagName, start, end);
>>>>>>> origin/master
				}
			}
		}
	}

	/*  */

<<<<<<< HEAD
	var onRE = /^@|^v-on:/
	var dirRE = /^v-|^@|^:/
	var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/
	var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/
	var stripParensRE = /^\(|\)$/g

	var argRE = /:(.*)$/
	var bindRE = /^:|^v-bind:/
	var modifierRE = /\.[^.]+/g

	var decodeHTMLCached = cached(he.decode)

	// configurable state
	var warn$2
	var delimiters
	var transforms
	var preTransforms
	var postTransforms
	var platformIsPreTag
	var platformMustUseProp
	var platformGetTagNamespace
=======
	var onRE = /^@|^v-on:/;
	var dirRE = /^v-|^@|^:/;
	var forAliasRE = /([^]*?)\s+(?:in|of)\s+([^]*)/;
	var forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
	var stripParensRE = /^\(|\)$/g;

	var argRE = /:(.*)$/;
	var bindRE = /^:|^v-bind:/;
	var modifierRE = /\.[^.]+/g;

	var decodeHTMLCached = cached(he.decode);

// configurable state
	var warn$2;
	var delimiters;
	var transforms;
	var preTransforms;
	var postTransforms;
	var platformIsPreTag;
	var platformMustUseProp;
	var platformGetTagNamespace;


>>>>>>> origin/master

	function createASTElement (
		tag,
		attrs,
		parent
	) {
		return {
			type: 1,
			tag: tag,
			attrsList: attrs,
			attrsMap: makeAttrsMap(attrs),
			parent: parent,
			children: []
		}
	}

	/**
	 * Convert HTML string to AST.
	 */
	function parse (
		template,
		options
	) {
<<<<<<< HEAD
		warn$2 = options.warn || baseWarn

		platformIsPreTag = options.isPreTag || no
		platformMustUseProp = options.mustUseProp || no
		platformGetTagNamespace = options.getTagNamespace || no

		transforms = pluckModuleFunction(options.modules, 'transformNode')
		preTransforms = pluckModuleFunction(options.modules, 'preTransformNode')
		postTransforms = pluckModuleFunction(options.modules, 'postTransformNode')

		delimiters = options.delimiters

		var stack = []
		var preserveWhitespace = options.preserveWhitespace !== false
		var root
		var currentParent
		var inVPre = false
		var inPre = false
		var warned = false

		function warnOnce (msg) {
			if (!warned) {
				warned = true
				warn$2(msg)
=======
		warn$2 = options.warn || baseWarn;

		platformIsPreTag = options.isPreTag || no;
		platformMustUseProp = options.mustUseProp || no;
		platformGetTagNamespace = options.getTagNamespace || no;

		transforms = pluckModuleFunction(options.modules, 'transformNode');
		preTransforms = pluckModuleFunction(options.modules, 'preTransformNode');
		postTransforms = pluckModuleFunction(options.modules, 'postTransformNode');

		delimiters = options.delimiters;

		var stack = [];
		var preserveWhitespace = options.preserveWhitespace !== false;
		var root;
		var currentParent;
		var inVPre = false;
		var inPre = false;
		var warned = false;

		function warnOnce (msg) {
			if (!warned) {
				warned = true;
				warn$2(msg);
>>>>>>> origin/master
			}
		}

		function closeElement (element) {
			// check pre state
			if (element.pre) {
<<<<<<< HEAD
				inVPre = false
			}
			if (platformIsPreTag(element.tag)) {
				inPre = false
			}
			// apply post-transforms
			for (var i = 0; i < postTransforms.length; i++) {
				postTransforms[i](element, options)
=======
				inVPre = false;
			}
			if (platformIsPreTag(element.tag)) {
				inPre = false;
			}
			// apply post-transforms
			for (var i = 0; i < postTransforms.length; i++) {
				postTransforms[i](element, options);
>>>>>>> origin/master
			}
		}

		parseHTML(template, {
			warn: warn$2,
			expectHTML: options.expectHTML,
			isUnaryTag: options.isUnaryTag,
			canBeLeftOpenTag: options.canBeLeftOpenTag,
			shouldDecodeNewlines: options.shouldDecodeNewlines,
			shouldDecodeNewlinesForHref: options.shouldDecodeNewlinesForHref,
			shouldKeepComment: options.comments,
			start: function start (tag, attrs, unary) {
				// check namespace.
				// inherit parent ns if there is one
<<<<<<< HEAD
				var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag)
=======
				var ns = (currentParent && currentParent.ns) || platformGetTagNamespace(tag);
>>>>>>> origin/master

				// handle IE svg bug
				/* istanbul ignore if */
				if (isIE && ns === 'svg') {
<<<<<<< HEAD
					attrs = guardIESVGBug(attrs)
				}

				var element = createASTElement(tag, attrs, currentParent)
				if (ns) {
					element.ns = ns
				}

				if (isForbiddenTag(element) && !isServerRendering()) {
					element.forbidden = true
					'development' !== 'production' && warn$2(
						'Templates should only be responsible for mapping the state to the ' +
							'UI. Avoid placing tags with side-effects in your templates, such as ' +
							'<' + tag + '>' + ', as they will not be parsed.'
					)
=======
					attrs = guardIESVGBug(attrs);
				}

				var element = createASTElement(tag, attrs, currentParent);
				if (ns) {
					element.ns = ns;
				}

				if (isForbiddenTag(element) && !isServerRendering()) {
					element.forbidden = true;
					"development" !== 'production' && warn$2(
						'Templates should only be responsible for mapping the state to the ' +
						'UI. Avoid placing tags with side-effects in your templates, such as ' +
						"<" + tag + ">" + ', as they will not be parsed.'
					);
>>>>>>> origin/master
				}

				// apply pre-transforms
				for (var i = 0; i < preTransforms.length; i++) {
<<<<<<< HEAD
					element = preTransforms[i](element, options) || element
				}

				if (!inVPre) {
					processPre(element)
					if (element.pre) {
						inVPre = true
					}
				}
				if (platformIsPreTag(element.tag)) {
					inPre = true
				}
				if (inVPre) {
					processRawAttrs(element)
				} else if (!element.processed) {
					// structural directives
					processFor(element)
					processIf(element)
					processOnce(element)
					// element-scope stuff
					processElement(element, options)
=======
					element = preTransforms[i](element, options) || element;
				}

				if (!inVPre) {
					processPre(element);
					if (element.pre) {
						inVPre = true;
					}
				}
				if (platformIsPreTag(element.tag)) {
					inPre = true;
				}
				if (inVPre) {
					processRawAttrs(element);
				} else if (!element.processed) {
					// structural directives
					processFor(element);
					processIf(element);
					processOnce(element);
					// element-scope stuff
					processElement(element, options);
>>>>>>> origin/master
				}

				function checkRootConstraints (el) {
					{
						if (el.tag === 'slot' || el.tag === 'template') {
							warnOnce(
<<<<<<< HEAD
								'Cannot use <' + (el.tag) + '> as component root element because it may ' +
									'contain multiple nodes.'
							)
=======
								"Cannot use <" + (el.tag) + "> as component root element because it may " +
								'contain multiple nodes.'
							);
>>>>>>> origin/master
						}
						if (el.attrsMap.hasOwnProperty('v-for')) {
							warnOnce(
								'Cannot use v-for on stateful component root element because ' +
<<<<<<< HEAD
									'it renders multiple elements.'
							)
=======
								'it renders multiple elements.'
							);
>>>>>>> origin/master
						}
					}
				}

				// tree management
				if (!root) {
<<<<<<< HEAD
					root = element
					checkRootConstraints(root)
				} else if (!stack.length) {
					// allow root elements with v-if, v-else-if and v-else
					if (root.if && (element.elseif || element.else)) {
						checkRootConstraints(element)
						addIfCondition(root, {
							exp: element.elseif,
							block: element
						})
					} else {
						warnOnce(
							'Component template should contain exactly one root element. ' +
								'If you are using v-if on multiple elements, ' +
								'use v-else-if to chain them instead.'
						)
=======
					root = element;
					checkRootConstraints(root);
				} else if (!stack.length) {
					// allow root elements with v-if, v-else-if and v-else
					if (root.if && (element.elseif || element.else)) {
						checkRootConstraints(element);
						addIfCondition(root, {
							exp: element.elseif,
							block: element
						});
					} else {
						warnOnce(
							"Component template should contain exactly one root element. " +
							"If you are using v-if on multiple elements, " +
							"use v-else-if to chain them instead."
						);
>>>>>>> origin/master
					}
				}
				if (currentParent && !element.forbidden) {
					if (element.elseif || element.else) {
<<<<<<< HEAD
						processIfConditions(element, currentParent)
					} else if (element.slotScope) { // scoped slot
						currentParent.plain = false
						var name = element.slotTarget || '"default"'; (currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element
					} else {
						currentParent.children.push(element)
						element.parent = currentParent
					}
				}
				if (!unary) {
					currentParent = element
					stack.push(element)
				} else {
					closeElement(element)
=======
						processIfConditions(element, currentParent);
					} else if (element.slotScope) { // scoped slot
						currentParent.plain = false;
						var name = element.slotTarget || '"default"';(currentParent.scopedSlots || (currentParent.scopedSlots = {}))[name] = element;
					} else {
						currentParent.children.push(element);
						element.parent = currentParent;
					}
				}
				if (!unary) {
					currentParent = element;
					stack.push(element);
				} else {
					closeElement(element);
>>>>>>> origin/master
				}
			},

			end: function end () {
				// remove trailing whitespace
<<<<<<< HEAD
				var element = stack[stack.length - 1]
				var lastNode = element.children[element.children.length - 1]
				if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
					element.children.pop()
				}
				// pop stack
				stack.length -= 1
				currentParent = stack[stack.length - 1]
				closeElement(element)
=======
				var element = stack[stack.length - 1];
				var lastNode = element.children[element.children.length - 1];
				if (lastNode && lastNode.type === 3 && lastNode.text === ' ' && !inPre) {
					element.children.pop();
				}
				// pop stack
				stack.length -= 1;
				currentParent = stack[stack.length - 1];
				closeElement(element);
>>>>>>> origin/master
			},

			chars: function chars (text) {
				if (!currentParent) {
					{
						if (text === template) {
							warnOnce(
								'Component template requires a root element, rather than just text.'
<<<<<<< HEAD
							)
						} else if ((text = text.trim())) {
							warnOnce(
								('text "' + text + '" outside root element will be ignored.')
							)
=======
							);
						} else if ((text = text.trim())) {
							warnOnce(
								("text \"" + text + "\" outside root element will be ignored.")
							);
>>>>>>> origin/master
						}
					}
					return
				}
				// IE textarea placeholder bug
				/* istanbul ignore if */
				if (isIE &&
					currentParent.tag === 'textarea' &&
					currentParent.attrsMap.placeholder === text
				) {
					return
				}
<<<<<<< HEAD
				var children = currentParent.children
				text = inPre || text.trim()
					? isTextTag(currentParent) ? text : decodeHTMLCached(text)
					// only preserve whitespace if its not right after a starting tag
					: preserveWhitespace && children.length ? ' ' : ''
				if (text) {
					var res
=======
				var children = currentParent.children;
				text = inPre || text.trim()
					? isTextTag(currentParent) ? text : decodeHTMLCached(text)
					// only preserve whitespace if its not right after a starting tag
					: preserveWhitespace && children.length ? ' ' : '';
				if (text) {
					var res;
>>>>>>> origin/master
					if (!inVPre && text !== ' ' && (res = parseText(text, delimiters))) {
						children.push({
							type: 2,
							expression: res.expression,
							tokens: res.tokens,
							text: text
<<<<<<< HEAD
						})
=======
						});
>>>>>>> origin/master
					} else if (text !== ' ' || !children.length || children[children.length - 1].text !== ' ') {
						children.push({
							type: 3,
							text: text
<<<<<<< HEAD
						})
=======
						});
>>>>>>> origin/master
					}
				}
			},
			comment: function comment (text) {
				currentParent.children.push({
					type: 3,
					text: text,
					isComment: true
<<<<<<< HEAD
				})
			}
		})
=======
				});
			}
		});
>>>>>>> origin/master
		return root
	}

	function processPre (el) {
		if (getAndRemoveAttr(el, 'v-pre') != null) {
<<<<<<< HEAD
			el.pre = true
=======
			el.pre = true;
>>>>>>> origin/master
		}
	}

	function processRawAttrs (el) {
<<<<<<< HEAD
		var l = el.attrsList.length
		if (l) {
			var attrs = el.attrs = new Array(l)
=======
		var l = el.attrsList.length;
		if (l) {
			var attrs = el.attrs = new Array(l);
>>>>>>> origin/master
			for (var i = 0; i < l; i++) {
				attrs[i] = {
					name: el.attrsList[i].name,
					value: JSON.stringify(el.attrsList[i].value)
<<<<<<< HEAD
				}
			}
		} else if (!el.pre) {
			// non root node in pre blocks with no attributes
			el.plain = true
=======
				};
			}
		} else if (!el.pre) {
			// non root node in pre blocks with no attributes
			el.plain = true;
>>>>>>> origin/master
		}
	}

	function processElement (element, options) {
<<<<<<< HEAD
		processKey(element)

		// determine whether this is a plain element after
		// removing structural attributes
		element.plain = !element.key && !element.attrsList.length

		processRef(element)
		processSlot(element)
		processComponent(element)
		for (var i = 0; i < transforms.length; i++) {
			element = transforms[i](element, options) || element
		}
		processAttrs(element)
	}

	function processKey (el) {
		var exp = getBindingAttr(el, 'key')
		if (exp) {
			if ('development' !== 'production' && el.tag === 'template') {
				warn$2('<template> cannot be keyed. Place the key on real elements instead.')
			}
			el.key = exp
=======
		processKey(element);

		// determine whether this is a plain element after
		// removing structural attributes
		element.plain = !element.key && !element.attrsList.length;

		processRef(element);
		processSlot(element);
		processComponent(element);
		for (var i = 0; i < transforms.length; i++) {
			element = transforms[i](element, options) || element;
		}
		processAttrs(element);
	}

	function processKey (el) {
		var exp = getBindingAttr(el, 'key');
		if (exp) {
			if ("development" !== 'production' && el.tag === 'template') {
				warn$2("<template> cannot be keyed. Place the key on real elements instead.");
			}
			el.key = exp;
>>>>>>> origin/master
		}
	}

	function processRef (el) {
<<<<<<< HEAD
		var ref = getBindingAttr(el, 'ref')
		if (ref) {
			el.ref = ref
			el.refInFor = checkInFor(el)
=======
		var ref = getBindingAttr(el, 'ref');
		if (ref) {
			el.ref = ref;
			el.refInFor = checkInFor(el);
>>>>>>> origin/master
		}
	}

	function processFor (el) {
<<<<<<< HEAD
		var exp
		if ((exp = getAndRemoveAttr(el, 'v-for'))) {
			var res = parseFor(exp)
			if (res) {
				extend(el, res)
			} else {
				warn$2(
					('Invalid v-for expression: ' + exp)
				)
=======
		var exp;
		if ((exp = getAndRemoveAttr(el, 'v-for'))) {
			var res = parseFor(exp);
			if (res) {
				extend(el, res);
			} else {
				warn$2(
					("Invalid v-for expression: " + exp)
				);
>>>>>>> origin/master
			}
		}
	}

<<<<<<< HEAD
	function parseFor (exp) {
		var inMatch = exp.match(forAliasRE)
		if (!inMatch) { return }
		var res = {}
		res.for = inMatch[2].trim()
		var alias = inMatch[1].trim().replace(stripParensRE, '')
		var iteratorMatch = alias.match(forIteratorRE)
		if (iteratorMatch) {
			res.alias = alias.replace(forIteratorRE, '')
			res.iterator1 = iteratorMatch[1].trim()
			if (iteratorMatch[2]) {
				res.iterator2 = iteratorMatch[2].trim()
			}
		} else {
			res.alias = alias
=======


	function parseFor (exp) {
		var inMatch = exp.match(forAliasRE);
		if (!inMatch) { return }
		var res = {};
		res.for = inMatch[2].trim();
		var alias = inMatch[1].trim().replace(stripParensRE, '');
		var iteratorMatch = alias.match(forIteratorRE);
		if (iteratorMatch) {
			res.alias = alias.replace(forIteratorRE, '');
			res.iterator1 = iteratorMatch[1].trim();
			if (iteratorMatch[2]) {
				res.iterator2 = iteratorMatch[2].trim();
			}
		} else {
			res.alias = alias;
>>>>>>> origin/master
		}
		return res
	}

	function processIf (el) {
<<<<<<< HEAD
		var exp = getAndRemoveAttr(el, 'v-if')
		if (exp) {
			el.if = exp
			addIfCondition(el, {
				exp: exp,
				block: el
			})
		} else {
			if (getAndRemoveAttr(el, 'v-else') != null) {
				el.else = true
			}
			var elseif = getAndRemoveAttr(el, 'v-else-if')
			if (elseif) {
				el.elseif = elseif
=======
		var exp = getAndRemoveAttr(el, 'v-if');
		if (exp) {
			el.if = exp;
			addIfCondition(el, {
				exp: exp,
				block: el
			});
		} else {
			if (getAndRemoveAttr(el, 'v-else') != null) {
				el.else = true;
			}
			var elseif = getAndRemoveAttr(el, 'v-else-if');
			if (elseif) {
				el.elseif = elseif;
>>>>>>> origin/master
			}
		}
	}

	function processIfConditions (el, parent) {
<<<<<<< HEAD
		var prev = findPrevElement(parent.children)
=======
		var prev = findPrevElement(parent.children);
>>>>>>> origin/master
		if (prev && prev.if) {
			addIfCondition(prev, {
				exp: el.elseif,
				block: el
<<<<<<< HEAD
			})
		} else {
			warn$2(
				'v-' + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + ' ' +
					'used on element <' + (el.tag) + '> without corresponding v-if.'
			)
=======
			});
		} else {
			warn$2(
				"v-" + (el.elseif ? ('else-if="' + el.elseif + '"') : 'else') + " " +
				"used on element <" + (el.tag) + "> without corresponding v-if."
			);
>>>>>>> origin/master
		}
	}

	function findPrevElement (children) {
<<<<<<< HEAD
		var i = children.length
=======
		var i = children.length;
>>>>>>> origin/master
		while (i--) {
			if (children[i].type === 1) {
				return children[i]
			} else {
<<<<<<< HEAD
				if ('development' !== 'production' && children[i].text !== ' ') {
					warn$2(
						'text "' + (children[i].text.trim()) + '" between v-if and v-else(-if) ' +
							'will be ignored.'
					)
				}
				children.pop()
=======
				if ("development" !== 'production' && children[i].text !== ' ') {
					warn$2(
						"text \"" + (children[i].text.trim()) + "\" between v-if and v-else(-if) " +
						"will be ignored."
					);
				}
				children.pop();
>>>>>>> origin/master
			}
		}
	}

	function addIfCondition (el, condition) {
		if (!el.ifConditions) {
<<<<<<< HEAD
			el.ifConditions = []
		}
		el.ifConditions.push(condition)
	}

	function processOnce (el) {
		var once$$1 = getAndRemoveAttr(el, 'v-once')
		if (once$$1 != null) {
			el.once = true
=======
			el.ifConditions = [];
		}
		el.ifConditions.push(condition);
	}

	function processOnce (el) {
		var once$$1 = getAndRemoveAttr(el, 'v-once');
		if (once$$1 != null) {
			el.once = true;
>>>>>>> origin/master
		}
	}

	function processSlot (el) {
		if (el.tag === 'slot') {
<<<<<<< HEAD
			el.slotName = getBindingAttr(el, 'name')
			if ('development' !== 'production' && el.key) {
				warn$2(
					'`key` does not work on <slot> because slots are abstract outlets ' +
						'and can possibly expand into multiple elements. ' +
						'Use the key on a wrapping element instead.'
				)
			}
		} else {
			var slotScope
			if (el.tag === 'template') {
				slotScope = getAndRemoveAttr(el, 'scope')
				/* istanbul ignore if */
				if ('development' !== 'production' && slotScope) {
					warn$2(
						'the "scope" attribute for scoped slots have been deprecated and ' +
							'replaced by "slot-scope" since 2.5. The new "slot-scope" attribute ' +
							'can also be used on plain elements in addition to <template> to ' +
							'denote scoped slots.',
						true
					)
				}
				el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope')
			} else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
				/* istanbul ignore if */
				if ('development' !== 'production' && el.attrsMap['v-for']) {
					warn$2(
						'Ambiguous combined usage of slot-scope and v-for on <' + (el.tag) + '> ' +
							'(v-for takes higher priority). Use a wrapper <template> for the ' +
							'scoped slot to make it clearer.',
						true
					)
				}
				el.slotScope = slotScope
			}
			var slotTarget = getBindingAttr(el, 'slot')
			if (slotTarget) {
				el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget
				// preserve slot as an attribute for native shadow DOM compat
				// only for non-scoped slots.
				if (el.tag !== 'template' && !el.slotScope) {
					addAttr(el, 'slot', slotTarget)
=======
			el.slotName = getBindingAttr(el, 'name');
			if ("development" !== 'production' && el.key) {
				warn$2(
					"`key` does not work on <slot> because slots are abstract outlets " +
					"and can possibly expand into multiple elements. " +
					"Use the key on a wrapping element instead."
				);
			}
		} else {
			var slotScope;
			if (el.tag === 'template') {
				slotScope = getAndRemoveAttr(el, 'scope');
				/* istanbul ignore if */
				if ("development" !== 'production' && slotScope) {
					warn$2(
						"the \"scope\" attribute for scoped slots have been deprecated and " +
						"replaced by \"slot-scope\" since 2.5. The new \"slot-scope\" attribute " +
						"can also be used on plain elements in addition to <template> to " +
						"denote scoped slots.",
						true
					);
				}
				el.slotScope = slotScope || getAndRemoveAttr(el, 'slot-scope');
			} else if ((slotScope = getAndRemoveAttr(el, 'slot-scope'))) {
				/* istanbul ignore if */
				if ("development" !== 'production' && el.attrsMap['v-for']) {
					warn$2(
						"Ambiguous combined usage of slot-scope and v-for on <" + (el.tag) + "> " +
						"(v-for takes higher priority). Use a wrapper <template> for the " +
						"scoped slot to make it clearer.",
						true
					);
				}
				el.slotScope = slotScope;
			}
			var slotTarget = getBindingAttr(el, 'slot');
			if (slotTarget) {
				el.slotTarget = slotTarget === '""' ? '"default"' : slotTarget;
				// preserve slot as an attribute for native shadow DOM compat
				// only for non-scoped slots.
				if (el.tag !== 'template' && !el.slotScope) {
					addAttr(el, 'slot', slotTarget);
>>>>>>> origin/master
				}
			}
		}
	}

	function processComponent (el) {
<<<<<<< HEAD
		var binding
		if ((binding = getBindingAttr(el, 'is'))) {
			el.component = binding
		}
		if (getAndRemoveAttr(el, 'inline-template') != null) {
			el.inlineTemplate = true
=======
		var binding;
		if ((binding = getBindingAttr(el, 'is'))) {
			el.component = binding;
		}
		if (getAndRemoveAttr(el, 'inline-template') != null) {
			el.inlineTemplate = true;
>>>>>>> origin/master
		}
	}

	function processAttrs (el) {
<<<<<<< HEAD
		var list = el.attrsList
		var i, l, name, rawName, value, modifiers, isProp
		for (i = 0, l = list.length; i < l; i++) {
			name = rawName = list[i].name
			value = list[i].value
			if (dirRE.test(name)) {
				// mark element as dynamic
				el.hasBindings = true
				// modifiers
				modifiers = parseModifiers(name)
				if (modifiers) {
					name = name.replace(modifierRE, '')
				}
				if (bindRE.test(name)) { // v-bind
					name = name.replace(bindRE, '')
					value = parseFilters(value)
					isProp = false
					if (modifiers) {
						if (modifiers.prop) {
							isProp = true
							name = camelize(name)
							if (name === 'innerHtml') { name = 'innerHTML' }
						}
						if (modifiers.camel) {
							name = camelize(name)
=======
		var list = el.attrsList;
		var i, l, name, rawName, value, modifiers, isProp;
		for (i = 0, l = list.length; i < l; i++) {
			name = rawName = list[i].name;
			value = list[i].value;
			if (dirRE.test(name)) {
				// mark element as dynamic
				el.hasBindings = true;
				// modifiers
				modifiers = parseModifiers(name);
				if (modifiers) {
					name = name.replace(modifierRE, '');
				}
				if (bindRE.test(name)) { // v-bind
					name = name.replace(bindRE, '');
					value = parseFilters(value);
					isProp = false;
					if (modifiers) {
						if (modifiers.prop) {
							isProp = true;
							name = camelize(name);
							if (name === 'innerHtml') { name = 'innerHTML'; }
						}
						if (modifiers.camel) {
							name = camelize(name);
>>>>>>> origin/master
						}
						if (modifiers.sync) {
							addHandler(
								el,
<<<<<<< HEAD
								('update:' + (camelize(name))),
								genAssignmentCode(value, '$event')
							)
=======
								("update:" + (camelize(name))),
								genAssignmentCode(value, "$event")
							);
>>>>>>> origin/master
						}
					}
					if (isProp || (
						!el.component && platformMustUseProp(el.tag, el.attrsMap.type, name)
					)) {
<<<<<<< HEAD
						addProp(el, name, value)
					} else {
						addAttr(el, name, value)
					}
				} else if (onRE.test(name)) { // v-on
					name = name.replace(onRE, '')
					addHandler(el, name, value, modifiers, false, warn$2)
				} else { // normal directives
					name = name.replace(dirRE, '')
					// parse arg
					var argMatch = name.match(argRE)
					var arg = argMatch && argMatch[1]
					if (arg) {
						name = name.slice(0, -(arg.length + 1))
					}
					addDirective(el, name, rawName, value, arg, modifiers)
					if ('development' !== 'production' && name === 'model') {
						checkForAliasModel(el, value)
=======
						addProp(el, name, value);
					} else {
						addAttr(el, name, value);
					}
				} else if (onRE.test(name)) { // v-on
					name = name.replace(onRE, '');
					addHandler(el, name, value, modifiers, false, warn$2);
				} else { // normal directives
					name = name.replace(dirRE, '');
					// parse arg
					var argMatch = name.match(argRE);
					var arg = argMatch && argMatch[1];
					if (arg) {
						name = name.slice(0, -(arg.length + 1));
					}
					addDirective(el, name, rawName, value, arg, modifiers);
					if ("development" !== 'production' && name === 'model') {
						checkForAliasModel(el, value);
>>>>>>> origin/master
					}
				}
			} else {
				// literal attribute
				{
<<<<<<< HEAD
					var res = parseText(value, delimiters)
					if (res) {
						warn$2(
							name + '="' + value + '": ' +
								'Interpolation inside attributes has been removed. ' +
								'Use v-bind or the colon shorthand instead. For example, ' +
								'instead of <div id="{{ val }}">, use <div :id="val">.'
						)
					}
				}
				addAttr(el, name, JSON.stringify(value))
=======
					var res = parseText(value, delimiters);
					if (res) {
						warn$2(
							name + "=\"" + value + "\": " +
							'Interpolation inside attributes has been removed. ' +
							'Use v-bind or the colon shorthand instead. For example, ' +
							'instead of <div id="{{ val }}">, use <div :id="val">.'
						);
					}
				}
				addAttr(el, name, JSON.stringify(value));
>>>>>>> origin/master
				// #6887 firefox doesn't update muted state if set via attribute
				// even immediately after element creation
				if (!el.component &&
					name === 'muted' &&
					platformMustUseProp(el.tag, el.attrsMap.type, name)) {
<<<<<<< HEAD
						addProp(el, name, 'true')
					}
=======
					addProp(el, name, 'true');
				}
>>>>>>> origin/master
			}
		}
	}

	function checkInFor (el) {
<<<<<<< HEAD
		var parent = el
=======
		var parent = el;
>>>>>>> origin/master
		while (parent) {
			if (parent.for !== undefined) {
				return true
			}
<<<<<<< HEAD
			parent = parent.parent
=======
			parent = parent.parent;
>>>>>>> origin/master
		}
		return false
	}

	function parseModifiers (name) {
<<<<<<< HEAD
		var match = name.match(modifierRE)
		if (match) {
			var ret = {}
			match.forEach(function (m) { ret[m.slice(1)] = true })
=======
		var match = name.match(modifierRE);
		if (match) {
			var ret = {};
			match.forEach(function (m) { ret[m.slice(1)] = true; });
>>>>>>> origin/master
			return ret
		}
	}

	function makeAttrsMap (attrs) {
<<<<<<< HEAD
		var map = {}
		for (var i = 0, l = attrs.length; i < l; i++) {
			if (
				'development' !== 'production' &&
				map[attrs[i].name] && !isIE && !isEdge
			) {
				warn$2('duplicate attribute: ' + attrs[i].name)
			}
			map[attrs[i].name] = attrs[i].value
=======
		var map = {};
		for (var i = 0, l = attrs.length; i < l; i++) {
			if (
				"development" !== 'production' &&
				map[attrs[i].name] && !isIE && !isEdge
			) {
				warn$2('duplicate attribute: ' + attrs[i].name);
			}
			map[attrs[i].name] = attrs[i].value;
>>>>>>> origin/master
		}
		return map
	}

<<<<<<< HEAD
	// for script (e.g. type="x/template") or style, do not decode content
=======
// for script (e.g. type="x/template") or style, do not decode content
>>>>>>> origin/master
	function isTextTag (el) {
		return el.tag === 'script' || el.tag === 'style'
	}

	function isForbiddenTag (el) {
		return (
			el.tag === 'style' ||
			(el.tag === 'script' && (
<<<<<<< HEAD
			!el.attrsMap.type ||
			el.attrsMap.type === 'text/javascript'
=======
				!el.attrsMap.type ||
				el.attrsMap.type === 'text/javascript'
>>>>>>> origin/master
			))
		)
	}

<<<<<<< HEAD
	var ieNSBug = /^xmlns:NS\d+/
	var ieNSPrefix = /^NS\d+:/

	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
		var res = []
		for (var i = 0; i < attrs.length; i++) {
			var attr = attrs[i]
			if (!ieNSBug.test(attr.name)) {
				attr.name = attr.name.replace(ieNSPrefix, '')
				res.push(attr)
=======
	var ieNSBug = /^xmlns:NS\d+/;
	var ieNSPrefix = /^NS\d+:/;

	/* istanbul ignore next */
	function guardIESVGBug (attrs) {
		var res = [];
		for (var i = 0; i < attrs.length; i++) {
			var attr = attrs[i];
			if (!ieNSBug.test(attr.name)) {
				attr.name = attr.name.replace(ieNSPrefix, '');
				res.push(attr);
>>>>>>> origin/master
			}
		}
		return res
	}

	function checkForAliasModel (el, value) {
<<<<<<< HEAD
		var _el = el
		while (_el) {
			if (_el.for && _el.alias === value) {
				warn$2(
					'<' + (el.tag) + ' v-model="' + value + '">: ' +
						'You are binding v-model directly to a v-for iteration alias. ' +
						'This will not be able to modify the v-for source array because ' +
						'writing to the alias is like modifying a function local variable. ' +
						'Consider using an array of objects and use v-model on an object property instead.'
				)
			}
			_el = _el.parent
=======
		var _el = el;
		while (_el) {
			if (_el.for && _el.alias === value) {
				warn$2(
					"<" + (el.tag) + " v-model=\"" + value + "\">: " +
					"You are binding v-model directly to a v-for iteration alias. " +
					"This will not be able to modify the v-for source array because " +
					"writing to the alias is like modifying a function local variable. " +
					"Consider using an array of objects and use v-model on an object property instead."
				);
			}
			_el = _el.parent;
>>>>>>> origin/master
		}
	}

	/*  */

	/**
	 * Expand input[v-model] with dyanmic type bindings into v-if-else chains
	 * Turn this:
	 *   <input v-model="data[type]" :type="type">
	 * into this:
	 *   <input v-if="type === 'checkbox'" type="checkbox" v-model="data[type]">
	 *   <input v-else-if="type === 'radio'" type="radio" v-model="data[type]">
	 *   <input v-else :type="type" v-model="data[type]">
	 */

	function preTransformNode (el, options) {
		if (el.tag === 'input') {
<<<<<<< HEAD
			var map = el.attrsMap
=======
			var map = el.attrsMap;
>>>>>>> origin/master
			if (!map['v-model']) {
				return
			}

<<<<<<< HEAD
			var typeBinding
			if (map[':type'] || map['v-bind:type']) {
				typeBinding = getBindingAttr(el, 'type')
			}
			if (!map.type && !typeBinding && map['v-bind']) {
				typeBinding = '(' + (map['v-bind']) + ').type'
			}

			if (typeBinding) {
				var ifCondition = getAndRemoveAttr(el, 'v-if', true)
				var ifConditionExtra = ifCondition ? ('&&(' + ifCondition + ')') : ''
				var hasElse = getAndRemoveAttr(el, 'v-else', true) != null
				var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true)
				// 1. checkbox
				var branch0 = cloneASTElement(el)
				// process for on the main node
				processFor(branch0)
				addRawAttr(branch0, 'type', 'checkbox')
				processElement(branch0, options)
				branch0.processed = true // prevent it from double-processed
				branch0.if = '(' + typeBinding + ")==='checkbox'" + ifConditionExtra
				addIfCondition(branch0, {
					exp: branch0.if,
					block: branch0
				})
				// 2. add radio else-if condition
				var branch1 = cloneASTElement(el)
				getAndRemoveAttr(branch1, 'v-for', true)
				addRawAttr(branch1, 'type', 'radio')
				processElement(branch1, options)
				addIfCondition(branch0, {
					exp: '(' + typeBinding + ")==='radio'" + ifConditionExtra,
					block: branch1
				})
				// 3. other
				var branch2 = cloneASTElement(el)
				getAndRemoveAttr(branch2, 'v-for', true)
				addRawAttr(branch2, ':type', typeBinding)
				processElement(branch2, options)
				addIfCondition(branch0, {
					exp: ifCondition,
					block: branch2
				})

				if (hasElse) {
					branch0.else = true
				} else if (elseIfCondition) {
					branch0.elseif = elseIfCondition
=======
			var typeBinding;
			if (map[':type'] || map['v-bind:type']) {
				typeBinding = getBindingAttr(el, 'type');
			}
			if (!map.type && !typeBinding && map['v-bind']) {
				typeBinding = "(" + (map['v-bind']) + ").type";
			}

			if (typeBinding) {
				var ifCondition = getAndRemoveAttr(el, 'v-if', true);
				var ifConditionExtra = ifCondition ? ("&&(" + ifCondition + ")") : "";
				var hasElse = getAndRemoveAttr(el, 'v-else', true) != null;
				var elseIfCondition = getAndRemoveAttr(el, 'v-else-if', true);
				// 1. checkbox
				var branch0 = cloneASTElement(el);
				// process for on the main node
				processFor(branch0);
				addRawAttr(branch0, 'type', 'checkbox');
				processElement(branch0, options);
				branch0.processed = true; // prevent it from double-processed
				branch0.if = "(" + typeBinding + ")==='checkbox'" + ifConditionExtra;
				addIfCondition(branch0, {
					exp: branch0.if,
					block: branch0
				});
				// 2. add radio else-if condition
				var branch1 = cloneASTElement(el);
				getAndRemoveAttr(branch1, 'v-for', true);
				addRawAttr(branch1, 'type', 'radio');
				processElement(branch1, options);
				addIfCondition(branch0, {
					exp: "(" + typeBinding + ")==='radio'" + ifConditionExtra,
					block: branch1
				});
				// 3. other
				var branch2 = cloneASTElement(el);
				getAndRemoveAttr(branch2, 'v-for', true);
				addRawAttr(branch2, ':type', typeBinding);
				processElement(branch2, options);
				addIfCondition(branch0, {
					exp: ifCondition,
					block: branch2
				});

				if (hasElse) {
					branch0.else = true;
				} else if (elseIfCondition) {
					branch0.elseif = elseIfCondition;
>>>>>>> origin/master
				}

				return branch0
			}
		}
	}

	function cloneASTElement (el) {
		return createASTElement(el.tag, el.attrsList.slice(), el.parent)
	}

	var model$2 = {
		preTransformNode: preTransformNode
	}

	var modules$1 = [
		klass$1,
		style$1,
		model$2
	]

	/*  */

	function text (el, dir) {
		if (dir.value) {
<<<<<<< HEAD
			addProp(el, 'textContent', ('_s(' + (dir.value) + ')'))
=======
			addProp(el, 'textContent', ("_s(" + (dir.value) + ")"));
>>>>>>> origin/master
		}
	}

	/*  */

	function html (el, dir) {
		if (dir.value) {
<<<<<<< HEAD
			addProp(el, 'innerHTML', ('_s(' + (dir.value) + ')'))
=======
			addProp(el, 'innerHTML', ("_s(" + (dir.value) + ")"));
>>>>>>> origin/master
		}
	}

	var directives$1 = {
		model: model,
		text: text,
		html: html
	}

	/*  */

	var baseOptions = {
		expectHTML: true,
		modules: modules$1,
		directives: directives$1,
		isPreTag: isPreTag,
		isUnaryTag: isUnaryTag,
		mustUseProp: mustUseProp,
		canBeLeftOpenTag: canBeLeftOpenTag,
		isReservedTag: isReservedTag,
		getTagNamespace: getTagNamespace,
		staticKeys: genStaticKeys(modules$1)
<<<<<<< HEAD
	}

	/*  */

	var isStaticKey
	var isPlatformReservedTag

	var genStaticKeysCached = cached(genStaticKeys$1)
=======
	};

	/*  */

	var isStaticKey;
	var isPlatformReservedTag;

	var genStaticKeysCached = cached(genStaticKeys$1);
>>>>>>> origin/master

	/**
	 * Goal of the optimizer: walk the generated template AST tree
	 * and detect sub-trees that are purely static, i.e. parts of
	 * the DOM that never needs to change.
	 *
	 * Once we detect these sub-trees, we can:
	 *
	 * 1. Hoist them into constants, so that we no longer need to
	 *    create fresh nodes for them on each re-render;
	 * 2. Completely skip them in the patching process.
	 */
	function optimize (root, options) {
		if (!root) { return }
<<<<<<< HEAD
		isStaticKey = genStaticKeysCached(options.staticKeys || '')
		isPlatformReservedTag = options.isReservedTag || no
		// first pass: mark all non-static nodes.
		markStatic$1(root)
		// second pass: mark static roots.
		markStaticRoots(root, false)
=======
		isStaticKey = genStaticKeysCached(options.staticKeys || '');
		isPlatformReservedTag = options.isReservedTag || no;
		// first pass: mark all non-static nodes.
		markStatic$1(root);
		// second pass: mark static roots.
		markStaticRoots(root, false);
>>>>>>> origin/master
	}

	function genStaticKeys$1 (keys) {
		return makeMap(
			'type,tag,attrsList,attrsMap,plain,parent,children,attrs' +
<<<<<<< HEAD
				(keys ? ',' + keys : '')
=======
			(keys ? ',' + keys : '')
>>>>>>> origin/master
		)
	}

	function markStatic$1 (node) {
<<<<<<< HEAD
		node.static = isStatic(node)
=======
		node.static = isStatic(node);
>>>>>>> origin/master
		if (node.type === 1) {
			// do not make component slot content static. this avoids
			// 1. components not able to mutate slot nodes
			// 2. static slot content fails for hot-reloading
			if (
				!isPlatformReservedTag(node.tag) &&
				node.tag !== 'slot' &&
				node.attrsMap['inline-template'] == null
			) {
				return
			}
			for (var i = 0, l = node.children.length; i < l; i++) {
<<<<<<< HEAD
				var child = node.children[i]
				markStatic$1(child)
				if (!child.static) {
					node.static = false
=======
				var child = node.children[i];
				markStatic$1(child);
				if (!child.static) {
					node.static = false;
>>>>>>> origin/master
				}
			}
			if (node.ifConditions) {
				for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
<<<<<<< HEAD
					var block = node.ifConditions[i$1].block
					markStatic$1(block)
					if (!block.static) {
						node.static = false
=======
					var block = node.ifConditions[i$1].block;
					markStatic$1(block);
					if (!block.static) {
						node.static = false;
>>>>>>> origin/master
					}
				}
			}
		}
	}

	function markStaticRoots (node, isInFor) {
		if (node.type === 1) {
			if (node.static || node.once) {
<<<<<<< HEAD
				node.staticInFor = isInFor
=======
				node.staticInFor = isInFor;
>>>>>>> origin/master
			}
			// For a node to qualify as a static root, it should have children that
			// are not just static text. Otherwise the cost of hoisting out will
			// outweigh the benefits and it's better off to just always render it fresh.
			if (node.static && node.children.length && !(
				node.children.length === 1 &&
				node.children[0].type === 3
			)) {
<<<<<<< HEAD
				node.staticRoot = true
				return
			} else {
				node.staticRoot = false
			}
			if (node.children) {
				for (var i = 0, l = node.children.length; i < l; i++) {
					markStaticRoots(node.children[i], isInFor || !!node.for)
=======
				node.staticRoot = true;
				return
			} else {
				node.staticRoot = false;
			}
			if (node.children) {
				for (var i = 0, l = node.children.length; i < l; i++) {
					markStaticRoots(node.children[i], isInFor || !!node.for);
>>>>>>> origin/master
				}
			}
			if (node.ifConditions) {
				for (var i$1 = 1, l$1 = node.ifConditions.length; i$1 < l$1; i$1++) {
<<<<<<< HEAD
					markStaticRoots(node.ifConditions[i$1].block, isInFor)
=======
					markStaticRoots(node.ifConditions[i$1].block, isInFor);
>>>>>>> origin/master
				}
			}
		}
	}

	function isStatic (node) {
		if (node.type === 2) { // expression
			return false
		}
		if (node.type === 3) { // text
			return true
		}
		return !!(node.pre || (
			!node.hasBindings && // no dynamic bindings
			!node.if && !node.for && // not v-if or v-for or v-else
			!isBuiltInTag(node.tag) && // not a built-in
			isPlatformReservedTag(node.tag) && // not a component
			!isDirectChildOfTemplateFor(node) &&
			Object.keys(node).every(isStaticKey)
		))
	}

	function isDirectChildOfTemplateFor (node) {
		while (node.parent) {
<<<<<<< HEAD
			node = node.parent
=======
			node = node.parent;
>>>>>>> origin/master
			if (node.tag !== 'template') {
				return false
			}
			if (node.for) {
				return true
			}
		}
		return false
	}

	/*  */

<<<<<<< HEAD
	var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/
	var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/

	// KeyboardEvent.keyCode aliases
=======
	var fnExpRE = /^([\w$_]+|\([^)]*?\))\s*=>|^function\s*\(/;
	var simplePathRE = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/;

// KeyboardEvent.keyCode aliases
>>>>>>> origin/master
	var keyCodes = {
		esc: 27,
		tab: 9,
		enter: 13,
		space: 32,
		up: 38,
		left: 37,
		right: 39,
		down: 40,
		'delete': [8, 46]
<<<<<<< HEAD
	}

	// KeyboardEvent.key aliases
=======
	};

// KeyboardEvent.key aliases
>>>>>>> origin/master
	var keyNames = {
		esc: 'Escape',
		tab: 'Tab',
		enter: 'Enter',
		space: ' ',
		// #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
		up: ['Up', 'ArrowUp'],
		left: ['Left', 'ArrowLeft'],
		right: ['Right', 'ArrowRight'],
		down: ['Down', 'ArrowDown'],
		'delete': ['Backspace', 'Delete']
<<<<<<< HEAD
	}

	// #4868: modifiers that prevent the execution of the listener
	// need to explicitly return null so that we can determine whether to remove
	// the listener for .once
	var genGuard = function (condition) { return ('if(' + condition + ')return null;') }
=======
	};

// #4868: modifiers that prevent the execution of the listener
// need to explicitly return null so that we can determine whether to remove
// the listener for .once
	var genGuard = function (condition) { return ("if(" + condition + ")return null;"); };
>>>>>>> origin/master

	var modifierCode = {
		stop: '$event.stopPropagation();',
		prevent: '$event.preventDefault();',
<<<<<<< HEAD
		self: genGuard('$event.target !== $event.currentTarget'),
		ctrl: genGuard('!$event.ctrlKey'),
		shift: genGuard('!$event.shiftKey'),
		alt: genGuard('!$event.altKey'),
		meta: genGuard('!$event.metaKey'),
		left: genGuard("'button' in $event && $event.button !== 0"),
		middle: genGuard("'button' in $event && $event.button !== 1"),
		right: genGuard("'button' in $event && $event.button !== 2")
	}
=======
		self: genGuard("$event.target !== $event.currentTarget"),
		ctrl: genGuard("!$event.ctrlKey"),
		shift: genGuard("!$event.shiftKey"),
		alt: genGuard("!$event.altKey"),
		meta: genGuard("!$event.metaKey"),
		left: genGuard("'button' in $event && $event.button !== 0"),
		middle: genGuard("'button' in $event && $event.button !== 1"),
		right: genGuard("'button' in $event && $event.button !== 2")
	};
>>>>>>> origin/master

	function genHandlers (
		events,
		isNative,
		warn
	) {
<<<<<<< HEAD
		var res = isNative ? 'nativeOn:{' : 'on:{'
		for (var name in events) {
			res += '"' + name + '":' + (genHandler(name, events[name])) + ','
=======
		var res = isNative ? 'nativeOn:{' : 'on:{';
		for (var name in events) {
			res += "\"" + name + "\":" + (genHandler(name, events[name])) + ",";
>>>>>>> origin/master
		}
		return res.slice(0, -1) + '}'
	}

	function genHandler (
		name,
		handler
	) {
		if (!handler) {
			return 'function(){}'
		}

		if (Array.isArray(handler)) {
<<<<<<< HEAD
			return ('[' + (handler.map(function (handler) { return genHandler(name, handler) }).join(',')) + ']')
		}

		var isMethodPath = simplePathRE.test(handler.value)
		var isFunctionExpression = fnExpRE.test(handler.value)
=======
			return ("[" + (handler.map(function (handler) { return genHandler(name, handler); }).join(',')) + "]")
		}

		var isMethodPath = simplePathRE.test(handler.value);
		var isFunctionExpression = fnExpRE.test(handler.value);
>>>>>>> origin/master

		if (!handler.modifiers) {
			if (isMethodPath || isFunctionExpression) {
				return handler.value
			}
			/* istanbul ignore if */
<<<<<<< HEAD
			return ('function($event){' + (handler.value) + '}') // inline statement
		} else {
			var code = ''
			var genModifierCode = ''
			var keys = []
			for (var key in handler.modifiers) {
				if (modifierCode[key]) {
					genModifierCode += modifierCode[key]
					// left/right
					if (keyCodes[key]) {
						keys.push(key)
					}
				} else if (key === 'exact') {
					var modifiers = (handler.modifiers)
					genModifierCode += genGuard(
						['ctrl', 'shift', 'alt', 'meta']
							.filter(function (keyModifier) { return !modifiers[keyModifier] })
							.map(function (keyModifier) { return ('$event.' + keyModifier + 'Key') })
							.join('||')
					)
				} else {
					keys.push(key)
				}
			}
			if (keys.length) {
				code += genKeyFilter(keys)
			}
			// Make sure modifiers like prevent and stop get executed after key filtering
			if (genModifierCode) {
				code += genModifierCode
			}
			var handlerCode = isMethodPath
				? ('return ' + (handler.value) + '($event)')
				: isFunctionExpression
					? ('return (' + (handler.value) + ')($event)')
					: handler.value
			/* istanbul ignore if */
			return ('function($event){' + code + handlerCode + '}')
=======
			return ("function($event){" + (handler.value) + "}") // inline statement
		} else {
			var code = '';
			var genModifierCode = '';
			var keys = [];
			for (var key in handler.modifiers) {
				if (modifierCode[key]) {
					genModifierCode += modifierCode[key];
					// left/right
					if (keyCodes[key]) {
						keys.push(key);
					}
				} else if (key === 'exact') {
					var modifiers = (handler.modifiers);
					genModifierCode += genGuard(
						['ctrl', 'shift', 'alt', 'meta']
							.filter(function (keyModifier) { return !modifiers[keyModifier]; })
							.map(function (keyModifier) { return ("$event." + keyModifier + "Key"); })
							.join('||')
					);
				} else {
					keys.push(key);
				}
			}
			if (keys.length) {
				code += genKeyFilter(keys);
			}
			// Make sure modifiers like prevent and stop get executed after key filtering
			if (genModifierCode) {
				code += genModifierCode;
			}
			var handlerCode = isMethodPath
				? ("return " + (handler.value) + "($event)")
				: isFunctionExpression
					? ("return (" + (handler.value) + ")($event)")
					: handler.value;
			/* istanbul ignore if */
			return ("function($event){" + code + handlerCode + "}")
>>>>>>> origin/master
		}
	}

	function genKeyFilter (keys) {
<<<<<<< HEAD
		return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ')return null;')
	}

	function genFilterCode (key) {
		var keyVal = parseInt(key, 10)
		if (keyVal) {
			return ('$event.keyCode!==' + keyVal)
		}
		var keyCode = keyCodes[key]
		var keyName = keyNames[key]
		return (
			'_k($event.keyCode,' +
			(JSON.stringify(key)) + ',' +
			(JSON.stringify(keyCode)) + ',' +
			'$event.key,' +
			'' + (JSON.stringify(keyName)) +
			')'
=======
		return ("if(!('button' in $event)&&" + (keys.map(genFilterCode).join('&&')) + ")return null;")
	}

	function genFilterCode (key) {
		var keyVal = parseInt(key, 10);
		if (keyVal) {
			return ("$event.keyCode!==" + keyVal)
		}
		var keyCode = keyCodes[key];
		var keyName = keyNames[key];
		return (
			"_k($event.keyCode," +
			(JSON.stringify(key)) + "," +
			(JSON.stringify(keyCode)) + "," +
			"$event.key," +
			"" + (JSON.stringify(keyName)) +
			")"
>>>>>>> origin/master
		)
	}

	/*  */

	function on (el, dir) {
<<<<<<< HEAD
		if ('development' !== 'production' && dir.modifiers) {
			warn('v-on without argument does not support modifiers.')
		}
		el.wrapListeners = function (code) { return ('_g(' + code + ',' + (dir.value) + ')') }
=======
		if ("development" !== 'production' && dir.modifiers) {
			warn("v-on without argument does not support modifiers.");
		}
		el.wrapListeners = function (code) { return ("_g(" + code + "," + (dir.value) + ")"); };
>>>>>>> origin/master
	}

	/*  */

	function bind$1 (el, dir) {
		el.wrapData = function (code) {
<<<<<<< HEAD
			return ('_b(' + code + ",'" + (el.tag) + "'," + (dir.value) + ',' + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ')')
		}
=======
			return ("_b(" + code + ",'" + (el.tag) + "'," + (dir.value) + "," + (dir.modifiers && dir.modifiers.prop ? 'true' : 'false') + (dir.modifiers && dir.modifiers.sync ? ',true' : '') + ")")
		};
>>>>>>> origin/master
	}

	/*  */

	var baseDirectives = {
		on: on,
		bind: bind$1,
		cloak: noop
	}

	/*  */

	var CodegenState = function CodegenState (options) {
<<<<<<< HEAD
		this.options = options
		this.warn = options.warn || baseWarn
		this.transforms = pluckModuleFunction(options.modules, 'transformCode')
		this.dataGenFns = pluckModuleFunction(options.modules, 'genData')
		this.directives = extend(extend({}, baseDirectives), options.directives)
		var isReservedTag = options.isReservedTag || no
		this.maybeComponent = function (el) { return !isReservedTag(el.tag) }
		this.onceId = 0
		this.staticRenderFns = []
	}
=======
		this.options = options;
		this.warn = options.warn || baseWarn;
		this.transforms = pluckModuleFunction(options.modules, 'transformCode');
		this.dataGenFns = pluckModuleFunction(options.modules, 'genData');
		this.directives = extend(extend({}, baseDirectives), options.directives);
		var isReservedTag = options.isReservedTag || no;
		this.maybeComponent = function (el) { return !isReservedTag(el.tag); };
		this.onceId = 0;
		this.staticRenderFns = [];
	};


>>>>>>> origin/master

	function generate (
		ast,
		options
	) {
<<<<<<< HEAD
		var state = new CodegenState(options)
		var code = ast ? genElement(ast, state) : '_c("div")'
		return {
			render: ('with(this){return ' + code + '}'),
=======
		var state = new CodegenState(options);
		var code = ast ? genElement(ast, state) : '_c("div")';
		return {
			render: ("with(this){return " + code + "}"),
>>>>>>> origin/master
			staticRenderFns: state.staticRenderFns
		}
	}

	function genElement (el, state) {
		if (el.staticRoot && !el.staticProcessed) {
			return genStatic(el, state)
		} else if (el.once && !el.onceProcessed) {
			return genOnce(el, state)
		} else if (el.for && !el.forProcessed) {
			return genFor(el, state)
		} else if (el.if && !el.ifProcessed) {
			return genIf(el, state)
		} else if (el.tag === 'template' && !el.slotTarget) {
			return genChildren(el, state) || 'void 0'
		} else if (el.tag === 'slot') {
			return genSlot(el, state)
		} else {
			// component or element
<<<<<<< HEAD
			var code
			if (el.component) {
				code = genComponent(el.component, el, state)
			} else {
				var data = el.plain ? undefined : genData$2(el, state)

				var children = el.inlineTemplate ? null : genChildren(el, state, true)
				code = "_c('" + (el.tag) + "'" + (data ? (',' + data) : '') + (children ? (',' + children) : '') + ')'
			}
			// module transforms
			for (var i = 0; i < state.transforms.length; i++) {
				code = state.transforms[i](el, code)
=======
			var code;
			if (el.component) {
				code = genComponent(el.component, el, state);
			} else {
				var data = el.plain ? undefined : genData$2(el, state);

				var children = el.inlineTemplate ? null : genChildren(el, state, true);
				code = "_c('" + (el.tag) + "'" + (data ? ("," + data) : '') + (children ? ("," + children) : '') + ")";
			}
			// module transforms
			for (var i = 0; i < state.transforms.length; i++) {
				code = state.transforms[i](el, code);
>>>>>>> origin/master
			}
			return code
		}
	}

<<<<<<< HEAD
	// hoist static sub-trees out
	function genStatic (el, state) {
		el.staticProcessed = true
		state.staticRenderFns.push(('with(this){return ' + (genElement(el, state)) + '}'))
		return ('_m(' + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ')')
	}

	// v-once
	function genOnce (el, state) {
		el.onceProcessed = true
		if (el.if && !el.ifProcessed) {
			return genIf(el, state)
		} else if (el.staticInFor) {
			var key = ''
			var parent = el.parent
			while (parent) {
				if (parent.for) {
					key = parent.key
					break
				}
				parent = parent.parent
			}
			if (!key) {
				'development' !== 'production' && state.warn(
					'v-once can only be used inside v-for that is keyed. '
				)
				return genElement(el, state)
			}
			return ('_o(' + (genElement(el, state)) + ',' + (state.onceId++) + ',' + key + ')')
=======
// hoist static sub-trees out
	function genStatic (el, state) {
		el.staticProcessed = true;
		state.staticRenderFns.push(("with(this){return " + (genElement(el, state)) + "}"));
		return ("_m(" + (state.staticRenderFns.length - 1) + (el.staticInFor ? ',true' : '') + ")")
	}

// v-once
	function genOnce (el, state) {
		el.onceProcessed = true;
		if (el.if && !el.ifProcessed) {
			return genIf(el, state)
		} else if (el.staticInFor) {
			var key = '';
			var parent = el.parent;
			while (parent) {
				if (parent.for) {
					key = parent.key;
					break
				}
				parent = parent.parent;
			}
			if (!key) {
				"development" !== 'production' && state.warn(
					"v-once can only be used inside v-for that is keyed. "
				);
				return genElement(el, state)
			}
			return ("_o(" + (genElement(el, state)) + "," + (state.onceId++) + "," + key + ")")
>>>>>>> origin/master
		} else {
			return genStatic(el, state)
		}
	}

	function genIf (
		el,
		state,
		altGen,
		altEmpty
	) {
<<<<<<< HEAD
		el.ifProcessed = true // avoid recursion
=======
		el.ifProcessed = true; // avoid recursion
>>>>>>> origin/master
		return genIfConditions(el.ifConditions.slice(), state, altGen, altEmpty)
	}

	function genIfConditions (
		conditions,
		state,
		altGen,
		altEmpty
	) {
		if (!conditions.length) {
			return altEmpty || '_e()'
		}

<<<<<<< HEAD
		var condition = conditions.shift()
		if (condition.exp) {
			return ('(' + (condition.exp) + ')?' + (genTernaryExp(condition.block)) + ':' + (genIfConditions(conditions, state, altGen, altEmpty)))
		} else {
			return ('' + (genTernaryExp(condition.block)))
=======
		var condition = conditions.shift();
		if (condition.exp) {
			return ("(" + (condition.exp) + ")?" + (genTernaryExp(condition.block)) + ":" + (genIfConditions(conditions, state, altGen, altEmpty)))
		} else {
			return ("" + (genTernaryExp(condition.block)))
>>>>>>> origin/master
		}

		// v-if with v-once should generate code like (a)?_m(0):_m(1)
		function genTernaryExp (el) {
			return altGen
				? altGen(el, state)
				: el.once
					? genOnce(el, state)
					: genElement(el, state)
		}
	}

	function genFor (
		el,
		state,
		altGen,
		altHelper
	) {
<<<<<<< HEAD
		var exp = el.for
		var alias = el.alias
		var iterator1 = el.iterator1 ? (',' + (el.iterator1)) : ''
		var iterator2 = el.iterator2 ? (',' + (el.iterator2)) : ''

		if ('development' !== 'production' &&
=======
		var exp = el.for;
		var alias = el.alias;
		var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
		var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';

		if ("development" !== 'production' &&
>>>>>>> origin/master
			state.maybeComponent(el) &&
			el.tag !== 'slot' &&
			el.tag !== 'template' &&
			!el.key
		) {
			state.warn(
<<<<<<< HEAD
				'<' + (el.tag) + ' v-for="' + alias + ' in ' + exp + '">: component lists rendered with ' +
					'v-for should have explicit keys. ' +
					'See https://vuejs.org/guide/list.html#key for more info.',
				true /* tip */
			)
		}

		el.forProcessed = true // avoid recursion
		return (altHelper || '_l') + '((' + exp + '),' +
			'function(' + alias + iterator1 + iterator2 + '){' +
			'return ' + ((altGen || genElement)(el, state)) +
=======
				"<" + (el.tag) + " v-for=\"" + alias + " in " + exp + "\">: component lists rendered with " +
				"v-for should have explicit keys. " +
				"See https://vuejs.org/guide/list.html#key for more info.",
				true /* tip */
			);
		}

		el.forProcessed = true; // avoid recursion
		return (altHelper || '_l') + "((" + exp + ")," +
			"function(" + alias + iterator1 + iterator2 + "){" +
			"return " + ((altGen || genElement)(el, state)) +
>>>>>>> origin/master
			'})'
	}

	function genData$2 (el, state) {
<<<<<<< HEAD
		var data = '{'

		// directives first.
		// directives may mutate the el's other properties before they are generated.
		var dirs = genDirectives(el, state)
		if (dirs) { data += dirs + ',' }

		// key
		if (el.key) {
			data += 'key:' + (el.key) + ','
		}
		// ref
		if (el.ref) {
			data += 'ref:' + (el.ref) + ','
		}
		if (el.refInFor) {
			data += 'refInFor:true,'
		}
		// pre
		if (el.pre) {
			data += 'pre:true,'
		}
		// record original tag name for components using "is" attribute
		if (el.component) {
			data += 'tag:"' + (el.tag) + '",'
		}
		// module data generation functions
		for (var i = 0; i < state.dataGenFns.length; i++) {
			data += state.dataGenFns[i](el)
		}
		// attributes
		if (el.attrs) {
			data += 'attrs:{' + (genProps(el.attrs)) + '},'
		}
		// DOM props
		if (el.props) {
			data += 'domProps:{' + (genProps(el.props)) + '},'
		}
		// event handlers
		if (el.events) {
			data += (genHandlers(el.events, false, state.warn)) + ','
		}
		if (el.nativeEvents) {
			data += (genHandlers(el.nativeEvents, true, state.warn)) + ','
=======
		var data = '{';

		// directives first.
		// directives may mutate the el's other properties before they are generated.
		var dirs = genDirectives(el, state);
		if (dirs) { data += dirs + ','; }

		// key
		if (el.key) {
			data += "key:" + (el.key) + ",";
		}
		// ref
		if (el.ref) {
			data += "ref:" + (el.ref) + ",";
		}
		if (el.refInFor) {
			data += "refInFor:true,";
		}
		// pre
		if (el.pre) {
			data += "pre:true,";
		}
		// record original tag name for components using "is" attribute
		if (el.component) {
			data += "tag:\"" + (el.tag) + "\",";
		}
		// module data generation functions
		for (var i = 0; i < state.dataGenFns.length; i++) {
			data += state.dataGenFns[i](el);
		}
		// attributes
		if (el.attrs) {
			data += "attrs:{" + (genProps(el.attrs)) + "},";
		}
		// DOM props
		if (el.props) {
			data += "domProps:{" + (genProps(el.props)) + "},";
		}
		// event handlers
		if (el.events) {
			data += (genHandlers(el.events, false, state.warn)) + ",";
		}
		if (el.nativeEvents) {
			data += (genHandlers(el.nativeEvents, true, state.warn)) + ",";
>>>>>>> origin/master
		}
		// slot target
		// only for non-scoped slots
		if (el.slotTarget && !el.slotScope) {
<<<<<<< HEAD
			data += 'slot:' + (el.slotTarget) + ','
		}
		// scoped slots
		if (el.scopedSlots) {
			data += (genScopedSlots(el.scopedSlots, state)) + ','
		}
		// component v-model
		if (el.model) {
			data += 'model:{value:' + (el.model.value) + ',callback:' + (el.model.callback) + ',expression:' + (el.model.expression) + '},'
		}
		// inline-template
		if (el.inlineTemplate) {
			var inlineTemplate = genInlineTemplate(el, state)
			if (inlineTemplate) {
				data += inlineTemplate + ','
			}
		}
		data = data.replace(/,$/, '') + '}'
		// v-bind data wrap
		if (el.wrapData) {
			data = el.wrapData(data)
		}
		// v-on data wrap
		if (el.wrapListeners) {
			data = el.wrapListeners(data)
=======
			data += "slot:" + (el.slotTarget) + ",";
		}
		// scoped slots
		if (el.scopedSlots) {
			data += (genScopedSlots(el.scopedSlots, state)) + ",";
		}
		// component v-model
		if (el.model) {
			data += "model:{value:" + (el.model.value) + ",callback:" + (el.model.callback) + ",expression:" + (el.model.expression) + "},";
		}
		// inline-template
		if (el.inlineTemplate) {
			var inlineTemplate = genInlineTemplate(el, state);
			if (inlineTemplate) {
				data += inlineTemplate + ",";
			}
		}
		data = data.replace(/,$/, '') + '}';
		// v-bind data wrap
		if (el.wrapData) {
			data = el.wrapData(data);
		}
		// v-on data wrap
		if (el.wrapListeners) {
			data = el.wrapListeners(data);
>>>>>>> origin/master
		}
		return data
	}

	function genDirectives (el, state) {
<<<<<<< HEAD
		var dirs = el.directives
		if (!dirs) { return }
		var res = 'directives:['
		var hasRuntime = false
		var i, l, dir, needRuntime
		for (i = 0, l = dirs.length; i < l; i++) {
			dir = dirs[i]
			needRuntime = true
			var gen = state.directives[dir.name]
			if (gen) {
				// compile-time directive that manipulates AST.
				// returns true if it also needs a runtime counterpart.
				needRuntime = !!gen(el, dir, state.warn)
			}
			if (needRuntime) {
				hasRuntime = true
				res += '{name:"' + (dir.name) + '",rawName:"' + (dir.rawName) + '"' + (dir.value ? (',value:(' + (dir.value) + '),expression:' + (JSON.stringify(dir.value))) : '') + (dir.arg ? (',arg:"' + (dir.arg) + '"') : '') + (dir.modifiers ? (',modifiers:' + (JSON.stringify(dir.modifiers))) : '') + '},'
=======
		var dirs = el.directives;
		if (!dirs) { return }
		var res = 'directives:[';
		var hasRuntime = false;
		var i, l, dir, needRuntime;
		for (i = 0, l = dirs.length; i < l; i++) {
			dir = dirs[i];
			needRuntime = true;
			var gen = state.directives[dir.name];
			if (gen) {
				// compile-time directive that manipulates AST.
				// returns true if it also needs a runtime counterpart.
				needRuntime = !!gen(el, dir, state.warn);
			}
			if (needRuntime) {
				hasRuntime = true;
				res += "{name:\"" + (dir.name) + "\",rawName:\"" + (dir.rawName) + "\"" + (dir.value ? (",value:(" + (dir.value) + "),expression:" + (JSON.stringify(dir.value))) : '') + (dir.arg ? (",arg:\"" + (dir.arg) + "\"") : '') + (dir.modifiers ? (",modifiers:" + (JSON.stringify(dir.modifiers))) : '') + "},";
>>>>>>> origin/master
			}
		}
		if (hasRuntime) {
			return res.slice(0, -1) + ']'
		}
	}

	function genInlineTemplate (el, state) {
<<<<<<< HEAD
		var ast = el.children[0]
		if ('development' !== 'production' && (
			el.children.length !== 1 || ast.type !== 1
		)) {
			state.warn('Inline-template components must have exactly one child element.')
		}
		if (ast.type === 1) {
			var inlineRenderFns = generate(ast, state.options)
			return ('inlineTemplate:{render:function(){' + (inlineRenderFns.render) + '},staticRenderFns:[' + (inlineRenderFns.staticRenderFns.map(function (code) { return ('function(){' + code + '}') }).join(',')) + ']}')
=======
		var ast = el.children[0];
		if ("development" !== 'production' && (
			el.children.length !== 1 || ast.type !== 1
		)) {
			state.warn('Inline-template components must have exactly one child element.');
		}
		if (ast.type === 1) {
			var inlineRenderFns = generate(ast, state.options);
			return ("inlineTemplate:{render:function(){" + (inlineRenderFns.render) + "},staticRenderFns:[" + (inlineRenderFns.staticRenderFns.map(function (code) { return ("function(){" + code + "}"); }).join(',')) + "]}")
>>>>>>> origin/master
		}
	}

	function genScopedSlots (
		slots,
		state
	) {
<<<<<<< HEAD
		return ('scopedSlots:_u([' + (Object.keys(slots).map(function (key) {
			return genScopedSlot(key, slots[key], state)
		}).join(',')) + '])')
=======
		return ("scopedSlots:_u([" + (Object.keys(slots).map(function (key) {
			return genScopedSlot(key, slots[key], state)
		}).join(',')) + "])")
>>>>>>> origin/master
	}

	function genScopedSlot (
		key,
		el,
		state
	) {
		if (el.for && !el.forProcessed) {
			return genForScopedSlot(key, el, state)
		}
<<<<<<< HEAD
		var fn = 'function(' + (String(el.slotScope)) + '){' +
			'return ' + (el.tag === 'template'
				? el.if
					? ((el.if) + '?' + (genChildren(el, state) || 'undefined') + ':undefined')
					: genChildren(el, state) || 'undefined'
			: genElement(el, state)) + '}'
		return ('{key:' + key + ',fn:' + fn + '}')
=======
		var fn = "function(" + (String(el.slotScope)) + "){" +
			"return " + (el.tag === 'template'
				? el.if
					? ((el.if) + "?" + (genChildren(el, state) || 'undefined') + ":undefined")
					: genChildren(el, state) || 'undefined'
				: genElement(el, state)) + "}";
		return ("{key:" + key + ",fn:" + fn + "}")
>>>>>>> origin/master
	}

	function genForScopedSlot (
		key,
		el,
		state
	) {
<<<<<<< HEAD
		var exp = el.for
		var alias = el.alias
		var iterator1 = el.iterator1 ? (',' + (el.iterator1)) : ''
		var iterator2 = el.iterator2 ? (',' + (el.iterator2)) : ''
		el.forProcessed = true // avoid recursion
		return '_l((' + exp + '),' +
			'function(' + alias + iterator1 + iterator2 + '){' +
			'return ' + (genScopedSlot(key, el, state)) +
=======
		var exp = el.for;
		var alias = el.alias;
		var iterator1 = el.iterator1 ? ("," + (el.iterator1)) : '';
		var iterator2 = el.iterator2 ? ("," + (el.iterator2)) : '';
		el.forProcessed = true; // avoid recursion
		return "_l((" + exp + ")," +
			"function(" + alias + iterator1 + iterator2 + "){" +
			"return " + (genScopedSlot(key, el, state)) +
>>>>>>> origin/master
			'})'
	}

	function genChildren (
		el,
		state,
		checkSkip,
		altGenElement,
		altGenNode
	) {
<<<<<<< HEAD
		var children = el.children
		if (children.length) {
			var el$1 = children[0]
=======
		var children = el.children;
		if (children.length) {
			var el$1 = children[0];
>>>>>>> origin/master
			// optimize single v-for
			if (children.length === 1 &&
				el$1.for &&
				el$1.tag !== 'template' &&
				el$1.tag !== 'slot'
			) {
				return (altGenElement || genElement)(el$1, state)
			}
			var normalizationType = checkSkip
				? getNormalizationType(children, state.maybeComponent)
<<<<<<< HEAD
				: 0
			var gen = altGenNode || genNode
			return ('[' + (children.map(function (c) { return gen(c, state) }).join(',')) + ']' + (normalizationType ? (',' + normalizationType) : ''))
		}
	}

	// determine the normalization needed for the children array.
	// 0: no normalization needed
	// 1: simple normalization needed (possible 1-level deep nested array)
	// 2: full normalization needed
=======
				: 0;
			var gen = altGenNode || genNode;
			return ("[" + (children.map(function (c) { return gen(c, state); }).join(',')) + "]" + (normalizationType ? ("," + normalizationType) : ''))
		}
	}

// determine the normalization needed for the children array.
// 0: no normalization needed
// 1: simple normalization needed (possible 1-level deep nested array)
// 2: full normalization needed
>>>>>>> origin/master
	function getNormalizationType (
		children,
		maybeComponent
	) {
<<<<<<< HEAD
		var res = 0
		for (var i = 0; i < children.length; i++) {
			var el = children[i]
=======
		var res = 0;
		for (var i = 0; i < children.length; i++) {
			var el = children[i];
>>>>>>> origin/master
			if (el.type !== 1) {
				continue
			}
			if (needsNormalization(el) ||
<<<<<<< HEAD
			(el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block) }))) {
				res = 2
				break
			}
			if (maybeComponent(el) ||
			(el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block) }))) {
				res = 1
=======
				(el.ifConditions && el.ifConditions.some(function (c) { return needsNormalization(c.block); }))) {
				res = 2;
				break
			}
			if (maybeComponent(el) ||
				(el.ifConditions && el.ifConditions.some(function (c) { return maybeComponent(c.block); }))) {
				res = 1;
>>>>>>> origin/master
			}
		}
		return res
	}

	function needsNormalization (el) {
		return el.for !== undefined || el.tag === 'template' || el.tag === 'slot'
	}

	function genNode (node, state) {
		if (node.type === 1) {
			return genElement(node, state)
		} if (node.type === 3 && node.isComment) {
			return genComment(node)
		} else {
			return genText(node)
		}
	}

	function genText (text) {
<<<<<<< HEAD
		return ('_v(' + (text.type === 2
			? text.expression // no need for () because already wrapped in _s()
			: transformSpecialNewlines(JSON.stringify(text.text))) + ')')
	}

	function genComment (comment) {
		return ('_e(' + (JSON.stringify(comment.text)) + ')')
	}

	function genSlot (el, state) {
		var slotName = el.slotName || '"default"'
		var children = genChildren(el, state)
		var res = '_t(' + slotName + (children ? (',' + children) : '')
		var attrs = el.attrs && ('{' + (el.attrs.map(function (a) { return ((camelize(a.name)) + ':' + (a.value)) }).join(',')) + '}')
		var bind$$1 = el.attrsMap['v-bind']
		if ((attrs || bind$$1) && !children) {
			res += ',null'
		}
		if (attrs) {
			res += ',' + attrs
		}
		if (bind$$1) {
			res += (attrs ? '' : ',null') + ',' + bind$$1
=======
		return ("_v(" + (text.type === 2
			? text.expression // no need for () because already wrapped in _s()
			: transformSpecialNewlines(JSON.stringify(text.text))) + ")")
	}

	function genComment (comment) {
		return ("_e(" + (JSON.stringify(comment.text)) + ")")
	}

	function genSlot (el, state) {
		var slotName = el.slotName || '"default"';
		var children = genChildren(el, state);
		var res = "_t(" + slotName + (children ? ("," + children) : '');
		var attrs = el.attrs && ("{" + (el.attrs.map(function (a) { return ((camelize(a.name)) + ":" + (a.value)); }).join(',')) + "}");
		var bind$$1 = el.attrsMap['v-bind'];
		if ((attrs || bind$$1) && !children) {
			res += ",null";
		}
		if (attrs) {
			res += "," + attrs;
		}
		if (bind$$1) {
			res += (attrs ? '' : ',null') + "," + bind$$1;
>>>>>>> origin/master
		}
		return res + ')'
	}

<<<<<<< HEAD
	// componentName is el.component, take it as argument to shun flow's pessimistic refinement
=======
// componentName is el.component, take it as argument to shun flow's pessimistic refinement
>>>>>>> origin/master
	function genComponent (
		componentName,
		el,
		state
	) {
<<<<<<< HEAD
		var children = el.inlineTemplate ? null : genChildren(el, state, true)
		return ('_c(' + componentName + ',' + (genData$2(el, state)) + (children ? (',' + children) : '') + ')')
	}

	function genProps (props) {
		var res = ''
		for (var i = 0; i < props.length; i++) {
			var prop = props[i]
			/* istanbul ignore if */
			{
				res += '"' + (prop.name) + '":' + (transformSpecialNewlines(prop.value)) + ','
=======
		var children = el.inlineTemplate ? null : genChildren(el, state, true);
		return ("_c(" + componentName + "," + (genData$2(el, state)) + (children ? ("," + children) : '') + ")")
	}

	function genProps (props) {
		var res = '';
		for (var i = 0; i < props.length; i++) {
			var prop = props[i];
			/* istanbul ignore if */
			{
				res += "\"" + (prop.name) + "\":" + (transformSpecialNewlines(prop.value)) + ",";
>>>>>>> origin/master
			}
		}
		return res.slice(0, -1)
	}

<<<<<<< HEAD
	// #3895, #4268
=======
// #3895, #4268
>>>>>>> origin/master
	function transformSpecialNewlines (text) {
		return text
			.replace(/\u2028/g, '\\u2028')
			.replace(/\u2029/g, '\\u2029')
	}

	/*  */

<<<<<<< HEAD
	// these keywords should not appear inside expressions, but operators like
	// typeof, instanceof and in are allowed
=======
// these keywords should not appear inside expressions, but operators like
// typeof, instanceof and in are allowed
>>>>>>> origin/master
	var prohibitedKeywordRE = new RegExp('\\b' + (
		'do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,' +
		'super,throw,while,yield,delete,export,import,return,switch,default,' +
		'extends,finally,continue,debugger,function,arguments'
<<<<<<< HEAD
	).split(',').join('\\b|\\b') + '\\b')

	// these unary operators should not be used as property/method names
	var unaryOperatorsRE = new RegExp('\\b' + (
		'delete,typeof,void'
	).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)')

	// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g

	// detect problematic expressions in a template
	function detectErrors (ast) {
		var errors = []
		if (ast) {
			checkNode(ast, errors)
=======
	).split(',').join('\\b|\\b') + '\\b');

// these unary operators should not be used as property/method names
	var unaryOperatorsRE = new RegExp('\\b' + (
		'delete,typeof,void'
	).split(',').join('\\s*\\([^\\)]*\\)|\\b') + '\\s*\\([^\\)]*\\)');

// strip strings in expressions
	var stripStringRE = /'(?:[^'\\]|\\.)*'|"(?:[^"\\]|\\.)*"|`(?:[^`\\]|\\.)*\$\{|\}(?:[^`\\]|\\.)*`|`(?:[^`\\]|\\.)*`/g;

// detect problematic expressions in a template
	function detectErrors (ast) {
		var errors = [];
		if (ast) {
			checkNode(ast, errors);
>>>>>>> origin/master
		}
		return errors
	}

	function checkNode (node, errors) {
		if (node.type === 1) {
			for (var name in node.attrsMap) {
				if (dirRE.test(name)) {
<<<<<<< HEAD
					var value = node.attrsMap[name]
					if (value) {
						if (name === 'v-for') {
							checkFor(node, ('v-for="' + value + '"'), errors)
						} else if (onRE.test(name)) {
							checkEvent(value, (name + '="' + value + '"'), errors)
						} else {
							checkExpression(value, (name + '="' + value + '"'), errors)
=======
					var value = node.attrsMap[name];
					if (value) {
						if (name === 'v-for') {
							checkFor(node, ("v-for=\"" + value + "\""), errors);
						} else if (onRE.test(name)) {
							checkEvent(value, (name + "=\"" + value + "\""), errors);
						} else {
							checkExpression(value, (name + "=\"" + value + "\""), errors);
>>>>>>> origin/master
						}
					}
				}
			}
			if (node.children) {
				for (var i = 0; i < node.children.length; i++) {
<<<<<<< HEAD
					checkNode(node.children[i], errors)
				}
			}
		} else if (node.type === 2) {
			checkExpression(node.expression, node.text, errors)
=======
					checkNode(node.children[i], errors);
				}
			}
		} else if (node.type === 2) {
			checkExpression(node.expression, node.text, errors);
>>>>>>> origin/master
		}
	}

	function checkEvent (exp, text, errors) {
<<<<<<< HEAD
		var stipped = exp.replace(stripStringRE, '')
		var keywordMatch = stipped.match(unaryOperatorsRE)
		if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
			errors.push(
				'avoid using JavaScript unary operator as property name: ' +
					'"' + (keywordMatch[0]) + '" in expression ' + (text.trim())
			)
		}
		checkExpression(exp, text, errors)
	}

	function checkFor (node, text, errors) {
		checkExpression(node.for || '', text, errors)
		checkIdentifier(node.alias, 'v-for alias', text, errors)
		checkIdentifier(node.iterator1, 'v-for iterator', text, errors)
		checkIdentifier(node.iterator2, 'v-for iterator', text, errors)
=======
		var stipped = exp.replace(stripStringRE, '');
		var keywordMatch = stipped.match(unaryOperatorsRE);
		if (keywordMatch && stipped.charAt(keywordMatch.index - 1) !== '$') {
			errors.push(
				"avoid using JavaScript unary operator as property name: " +
				"\"" + (keywordMatch[0]) + "\" in expression " + (text.trim())
			);
		}
		checkExpression(exp, text, errors);
	}

	function checkFor (node, text, errors) {
		checkExpression(node.for || '', text, errors);
		checkIdentifier(node.alias, 'v-for alias', text, errors);
		checkIdentifier(node.iterator1, 'v-for iterator', text, errors);
		checkIdentifier(node.iterator2, 'v-for iterator', text, errors);
>>>>>>> origin/master
	}

	function checkIdentifier (
		ident,
		type,
		text,
		errors
	) {
		if (typeof ident === 'string') {
			try {
<<<<<<< HEAD
				new Function(('var ' + ident + '=_'))
			} catch (e) {
				errors.push(('invalid ' + type + ' "' + ident + '" in expression: ' + (text.trim())))
=======
				new Function(("var " + ident + "=_"));
			} catch (e) {
				errors.push(("invalid " + type + " \"" + ident + "\" in expression: " + (text.trim())));
>>>>>>> origin/master
			}
		}
	}

	function checkExpression (exp, text, errors) {
		try {
<<<<<<< HEAD
			new Function(('return ' + exp))
		} catch (e) {
			var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE)
			if (keywordMatch) {
				errors.push(
					'avoid using JavaScript keyword as property name: ' +
						'"' + (keywordMatch[0]) + '"\n  Raw expression: ' + (text.trim())
				)
			} else {
				errors.push(
					'invalid expression: ' + (e.message) + ' in\n\n' +
						'    ' + exp + '\n\n' +
						'  Raw expression: ' + (text.trim()) + '\n'
				)
=======
			new Function(("return " + exp));
		} catch (e) {
			var keywordMatch = exp.replace(stripStringRE, '').match(prohibitedKeywordRE);
			if (keywordMatch) {
				errors.push(
					"avoid using JavaScript keyword as property name: " +
					"\"" + (keywordMatch[0]) + "\"\n  Raw expression: " + (text.trim())
				);
			} else {
				errors.push(
					"invalid expression: " + (e.message) + " in\n\n" +
					"    " + exp + "\n\n" +
					"  Raw expression: " + (text.trim()) + "\n"
				);
>>>>>>> origin/master
			}
		}
	}

	/*  */

	function createFunction (code, errors) {
		try {
			return new Function(code)
		} catch (err) {
<<<<<<< HEAD
			errors.push({ err: err, code: code })
=======
			errors.push({ err: err, code: code });
>>>>>>> origin/master
			return noop
		}
	}

	function createCompileToFunctionFn (compile) {
<<<<<<< HEAD
		var cache = Object.create(null)
=======
		var cache = Object.create(null);
>>>>>>> origin/master

		return function compileToFunctions (
			template,
			options,
			vm
		) {
<<<<<<< HEAD
			options = extend({}, options)
			var warn$$1 = options.warn || warn
			delete options.warn
=======
			options = extend({}, options);
			var warn$$1 = options.warn || warn;
			delete options.warn;
>>>>>>> origin/master

			/* istanbul ignore if */
			{
				// detect possible CSP restriction
				try {
<<<<<<< HEAD
					new Function('return 1')
=======
					new Function('return 1');
>>>>>>> origin/master
				} catch (e) {
					if (e.toString().match(/unsafe-eval|CSP/)) {
						warn$$1(
							'It seems you are using the standalone build of Vue.js in an ' +
<<<<<<< HEAD
								'environment with Content Security Policy that prohibits unsafe-eval. ' +
								'The template compiler cannot work in this environment. Consider ' +
								'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
								'templates into render functions.'
						)
=======
							'environment with Content Security Policy that prohibits unsafe-eval. ' +
							'The template compiler cannot work in this environment. Consider ' +
							'relaxing the policy to allow unsafe-eval or pre-compiling your ' +
							'templates into render functions.'
						);
>>>>>>> origin/master
					}
				}
			}

			// check cache
			var key = options.delimiters
				? String(options.delimiters) + template
<<<<<<< HEAD
				: template
=======
				: template;
>>>>>>> origin/master
			if (cache[key]) {
				return cache[key]
			}

			// compile
<<<<<<< HEAD
			var compiled = compile(template, options)
=======
			var compiled = compile(template, options);
>>>>>>> origin/master

			// check compilation errors/tips
			{
				if (compiled.errors && compiled.errors.length) {
					warn$$1(
<<<<<<< HEAD
						'Error compiling template:\n\n' + template + '\n\n' +
							compiled.errors.map(function (e) { return ('- ' + e) }).join('\n') + '\n',
						vm
					)
				}
				if (compiled.tips && compiled.tips.length) {
					compiled.tips.forEach(function (msg) { return tip(msg, vm) })
=======
						"Error compiling template:\n\n" + template + "\n\n" +
						compiled.errors.map(function (e) { return ("- " + e); }).join('\n') + '\n',
						vm
					);
				}
				if (compiled.tips && compiled.tips.length) {
					compiled.tips.forEach(function (msg) { return tip(msg, vm); });
>>>>>>> origin/master
				}
			}

			// turn code into functions
<<<<<<< HEAD
			var res = {}
			var fnGenErrors = []
			res.render = createFunction(compiled.render, fnGenErrors)
			res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
				return createFunction(code, fnGenErrors)
			})
=======
			var res = {};
			var fnGenErrors = [];
			res.render = createFunction(compiled.render, fnGenErrors);
			res.staticRenderFns = compiled.staticRenderFns.map(function (code) {
				return createFunction(code, fnGenErrors)
			});
>>>>>>> origin/master

			// check function generation errors.
			// this should only happen if there is a bug in the compiler itself.
			// mostly for codegen development use
			/* istanbul ignore if */
			{
				if ((!compiled.errors || !compiled.errors.length) && fnGenErrors.length) {
					warn$$1(
<<<<<<< HEAD
						'Failed to generate render function:\n\n' +
							fnGenErrors.map(function (ref) {
								var err = ref.err
								var code = ref.code

								return ((err.toString()) + ' in\n\n' + code + '\n')
							}).join('\n'),
						vm
					)
=======
						"Failed to generate render function:\n\n" +
						fnGenErrors.map(function (ref) {
							var err = ref.err;
							var code = ref.code;

							return ((err.toString()) + " in\n\n" + code + "\n");
						}).join('\n'),
						vm
					);
>>>>>>> origin/master
				}
			}

			return (cache[key] = res)
		}
	}

	/*  */

	function createCompilerCreator (baseCompile) {
		return function createCompiler (baseOptions) {
			function compile (
				template,
				options
			) {
<<<<<<< HEAD
				var finalOptions = Object.create(baseOptions)
				var errors = []
				var tips = []
				finalOptions.warn = function (msg, tip) {
					(tip ? tips : errors).push(msg)
				}
=======
				var finalOptions = Object.create(baseOptions);
				var errors = [];
				var tips = [];
				finalOptions.warn = function (msg, tip) {
					(tip ? tips : errors).push(msg);
				};
>>>>>>> origin/master

				if (options) {
					// merge custom modules
					if (options.modules) {
						finalOptions.modules =
<<<<<<< HEAD
							(baseOptions.modules || []).concat(options.modules)
=======
							(baseOptions.modules || []).concat(options.modules);
>>>>>>> origin/master
					}
					// merge custom directives
					if (options.directives) {
						finalOptions.directives = extend(
							Object.create(baseOptions.directives || null),
							options.directives
<<<<<<< HEAD
						)
=======
						);
>>>>>>> origin/master
					}
					// copy other options
					for (var key in options) {
						if (key !== 'modules' && key !== 'directives') {
<<<<<<< HEAD
							finalOptions[key] = options[key]
=======
							finalOptions[key] = options[key];
>>>>>>> origin/master
						}
					}
				}

<<<<<<< HEAD
				var compiled = baseCompile(template, finalOptions)
				{
					errors.push.apply(errors, detectErrors(compiled.ast))
				}
				compiled.errors = errors
				compiled.tips = tips
=======
				var compiled = baseCompile(template, finalOptions);
				{
					errors.push.apply(errors, detectErrors(compiled.ast));
				}
				compiled.errors = errors;
				compiled.tips = tips;
>>>>>>> origin/master
				return compiled
			}

			return {
				compile: compile,
				compileToFunctions: createCompileToFunctionFn(compile)
			}
		}
	}

	/*  */

<<<<<<< HEAD
	// `createCompilerCreator` allows creating compilers that use alternative
	// parser/optimizer/codegen, e.g the SSR optimizing compiler.
	// Here we just export a default compiler using the default parts.
=======
// `createCompilerCreator` allows creating compilers that use alternative
// parser/optimizer/codegen, e.g the SSR optimizing compiler.
// Here we just export a default compiler using the default parts.
>>>>>>> origin/master
	var createCompiler = createCompilerCreator(function baseCompile (
		template,
		options
	) {
<<<<<<< HEAD
		var ast = parse(template.trim(), options)
		if (options.optimize !== false) {
			optimize(ast, options)
		}
		var code = generate(ast, options)
=======
		var ast = parse(template.trim(), options);
		if (options.optimize !== false) {
			optimize(ast, options);
		}
		var code = generate(ast, options);
>>>>>>> origin/master
		return {
			ast: ast,
			render: code.render,
			staticRenderFns: code.staticRenderFns
		}
<<<<<<< HEAD
	})

	/*  */

	var ref$1 = createCompiler(baseOptions)
	var compileToFunctions = ref$1.compileToFunctions

	/*  */

	// check whether current browser encodes a char inside attribute values
	var div
	function getShouldDecode (href) {
		div = div || document.createElement('div')
		div.innerHTML = href ? '<a href="\n"/>' : '<div a="\n"/>'
		return div.innerHTML.indexOf('&#10;') > 0
	}

	// #3663: IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false
	// #6828: chrome encodes content in a[href]
	var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false
=======
	});

	/*  */

	var ref$1 = createCompiler(baseOptions);
	var compileToFunctions = ref$1.compileToFunctions;

	/*  */

// check whether current browser encodes a char inside attribute values
	var div;
	function getShouldDecode (href) {
		div = div || document.createElement('div');
		div.innerHTML = href ? "<a href=\"\n\"/>" : "<div a=\"\n\"/>";
		return div.innerHTML.indexOf('&#10;') > 0
	}

// #3663: IE encodes newlines inside attribute values while other browsers don't
	var shouldDecodeNewlines = inBrowser ? getShouldDecode(false) : false;
// #6828: chrome encodes content in a[href]
	var shouldDecodeNewlinesForHref = inBrowser ? getShouldDecode(true) : false;
>>>>>>> origin/master

	/*  */

	var idToTemplate = cached(function (id) {
<<<<<<< HEAD
		var el = query(id)
		return el && el.innerHTML
	})

	var mount = Vue.prototype.$mount
=======
		var el = query(id);
		return el && el.innerHTML
	});

	var mount = Vue.prototype.$mount;
>>>>>>> origin/master
	Vue.prototype.$mount = function (
		el,
		hydrating
	) {
<<<<<<< HEAD
		el = el && query(el)

		/* istanbul ignore if */
		if (el === document.body || el === document.documentElement) {
			'development' !== 'production' && warn(
				'Do not mount Vue to <html> or <body> - mount to normal elements instead.'
			)
			return this
		}

		var options = this.$options
		// resolve template/el and convert to render function
		if (!options.render) {
			var template = options.template
			if (template) {
				if (typeof template === 'string') {
					if (template.charAt(0) === '#') {
						template = idToTemplate(template)
						/* istanbul ignore if */
						if ('development' !== 'production' && !template) {
							warn(
								('Template element not found or is empty: ' + (options.template)),
								this
							)
						}
					}
				} else if (template.nodeType) {
					template = template.innerHTML
				} else {
					{
						warn('invalid template option:' + template, this)
=======
		el = el && query(el);

		/* istanbul ignore if */
		if (el === document.body || el === document.documentElement) {
			"development" !== 'production' && warn(
				"Do not mount Vue to <html> or <body> - mount to normal elements instead."
			);
			return this
		}

		var options = this.$options;
		// resolve template/el and convert to render function
		if (!options.render) {
			var template = options.template;
			if (template) {
				if (typeof template === 'string') {
					if (template.charAt(0) === '#') {
						template = idToTemplate(template);
						/* istanbul ignore if */
						if ("development" !== 'production' && !template) {
							warn(
								("Template element not found or is empty: " + (options.template)),
								this
							);
						}
					}
				} else if (template.nodeType) {
					template = template.innerHTML;
				} else {
					{
						warn('invalid template option:' + template, this);
>>>>>>> origin/master
					}
					return this
				}
			} else if (el) {
<<<<<<< HEAD
				template = getOuterHTML(el)
			}
			if (template) {
				/* istanbul ignore if */
				if ('development' !== 'production' && config.performance && mark) {
					mark('compile')
=======
				template = getOuterHTML(el);
			}
			if (template) {
				/* istanbul ignore if */
				if ("development" !== 'production' && config.performance && mark) {
					mark('compile');
>>>>>>> origin/master
				}

				var ref = compileToFunctions(template, {
					shouldDecodeNewlines: shouldDecodeNewlines,
					shouldDecodeNewlinesForHref: shouldDecodeNewlinesForHref,
					delimiters: options.delimiters,
					comments: options.comments
<<<<<<< HEAD
				}, this)
				var render = ref.render
				var staticRenderFns = ref.staticRenderFns
				options.render = render
				options.staticRenderFns = staticRenderFns

				/* istanbul ignore if */
				if ('development' !== 'production' && config.performance && mark) {
					mark('compile end')
					measure(('vue ' + (this._name) + ' compile'), 'compile', 'compile end')
=======
				}, this);
				var render = ref.render;
				var staticRenderFns = ref.staticRenderFns;
				options.render = render;
				options.staticRenderFns = staticRenderFns;

				/* istanbul ignore if */
				if ("development" !== 'production' && config.performance && mark) {
					mark('compile end');
					measure(("vue " + (this._name) + " compile"), 'compile', 'compile end');
>>>>>>> origin/master
				}
			}
		}
		return mount.call(this, el, hydrating)
<<<<<<< HEAD
	}
=======
	};
>>>>>>> origin/master

	/**
	 * Get outerHTML of elements, taking care
	 * of SVG elements in IE as well.
	 */
	function getOuterHTML (el) {
		if (el.outerHTML) {
			return el.outerHTML
		} else {
<<<<<<< HEAD
			var container = document.createElement('div')
			container.appendChild(el.cloneNode(true))
=======
			var container = document.createElement('div');
			container.appendChild(el.cloneNode(true));
>>>>>>> origin/master
			return container.innerHTML
		}
	}

<<<<<<< HEAD
	Vue.compile = compileToFunctions

	return Vue
}))
=======
	Vue.compile = compileToFunctions;

	return Vue;

})));
>>>>>>> origin/master
