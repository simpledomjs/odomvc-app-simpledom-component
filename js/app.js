/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!*****************!*\
  !*** multi app ***!
  \*****************/
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(/*! ./src/index.js */1);


/***/ },
/* 1 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _TodoApp = __webpack_require__(/*! ./components/TodoApp */ 3);
	
	(0, _simpledomComponent.renderToDom)('todoapp', (0, _simpledomComponent.el)(_TodoApp.TodoApp, null), new _simpledomComponent.Store({
		todos: [{
			id: 1,
			completed: true,
			label: 'Create a TodoMVC template'
		}, {
			id: 2,
			completed: false,
			label: 'Rule the web'
		}]
	}));

/***/ },
/* 2 */
/*!***********************************************************!*\
  !*** ./~/simpledom-component/dist/simpledom-component.js ***!
  \***********************************************************/
/***/ function(module, exports, __webpack_require__) {

	!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.SimpleDomComponent=t():e.SimpleDomComponent=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(6)},function(e,t){"use strict";function n(e){return Array.isArray(e)?e.reduce(function(e,t){return e.concat(Array.isArray(t)?n(t):t)},[]):e}Object.defineProperty(t,"__esModule",{value:!0}),t.flatten=n},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function o(){for(var e=arguments.length,t=Array(e),n=0;e>n;n++)t[n]=arguments[n];return(0,f.flatten)(t).map(function(e){if(!e.name)return""+(e.__asHtml||e);var t=Object.keys(e.attrs).filter(function(t){return!t.startsWith("on")&&void 0!==e.attrs[t]&&"ref"!==t}).map(function(t){var n=(0,f.dasherize)("className"===t?"class":t),r=e.attrs[t];return"style"===n&&"object"===("undefined"==typeof r?"undefined":s(r))?r=Object.keys(r).map(function(e){return""+(0,f.dasherize)(e)+":"+r[e]}).join(";"):"class"===n&&"object"===("undefined"==typeof r?"undefined":s(r))&&(r=Object.keys(r).filter(function(e){return r[e]}).map(f.dasherize).join(" "))," "+n+'="'+r+'"'}).join(""),n=o.apply(void 0,r(e.children));return"<"+e.name+t+">"+n+"</"+e.name+">"}).join("")}function i(e){var t=e;for("string"==typeof e&&(t=document.getElementById(e));t.firstChild;)t.removeChild(t.firstChild);for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;n>o;o++)r[o-1]=arguments[o];(0,f.flatten)(r).filter(function(e){return void 0!==e&&null!==e}).map(u).forEach(function(e){return t.appendChild(e)})}function u(e){if(!e.isElem)return e.__asHtml?e:document.createTextNode(""+e);var t=document.createElement(e.name);return Object.keys(e.attrs).filter(function(t){return void 0!==e.attrs[t]}).forEach(function(n){var r=e.attrs[n];if(n.startsWith("on")){var o=n.substring(2).toLowerCase();t.addEventListener(o,function(e){return r(e)})}else"ref"===n?r(t):("className"===n&&(n="class"),n=(0,f.dasherize)(n),"style"===n&&"object"===("undefined"==typeof r?"undefined":s(r))?Object.keys(r).forEach(function(e){return t.style[(0,f.dasherize)(e)]=r[e]}):"class"===n&&"object"===("undefined"==typeof r?"undefined":s(r))?Object.keys(r).filter(function(e){return r[e]}).forEach(function(e){return t.classList.add((0,f.dasherize)(e))}):t.setAttribute(n,r))}),e.children.filter(function(e){return void 0!==e&&null!==e}).map(u).forEach(function(e){e.__asHtml?t.insertAdjacentHTML("beforeend",e.__asHtml):t.appendChild(e)}),t}function a(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;n>o;o++)r[o-2]=arguments[o];return(0,f.isFunction)(e)?e.apply(void 0,[t].concat(r)):{name:e,attrs:t||{},children:((0,f.flatten)(r)||[]).filter(function(e){return null!==e&&void 0!==e}),isElem:!0}}function c(e,t,n){var r=(0,f.isFunction)(e)?e():e;return r?(0,f.isFunction)(t)?t():t:(0,f.isFunction)(n)?n():n}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.renderToString=o,t.renderTo=i,t.convertToNode=u,t.el=a,t.predicate=c;var f=n(2)},function(e,t){"use strict";function n(e){return!!(e&&e.constructor&&e.call&&e.apply)}function r(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function o(e){return Array.isArray(e)?e.reduce(function(e,t){return e.concat(Array.isArray(t)?o(t):t)},[]):e}Object.defineProperty(t,"__esModule",{value:!0}),t.isFunction=n,t.dasherize=r,t.flatten=o}])})},function(e,t,n){"use strict";function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(){return c++}Object.defineProperty(t,"__esModule",{value:!0}),t.Store=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),a=n(1),c=1;t.Store=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};r(this,e),this.state=t,this.subscribers={}}return u(e,[{key:"updateState",value:function(e){var t=this;this.state=i({},this.state,e);for(var n=arguments.length,r=Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];(0,a.flatten)(r.map(function(e){return Object.keys(t.subscribers[e]||{}).map(function(n){return t.subscribers[e][n]})})).forEach(function(e){return e(event,t.state)})}},{key:"subscribe",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){};this.subscribers[e]||(this.subscribers[e]={});var n=o();return this.subscribers[e][n]=t,n}},{key:"unsubsribe",value:function(e){var t=!0,n=!1,r=void 0;try{for(var o,i=Object.keys(this.subscribers)[Symbol.iterator]();!(t=(o=i.next()).done);t=!0){var u=o.value;this.subscribers[u][e]&&delete this.subscribers[u][e]}}catch(a){n=!0,r=a}finally{try{!t&&i["return"]&&i["return"]()}finally{if(n)throw r}}}}]),e}()},function(e,t){"use strict";function n(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)}function r(e,t){for(var i=[],u=e;null!==u&&void 0!==u&&u.isComponent;){var a=new u.componentClass(o({},u.props),t);i.push(a),u=a.renderComponent()}if(u&&u.children){var c,s=u.children.map(function(e){return r(e,t)});u.children=s.map(function(e){return e.simpleDomEl}),i=(c=i).concat.apply(c,n(s.map(function(e){return e.componentList})))}return{simpleDomEl:u,componentList:i}}Object.defineProperty(t,"__esModule",{value:!0});var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.convertToSimpleDom=r},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectedComponent=t.Component=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),c=n(2),s=r(c),f=n(4),l=n(1),d=t.Component=function(){function e(t){var n=this,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;u(this,e),this.props=t,this.store=r,Object.getOwnPropertyNames(Object.getPrototypeOf(this)).filter(function(e){return"constructor"!==e}).filter(function(e){return n[e]instanceof Function}).forEach(function(e){return n[e]=n[e].bind(n)})}return a(e,[{key:"state",get:function(){return this.store.state}}]),a(e,[{key:"componentDidMount",value:function(){}},{key:"renderComponent",value:function(){return this.render()}},{key:"render",value:function(){}}]),e}();d.isComponent=!0;t.ConnectedComponent=function(e){function t(){return u(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return i(t,e),a(t,[{key:"nodeRefHandler",value:function(e){var t=this;this.node=e,this.subscribersId=[];var n=!0,r=!1,o=void 0;try{for(var i,u=this.eventsToSubscribe()[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var a=i.value;this.subscribersId.push(this.store.subscribe(a,this.reactToChangeState.bind(this)))}}catch(c){r=!0,o=c}finally{try{!n&&u["return"]&&u["return"]()}finally{if(r)throw o}}var s=new MutationObserver(function(e){if((0,l.flatten)(e.map(function(e){return Array.from(e.removedNodes)})).findIndex(function(e){return e.contains(t.node)})!==-1){s.disconnect();var n=!0,r=!1,o=void 0;try{for(var i,u=t.subscribersId[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var a=i.value;t.store.unsubsribe(a)}}catch(c){r=!0,o=c}finally{try{!n&&u["return"]&&u["return"]()}finally{if(r)throw o}}}});s.observe(document.body,{childList:!0,subtree:!0})}},{key:"mustRefresh",value:function(){return!0}},{key:"reactToChangeState",value:function(e,t){if(this.mustRefresh()){var n=(0,f.convertToSimpleDom)(this.render(),this.store);s.renderTo(this.node,n.simpleDomEl),n.componentList.forEach(function(e){return e.componentDidMount()}),this.componentDidMount()}}},{key:"eventsToSubscribe",value:function(){return[]}},{key:"renderComponent",value:function(){var e=this;return s.el("div",{ref:function(t){return e.nodeRefHandler(t)}},this.render())}}]),t}(d)},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}var o=n(5),i=n(3),u=n(2),a=r(u),c=n(7);t.Component=o.Component,t.Store=i.Store,t.ConnectedComponent=o.ConnectedComponent,t.el=c.el,t.renderToDom=c.renderToDom,t.renderTo=a.renderTo,t.predicate=a.predicate,t.renderToString=a.renderToString},function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t["default"]=e,t}function o(e,t){for(var n=arguments.length,r=Array(n>2?n-2:0),o=2;o<n;o++)r[o-2]=arguments[o];if(e&&e.isComponent){var i=u({},t,{children:((0,f.flatten)(r)||[]).filter(function(e){return null!==e&&void 0!==e})});return{isComponent:!0,componentClass:e,props:i}}return c.el.apply(c,[e,t].concat(r))}function i(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:new l.Store,r=(0,s.convertToSimpleDom)(t,n);c.renderTo(e,r.simpleDomEl),r.componentList.forEach(function(e){return e.componentDidMount()})}Object.defineProperty(t,"__esModule",{value:!0});var u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.el=o,t.renderToDom=i;var a=n(2),c=r(a),s=n(4),f=n(1),l=n(3)}])});

