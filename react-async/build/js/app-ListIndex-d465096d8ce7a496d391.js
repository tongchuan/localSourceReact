webpackJsonp([2],{

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(129);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(127);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(1);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(128);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _dec, _class;

var _redux = __webpack_require__(105);

var _reactRedux = __webpack_require__(176);

var _classnames = __webpack_require__(8);

var _classnames2 = _interopRequireDefault(_classnames);

var _user = __webpack_require__(429);

var actions1 = _interopRequireWildcard(_user);

var _user2 = __webpack_require__(430);

var actions2 = _interopRequireWildcard(_user2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  ListIndex: {
    displayName: 'ListIndex'
  }
};

var _UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/tongchuanzhang/Desktop/web/react_mongodb_webpack2/react-async/src/containers/list/ListIndex.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/tongchuanzhang/Desktop/web/react_mongodb_webpack2/react-async/src/containers/list/ListIndex.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules104ReactTransformHmrLibIndexJs2(_UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state） 或者 state => state.home（传递指定的state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

var ListIndex = _wrapComponent('ListIndex')((_dec = (0, _reactRedux.connect)(function (state) {
  return state;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, actions2, actions1), dispatch);
}), _dec(_class = function (_React$Component) {
  _inherits(ListIndex, _React$Component);

  function ListIndex(props) {
    _classCallCheck(this, ListIndex);

    return _possibleConstructorReturn(this, (ListIndex.__proto__ || Object.getPrototypeOf(ListIndex)).call(this, props));
  }

  _createClass(ListIndex, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        'ListIndex'
      );
    }
  }]);

  return ListIndex;
}(_react3.default.Component)) || _class));

exports.default = ListIndex;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ })

});