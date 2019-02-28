module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "JkW7");
/******/ })
/************************************************************************/
/******/ ({

/***/ "EBst":
/***/ (function(module, exports, __webpack_require__) {

!function () {
  "use strict";
  function e(e, t) {
    var n,
        o,
        r,
        i,
        l = W;for (i = arguments.length; i-- > 2;) {
      P.push(arguments[i]);
    }t && null != t.children && (P.length || P.push(t.children), delete t.children);while (P.length) {
      if ((o = P.pop()) && void 0 !== o.pop) for (i = o.length; i--;) {
        P.push(o[i]);
      } else "boolean" == typeof o && (o = null), (r = "function" != typeof e) && (null == o ? o = "" : "number" == typeof o ? o += "" : "string" != typeof o && (r = !1)), r && n ? l[l.length - 1] += o : l === W ? l = [o] : l.push(o), n = r;
    }var a = new T();return a.nodeName = e, a.children = l, a.attributes = null == t ? void 0 : t, a.key = null == t ? void 0 : t.key, void 0 !== M.vnode && M.vnode(a), a;
  }function t(e, t) {
    for (var n in t) {
      e[n] = t[n];
    }return e;
  }function n(e, t) {
    null != e && ("function" == typeof e ? e(t) : e.current = t);
  }function o(n, o) {
    return e(n.nodeName, t(t({}, n.attributes), o), arguments.length > 2 ? [].slice.call(arguments, 2) : n.children);
  }function r(e) {
    !e.__d && (e.__d = !0) && 1 == V.push(e) && (M.debounceRendering || D)(i);
  }function i() {
    var e;while (e = V.pop()) {
      e.__d && x(e);
    }
  }function l(e, t, n) {
    return "string" == typeof t || "number" == typeof t ? void 0 !== e.splitText : "string" == typeof t.nodeName ? !e._componentConstructor && a(e, t.nodeName) : n || e._componentConstructor === t.nodeName;
  }function a(e, t) {
    return e.__n === t || e.nodeName.toLowerCase() === t.toLowerCase();
  }function u(e) {
    var n = t({}, e.attributes);n.children = e.children;var o = e.nodeName.defaultProps;if (void 0 !== o) for (var r in o) {
      void 0 === n[r] && (n[r] = o[r]);
    }return n;
  }function c(e, t) {
    var n = t ? document.createElementNS("http://www.w3.org/2000/svg", e) : document.createElement(e);return n.__n = e, n;
  }function p(e) {
    var t = e.parentNode;t && t.removeChild(e);
  }function s(e, t, o, r, i) {
    if ("className" === t && (t = "class"), "key" === t) ;else if ("ref" === t) n(o, null), n(r, e);else if ("class" !== t || i) {
      if ("style" === t) {
        if (r && "string" != typeof r && "string" != typeof o || (e.style.cssText = r || ""), r && "object" == typeof r) {
          if ("string" != typeof o) for (var l in o) {
            l in r || (e.style[l] = "");
          }for (var l in r) {
            e.style[l] = "number" == typeof r[l] && !1 === E.test(l) ? r[l] + "px" : r[l];
          }
        }
      } else if ("dangerouslySetInnerHTML" === t) r && (e.innerHTML = r.__html || "");else if ("o" == t[0] && "n" == t[1]) {
        var a = t !== (t = t.replace(/Capture$/, ""));t = t.toLowerCase().substring(2), r ? o || e.addEventListener(t, _, a) : e.removeEventListener(t, _, a), (e.__l || (e.__l = {}))[t] = r;
      } else if ("list" !== t && "type" !== t && !i && t in e) {
        try {
          e[t] = null == r ? "" : r;
        } catch (e) {}null != r && !1 !== r || "spellcheck" == t || e.removeAttribute(t);
      } else {
        var u = i && t !== (t = t.replace(/^xlink:?/, ""));null == r || !1 === r ? u ? e.removeAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase()) : e.removeAttribute(t) : "function" != typeof r && (u ? e.setAttributeNS("http://www.w3.org/1999/xlink", t.toLowerCase(), r) : e.setAttribute(t, r));
      }
    } else e.className = r || "";
  }function _(e) {
    return this.__l[e.type](M.event && M.event(e) || e);
  }function f() {
    var e;while (e = A.shift()) {
      M.afterMount && M.afterMount(e), e.componentDidMount && e.componentDidMount();
    }
  }function d(e, t, n, o, r, i) {
    H++ || (R = null != r && void 0 !== r.ownerSVGElement, B = null != e && !("__preactattr_" in e));var l = h(e, t, n, o, i);return r && l.parentNode !== r && r.appendChild(l), --H || (B = !1, i || f()), l;
  }function h(e, t, n, o, r) {
    var i = e,
        l = R;if (null != t && "boolean" != typeof t || (t = ""), "string" == typeof t || "number" == typeof t) return e && void 0 !== e.splitText && e.parentNode && (!e._component || r) ? e.nodeValue != t && (e.nodeValue = t) : (i = document.createTextNode(t), e && (e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0))), i.__preactattr_ = !0, i;var u = t.nodeName;if ("function" == typeof u) return N(e, t, n, o);if (R = "svg" === u || "foreignObject" !== u && R, u += "", (!e || !a(e, u)) && (i = c(u, R), e)) {
      while (e.firstChild) {
        i.appendChild(e.firstChild);
      }e.parentNode && e.parentNode.replaceChild(i, e), v(e, !0);
    }var p = i.firstChild,
        s = i.__preactattr_,
        _ = t.children;if (null == s) {
      s = i.__preactattr_ = {};for (var f = i.attributes, d = f.length; d--;) {
        s[f[d].name] = f[d].value;
      }
    }return !B && _ && 1 === _.length && "string" == typeof _[0] && null != p && void 0 !== p.splitText && null == p.nextSibling ? p.nodeValue != _[0] && (p.nodeValue = _[0]) : (_ && _.length || null != p) && m(i, _, n, o, B || null != s.dangerouslySetInnerHTML), y(i, t.attributes, s), R = l, i;
  }function m(e, t, n, o, r) {
    var i,
        a,
        u,
        c,
        s,
        _ = e.childNodes,
        f = [],
        d = {},
        m = 0,
        b = 0,
        y = _.length,
        g = 0,
        w = t ? t.length : 0;if (0 !== y) for (var C = 0; C < y; C++) {
      var x = _[C],
          N = x.__preactattr_,
          k = w && N ? x._component ? x._component.__k : N.key : null;null != k ? (m++, d[k] = x) : (N || (void 0 !== x.splitText ? !r || x.nodeValue.trim() : r)) && (f[g++] = x);
    }if (0 !== w) for (var C = 0; C < w; C++) {
      c = t[C], s = null;var k = c.key;if (null != k) m && void 0 !== d[k] && (s = d[k], d[k] = void 0, m--);else if (b < g) for (i = b; i < g; i++) {
        if (void 0 !== f[i] && l(a = f[i], c, r)) {
          s = a, f[i] = void 0, i === g - 1 && g--, i === b && b++;break;
        }
      }s = h(s, c, n, o), u = _[C], s && s !== e && s !== u && (null == u ? e.appendChild(s) : s === u.nextSibling ? p(u) : e.insertBefore(s, u));
    }if (m) for (var C in d) {
      void 0 !== d[C] && v(d[C], !1);
    }while (b <= g) {
      void 0 !== (s = f[g--]) && v(s, !1);
    }
  }function v(e, t) {
    var o = e._component;o ? k(o) : (null != e.__preactattr_ && n(e.__preactattr_.ref, null), !1 !== t && null != e.__preactattr_ || p(e), b(e));
  }function b(e) {
    e = e.lastChild;while (e) {
      var t = e.previousSibling;v(e, !0), e = t;
    }
  }function y(e, t, n) {
    var o;for (o in n) {
      t && null != t[o] || null == n[o] || s(e, o, n[o], n[o] = void 0, R);
    }for (o in t) {
      "children" === o || "innerHTML" === o || o in n && t[o] === ("value" === o || "checked" === o ? e[o] : n[o]) || s(e, o, n[o], n[o] = t[o], R);
    }
  }function g(e, t, n) {
    var o,
        r = F.length;e.prototype && e.prototype.render ? (o = new e(t, n), U.call(o, t, n)) : (o = new U(t, n), o.constructor = e, o.render = w);while (r--) {
      if (F[r].constructor === e) return o.__b = F[r].__b, F.splice(r, 1), o;
    }return o;
  }function w(e, t, n) {
    return this.constructor(e, n);
  }function C(e, t, o, i, l) {
    e.__x || (e.__x = !0, e.__r = t.ref, e.__k = t.key, delete t.ref, delete t.key, void 0 === e.constructor.getDerivedStateFromProps && (!e.base || l ? e.componentWillMount && e.componentWillMount() : e.componentWillReceiveProps && e.componentWillReceiveProps(t, i)), i && i !== e.context && (e.__c || (e.__c = e.context), e.context = i), e.__p || (e.__p = e.props), e.props = t, e.__x = !1, 0 !== o && (1 !== o && !1 === M.syncComponentUpdates && e.base ? r(e) : x(e, 1, l)), n(e.__r, e));
  }function x(e, n, o, r) {
    if (!e.__x) {
      var i,
          l,
          a,
          c = e.props,
          p = e.state,
          s = e.context,
          _ = e.__p || c,
          h = e.__s || p,
          m = e.__c || s,
          b = e.base,
          y = e.__b,
          w = b || y,
          N = e._component,
          U = !1,
          S = m;if (e.constructor.getDerivedStateFromProps && (p = t(t({}, p), e.constructor.getDerivedStateFromProps(c, p)), e.state = p), b && (e.props = _, e.state = h, e.context = m, 2 !== n && e.shouldComponentUpdate && !1 === e.shouldComponentUpdate(c, p, s) ? U = !0 : e.componentWillUpdate && e.componentWillUpdate(c, p, s), e.props = c, e.state = p, e.context = s), e.__p = e.__s = e.__c = e.__b = null, e.__d = !1, !U) {
        i = e.render(c, p, s), e.getChildContext && (s = t(t({}, s), e.getChildContext())), b && e.getSnapshotBeforeUpdate && (S = e.getSnapshotBeforeUpdate(_, h));var L,
            T,
            P = i && i.nodeName;if ("function" == typeof P) {
          var W = u(i);l = N, l && l.constructor === P && W.key == l.__k ? C(l, W, 1, s, !1) : (L = l, e._component = l = g(P, W, s), l.__b = l.__b || y, l.__u = e, C(l, W, 0, s, !1), x(l, 1, o, !0)), T = l.base;
        } else a = w, L = N, L && (a = e._component = null), (w || 1 === n) && (a && (a._component = null), T = d(a, i, s, o || !b, w && w.parentNode, !0));if (w && T !== w && l !== N) {
          var D = w.parentNode;D && T !== D && (D.replaceChild(T, w), L || (w._component = null, v(w, !1)));
        }if (L && k(L), e.base = T, T && !r) {
          var E = e,
              V = e;while (V = V.__u) {
            (E = V).base = T;
          }T._component = E, T._componentConstructor = E.constructor;
        }
      }!b || o ? A.push(e) : U || (e.componentDidUpdate && e.componentDidUpdate(_, h, S), M.afterUpdate && M.afterUpdate(e));while (e.__h.length) {
        e.__h.pop().call(e);
      }H || r || f();
    }
  }function N(e, t, n, o) {
    var r = e && e._component,
        i = r,
        l = e,
        a = r && e._componentConstructor === t.nodeName,
        c = a,
        p = u(t);while (r && !c && (r = r.__u)) {
      c = r.constructor === t.nodeName;
    }return r && c && (!o || r._component) ? (C(r, p, 3, n, o), e = r.base) : (i && !a && (k(i), e = l = null), r = g(t.nodeName, p, n), e && !r.__b && (r.__b = e, l = null), C(r, p, 1, n, o), e = r.base, l && e !== l && (l._component = null, v(l, !1))), e;
  }function k(e) {
    M.beforeUnmount && M.beforeUnmount(e);var t = e.base;e.__x = !0, e.componentWillUnmount && e.componentWillUnmount(), e.base = null;var o = e._component;o ? k(o) : t && (null != t.__preactattr_ && n(t.__preactattr_.ref, null), e.__b = t, p(t), F.push(e), b(t)), n(e.__r, null);
  }function U(e, t) {
    this.__d = !0, this.context = t, this.props = e, this.state = this.state || {}, this.__h = [];
  }function S(e, t, n) {
    return d(n, e, {}, !1, t, !1);
  }function L() {
    return {};
  }var T = function T() {},
      M = {},
      P = [],
      W = [],
      D = "function" == typeof Promise ? Promise.resolve().then.bind(Promise.resolve()) : setTimeout,
      E = /acit|ex(?:s|g|n|p|$)|rph|ows|mnc|ntw|ine[ch]|zoo|^ord/i,
      V = [],
      A = [],
      H = 0,
      R = !1,
      B = !1,
      F = [];t(U.prototype, { setState: function setState(e, n) {
      this.__s || (this.__s = this.state), this.state = t(t({}, this.state), "function" == typeof e ? e(this.state, this.props) : e), n && this.__h.push(n), r(this);
    }, forceUpdate: function forceUpdate(e) {
      e && this.__h.push(e), x(this, 2);
    }, render: function render() {} });var j = { h: e, createElement: e, cloneElement: o, createRef: L, Component: U, render: S, rerender: i, options: M }; true ? module.exports = j : self.preact = j;
}();
//# sourceMappingURL=preact.min.js.map

/***/ }),