/***/ },
/* 3 */
/*!***********************************!*\
  !*** ./src/components/TodoApp.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TodoApp = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _Header = __webpack_require__(/*! ./Header */ 4);
	
	var _Main = __webpack_require__(/*! ./Main */ 6);
	
	var _Footer = __webpack_require__(/*! ./Footer */ 8);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoApp = exports.TodoApp = function (_Component) {
		_inherits(TodoApp, _Component);
	
		function TodoApp() {
			_classCallCheck(this, TodoApp);
	
			return _possibleConstructorReturn(this, (TodoApp.__proto__ || Object.getPrototypeOf(TodoApp)).apply(this, arguments));
		}
	
		_createClass(TodoApp, [{
			key: 'render',
			value: function render() {
				return (0, _simpledomComponent.el)(
					'div',
					null,
					(0, _simpledomComponent.el)(_Header.Header, null),
					(0, _simpledomComponent.el)(_Main.Main, null),
					(0, _simpledomComponent.el)(_Footer.Footer, null)
				);
			}
		}]);

		return TodoApp;
	}(_simpledomComponent.Component);

/***/ },
/* 4 */
/*!**********************************!*\
  !*** ./src/components/Header.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Header = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _todo = __webpack_require__(/*! ../services/todo */ 5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Header = exports.Header = function (_Component) {
		_inherits(Header, _Component);
	
		function Header() {
			_classCallCheck(this, Header);
	
			return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
		}
	
		_createClass(Header, [{
			key: 'addTodo',
			value: function addTodo(event) {
				var todoVal = event.target.value;
				if (todoVal) {
					event.target.value = '';
					(0, _todo.addTodo)(this.store, todoVal);
				}
			}
		}, {
			key: 'refInput',
			value: function refInput(inputNode) {
				this.inputNode = inputNode;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				this.inputNode.focus();
			}
		}, {
			key: 'render',
			value: function render() {
				return (0, _simpledomComponent.el)(
					'header',
					{ 'class': 'header' },
					(0, _simpledomComponent.el)(
						'h1',
						null,
						'todos'
					),
					(0, _simpledomComponent.el)('input', { ref: this.refInput, 'class': 'new-todo', placeholder: 'What needs to be done?',
						onChange: this.addTodo
					})
				);
			}
		}]);

		return Header;
	}(_simpledomComponent.Component);

