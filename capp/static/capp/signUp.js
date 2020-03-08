var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { TextField, Button, UserForm } from './components.js';

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      regForm: {
        0: {
          element: TextField,
          inner: '',
          placeholder: 'Имя',
          type: 'text'
        },
        1: {
          element: TextField,
          inner: '',
          placeholder: 'E-mail',
          type: 'email'
        },
        2: {
          element: TextField,
          inner: '',
          placeholder: 'Введите пароль',
          type: 'password',
          name: 'password1'
        },
        3: {
          element: TextField,
          inner: '',
          placeholder: 'Введите пароль повторно',
          type: 'password',
          name: 'password2'
        },
        4: {
          element: Button,
          inner: 'Подтвердить',
          type: 'submit'
        }
      }
    };
    _this.confirmPassword = _this.confirmPassword.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'confirmPassword',
    value: function confirmPassword(e) {

      console.log(this, e.target, e.target.password1, e.target.password2);
      e.target.password1.value === e.target.password2.value ? null : (e.preventDefault(), alert("no"));
      // [].forEach.call(e.target.getElementsByTagName("input"), (el => {
      //   console.log(el);
      //   // el.type === "password" && el.
      // }));
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(UserForm, { onSubmit: this.confirmPassword, formFields: this.state.regForm })
      );
    }
  }]);

  return App;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('root'));