/***/ "JkW7":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./node_modules/preact/dist/preact.min.js
var preact_min = __webpack_require__("EBst");
var preact_min_default = /*#__PURE__*/__webpack_require__.n(preact_min);

// CONCATENATED MODULE: ./utils.js

/* harmony default export */ var utils = ({
  isUndefined: function isUndefined(x) {
    return x === undefined;
  },
  pick: function pick(o, props) {
    var x = {};
    props.forEach(function (k) {
      x[k] = o[k];
    });
    return x;
  },
  omit: function omit(o, props) {
    var x = {};
    Object.keys(o).forEach(function (k) {
      if (props.indexOf(k) === -1) x[k] = o[k];
    });
    return x;
  },
  omitBy: function omitBy(o, pred) {
    var x = {};
    Object.keys(o).forEach(function (k) {
      if (!pred(o[k])) x[k] = o[k];
    });
    return x;
  },

  // custom defaults function suited to our specific purpose
  defaults2: function defaults2(o) {
    var _this = this;

    for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      sources[_key - 1] = arguments[_key];
    }

    sources.forEach(function (s) {
      Object.keys(s).forEach(function (k) {
        if (_this.isUndefined(o[k]) || o[k] === '') o[k] = s[k];
      });
    });
  }
});
// CONCATENATED MODULE: ./preact-script2.js
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var customAttrs = ['unload'];
var staticProps = customAttrs.concat(['src', 'type', 'async', 'integrity', 'text', 'crossorigin']);