/***/ },
/* 5 */
/*!******************************!*\
  !*** ./src/services/todo.js ***!
  \******************************/
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
	
	exports.editTodo = editTodo;
	exports.updateTodo = updateTodo;
	exports.updateCompleted = updateCompleted;
	exports.toggleAll = toggleAll;
	exports.deleteTodo = deleteTodo;
	exports.deleteCompleted = deleteCompleted;
	exports.addTodo = addTodo;
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	var UPDATE_COMPLETE = exports.UPDATE_COMPLETE = 'UPDATE_COMPLETE';
	
	var UPDATE_TODO_LIST = exports.UPDATE_TODO_LIST = 'UPDATE_TODO_LIST';
	
	var UPDATE_TODO = exports.UPDATE_TODO = function UPDATE_TODO(todoId) {
		return 'UPDATE_TODO_' + todoId;
	};
	
	function editTodo(store, todoId) {
		store.updateState({
			todos: store.state.todos.map(function (storeTodo) {
				return storeTodo.id === todoId ? _extends({}, storeTodo, { editing: true }) : storeTodo;
			})
		}, UPDATE_TODO(todoId));
	}
	
	function updateTodo(store, todoId, label) {
		store.updateState({
			todos: store.state.todos.map(function (storeTodo) {
				return storeTodo.id === todoId ? _extends({}, storeTodo, { editing: false, label: label }) : storeTodo;
			})
		}, UPDATE_TODO(todoId));
	}
	
	function updateCompleted(store, todoId) {
		store.updateState({
			todos: store.state.todos.map(function (storeTodo) {
				return storeTodo.id === todoId ? _extends({}, storeTodo, { completed: !storeTodo.completed }) : storeTodo;
			})
		}, UPDATE_COMPLETE, UPDATE_TODO(todoId));
	}
	
	function toggleAll(store, completed) {
		var events = [UPDATE_COMPLETE].concat(store.state.todos.map(function (todo) {
			return todo.id;
		}).map(UPDATE_TODO));
		store.updateState.apply(store, [{
			todos: store.state.todos.map(function (todo) {
				return _extends({}, todo, { completed: completed });
			})
		}].concat(_toConsumableArray(events)));
	}
	
	function deleteTodo(store, todoId) {
		store.updateState({
			todos: store.state.todos.filter(function (todo) {
				return todo.id !== todoId;
			})
		}, UPDATE_TODO_LIST);
	}
	
	function deleteCompleted(store) {
		store.updateState({
			todos: store.state.todos.filter(function (todo) {
				return !todo.completed;
			})
		}, UPDATE_TODO_LIST);
	}
	
	function addTodo(store, todoMessage) {
		var nextId = Math.max.apply(Math, [0].concat(_toConsumableArray(store.state.todos.map(function (todo) {
			return todo.id;
		})))) + 1;
		store.updateState({
			todos: [].concat(_toConsumableArray(store.state.todos), [{
				id: nextId,
				completed: false,
				label: todoMessage
			}])
		}, UPDATE_TODO_LIST);
	}

