webpackJsonp([1],{

/***/ 1064:
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

var _auth = __webpack_require__(1068);

var auth = _interopRequireWildcard(_auth);

var _Header = __webpack_require__(431);

var _Header2 = _interopRequireDefault(_Header);

var _createHashHistory = __webpack_require__(262);

var _createHashHistory2 = _interopRequireDefault(_createHashHistory);

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
  UserLogin: {
    displayName: 'UserLogin'
  }
};

var _UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules104ReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/tongchuanzhang/Desktop/web/react_mongodb_webpack2/react-async/src/containers/User/UserLogin.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules102ReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/tongchuanzhang/Desktop/web/react_mongodb_webpack2/react-async/src/containers/User/UserLogin.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules104ReactTransformHmrLibIndexJs2(_UsersTongchuanzhangDesktopWebReact_mongodb_webpack2ReactAsyncNode_modules102ReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var history = (0, _createHashHistory2.default)({ queryKey: false });

/**
 * connect中间件
 * connect一定要写在需要传递参数的组件头部，因为这是语法规则，只对当前关联的组件生效，和java的原理是一致的
 * state用法：state => state（传递全部state） 或者 state => state.home（传递指定的state）
 * dispatch用法：（单个action）bindActionCreators(navActions, dispatch)，（多个action）bindActionCreators({...action1, ...action2}, dispatch)
 */

var UserLogin = _wrapComponent('UserLogin')((_dec = (0, _reactRedux.connect)(function (state) {
  return state;
}, function (dispatch) {
  return (0, _redux.bindActionCreators)(_extends({}, actions2, actions1), dispatch);
}), _dec(_class = function (_React$Component) {
  _inherits(UserLogin, _React$Component);

  function UserLogin(props) {
    _classCallCheck(this, UserLogin);

    var _this = _possibleConstructorReturn(this, (UserLogin.__proto__ || Object.getPrototypeOf(UserLogin)).call(this, props));

    _this.state = {
      userList: [],
      email: 'tongchuanxing@163.com',
      pwd: '123456',
      log: true
    };
    console.log(_this);
    // Redirect.to='/sdfgsdf'

    _this.checkClick = _this.checkClick.bind(_this);
    _this.inputChange = _this.inputChange.bind(_this);
    _this.submitData = _this.submitData.bind(_this);
    return _this;
  }

  _createClass(UserLogin, [{
    key: 'inputChange',
    value: function inputChange(event) {
      var name = event.target.name;
      var st = {};
      st[name] = event.target.value;
      this.setState(st);
    }
  }, {
    key: 'checkClick',
    value: function checkClick() {
      this.setState({
        log: !this.state.log
      });
    }
  }, {
    key: 'updateAuth',
    value: function updateAuth(loggedIn) {
      console.log(loggedIn);
    }
  }, {
    key: 'componentWillMount',
    value: function componentWillMount() {
      auth.onChange = this.updateAuth;
    }
  }, {
    key: 'submitData',
    value: function submitData(event) {
      event.preventDefault();
      var param = {
        email: this.state.email,
        pwd: this.state.pwd

        // console.log(this.props);
      };this.props.userloginin(param, function (err, data) {
        if (data.data) {
          auth.login(data.data);
          history.push('/');
        } else {
          console.log('登录失败');
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: 'container login' },
        _react3.default.createElement(_Header2.default, null),
        _react3.default.createElement(
          'div',
          { className: 'form-horizontal' },
          _react3.default.createElement(
            'div',
            { className: 'form-group' },
            _react3.default.createElement(
              'label',
              { htmlFor: 'inputEmail3', className: 'col-sm-2 control-label' },
              'Email'
            ),
            _react3.default.createElement(
              'div',
              { className: 'col-sm-10' },
              _react3.default.createElement('input', { type: 'email', name: 'email', onChange: this.inputChange, value: this.state.email, className: 'form-control', id: 'inputEmail3', placeholder: 'Email' })
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'form-group' },
            _react3.default.createElement(
              'label',
              { htmlFor: 'inputPassword3', className: 'col-sm-2 control-label' },
              'Password'
            ),
            _react3.default.createElement(
              'div',
              { className: 'col-sm-10' },
              _react3.default.createElement('input', { type: 'password', name: 'pwd', onChange: this.inputChange, value: this.state.pwd, className: 'form-control', id: 'inputPassword3', placeholder: 'Password' })
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'form-group' },
            _react3.default.createElement(
              'div',
              { className: 'col-sm-offset-2 col-sm-10' },
              _react3.default.createElement(
                'div',
                { className: 'checkbox' },
                _react3.default.createElement(
                  'label',
                  null,
                  _react3.default.createElement('input', { type: 'checkbox', onClick: this.checkClick, defaultChecked: this.state.log }),
                  ' Remember me'
                )
              )
            )
          ),
          _react3.default.createElement(
            'div',
            { className: 'form-group' },
            _react3.default.createElement(
              'div',
              { className: 'col-sm-offset-2 col-sm-10' },
              _react3.default.createElement(
                'button',
                { type: 'button', onClick: this.submitData, className: 'btn btn-default' },
                'Sign in'
              )
            )
          )
        )
      );
    }
  }]);

  return UserLogin;
}(_react3.default.Component)) || _class));

exports.default = UserLogin;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)(module)))

/***/ }),

/***/ 1068:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.login = login;
exports.getToken = getToken;
exports.logout = logout;
exports.loggedIn = loggedIn;
exports.loggedName = loggedName;
exports.onChange = onChange;
function login(data) {
  var token = Math.random().toString(36).substring(7);
  localStorage.token = token;
  localStorage.userName = data.email;
  this.onChange(true);
}
function getToken() {
  return localStorage.token;
}
function logout() {
  delete localStorage.token;
  delete localStorage.userName;
  this.onChange(true);
}
function loggedIn() {
  return !!localStorage.token;
}
function loggedName() {
  return !!localStorage.userName ? localStorage.userName : " ";
}
function onChange() {}

/***/ })

});