var _ref = Object(preact_min["h"])('div', { style: 'display:none', 'preact-script2': true });

var preact_script2_PreactScript2 = function (_Component) {
	_inherits(PreactScript2, _Component);

	function PreactScript2(props) {
		_classCallCheck(this, PreactScript2);

		var _this = _possibleConstructorReturn(this, _Component.call(this, props));

		_this.state = {
			installed: false,
			loaded: {},
			p: Promise.resolve()
		};

		_this.loadExternalScript.bind(_this);
		_this.insertInlineScript.bind(_this);
		return _this;
	}

	PreactScript2.prototype.insertInlineScript = function insertInlineScript() {
		var s = document.createElement('script');
		// get inline script
		var h = this.props.inlineScript;
		if (h) {
			h = h.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&');
			s.type = 'text/javascript';
			s.appendChild(document.createTextNode(h));
			this.base.parentElement.appendChild(s);
		}
	};

	PreactScript2.prototype.loadExternalScript = function loadExternalScript(src) {
		var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { parent: document.head };

		var __self = this;
		var promiseLoadScript = new Promise(function (resolve, reject) {
			var s = document.createElement('script');

			utils.defaults2(s, utils.omit(opts, ['unload', 'parent']), { type: 'text/javascript' });

			s.async = false;
			s.src = src;

			if (opts.crossorigin) {
				s.crossOrigin = opts.crossorigin;
			}
			s.onload = function () {
				var _extends2;

				var loaded = _extends({}, __self.loaded, (_extends2 = {}, _extends2[src] = 1, _extends2));
				__self.setState({
					loaded: loaded
				});
				resolve(src);
			};
			s.onerror = function () {
				return reject(new Error(src));
			};
			if (!__self.state.loaded[src]) {
				opts.parent.appendChild(s);
			}
		});

		return __self.state.loaded[src] ? Promise.resolve(src) : promiseLoadScript;
	};

	PreactScript2.prototype.componentDidMount = function componentDidMount() {
		var _this2 = this;

		var __self = this;
		var __el = __self.base;
		var parent = __el.parentElement;

		if (!this.props.src) {
			this.insertInlineScript();
		} else {
			var opts = utils.omitBy(utils.pick(this, staticProps), utils.isUndefined);
			opts.parent = parent;

			var loadFn = function loadFn() {
				return _this2.loadExternalScript(_this2.props.src, opts);
			};
			if (utils.isUndefined(this.props.async)) {
				this.setState({
					p: this.state.p.then(loadFn)
				});
			} else {
				loadFn();
			}
		}

		this.setState({
			installed: true
		});
		// destroy itself
		parent.removeChild(__el);
	};

	PreactScript2.prototype.componentWillUnmount = function componentWillUnmount() {};

	PreactScript2.getDerivedStateFromProps = function getDerivedStateFromProps(props, state) {};

	PreactScript2.prototype.render = function render() {
		return _ref;
	};

	return PreactScript2;
}(preact_min["Component"]);