/***/ },
/* 6 */
/*!********************************!*\
  !*** ./src/components/Main.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ToggleButton = exports.Main = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _Todo = __webpack_require__(/*! ./Todo */ 7);
	
	var _todo = __webpack_require__(/*! ../services/todo */ 5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Main = exports.Main = function (_ConnectedComponent) {
		_inherits(Main, _ConnectedComponent);
	
		function Main() {
			_classCallCheck(this, Main);
	
			return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
		}
	
		_createClass(Main, [{
			key: 'eventsToSubscribe',
			value: function eventsToSubscribe() {
				return [_todo.UPDATE_TODO_LIST];
			}
		}, {
			key: 'render',
			value: function render() {
				if (!this.state.todos.length) {
					return undefined;
				}
				return (0, _simpledomComponent.el)(
					'section',
					{ 'class': 'main' },
					(0, _simpledomComponent.el)(ToggleButton, null),
					(0, _simpledomComponent.el)(
						'label',
						{ 'for': 'toggle-all' },
						'Mark all as complete'
					),
					(0, _simpledomComponent.el)(
						'ul',
						{ 'class': 'todo-list' },
						this.state.todos.map(function (todo) {
							return (0, _simpledomComponent.el)(_Todo.Todo, { todoId: todo.id });
						})
					)
				);
			}
		}]);
	
		return Main;
	}(_simpledomComponent.ConnectedComponent);
	
	var ToggleButton = exports.ToggleButton = function (_ConnectedComponent2) {
		_inherits(ToggleButton, _ConnectedComponent2);
	
		function ToggleButton() {
			_classCallCheck(this, ToggleButton);
	
			return _possibleConstructorReturn(this, (ToggleButton.__proto__ || Object.getPrototypeOf(ToggleButton)).apply(this, arguments));
		}
	
		_createClass(ToggleButton, [{
			key: 'eventsToSubscribe',
			value: function eventsToSubscribe() {
				return [_todo.UPDATE_COMPLETE];
			}
		}, {
			key: 'toggleAll',
			value: function toggleAll(event) {
				(0, _todo.toggleAll)(this.store, event.target.checked);
			}
		}, {
			key: 'isChecked',
			value: function isChecked() {
				return !this.state.todos.filter(function (todo) {
					return !todo.completed;
				}).length;
			}
		}, {
			key: 'render',
			value: function render() {
				return (0, _simpledomComponent.el)('input', { 'class': 'toggle-all', type: 'checkbox',
					onChange: this.toggleAll,
					checked: this.isChecked() ? 'checked' : undefined
				});
			}
		}]);

		return ToggleButton;
	}(_simpledomComponent.ConnectedComponent);

/***/ },
/* 7 */
/*!********************************!*\
  !*** ./src/components/Todo.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Todo = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _todo = __webpack_require__(/*! ../services/todo */ 5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Todo = exports.Todo = function (_ConnectedComponent) {
		_inherits(Todo, _ConnectedComponent);
	
		function Todo() {
			_classCallCheck(this, Todo);
	
			return _possibleConstructorReturn(this, (Todo.__proto__ || Object.getPrototypeOf(Todo)).apply(this, arguments));
		}
	
		_createClass(Todo, [{
			key: 'eventsToSubscribe',
			value: function eventsToSubscribe() {
				return [(0, _todo.UPDATE_TODO)(this.props.todoId)];
			}
		}, {
			key: 'updateCompleted',
			value: function updateCompleted() {
				(0, _todo.updateCompleted)(this.store, this.props.todoId);
			}
		}, {
			key: 'deleteTodo',
			value: function deleteTodo() {
				(0, _todo.deleteTodo)(this.store, this.props.todoId);
			}
		}, {
			key: 'editTodo',
			value: function editTodo() {
				(0, _todo.editTodo)(this.store, this.props.todoId);
			}
		}, {
			key: 'updateTodo',
			value: function updateTodo(event) {
				event.preventDefault();
				(0, _todo.updateTodo)(this.store, this.props.todoId, event.target.value);
			}
		}, {
			key: 'refInputEdit',
			value: function refInputEdit(nodeInputEdit) {
				this.nodeInputEdit = nodeInputEdit;
			}
		}, {
			key: 'componentDidMount',
			value: function componentDidMount() {
				if (this.currentTodo().editing) {
					this.nodeInputEdit.focus();
				}
			}
		}, {
			key: 'currentTodo',
			value: function currentTodo() {
				var _this2 = this;
	
				return this.state.todos.find(function (todo) {
					return todo.id === _this2.props.todoId;
				});
			}
		}, {
			key: 'render',
			value: function render() {
				var todo = this.currentTodo();
	
				return (0, _simpledomComponent.el)(
					'li',
					{ 'class': { completed: todo.completed, editing: todo.editing } },
					(0, _simpledomComponent.el)(
						'div',
						{ 'class': 'view' },
						(0, _simpledomComponent.el)('input', { 'class': 'toggle', type: 'checkbox', checked: todo.completed ? 'checked' : undefined,
							onChange: this.updateCompleted
						}),
						(0, _simpledomComponent.el)(
							'label',
							{ onDblClick: this.editTodo },
							todo.label
						),
						(0, _simpledomComponent.el)('button', { 'class': 'destroy', onClick: this.deleteTodo })
					),
					(0, _simpledomComponent.el)('input', { ref: this.refInputEdit, 'class': 'edit', value: todo.label, onKeyUp: Todo.blurIfEnter, onBlur: this.updateTodo })
				);
			}
		}], [{
			key: 'blurIfEnter',
			value: function blurIfEnter(event) {
				if (event.keyCode === 13) {
					event.target.blur();
				}
			}
		}]);

		return Todo;
	}(_simpledomComponent.ConnectedComponent);

/***/ },
/* 8 */
/*!**********************************!*\
  !*** ./src/components/Footer.js ***!
  \**********************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.Footer = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _TodoCounter = __webpack_require__(/*! ./TodoCounter */ 9);
	
	var _ClearAllButton = __webpack_require__(/*! ./ClearAllButton */ 10);
	
	var _todo = __webpack_require__(/*! ../services/todo */ 5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Footer = exports.Footer = function (_ConnectedComponent) {
		_inherits(Footer, _ConnectedComponent);
	
		function Footer() {
			_classCallCheck(this, Footer);
	
			return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
		}
	
		_createClass(Footer, [{
			key: 'eventsToSubscribe',
			value: function eventsToSubscribe() {
				return [_todo.UPDATE_TODO_LIST];
			}
		}, {
			key: 'render',
			value: function render() {
				if (!this.state.todos.length) {
					return undefined;
				}
				return (0, _simpledomComponent.el)(
					'footer',
					{ 'class': 'footer' },
					(0, _simpledomComponent.el)(_TodoCounter.TodoCounter, null),
					(0, _simpledomComponent.el)(_ClearAllButton.ClearAllButton, null)
				);
			}
		}]);

		return Footer;
	}(_simpledomComponent.ConnectedComponent);

/***/ },
/* 9 */
/*!***************************************!*\
  !*** ./src/components/TodoCounter.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.TodoCounter = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _todo = __webpack_require__(/*! ../services/todo */ 5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TodoCounter = exports.TodoCounter = function (_ConnectedComponent) {
		_inherits(TodoCounter, _ConnectedComponent);
	
		function TodoCounter() {
			_classCallCheck(this, TodoCounter);
	
			return _possibleConstructorReturn(this, (TodoCounter.__proto__ || Object.getPrototypeOf(TodoCounter)).apply(this, arguments));
		}
	
		_createClass(TodoCounter, [{
			key: 'eventsToSubscribe',
			value: function eventsToSubscribe() {
				return [_todo.UPDATE_COMPLETE];
			}
		}, {
			key: 'render',
			value: function render() {
				return (0, _simpledomComponent.el)(
					'span',
					{ 'class': 'todo-count' },
					(0, _simpledomComponent.el)(
						'strong',
						null,
						this.state.todos.filter(function (todo) {
							return !todo.completed;
						}).length
					),
					' item left'
				);
			}
		}]);

		return TodoCounter;
	}(_simpledomComponent.ConnectedComponent);