// CONCATENATED MODULE: ./index.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return index_App; });


function index__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function index__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function index__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var index__ref = Object(preact_min["h"])(
  'section',
  { 'class': 'hero is-medium is-dark' },
  Object(preact_min["h"])(
    'div',
    { 'class': 'hero-body' },
    Object(preact_min["h"])(
      'div',
      { 'class': 'container' },
      Object(preact_min["h"])(
        'h1',
        { 'class': 'title' },
        'Preact-Script2'
      ),
      Object(preact_min["h"])(
        'h2',
        { 'class': 'subtitle' },
        'Preact component for insert <script> tag, inspired by vue-script2'
      )
    )
  )
);

var _ref2 = Object(preact_min["h"])(
  'h3',
  { 'class': 'subtitle' },
  'Type some IIFE script to be executed'
);

var _ref3 = Object(preact_min["h"])(
  'label',
  { 'class': 'label' },
  'Your inline script:'
);

var _ref4 = Object(preact_min["h"])(
  'h3',
  { 'class': 'subtitle' },
  'Custom load external script with custom props'
);

var _ref5 = Object(preact_min["h"])(
  'label',
  { 'class': 'label' },
  'Your script src:'
);

var index_App = function (_Component) {
  index__inherits(App, _Component);

  function App() {
    index__classCallCheck(this, App);

    var _this = index__possibleConstructorReturn(this, _Component.call(this));

    _this.state = {
      inlineScript: "(function a() {alert('Hey, you just loading an inline script')})()",
      submittedInlineScript: '',
      src: '/test.js',
      submittedSrc: ''
    };
    _this.handleClickInline = _this.handleClickInline.bind(_this);
    _this.handleChangeInline = _this.handleChangeInline.bind(_this);

    _this.handleClickExternal = _this.handleClickExternal.bind(_this);
    _this.handleChangeExternal = _this.handleChangeExternal.bind(_this);
    return _this;
  }

  App.prototype.handleClickInline = function handleClickInline() {
    this.setState({
      submittedInlineScript: this.state.inlineScript
    });
  };

  App.prototype.handleChangeInline = function handleChangeInline(e) {
    this.setState({ inlineScript: e.target.value });
  };

  App.prototype.handleClickExternal = function handleClickExternal() {
    this.setState({
      submittedSrc: this.state.src
    });
  };

  App.prototype.handleChangeExternal = function handleChangeExternal(e) {
    this.setState({ src: e.target.value });
  };

  App.prototype.render = function render() {
    return Object(preact_min["h"])(
      'div',
      null,
      index__ref,
      Object(preact_min["h"])(
        'section',
        { 'class': 'container', style: 'margin-top: 2em;' },
        _ref2,
        Object(preact_min["h"])(
          'div',
          { 'class': 'field' },
          _ref3,
          Object(preact_min["h"])(
            'div',
            { 'class': 'control' },
            Object(preact_min["h"])('textarea', { 'class': 'textarea',
              placeholder: 'Input some inline script',
              onChange: this.handleChangeInline,
              value: this.state.inlineScript })
          )
        ),
        Object(preact_min["h"])(
          'a',
          { 'class': 'button is-primary',
            onClick: this.handleClickInline },
          'Insert inline script to DOM'
        )
      ),
      Object(preact_min["h"])(
        'section',
        { 'class': 'container', style: 'margin-top: 2em;' },
        _ref4,
        Object(preact_min["h"])(
          'div',
          { 'class': 'field' },
          _ref5,
          Object(preact_min["h"])(
            'div',
            { 'class': 'control' },
            Object(preact_min["h"])('input', {
              'class': 'input',
              type: 'text',
              placeholder: 'Input some src url',
              onChange: this.handleChangeExternal,
              value: this.state.src })
          )
        ),
        Object(preact_min["h"])(
          'a',
          { 'class': 'button is-primary',
            onClick: this.handleClickExternal },
          'Load external script'
        )
      ),
      Object(preact_min["h"])(preact_script2_PreactScript2, {
        src: this.state.src,
        async: true,
        type: 'some-type',
        integrity: '1234567890',
        text: 'QWERTYUIOP',
        crossorigin: 'anonymous'
      }),
      Object(preact_min["h"])(preact_script2_PreactScript2, {
        inlineScript: this.state.submittedInlineScript })
    );
  };

  return App;
}(preact_min["Component"]);



/***/ })

/******/ });
//# sourceMappingURL=ssr-bundle.js.map