/***/ },
/* 10 */
/*!******************************************!*\
  !*** ./src/components/ClearAllButton.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.ClearAllButton = undefined;
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _simpledomComponent = __webpack_require__(/*! simpledom-component */ 2);
	
	var _todo = __webpack_require__(/*! ../services/todo */ 5);
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ClearAllButton = exports.ClearAllButton = function (_ConnectedComponent) {
		_inherits(ClearAllButton, _ConnectedComponent);
	
		function ClearAllButton() {
			_classCallCheck(this, ClearAllButton);
	
			return _possibleConstructorReturn(this, (ClearAllButton.__proto__ || Object.getPrototypeOf(ClearAllButton)).apply(this, arguments));
		}
	
		_createClass(ClearAllButton, [{
			key: 'eventsToSubscribe',
			value: function eventsToSubscribe() {
				return [_todo.UPDATE_COMPLETE];
			}
		}, {
			key: 'clearCompleted',
			value: function clearCompleted() {
				(0, _todo.deleteCompleted)(this.store);
			}
		}, {
			key: 'render',
			value: function render() {
				return (0, _simpledomComponent.predicate)(!!this.state.todos.filter(function (todo) {
					return todo.completed;
				}).length, (0, _simpledomComponent.el)(
					'button',
					{ 'class': 'clear-completed', onClick: this.clearCompleted },
					'Clear completed'
				));
			}
		}]);

		return ClearAllButton;
	}(_simpledomComponent.ConnectedComponent);

/***/ }
/******/ ]);
//# sourceMappingURL=app.js.map